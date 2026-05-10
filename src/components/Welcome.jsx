import Section1 from "./Section1";
import Navbar from "./Navbar";
import Footer from "./Footer";
// Change this line:
import { useAuthContext } from "../Login/useAuthContext";
import ScrollToTopOnNavigation from "./ScrollToTopOnNavigation";

const Welcome = () => {
  const { isLoggedIn } = useAuthContext();
  return (
    <div
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <ScrollToTopOnNavigation />
      <Navbar />
      <Section1 isLoggedIn={isLoggedIn} />
      <Footer />
    </div>
  );
};

export default Welcome;
