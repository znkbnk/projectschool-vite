import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ReactLessons as ReactLessonsData } from "../data/ReactData";
import { ReactTasks as ReactTasksData } from "../data/ReactTasksData";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/finishedTasks.css";
import ScrollToTopOnNavigation from "../components/ScrollToTopOnNavigation";

const allTaskGroups = {
  React: ReactLessonsData,
  ReactTasks: ReactTasksData,
};

const getInitialData = () => {
  const allCompletedTasks = [];
  const allNotes = {};

  Object.keys(allTaskGroups).forEach((lessonType) => {
    const lessonCompletedTasksKey = `${lessonType}_completedTasks`;
    const lessonNotesKey = `${lessonType}_notes`;

    const completedTasks =
      JSON.parse(localStorage.getItem(lessonCompletedTasksKey)) || {};
    const storedNotes = JSON.parse(localStorage.getItem(lessonNotesKey)) || {};
    const lessonTasks = allTaskGroups[lessonType] || [];

    Object.keys(completedTasks).forEach((taskId, index) => {
      if (completedTasks[taskId]) {
        const task = lessonTasks.find(
          (t) => String(t.taskId) === String(taskId),
        );

        if (task) {
          allCompletedTasks.push({
            lessonType,
            taskId,
            taskTitle: task.taskTitle,
            introduction: task.introduction || "No introduction available",
            animationDelay: `${index * 0.1}s`,
          });

          const noteKey = `${lessonType}_${taskId}`;
          allNotes[noteKey] = storedNotes[taskId] || "";
        }
      }
    });
  });

  return { allCompletedTasks, allNotes };
};


const FinishedTasks = () => {
  const [completedTasks] = useState(() => getInitialData().allCompletedTasks);
  const [notes, setNotes] = useState(() => getInitialData().allNotes);

  // Handle notes change and save to localStorage
  const handleNotesChange = (lessonType, taskId, value) => {
    const noteKey = `${lessonType}_${taskId}`;
    setNotes((prevNotes) => ({
      ...prevNotes,
      [noteKey]: value,
    }));

    const lessonNotesKey = `${lessonType}_notes`;
    const storedNotes = JSON.parse(localStorage.getItem(lessonNotesKey)) || {};
    storedNotes[taskId] = value;
    localStorage.setItem(lessonNotesKey, JSON.stringify(storedNotes));
  };

  // Handle ripple effect on button click
  const handleButtonClick = (e) => {
    const button = e.currentTarget;
    const ripple = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    ripple.style.width = ripple.style.height = `${diameter}px`;
    ripple.style.left = `${
      e.clientX - button.getBoundingClientRect().left - radius
    }px`;
    ripple.style.top = `${
      e.clientY - button.getBoundingClientRect().top - radius
    }px`;
    ripple.classList.add("ripple");

    button.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);
  };

  return (
    <div>
      <Navbar />
      <ScrollToTopOnNavigation />

      <div className='header'>
        <h1 className='component-title'>Your Completed Tasks</h1>
        {completedTasks.length > 0 && (
          <p className='header-subtitle'>
            You've completed {completedTasks.length} task
            {completedTasks.length !== 1 ? "s" : ""}. Add notes to remember key
            concepts.
          </p>
        )}
      </div>

      <div className='progress-content'>
        {completedTasks.length === 0 ? (
          <div className='no-tasks-container'>
            <div className='no-tasks'>
              <p>You haven't completed any tasks yet.</p>
              <Link
                to='/exercises'
                className='exercises-card__btn start-practicing-btn'
                onClick={handleButtonClick}
              >
                Start Practicing
              </Link>
            </div>
          </div>
        ) : (
          <div className='wrapper'>
            {completedTasks.map((task, index) => (
              <div
                key={index}
                className='exercises-card'
                style={{ animationDelay: task.animationDelay }}
              >
                <div className='exercises-card__body'>
                  <h3 className='exercises-card__title'>{task.taskTitle}</h3>
                  <p className='exercises-card__description lesson-type'>
                    <strong>Lesson:</strong> {task.lessonType}
                  </p>
                  <p className='exercises-card__introduction'>
                    {task.introduction}
                  </p>
                  <textarea
                    className='exercises-card__notes'
                    value={notes[`${task.lessonType}_${task.taskId}`] || ""}
                    onChange={(e) =>
                      handleNotesChange(
                        task.lessonType,
                        task.taskId,
                        e.target.value,
                      )
                    }
                    placeholder='Add your notes here...'
                    rows='4'
                  />
                  <Link
                    to={`/exercises/${task.lessonType}/${task.taskId}`}
                    className='exercises-card__btn'
                    onClick={handleButtonClick}
                  >
                    Review Task
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <ToastContainer />
      <Footer />
    </div>
  );
};

export default FinishedTasks;
