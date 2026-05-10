import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import ParticlesBackground from "./ParticlesBackground";
import { StyledContainer } from "./AuthStyles";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithPopup,
} from "firebase/auth";
import { auth, googleProvider } from "../components/firebase";
import { toast } from "react-toastify";
import axios from "axios";
import AuthForm from "./AuthForm";

// List of blocked emails and domains (mirrored from server)
const blockedEmails = [
  "haze88033@gmail.com",
  "aneesbilal03@gmail.com",
  "testuser1234@gmail.com",
];
const blockedDomains = ["example.com", "bad.com"];

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailSubscribed, setEmailSubscribed] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const isEmailBlocked = (email) => {
    const emailLower = email.toLowerCase();
    const domain = emailLower.split("@")[1];
    return (
      blockedEmails.includes(emailLower) || blockedDomains.includes(domain)
    );
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    // Pre-check for blocked email or domain
    if (isEmailBlocked(email)) {
      toast.error("This email or domain is not allowed to register.");
      return;
    }

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      try {
        await sendEmailVerification(user);
        await axios.post(
          "https://www.projectschool.dev/.netlify/functions/create-user",
          {
            firebaseUid: user.uid,
            email: user.email,
            emailSubscribed,
          }
        );

        await auth.signOut();
        toast.success("User signed up successfully! Please verify your email.");
        navigate("/login");
      } catch (apiError) {
        // Clean up Firebase user on error
        await user.delete();
        throw apiError;
      }
    } catch (error) {
      const errorMessage =
        error.code === "auth/email-already-in-use"
          ? "Email already in use. Please log in or choose another."
          : error.response?.data?.error || "An error occurred during signup.";
      toast.error(errorMessage);
      console.error("Signup error:", error);
    }
  };

  const onGoogleSignUp = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      // Pre-check for blocked email or domain
      if (isEmailBlocked(user.email)) {
        await user.delete();
        toast.error("This email or domain is not allowed to register.");
        return;
      }

      await axios.post(
        "https://www.projectschool.dev/.netlify/functions/create-user",
        {
          firebaseUid: user.uid,
          email: user.email,
          emailSubscribed: false,
        }
      );

      toast.success("User signed up successfully!");
      navigate("/success");
    } catch (error) {
      const errorMessage =
        error.response?.data?.error ||
        "An error occurred during Google signup.";
      toast.error(errorMessage);
      console.error("Google signup error:", error);
    }
  };

  return (
    <div style={{ position: "relative" }}>
      <Navbar />
      <ParticlesBackground />
      <StyledContainer>
        <AuthForm
          onSubmit={onSubmit}
          onGoogleAuth={onGoogleSignUp}
          isLogin={false}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          emailSubscribed={emailSubscribed}
          setEmailSubscribed={setEmailSubscribed}
        />
      </StyledContainer>
    </div>
  );
};

export default Signup;
