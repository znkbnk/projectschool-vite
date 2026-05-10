import ExercisesCard from "./ExercisesCard";
import { workshopListData } from "../data/workshopListData";
import "../styles/exercises.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTopOnNavigation from "../components/ScrollToTopOnNavigation";

const WorkshopList = () => {
  return (
    <div>
      <ScrollToTopOnNavigation />

      <Navbar />
      <div className='header'>
        <h1 className='component-title'>Learn React by Building with Me</h1>
        <p className='header-subtitle'>
          Watch full projects built from scratch — see my thought process,
          debugging, and best practices in action.
        </p>
      </div>

      <div className='wrapper'>
        {workshopListData.map((exercise, index) => (
          <ExercisesCard
            key={index}
            img={exercise.img}
            title={exercise.title}
            desc={exercise.desc}
            to={exercise.to}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default WorkshopList;
