import React from "react";
import ExercisesCardList from "./ExercisesCardList";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ScrollToTopOnNavigation from "../components/ScrollToTopOnNavigation";

const Exercises = () => {
  return (
    <div>
      <ScrollToTopOnNavigation />
      <Navbar />
      <div className='header'>
        <h1 className='component-title'>React Exercises & Projects</h1>
        <p className='header-subtitle'>
          Choose your learning path — from guided projects to live coding
          sessions.
        </p>
      </div>
      <ExercisesCardList />
      <Footer />
    </div>
  );
};

export default Exercises;
