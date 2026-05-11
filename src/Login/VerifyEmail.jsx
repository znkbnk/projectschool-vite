// src/Login/VerifyEmail.js
import { useEffect, useRef } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { applyActionCode } from "firebase/auth";
import { auth } from "../components/firebase";
import { toast } from "react-toastify";
import { StyledContainer } from "./AuthStyles";

const VerifyEmail = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const hasVerifiedRef = useRef(false);

  useEffect(() => {
    if (hasVerifiedRef.current) return;
    hasVerifiedRef.current = true;

    const oobCode = searchParams.get("oobCode");

    if (!oobCode) {
      toast.error("Invalid verification link.");
      navigate("/");
      return;
    }

    const verifyEmail = async () => {
      try {
        await applyActionCode(auth, oobCode);
        toast.success("Email verified successfully! You can now log in.");
        navigate("/login");
      } catch (error) {
        if (error.code === "auth/invalid-action-code") {
          toast.error(
            "This verification link is expired or already used. Please request a new verification email.",
          );
        } else {
          toast.error("Error verifying email: " + error.message);
        }

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
