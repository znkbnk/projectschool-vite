import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/exercises.css";

const Card = ({ img, title, desc, to }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 769);

  // Paths that should always redirect to "/mobile-message" on mobile screens
  const mobileRedirectPaths = ["/reactlessons", "/livelessons", "/musicacademy", "/reacttasks"];

  // Update mobile flag on window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 769);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Determine the final navigation path
  const navigateTo =
    isMobile && mobileRedirectPaths.includes(to) ? "/mobile-message" : to;

  return (
    <div className="exercises-card">
      <div className="exercises-card__body">
        <img src={img} className="exercises-card__image" alt={title} />
        <h2 className="exercises-card__title">{title}</h2>
        <p className="exercises-card__description">{desc}</p>
        <Link to={navigateTo} className="exercises-card__btn">
          Start
        </Link>
      </div>
    </div>
  );
};

export default Card;
