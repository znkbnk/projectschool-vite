import React from "react";
import ExercisesCard from "./ExercisesCard";
import { exercisesData } from "../data/exercisesData";
import "../styles/exercises.css";

const ExercisesCardList = () => {
  return (
    <div className='wrapper'>
      {exercisesData.map((exercise, index) => (
        <ExercisesCard
          key={index}
          img={exercise.img}
          title={exercise.title}
          desc={exercise.desc}
          to={exercise.to}
        />
      ))}
    </div>
  );
};

export default ExercisesCardList;
