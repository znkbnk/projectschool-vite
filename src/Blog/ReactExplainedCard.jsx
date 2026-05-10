import React from "react";
import styles from "./ReactExplainedCard.module.css";

const ReactExplainedCard = ({ title, content }) => {
  return (
    <div className={styles.card}>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default ReactExplainedCard;
