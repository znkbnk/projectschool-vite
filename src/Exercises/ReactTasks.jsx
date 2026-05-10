import { useState, useEffect } from "react";
import "../styles/lessons.css";
import "../styles/lockedOverlay.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProgressBar from "./ProgressBar";
import { ReactTasks as ReactTasksData } from "../data/ReactTasksData";
import { authorsData } from "../data/tasksData";
import FilterSortButtons from "./FilterSortButtons";
import FilteredTasks from "./FilteredTasks";
import MobileMessage from "./MobileMessage";
import { useAuthContext } from "../Login/useAuthContext";

const FREE_PROJECT_LIMIT = 5;

function ReactTasks() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [isMobile, setIsMobile] = useState(false);
  const [completedTasks, setCompletedTasks] = useState(() => {
    if (typeof window === "undefined") return []; // Safety check for SSR
    try {
      const storedTasks =
        JSON.parse(localStorage.getItem("ReactTasks_completedTasks")) || {};
      return Object.keys(storedTasks).filter((taskId) => storedTasks[taskId]);
    } catch (error) {
      console.error("Error reading from localStorage:", error);
      return [];
    }
  });

  const { subscriptionStatus, isLoggedIn } = useAuthContext();
  const isSubscribed = subscriptionStatus === "subscribed";
  console.log(
    "Reading from localStorage:",
    localStorage.getItem("ReactTasks_completedTasks"),
  );
  useEffect(() => {
    const handleTaskComplete = () => {
      try {
        const stored =
          JSON.parse(localStorage.getItem("ReactTasks_completedTasks")) || {};
        const completedIds = Object.keys(stored).filter((id) => stored[id]);
        setCompletedTasks(completedIds);
      } catch {
        // <-- Removed the (e) here
        setCompletedTasks([]);
      }
    };
    window.addEventListener("taskCompleted", handleTaskComplete);
    return () =>
      window.removeEventListener("taskCompleted", handleTaskComplete);
  }, []);

  useEffect(() => {
    const refreshCompletedTasks = () => {
      try {
        const stored =
          JSON.parse(localStorage.getItem("ReactTasks_completedTasks")) || {};
        const completedIds = Object.keys(stored).filter((id) => stored[id]);
        setCompletedTasks(completedIds);
      } catch (e) {
        console.error("Error refreshing completed tasks:", e);
      }
    };

    // Listen to page visibility changes
    document.addEventListener("visibilitychange", refreshCompletedTasks);
    // Also listen to focus (in case the page was never hidden but the user clicked back)
    window.addEventListener("focus", refreshCompletedTasks);

    return () => {
      document.removeEventListener("visibilitychange", refreshCompletedTasks);
      window.removeEventListener("focus", refreshCompletedTasks);
    };
  }, []);

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
    const refresh = () => {
      // Re‑trigger parent refresh via custom event
      window.dispatchEvent(new Event("refreshProgress"));
    };
    window.addEventListener("focus", refresh);
    window.addEventListener("visibilitychange", refresh);
    return () => {
      window.removeEventListener("focus", refresh);
      window.removeEventListener("visibilitychange", refresh);
    };
  }, []);

  useEffect(() => {
    const handleRefresh = () => {
      const stored =
        JSON.parse(localStorage.getItem("ReactTasks_completedTasks")) || {};
      setCompletedTasks(Object.keys(stored).filter((id) => stored[id]));
    };
    window.addEventListener("refreshProgress", handleRefresh);
    return () => window.removeEventListener("refreshProgress", handleRefresh);
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
        <h1 className='component-title'>Put Your Todo App to Work</h1>
        <p className='header-subtitle'>
          10 practice tasks built directly on the app from the series. Beginner
          to advanced — no hand-holding, just real code. <br />
          New here?{" "}
          <a className='guide-inline-link' href='/guides/reacttodo'>
            Follow the step-by-step guide
          </a>{" "}
          and build the app from scratch first.
        </p>

        {!isSubscribed && (
          <div className='access-info-banner'>
            <span className='access-info-icon'>🔓</span>
            <span>
              <strong>{FREE_PROJECT_LIMIT} projects free</strong> — Upgrade to
              unlock all {ReactTasksData.length} projects with full source code
            </span>
            <a href='/pricing' className='access-info-cta'>
              Upgrade →
            </a>
          </div>
        )}
      </div>

      <ProgressBar
        tasks={ReactTasksData}
        completedTasks={completedTasks || []}
      />
      <FilterSortButtons
        filters={["All", "Easy", "Hard", "Completed", "Not Completed"]}
        handleFilterClick={handleFilterClick}
      />
      <div className='lessons-cards'>
        <FilteredTasks
          tasks={ReactTasksData}
          completedTasksKey='ReactTasks_completedTasks'
          setCompletedTasks={setCompletedTasks}
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

export default ReactTasks;
