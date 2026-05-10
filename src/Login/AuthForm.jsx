// src/components/AuthForm.js
import { StyledForm, StyledInput, StyledButton } from "./AuthStyles";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const AuthForm = ({
  onSubmit,
  onGoogleAuth,
  isLogin,
  email,
  setEmail,
  password,
  setPassword,
  emailSubscribed,
  setEmailSubscribed, // New props
}) => {
  return (
    <StyledForm onSubmit={onSubmit}>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        style={{ color: "#fff", textAlign: "center", marginBottom: "1.5rem" }}
      >
        {isLogin ? "Welcome Back!" : "Sign Up"}
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <label
          htmlFor='email'
          style={{ color: "#fff", display: "block", marginBottom: "0.5rem" }}
        >
          Email:
        </label>
        <StyledInput
          type='email'
          id='email'
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <label
          htmlFor='password'
          style={{
            color: "#fff",
            display: "block",
            marginBottom: "0.5rem",
            marginTop: "1rem",
          }}
        >
          Password:
        </label>
        <StyledInput
          type='password'
          id='password'
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </motion.div>

      {!isLogin && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <label
            htmlFor='emailSubscribed'
            style={{ color: "#fff", display: "block", margin: "1rem 0" }}
          >
            <input
              type='checkbox'
              id='emailSubscribed'
              checked={emailSubscribed}
              onChange={(e) => setEmailSubscribed(e.target.checked)}
              style={{ marginRight: "0.5rem" }}
            />
            I agree to receive marketing emails, such as newsletters and offers,
            from www.projectschool.dev. You can unsubscribe at any time.
          </label>
        </motion.div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <StyledButton
          type='submit'
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isLogin ? "Login" : "Sign Up"}
        </StyledButton>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <StyledButton
          type='button'
          onClick={onGoogleAuth}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{ background: "#4285F4" }}
        >
          {isLogin ? "Login with Google" : "Sign Up with Google"}
        </StyledButton>
      </motion.div>

      {isLogin ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          style={{ textAlign: "center", marginTop: "1rem" }}
        >
          <Link
            to='/resetPassword'
            style={{ color: "#1e90ff", textDecoration: "none" }}
          >
            Forgot Password?
          </Link>
        </motion.div>
      ) : null}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: isLogin ? 1.4 : 1.2 }}
        style={{ textAlign: "center", marginTop: "1rem" }}
      >
        <Link
          to={isLogin ? "/signup" : "/login"}
          style={{ color: "#1e90ff", textDecoration: "none" }}
        >
          {isLogin
            ? "Don't have an account? Sign up"
            : "Already have an account? Log in"}
        </Link>
      </motion.div>
    </StyledForm>
  );
};

export default AuthForm;
