import React, { useState, useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import PriceCard from "./PriceCard";
import "../styles/checkout.css";
import { auth } from "../components/firebase";

const PriceCardsList = () => {
  const [isTermsAccepted, setIsTermsAccepted] = useState(false);
  const [isCheckoutLoading, setIsCheckoutLoading] = useState(false);
  const [stripeLoading, setStripeLoading] = useState(false);
  const navigate = useNavigate();

  // Load Stripe only when user clicks paid plan
  const loadStripeAndCheckout = useCallback(async (priceId) => {
    if (!isTermsAccepted) {
      toast.error("Please accept the terms and conditions to proceed.");
      return;
    }

    const user = auth.currentUser;
    if (!user) {
      toast.error("Please log in to proceed with checkout.");
      navigate("/login?redirect=/pricing");
      return;
    }

    if (stripeLoading) return;

    setStripeLoading(true);
    setIsCheckoutLoading(true);

    try {
      const { loadStripe } = await import("@stripe/stripe-js");
      const stripe = await loadStripe(import.meta.env.VITE_STRIPE_KEY);

      if (!stripe) {
        throw new Error("Stripe failed to initialize");
      }

      const { error } = await stripe.redirectToCheckout({
        lineItems: [{ price: priceId, quantity: 1 }],
        mode: "subscription",
        clientReferenceId: user.uid,
        customerEmail: user.email,
        successUrl: `${window.location.origin}/success`,
        cancelUrl: `${window.location.origin}/cancel`,
      });

      if (error) {
        console.error("Stripe checkout error:", error);
        toast.error(error.message || "Checkout failed. Please try again.");
      }
    } catch (error) {
      console.error("Checkout Error:", error);
      toast.error("Failed to process checkout. Please try again.");
    } finally {
      setStripeLoading(false);
      setIsCheckoutLoading(false);
    }
  }, [isTermsAccepted, navigate, stripeLoading]);

  const handleFreeButtonClick = useCallback(() => {
    const user = auth.currentUser;
    navigate(user ? "/exercises" : "/signup");
  }, [navigate]);

  const toggleTerms = useCallback(() => {
    setIsTermsAccepted(prev => !prev);
  }, []);

  // Memoize price data to prevent re-renders
  const priceData = useMemo(() => ({
    free: {
      title: "Free",
      price: "0",
      advantages: [
        "15 React practice projects with full access",
        "9 theory guides with intro content & 2 examples each",
        "3 freelancer project briefs (no walkthroughs)",
       "Music Academy — first 6 lessons (frontend only)",
"E-Commerce — first 3 lessons (setup only)",
        "30 interview questions + 10 quiz questions",
        "24/7 community support",
      ],
    },
    monthly: {
      title: "Monthly",
      price: "14.99",
      priceId: "price_1Pwqdd2NvwaBESkuxTiU3ozx",
      advantages: [
       "All 60+ React projects with detailed steps & source code",
"17 complete guides with all exercises & solutions",
"21 freelancer projects with step-by-step walkthroughs",
"Music Academy — all 52 lessons with full-stack walkthroughs",
"E-Commerce — all 34 lessons with full-stack walkthroughs",
        "265+ interview questions, tasks & coding challenges",
        "New projects & content added monthly",
        "Cancel anytime",
      ],
    },
    annual: {
      title: "Annual",
      price: "100",
      priceId: "price_1PwqmY2NvwaBESkuFDHCkFbd",
      savings: "Save £79.88/year",
      advantages: [
        "Everything in Monthly, plus:",
        "Request custom projects & content",
        "Personalized learning paths",
        "1-on-1 support sessions",
        "Early access to new features",
        "Lifetime access guarantee",
      ],
    },
  }), []);

  return (
    <div>
      <div className='price-cards-container'>
        <PriceCard
          {...priceData.free}
          buttonText='Get Started Free'
          onButtonClick={handleFreeButtonClick}
          featured={false}
        />
        
        <PriceCard
          {...priceData.monthly}
          buttonText='Subscribe Monthly'
          onButtonClick={() => loadStripeAndCheckout(priceData.monthly.priceId)}
          isLoading={isCheckoutLoading}
          featured={true}
        />
        
        <PriceCard
          {...priceData.annual}
          buttonText='Subscribe Annually'
          onButtonClick={() => loadStripeAndCheckout(priceData.annual.priceId)}
          isLoading={isCheckoutLoading}
          featured={false}
          badge={priceData.annual.savings}
        />
      </div>

      <div className='terms-links'>
        <label className='terms-label'>
          <input
            className='terms-input'
            type='checkbox'
            checked={isTermsAccepted}
            onChange={toggleTerms}
            aria-label='Accept terms and conditions'
          />
          <span>
            I have read and agree to the{" "}
            <a
              className='touch-target'
              href='/terms'
              target='_blank'
              rel='noopener noreferrer'
            >
              Terms and Conditions
            </a>{" "}
            and{" "}
            <a
              className='touch-target'
              href='/privacy'
              target='_blank'
              rel='noopener noreferrer'
            >
              Privacy Policy
            </a>
          </span>
        </label>
        <p className='pricing-guarantee'>
          ✓ Cancel anytime • ✓ No hidden fees • ✓ Instant access
        </p>
      </div>
    </div>
  );
};

export default React.memo(PriceCardsList);