import React from "react";
import { Link } from "react-router-dom";
import styles from "./interview.module.css";
import LockedOverlay from "../../src/Exercises/LockedOverlay";

const InterviewCard = ({ img, title, desc, to, isLocked, isLoggedIn }) => {
  // LOCKED CARD — no navigation, show overlay
  if (isLocked) {
    return (
      <div className={`${styles["exercises-card"]} is-locked`}>
        <LockedOverlay isLoggedIn={isLoggedIn} />
        <div className={styles["exercises-card__body"]}>
          <img
            src={img}
            className={styles["exercises-card__image"]}
            alt={title}
          />
          <h2 className={styles["exercises-card__title"]}>{title}</h2>
          <p className={styles["exercises-card__description"]}>{desc}</p>
          <span className={styles["exercises-card__btn"]}>Start</span>
        </div>
      </div>
    );
  }

  // UNLOCKED CARD — original code
  return (
    <div className={styles["exercises-card"]}>
      <div className={styles["exercises-card__body"]}>
        <img
          src={img}
          className={styles["exercises-card__image"]}
          alt={title}
        />
        <h2 className={styles["exercises-card__title"]}>{title}</h2>
        <p className={styles["exercises-card__description"]}>{desc}</p>
        <Link to={to} className={styles["exercises-card__btn"]}>
          Start
        </Link>
      </div>
    </div>
  );
};

export default InterviewCard;