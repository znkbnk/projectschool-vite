import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../Login/useAuthContext";

const GuideAccessGate = ({  children }) => {
  const { isLoggedIn, subscriptionStatus, isLoading } = useAuthContext();
  const isSubscribed = subscriptionStatus?.toLowerCase() === "subscribed";
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && !isSubscribed) {
      navigate(isLoggedIn ? "/pricing" : "/signup");
    }
  }, [isLoading, isSubscribed, isLoggedIn, navigate]);

  if (isLoading || !isSubscribed) return null;

  return children;
};

export default GuideAccessGate;
