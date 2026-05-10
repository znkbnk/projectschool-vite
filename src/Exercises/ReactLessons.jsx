import { useState, useEffect } from "react"; // Added useMemo
import "../styles/lessons.css";
import "../styles/lockedOverlay.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProgressBar from "./ProgressBar";
import { ReactLessons as ReactLessonsTasks } from "../data/ReactData";
import { authorsData } from "../data/tasksData";
import FilterSortButtons from "./FilterSortButtons";
import FilteredTasks from "./FilteredTasks";
import MobileMessage from "./MobileMessage";
import { useAuthContext } from "../Login/useAuthContext";

const FREE_PROJECT_LIMIT = 15;

function ReactLessons() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [isMobile, setIsMobile] = useState(false);
  const [completedTasks, setCompletedTasks] = useState([]);

  const { subscriptionStatus, isLoggedIn } = useAuthContext();
  const isSubscribed = subscriptionStatus === "subscribed";

  useEffect(() => {
    const checkIsMobile = () => {
      if (typeof window === "undefined") return;
      setIsMobile(window.innerWidth <= 768);
    };
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  useEffect(() => {
  const refreshCompletedTasks = () => {
    try {
      const storedTasks =
        JSON.parse(localStorage.getItem("React_completedTasks")) || {};

      setCompletedTasks(
        Object.keys(storedTasks).filter((taskId) => storedTasks[taskId]),
      );
    } catch (error) {
      console.error("Error reading from localStorage:", error);
      setCompletedTasks([]);
    }
  };

  refreshCompletedTasks();

  window.addEventListener("focus", refreshCompletedTasks);
  window.addEventListener("taskCompleted", refreshCompletedTasks);

  return () => {
    window.removeEventListener("focus", refreshCompletedTasks);
    window.removeEventListener("taskCompleted", refreshCompletedTasks);
  };
}, []);


  if (isMobile) {
    return <MobileMessage />;
  }
  

  const handleFilterClick = (filterType) => {
    setActiveFilter(filterType);
  };

  const getAuthorInfo = (authorIndex) => {
    return authorsData[authorIndex];
  };

  return (
    <>
      <Navbar />
      <div className='header'>
        <h1 className='component-title'>
          Learn React with 60+ Practice Projects
        </h1>
        <p className='header-subtitle'>
          Build real applications from beginner to advanced. Filter by
          difficulty or track your progress.
        </p>

        {!isSubscribed && (
          <div className='access-info-banner'>
            <span className='access-info-icon'>🔓</span>
            <span>
              <strong>{FREE_PROJECT_LIMIT} projects free</strong> — Upgrade to
              unlock all {ReactLessonsTasks.length} projects with full source
              code
            </span>
            <a href='/pricing' className='access-info-cta'>
              Upgrade →
            </a>
          </div>
        )}
      </div>

      <ProgressBar tasks={ReactLessonsTasks} completedTasks={completedTasks} />

      <FilterSortButtons
        filters={["All", "Easy", "Hard", "Completed", "Not Completed"]}
        handleFilterClick={handleFilterClick}
      />
      <div className='lessons-cards'>
        <FilteredTasks
          tasks={ReactLessonsTasks}
          completedTasksKey='React_completedTasks'
          getAuthorInfo={getAuthorInfo}
          showEasy={activeFilter === "Easy"}
          showHard={activeFilter === "Hard"}
          showCompleted={activeFilter === "Completed"}
          showNotCompleted={activeFilter === "Not Completed"}
          showDifficulty={true}
          isSubscribed={isSubscribed}
          isLoggedIn={isLoggedIn}
          freeProjectLimit={FREE_PROJECT_LIMIT}
        />
      </div>
      <Footer />
    </>
  );
}

export default ReactLessons;
