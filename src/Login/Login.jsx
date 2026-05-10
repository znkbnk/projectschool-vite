// src/pages/Login.js
import  { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import ParticlesBackground from "./ParticlesBackground";
import { StyledContainer } from "./AuthStyles";
import { useSpring, animated } from "@react-spring/web";
import { useNavigate, useLocation } from "react-router-dom";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../components/firebase";
import { toast } from "react-toastify";
import AuthForm from "./AuthForm";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false); // Track login state
  const navigate = useNavigate();
  const location = useLocation();

  const redirectTo =
    new URLSearchParams(location.search).get("redirect") || "/";

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const onLogin = async (e) => {
    e.preventDefault();
    
    if (isLoggingIn) return; // Prevent double submission
    
    setIsLoggingIn(true);
    
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      if (!user.emailVerified) {
        await auth.signOut();
        toast.error("Please verify your email before logging in.");
        setIsLoggingIn(false);
        return;
      }

      toast.success("Logged in successfully");
      
      // Small delay to allow auth state to update before navigation
      setTimeout(() => {
        navigate(redirectTo, { replace: true });
      }, 100);
      
    } catch (error) {
      setIsLoggingIn(false);
      const errorCode = error.code;
      
      if (
        errorCode === "auth/wrong-password" ||
        errorCode === "auth/user-not-found" ||
        errorCode === "auth/invalid-credential"
      ) {
        toast.error("Incorrect email or password. Please try again.");
      } else if (errorCode === "auth/too-many-requests") {
        toast.error("Too many failed attempts. Please try again later.");
      } else {
        toast.error("Error: " + error.message);
      }
      console.error(error);
    }
  };

  const onGoogleLogin = async () => {
    if (isLoggingIn) return; // Prevent double submission
    
    setIsLoggingIn(true);
    
    try {
      await signInWithPopup(auth, googleProvider);
      toast.success("Logged in successfully");
      
      // Small delay to allow auth state to update before navigation
      setTimeout(() => {
        navigate(redirectTo, { replace: true });
      }, 100);
      
    } catch (error) {
      setIsLoggingIn(false);
      
      if (error.code === "auth/popup-closed-by-user") {
        toast.info("Login cancelled");
      } else {
        toast.error("Error: " + error.message);
      }
      console.error(error);
    }
  };

  const formAnimation = useSpring({
    from: { opacity: 0, transform: "translateY(50px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
    config: { tension: 300, friction: 10 },
  });

  return (
    <div style={{ position: "relative" }}>
      <Navbar />
      <ParticlesBackground />
      <StyledContainer>
        <animated.div style={formAnimation}>
          <AuthForm
            onSubmit={onLogin}
            onGoogleAuth={onGoogleLogin}
            isLogin={true}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            isLoading={isLoggingIn}
          />
        </animated.div>
      </StyledContainer>
    </div>
  );
};

export default Login;