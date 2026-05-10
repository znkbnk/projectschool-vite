import { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/lessons.css";
import "../styles/lockedOverlay.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProgressBar from "./ProgressBar";
import { Ecommerce } from "../data/EcommerceData";
import { authorsData } from "../data/tasksData";
import FilterSortButtons from "./FilterSortButtons";
import FilteredTasks from "./FilteredTasks";
import MobileMessage from "./MobileMessage";
import { auth } from "../components/firebase";
import { useAuthContext } from "../Login/useAuthContext";

const FREE_LESSON_LIMIT = 3;

function EcommerceLessons() {
  const { subscriptionStatus, isAdmin, isLoading, isLoggedIn } =
    useAuthContext();
  const isSubscribed = subscriptionStatus === "subscribed";
  const [activeFilter, setActiveFilter] = useState("All");
  const [isMobile, setIsMobile] = useState(false);
 const [completedTasks, setCompletedTasks] = useState([]);


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
      const item = localStorage.getItem("Ecommerce_completedTasks");
      const storedTasks = item ? JSON.parse(item) : {};

      setCompletedTasks(
        Object.keys(storedTasks).filter((taskId) => storedTasks[taskId]),
      );
    } catch (err) {
      console.error("Error loading tasks:", err);
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


  if (isMobile) return <MobileMessage />;

  const handleFilterClick = (filterType) => setActiveFilter(filterType);

  const handleDownloadCode = async () => {
    if (!isAdmin && !isSubscribed) {
      toast.info("Upgrade to download the full source code for this project.", {
        position: "top-right",
        autoClose: 5000,
        theme: "dark",
      });
      return;
    }
    try {
      const token = await auth.currentUser?.getIdToken(true);
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/code/ecom-full-code`,
        {
          method: "GET",
          headers: { Authorization: `Bearer ${token}` },
        },
      );
      if (!response.ok) {
        const txt = await response.text();
        throw new Error(`Server ${response.status}: ${txt}`);
      }
      const { url } = await response.json();
      const a = document.createElement("a");
      a.href = url;
      a.download = "ecom-full-code.zip";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      toast.success("Download started!", {
        position: "top-right",
        autoClose: 3000,
        theme: "dark",
      });
    } catch (err) {
      console.error("Download error:", err);
      toast.error("Failed to download code. Try again later.", {
        position: "top-right",
        autoClose: 5000,
        theme: "dark",
      });
    }
  };

  const getAuthorInfo = (authorIndex) =>
    authorsData[authorIndex] || {
      name: "Unknown Author",
      bio: "No information available.",
    };

  if (isLoading) {
    return (
      <>
        <Navbar />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "50vh",
          }}
        >
          <div>Loading...</div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className='header'>
        <h1 className='component-title'>
          Learn React: Build an E-Commerce App
        </h1>
        <p className='header-subtitle'>
          Full-stack shop with cart, checkout, Stripe payments, and admin
          product management.
        </p>
        {!isSubscribed && (
          <div className='access-info-banner'>
            <span className='access-info-icon'>🔓</span>
            <span>
              <strong>First {FREE_LESSON_LIMIT} lessons free</strong> — Upgrade
              to unlock all {Ecommerce.length} lessons with schemas, auth, cart,
              Stripe & deployment
            </span>
            <a href='/pricing' className='access-info-cta'>
              Upgrade →
            </a>
          </div>
        )}
      </div>
     <ProgressBar
  tasks={Ecommerce}
  completedTasks={completedTasks}
/>
      <FilterSortButtons
        filters={["All", "Easy", "Hard", "Completed", "Not Completed"]}
        handleFilterClick={handleFilterClick}
      />
      <div className='download-button-container'>
        <button
          className='getStartedButton'
          onClick={handleDownloadCode}
          aria-label='Download Full Code'
        >
          Download Full Code
        </button>
      </div>
      <div className='lessons-cards'>
        <FilteredTasks
          tasks={Ecommerce}
          completedTasks={completedTasks} // Pass the data
          setCompletedTasks={setCompletedTasks} // Pass the setter function here!
          completedTasksKey='Ecommerce_completedTasks'
          getAuthorInfo={getAuthorInfo}
          showEasy={activeFilter === "Easy"}
          showHard={activeFilter === "Hard"}
          showCompleted={activeFilter === "Completed"}
          showNotCompleted={activeFilter === "Not Completed"}
          showDifficulty={false}
          isSubscribed={isSubscribed || isAdmin}
          isLoggedIn={isLoggedIn}
          freeProjectLimit={FREE_LESSON_LIMIT}
        />
      </div>
      <Footer />
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='dark'
      />
    </>
  );
}

export default EcommerceLessons;
