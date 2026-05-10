import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { auth } from "../components/firebase";

const useCheckout = () => {
  const [isTermsAccepted, setIsTermsAccepted] = useState(false);
  const [isCheckoutLoading, setIsCheckoutLoading] = useState(false);
  const navigate = useNavigate();

  const handleCheckout = async (priceId) => {
    if (!isTermsAccepted) {
      toast.error("Please accept the terms and conditions to proceed.");
      return;
    }

    const user = auth.currentUser;
    if (!user) {
      toast.error("Please log in to proceed with checkout.");
      navigate("/login");
      return;
    }

    setIsCheckoutLoading(true);

    try {
      // Stripe only loads here — when user actually clicks the button
      const { loadStripe } = await import("@stripe/stripe-js");
      const stripe = await loadStripe(import.meta.env.VITE_STRIPE_KEY);

      if (!stripe) {
        toast.error("Failed to load payment processor. Please try again.");
        return;
      }

      const { error } = await stripe.redirectToCheckout({
        lineItems: [{ price: priceId, quantity: 1 }],
        mode: "subscription",
        clientReferenceId: user.uid,
        successUrl: `${window.location.origin}/success`,
        cancelUrl: `${window.location.origin}/cancel`,
      });

      if (error) {
        toast.error("There was an error with the checkout. Please try again.");
        console.error("Checkout error:", error.message);
      }
    } catch (error) {
      toast.error("Checkout process failed. Please try again.");
      console.error("Checkout error:", error);
    } finally {
      setIsCheckoutLoading(false);
    }
  };

  const handleFreeButtonClick = () => {
    const user = auth.currentUser;
    if (user) {
      navigate("/exercises");
    } else {
      navigate("/signup");
    }
  };

  return {
    isTermsAccepted,
    setIsTermsAccepted,
    isCheckoutLoading,
    handleCheckout,
    handleFreeButtonClick,
  };
};

export default useCheckout;