import { useEffect } from "react";
import GuidesCardList from "./GuidesCardList";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ScrollToTopOnNavigation from "../components/ScrollToTopOnNavigation";
import { prefetchAllGuides } from "../utils/guidePrefetch";

const Guides = () => {
  // Prefetch ALL guide chunks 1s after this page renders
  // By the time the user picks a guide, it's already cached
  useEffect(() => {
    const timer = setTimeout(() => {
      prefetchAllGuides();
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <ScrollToTopOnNavigation />
      <Navbar />
      <div className="header">
        <h1 className="component-title">Learn React Fundamentals</h1>
        <p className="header-subtitle">
          8 comprehensive guides with 400+ exercises — master hooks, routing,
          and data fetching step by step.
        </p>
      </div>
      <GuidesCardList />
      <Footer />
    </div>
  );
};

export default Guides;