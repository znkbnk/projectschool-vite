import { memo } from "react";
import "../styles/progressBar.css";

const ProgressBar = memo(({ tasks = [], completedTasks = [] }) => {
  const stages = tasks.map((task, i) => {
    const isCompleted = completedTasks.includes(String(task.taskId));

    return (
      <div
        key={task.taskId || i}
        className={`stage ${isCompleted ? "completed" : ""}`}
      >
        {i + 1}
      </div>
    );
  });

  return (
    <div className='progress-bar'>
      <div className='stages'>{stages}</div>
    </div>
  );
});

ProgressBar.displayName = "ProgressBar";
export default ProgressBar;
