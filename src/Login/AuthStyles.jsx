// src/Login/AuthStyles.js
import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  height: 100vh;
`;

export const StyledForm = styled(motion.form)`
  background: rgba(30, 30, 30, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.37);
  border: 1px solid rgba(255, 255, 255, 0.18);
  width: 100%;
  max-width: 400px;
  box-sizing: border-box;

  
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: none;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  transition: all 0.3s ease;
  border: 1px solid transparent;
  margin-bottom: 1rem;

  &:focus {
    outline: none;
    background: rgba(30, 144, 255, 0.1);
    border-color: #1e90ff;
  }
`;

export const StyledButton = styled(motion.button)`
  width: 100%;
  padding: 0.75rem;
  border: none;
  border-radius: 10px;
  background: #1e90ff;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  margin: 0.5rem 0;
  position: relative;
  overflow: hidden;
`;
