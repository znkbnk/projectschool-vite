import  { useRef } from "react";
import "../styles/mobileMessage.css";
import image1 from "../images/pslogosmall.webp";
import { useNavigate } from "react-router-dom";

const MobileMessage = () => {
  const logo = useRef(null);
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/");
  };

  return (
    <div className='mobile-message-container'>
      <div className='glow-effect'></div>

      <button
        className='back-button'
        onClick={handleBackClick}
        aria-label='Go back'
      >
        Back
      </button>

      {/* Text Container */}
      <div className='text-container'>
        <h2>Desktop Experience Required</h2>
        <h3 className='message-heading'>
          This learning platform is optimized for desktop viewing to ensure the
          best possible experience.
        </h3>
      </div>

      {/* Logo Container */}
      <div className='mobile-logo-container'>
        <img src={image1} alt='www.projectschool.dev Logo' ref={logo} />
      </div>
    </div>
  );
};

export default MobileMessage;
