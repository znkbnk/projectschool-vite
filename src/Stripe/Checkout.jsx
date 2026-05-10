import "../styles/checkout.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PriceCardsList from "./PriceCardsList";
import ScrollToTopOnNavigation from "../components/ScrollToTopOnNavigation";

const Checkout = () => {
  return (
    <div>
      <ScrollToTopOnNavigation />
      <Navbar />
      <div className='header'>
        <h1 className='component-title'>Simple, Transparent Pricing</h1>
        <p className='header-subtitle'>
          Master React through 60+ hands-on projects, real freelancer briefs,
          and full-stack apps. Start free, upgrade to unlock everything.
        </p>
      </div>

      <PriceCardsList />
      <Footer />
    </div>
  );
};

export default Checkout;