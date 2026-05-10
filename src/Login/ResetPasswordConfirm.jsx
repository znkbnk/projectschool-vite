import  { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { confirmPasswordReset } from "firebase/auth";
import { auth } from "../components/firebase";
import { toast } from "react-toastify";
import { StyledContainer, StyledForm, StyledInput, StyledButton } from "./AuthStyles";

const ResetPasswordConfirm = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const oobCode = searchParams.get("oobCode"); // Get the oobCode from the URL

  useEffect(() => {
    if (!oobCode) {
      toast.error("Invalid or expired reset link.");
      navigate("/resetPassword"); // Redirect to the password reset request page
    }
  }, [oobCode, navigate]);

  const handleResetPassword = async (e) => {
    e.preventDefault();

    if (!newPassword || !confirmPassword) {
      toast.error("Please fill in all fields.");
      return;
    }

    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    if (newPassword.length < 6) {
      toast.error("Password must be at least 6 characters long.");
      return;
    }

    setIsLoading(true);
    try {
      await confirmPasswordReset(auth, oobCode, newPassword);
      toast.success("Password reset successfully! You can now log in with your new password.");
      navigate("/login");
    } catch (error) {
      toast.error("Error: " + error.message);
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <StyledContainer>
      <StyledForm onSubmit={handleResetPassword}>
        <h2 style={{ color: "#fff", textAlign: "center", marginBottom: "1.5rem" }}>
          Reset Your Password
        </h2>
        <div>
          <label htmlFor="newPassword" style={{ color: "#fff", display: "block", marginBottom: "0.5rem" }}>
            New Password:
          </label>
          <StyledInput
            type="password"
            id="newPassword"
            required
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="confirmPassword" style={{ color: "#fff", display: "block", marginBottom: "0.5rem", marginTop: "1rem" }}>
            Confirm Password:
          </label>
          <StyledInput
            type="password"
            id="confirmPassword"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <StyledButton type="submit" disabled={isLoading}>
          {isLoading ? "Resetting..." : "Reset Password"}
        </StyledButton>
      </StyledForm>
    </StyledContainer>
  );
};

export default ResetPasswordConfirm;