/* eslint-disable no-unused-vars */
import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { loadTasksForLesson } from "../data/index";
import Navbar from "../components/Navbar";
import "../styles/editor.css";
import "react-toastify/dist/ReactToastify.css";
import "../styles/cheatsheet.css";
import "../styles/showStyles.css";
import cheatsheetData from "../data/cheatsheetData";
import stylesData from "../data/stylesData";
import CheatsheetPopup from "./CheatsheetPopup";
import StylesPopup from "./StylesPopup";
import SolutionPopup from "./SolutionPopup";
import VideoPopup from "./VideoPopup";
import { useAuthContext } from "../Login/useAuthContext";
import useResizer from "../hooks/Useresizer";
import SolutionIcon from "./SolutionIcon";
import CheatsheetIcon from "./CheatsheetIcon";
import VideoIcon from "./VideoIcon";

const LiveEditor = ({ tasks, onTaskComplete }) => {
  const { lessonType, taskId } = useParams();

  const { subscriptionStatus, isLoading: loadingSubscription } =
    useAuthContext();
  const { width, isResizing, resizerProps } = useResizer(400, 250, 70);
  const [, setCheckboxRefresh] = useState(0);
  const [lessonTasks, setLessonTasks] = useState([]);
  const [tasksLoading, setTasksLoading] = useState(true);
  const [solutionCodes, setSolutionCodes] = useState([]);
  const [showSolution, setShowSolution] = useState(false);
  const [showCheatsheet, setShowCheatsheet] = useState(false);
  const [cheatsheetContent, setCheatsheetContent] = useState(null);
  const [showVideoPopup, setShowVideoPopup] = useState(false);
  const [, setCompletedRefresh] = useState(0);
  const [selectedStyle, setSelectedStyle] = useState(null);
  const [copied, setCopied] = useState(false);
  const [buttonText, setButtonText] = useState("Solution");
  const [loadingSolution, setLoadingSolution] = useState(false);
  const [iframeKey, setIframeKey] = useState(0);
  const taskContainerRef = useRef(null);
  const navigate = useNavigate();
  const solutionLoadedRef = useRef(false);
  const copyTimeoutRef = useRef(null);
  const buttonTimeoutRef = useRef(null);
  const [iframeReady, setIframeReady] = useState(false);
  const FREE_PROJECT_LIMIT = useMemo(() => {
    const FREE_LIMITS = {
      React: 15,
      Live: 3,
      Workshop: 6,
      Ecommerce: 3,
      ReactTasks: 5,
    };
    return FREE_LIMITS[lessonType] ?? 0;
  }, [lessonType]);

  // Load tasks for the current lesson type
  useEffect(() => {
    if (!lessonType) return;

    let cancelled = false;

    const fetchTasks = async () => {
      try {
        setTasksLoading(true);

        const tasks = await loadTasksForLesson(lessonType);

        if (!cancelled) {
          setLessonTasks(Array.isArray(tasks) ? tasks : []);
        }
      } catch {
        if (!cancelled) {
          toast.error(`Failed to load tasks for: ${lessonType}`);
        }
      } finally {
        if (!cancelled) {
          setTasksLoading(false);
        }
      }
    };

    fetchTasks();

    return () => {
      cancelled = true;
    };
  }, [lessonType]);

  // Validate route and set current task index — runs after tasks are loaded
  useEffect(() => {
    if (loadingSubscription || tasksLoading || lessonTasks.length === 0) return;

    if (!lessonType || !taskId) {
      toast.error("Invalid lesson or task. Please check the URL.");
      navigate("/");
      return;
    }

    const index = lessonTasks.findIndex((task) => task.taskId === taskId);
    if (index === -1) {
      toast.error(`Task not found: ${taskId}`);
      navigate("/");
      return;
    }

    const isSubscribed = subscriptionStatus === "subscribed";
    if (!isSubscribed && index >= FREE_PROJECT_LIMIT) {
      toast.info("This is a premium project. Upgrade to unlock!");
      navigate("/exercises");
      return;
    }

    // ✅ FIX: localStorage reads are safe here — this runs in useEffect (client only)
  }, [
    lessonTasks,
    tasksLoading,
    lessonType,
    taskId,
    navigate,
    subscriptionStatus,
    FREE_PROJECT_LIMIT,
    loadingSubscription,
  ]);

  const currentTaskIndex = useMemo(() => {
    if (!lessonTasks.length || !taskId) return -1;
    return lessonTasks.findIndex((task) => task.taskId === taskId);
  }, [lessonTasks, taskId]);

  const checkboxStates = (() => {
    if (!taskId || typeof window === "undefined") return {};

    try {
      return JSON.parse(localStorage.getItem(taskId)) || {};
    } catch {
      return {};
    }
  })();

  // Load solution code on demand
  useEffect(() => {
    if (!showSolution || solutionLoadedRef.current) return;

    const solutionModules = import.meta.glob("./solutions/*.{js,jsx,ts,tsx}");

    const loadSolutionCodes = async () => {
      solutionLoadedRef.current = true;
      setLoadingSolution(true);

      try {
        const modulePath = `./solutions/${taskId}.jsx`;
        // Adjust extension if your files differ

        const importer = solutionModules[modulePath];

        if (!importer) {
          throw new Error(`Solution module not found: ${modulePath}`);
        }

        const module = await importer();

        setSolutionCodes(
          Array.isArray(module.default) ? module.default : [module.default],
        );
      } catch (error) {
        console.error("Error loading solution:", error);
        setSolutionCodes(["Solution not available for this task."]);
      } finally {
        setLoadingSolution(false);
      }
    };

    loadSolutionCodes();
  }, [showSolution, taskId]);

  // Scroll task panel to top on task change
  useEffect(() => {
    if (taskContainerRef.current) {
      taskContainerRef.current.scrollTop = 0;
    }
  }, [taskId]);

  // Cleanup timeouts on unmount
  useEffect(() => {
    return () => {
      clearTimeout(copyTimeoutRef.current);
      clearTimeout(buttonTimeoutRef.current);
    };
  }, []);

  // Iframe lazy load — initial mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIframeKey((prev) => prev + 1);
    }, 800);

    return () => clearTimeout(timer);
  }, [taskId]);

  // Iframe lazy load — reset on task navigation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIframeReady(true);
    }, 600);

    return () => {
      clearTimeout(timer);
      // ✅ Reset the state here as the cleanup for the PREVIOUS taskId
      setIframeReady(false);
    };
  }, [taskId]);

  const currentTask = useMemo(() => {
    return lessonTasks[currentTaskIndex] || {};
  }, [lessonTasks, currentTaskIndex]);

  const storageLessonType =
    currentTask.taskType === "ReactTasks" || lessonType === "ReactTasks"
      ? "ReactTasks"
      : lessonType;

  const { taskTitle, task, steps, videoLink, codesandboxUrl } = currentTask;

  const isCompleted = (() => {
    if (!storageLessonType || !taskId || typeof window === "undefined") {
      return false;
    }

    try {
      const lessonCompletedTasksKey = `${storageLessonType}_completedTasks`;

      const completedTasks =
        JSON.parse(localStorage.getItem(lessonCompletedTasksKey)) || {};

      return Boolean(completedTasks[taskId]);
    } catch {
      return false;
    }
  })();

  const handleCheckboxChange = useCallback(
    (stepId) => {
      try {
        const current = JSON.parse(localStorage.getItem(taskId)) || {};

        const updated = {
          ...current,
          [stepId]: !current[stepId],
        };

        localStorage.setItem(taskId, JSON.stringify(updated));
        setCheckboxRefresh((prev) => prev + 1);
      } catch {
        toast.error("Failed to save checkbox state.");
      }
    },
    [taskId],
  );

  const handleNext = useCallback(() => {
    if (lessonTasks.length === 0) return;

    if (currentTaskIndex < lessonTasks.length - 1) {
      const nextIndex = currentTaskIndex + 1;
      const isSubscribed = subscriptionStatus === "subscribed";

      if (!isSubscribed && nextIndex >= FREE_PROJECT_LIMIT) {
        toast.info("Upgrade to unlock more projects and keep building!");
        return;
      }

      const nextTaskId = lessonTasks[nextIndex].taskId;
      solutionLoadedRef.current = false;
      navigate(`/exercises/${lessonType}/${nextTaskId}`);
    } else {
      toast.info("You have reached the last task.");
    }
  }, [
    lessonTasks,
    currentTaskIndex,
    navigate,
    subscriptionStatus,
    FREE_PROJECT_LIMIT,
    lessonType,
  ]);

  const handlePrevious = useCallback(() => {
    if (currentTaskIndex > 0) {
      const previousTaskId = lessonTasks[currentTaskIndex - 1].taskId;
      solutionLoadedRef.current = false;
      navigate(`/exercises/${lessonType}/${previousTaskId}`);
    } else {
      toast.info("You are on the first task.");
    }
  }, [lessonTasks, lessonType, currentTaskIndex, navigate]);

  const handleComplete = useCallback(() => {
    if (isCompleted) {
      toast.info("This task is already completed.");
      return;
    }

    if (
      window.confirm("Are you sure you want to mark this task as completed?")
    ) {
      try {
        const lessonCompletedTasksKey = `${storageLessonType}_completedTasks`;

        const completedTasks =
          JSON.parse(localStorage.getItem(lessonCompletedTasksKey)) || {};
        completedTasks[taskId] = true;
        localStorage.setItem(
          lessonCompletedTasksKey,
          JSON.stringify(completedTasks),
        );
        setCompletedRefresh((prev) => prev + 1);
        toast.success(`Task completed!`);
        if (onTaskComplete) {
          onTaskComplete(storageLessonType, taskId);
        }
        window.dispatchEvent(
          new CustomEvent("taskCompleted", {
            detail: { lessonType: storageLessonType, taskId },
          }),
        );
      } catch (error) {
        console.error("Error marking task as completed:", error);
        toast.error("Failed to mark task as completed.");
      }
    }
  }, [isCompleted, storageLessonType, onTaskComplete, taskId]);

  const handleToggleSolution = useCallback(() => {
    const isSubscribed = subscriptionStatus === "subscribed";
    const isFreeTier = currentTaskIndex < FREE_PROJECT_LIMIT;

    if (!isSubscribed && !isFreeTier) {
      toast.info("Upgrade to unlock solutions for all projects!");
      return;
    }

    const newSolutionState = !showSolution;
    setShowSolution(newSolutionState);

    if (newSolutionState) {
      setButtonText("Scroll Down ↓");
      buttonTimeoutRef.current = setTimeout(() => {
        setButtonText("Solution");
      }, 1500);
    }
  }, [subscriptionStatus, showSolution, currentTaskIndex, FREE_PROJECT_LIMIT]);

  const handleCopyToClipboard = useCallback(async (css) => {
    try {
      await navigator.clipboard.writeText(css);
      setCopied(true);
      copyTimeoutRef.current = setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Error copying to clipboard:", error);
      toast.error("Failed to copy to clipboard.");
    }
  }, []);

  const handleToggleCheatsheet = useCallback(() => {
    const currentCheatsheet = cheatsheetData.find(
      (cheatsheet) => cheatsheet.taskId === taskId,
    );

    if (currentCheatsheet) {
      setCheatsheetContent(currentCheatsheet);
      setShowCheatsheet((prev) => !prev);
    } else {
      toast.error("No cheatsheet available for this task.");
    }
  }, [taskId]);

  const handleToggleVideoPopup = useCallback(() => {
    setShowVideoPopup((prev) => !prev);
  }, []);

  // Loading state while tasks chunk is being fetched
  if (tasksLoading || loadingSubscription) {
    return (
      <div>
        <Navbar />
        <div className='editor-container'>
          <div className='task-container'>
            <div className='task'>
              <div
                className='text-window'
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div className='loading-spinner' />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!currentTask || !taskTitle) {
    return (
      <div>
        <Navbar />
        <div className='editor-container'>
          <div className='task-container'>
            <div className='task'>
              <div className='text-window'>
                <h6>Task Not Found</h6>
                <p>
                  The task you are looking for does not exist. Please check the
                  URL or go back to the home page.
                </p>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div className={`editor-container ${isResizing ? "resizing" : ""}`}>
        <div className='task-container' style={{ width: `${width}px` }}>
          <div className='task'>
            <div className='text-window' ref={taskContainerRef}>
              <h6>{taskTitle}</h6>
              {task && Object.keys(task).length > 0 && (
                <div className='section'>
                  <h4>Task Description:</h4>
                  <p>{task.taskDescription}</p>
                  <h4>Platform: </h4>
                  <p>{task.platform}</p>
                  <h4>Project Name: </h4>
                  <p>{task.projectName}</p>
                  <h4>Bidding ends:</h4>
                  <p>{task.biddingEnds}</p>
                  <h4>Requirements:</h4>
                  <ul className='text-window-list'>
                    {task.requirements?.map((requirement, index) => (
                      <li key={index}>{requirement}</li>
                    ))}
                  </ul>
                  <h4>Steps:</h4>
                </div>
              )}
              {steps?.map((step, index) => (
                <div className='taskText-container' key={index}>
                  <div className='step-title-container'>
                    <div className='checkbox-container'>
                      <input
                        type='checkbox'
                        id={`step${index}`}
                        checked={checkboxStates[`step${index}`] || false}
                        onChange={() => handleCheckboxChange(`step${index}`)}
                      />
                      <label htmlFor={`step${index}`}></label>
                    </div>
                    <h3>{step.stepTitle}</h3>
                  </div>
                  <p>{step.titleDescription}</p>
                  {step.sections?.map((section, secIndex) => (
                    <div className='section' key={secIndex}>
                      <h4>{section.subtitleDescription}</h4>
                      <ul className='text-window-list'>
                        {section.descriptions?.map((desc, descIndex) => (
                          <li key={descIndex}>{desc}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                  <br />
                </div>
              ))}
              <div className='task-button-container'>
                <button
                  className='button-84 btn-cheatsheet'
                  onClick={handleToggleCheatsheet}
                  aria-label='Toggle Cheatsheet'
                >
                  <CheatsheetIcon />
                  <span>Cheatsheet</span>
                </button>

                <StylesPopup taskId={taskId} stylesData={stylesData} />

                <button
                  className='button-84 btn-solution'
                  onClick={handleToggleSolution}
                  aria-label='Toggle Solution'
                >
                  <SolutionIcon />
                  <span>{buttonText}</span>
                </button>

                {videoLink && (
                  <button
                    className='button-84 btn-video'
                    onClick={handleToggleVideoPopup}
                    aria-label='Video Lesson'
                  >
                    <VideoIcon />
                    <span>Video Lesson</span>
                  </button>
                )}
              </div>

              <VideoPopup
                showVideoPopup={showVideoPopup}
                videoLink={videoLink}
                onClose={handleToggleVideoPopup}
              />

              {showCheatsheet && cheatsheetContent && (
                <CheatsheetPopup
                  cheatsheetContent={cheatsheetContent}
                  onClose={handleToggleCheatsheet}
                />
              )}

              <SolutionPopup
                key={`solution-${taskId}`}
                showSolution={showSolution}
                taskTitle={taskTitle}
                loadingSolution={loadingSolution}
                solutionCodes={solutionCodes}
                onClose={handleToggleSolution}
              />
            </div>
          </div>

          {lessonTasks.length > 0 && (
            <div className='task-buttons'>
              <button
                className='button-28 previous'
                onClick={handlePrevious}
                aria-label='Previous task'
              >
                Previous
              </button>
              <button
                className={`button-28 complete ${isCompleted ? "completed" : ""}`}
                onClick={handleComplete}
                aria-label={isCompleted ? "Task completed" : "Mark as complete"}
              >
                {isCompleted ? "Completed" : "Complete"}
              </button>
              <button
                className='button-28 next'
                onClick={handleNext}
                aria-label='Next task'
              >
                Next
              </button>
            </div>
          )}
        </div>
        <div {...resizerProps} />
        {iframeKey > 0 ? (
          <iframe
            key={taskId}
            src={codesandboxUrl}
            title='React'
            loading='lazy'
            allow='accelerometer; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; xr-spatial-tracking'
            sandbox='allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts'
          />
        ) : (
          <div className='iframe-skeleton'>
            <div className='skeleton-sidebar'>
              <div className='skeleton-file-tree'>
                <div className='skeleton-line w-60'></div>
                <div className='skeleton-line w-80'></div>
                <div className='skeleton-line w-50'></div>
                <div className='skeleton-line w-70'></div>
                <div className='skeleton-line w-40'></div>
              </div>
            </div>
            <div className='skeleton-editor'>
              <div className='skeleton-tabs'>
                <div className='skeleton-tab'></div>
              </div>
              <div className='skeleton-code'>
                <div className='skeleton-line w-40'></div>
                <div className='skeleton-line w-70'></div>
                <div className='skeleton-line w-55'></div>
                <div className='skeleton-line w-80'></div>
                <div className='skeleton-line w-30'></div>
                <div className='skeleton-line w-65'></div>
                <div className='skeleton-line w-45'></div>
                <div className='skeleton-line w-75'></div>
                <div className='skeleton-line w-35'></div>
                <div className='skeleton-line w-60'></div>
              </div>
            </div>
            <div className='skeleton-preview'>
              <div className='skeleton-preview-bar'></div>
              <div className='skeleton-preview-content'>
                <div className='skeleton-line w-50'></div>
                <div className='skeleton-line w-80'></div>
                <div className='skeleton-line w-40'></div>
              </div>
            </div>
          </div>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default LiveEditor;
