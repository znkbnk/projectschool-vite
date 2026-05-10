import React from "react";
import InterviewCard from "./InterviewCard";
import { interviewData } from "../data/interviewData";
import styles from "./interview.module.css";
import { useAuthContext } from "../Login/useAuthContext";

// Indices of FREE interview content (0-based from interviewData array)
const FREE_INTERVIEW_INDICES = [0, 2]; // Interview Questions + Interview Quiz

const InterviewCardList = () => {
  const { subscriptionStatus, isLoggedIn } = useAuthContext();
  const isSubscribed = subscriptionStatus === "subscribed";

  return (
    <div className={styles.wrapper}>
      {interviewData.map((exercise, index) => {
        const isLocked =
          !isSubscribed && !FREE_INTERVIEW_INDICES.includes(index);

        return (
          <InterviewCard
            key={index}
            {...exercise}
            isLocked={isLocked}
            isLoggedIn={isLoggedIn}
          />
        );
      })}
    </div>
  );
};

export default InterviewCardList;
