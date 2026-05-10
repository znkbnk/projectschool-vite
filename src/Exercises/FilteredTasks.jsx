import { memo } from "react"; // Removed useState/useEffect, not needed here anymore
import { Link } from "react-router-dom";
import LockedOverlay from "./LockedOverlay";

const FilteredTasks = memo(
  ({
    tasks,
    completedTasks = [], 
    getAuthorInfo,
    showEasy,
    showHard,
    showCompleted,
    showNotCompleted,
    showDifficulty,
    isSubscribed = true,
    isLoggedIn = false,
    freeProjectLimit = Infinity,
  }) => {
    const filteredTasks = tasks.filter((task) => {
      // ✅ guard against undefined tasks
      if (!task) return false;

      // ✅ safely compute isCompleted
      let isCompleted = false;
      if (Array.isArray(completedTasks)) {
        isCompleted = completedTasks.includes(String(task.taskId));
      } else if (completedTasks) {
        // fallback if completedTasks is an object (old format)
        isCompleted = !!completedTasks[task.taskId];
      }

      if (showEasy && task.difficulty === "Easy") return true;
      if (showHard && task.difficulty === "Hard") return true;
      if (showCompleted && isCompleted) return true;
      if (showNotCompleted && !isCompleted) return true;
      if (!showEasy && !showHard && !showCompleted && !showNotCompleted)
        return true;
      return false;
    });

    return (
      <>
        {filteredTasks.map((task, index) => {
          const originalIndex = tasks.findIndex(
            (originalTask) => originalTask.taskId === task.taskId,
          );
          const lessonNumber = originalIndex + 1;
          const isLocked = !isSubscribed && originalIndex >= freeProjectLimit;

          if (isLocked) {
            return (
              <div
                key={task.taskId || index}
                className='lessons-card is-locked'
                style={{ textDecoration: "none" }}
              >
                <LockedOverlay isLoggedIn={isLoggedIn} />
                <h3>{`Lesson ${lessonNumber}`}</h3>
                <img
                  src={task.img}
                  alt={task.taskTitle}
                  loading='lazy'
                  decoding='async'
                  width={400}
                  height={225}
                />
                <div className='lessons-card-body'>
                  <h3>{task.taskTitle}</h3>
                  <p>{task.introduction}</p>
                  <div className='authorDifficulty'>
                    <h5>
                      Author: {getAuthorInfo(task.authorIndex).name.first}{" "}
                      {getAuthorInfo(task.authorIndex).name.last}
                    </h5>
                    {showDifficulty && <h5>Difficulty: {task.difficulty}</h5>}
                  </div>
                </div>
              </div>
            );
          }

          return (
            <Link
              key={task.taskId || index}
              to={`/exercises/${task.taskType}/${task.taskId}`}
              style={{ textDecoration: "none" }}
            >
              <div className='lessons-card'>
                <h3>{`Lesson ${lessonNumber}`}</h3>
                <img
                  src={task.img}
                  alt={task.taskTitle}
                  loading='lazy'
                  decoding='async'
                  width={400}
                  height={225}
                />
                <div className='lessons-card-body'>
                  <h3>{task.taskTitle}</h3>
                  <p>{task.introduction}</p>
                  <div className='authorDifficulty'>
                    <h5>
                      Author: {getAuthorInfo(task.authorIndex).name.first}{" "}
                      {getAuthorInfo(task.authorIndex).name.last}
                    </h5>
                    {showDifficulty && <h5>Difficulty: {task.difficulty}</h5>}
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </>
    );
  },
);

FilteredTasks.displayName = "FilteredTasks";

export default FilteredTasks;
