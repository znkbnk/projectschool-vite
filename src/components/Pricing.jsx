import Navbar from "./Navbar";
import Checkout from "../Stripe/Checkout";
import "../styles/checkout.css";

function Pricing() {
  return (
    <div>
      <Navbar />
      <Checkout />
    </div>
  );
}

export default Pricing;
