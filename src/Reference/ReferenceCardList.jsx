import { referenceData } from "../data/referenceData"; 
import "../styles/exercises.css";
import ReferenceCard from "./ReferenceCard";

const ExercisesCardList = () => {
  return (
    <div className='wrapper'>
      {referenceData.map((exercise, index) => (
        <ReferenceCard
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
