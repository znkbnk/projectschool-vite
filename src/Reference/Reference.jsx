import ReferenceCardList from "./ReferenceCardList";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ScrollToTopOnNavigation from "../components/ScrollToTopOnNavigation";

const Exercises = () => {
  return (
    <div>
      <ScrollToTopOnNavigation />
      <Navbar />
      <h1 className='component-title'>Reference</h1>
      <ReferenceCardList />
      <Footer />
    </div>
  );
};

export default Exercises;
