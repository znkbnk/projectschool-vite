// src/Login/VerifyEmail.js
import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { applyActionCode } from "firebase/auth";
import { auth } from "../components/firebase";
import { toast } from "react-toastify";
import { StyledContainer } from "./AuthStyles";

const VerifyEmail = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const oobCode = searchParams.get("oobCode"); // Get the oobCode from the URL

    if (!oobCode) {
      toast.error("Invalid verification link.");
      navigate("/");
      return;
    }

    const verifyEmail = async () => {
      try {
        await applyActionCode(auth, oobCode); // Verify the email using the oobCode
        toast.success("Email verified successfully! You can now log in.");
        navigate("/login");
      } catch (error) {
        toast.error("Error verifying email: " + error.message);
        navigate("/");
      }
    };

    verifyEmail();
  }, [searchParams, navigate]);

  return (
    <StyledContainer>
      <div style={{ color: "#fff", textAlign: "center" }}>
        Verifying email...
      </div>
    </StyledContainer>
  );
};

export default VerifyEmail;