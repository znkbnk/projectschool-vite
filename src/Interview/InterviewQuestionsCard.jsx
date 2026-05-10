import styles from './interviewQuestionsCard.module.css';

const InterviewQuestionsCard = ({ question, answer, showContent, onToggleContent }) => {
  return (
    <div className={styles.card}>
      <h2>{question}</h2>
      {showContent && <p>{answer}</p>}
      <button
        className={styles.toggleButton}
        onClick={onToggleContent}
      >
        {showContent ? 'Hide' : 'Show'} Answer
      </button>
    </div>
  );
};

export default InterviewQuestionsCard;
