import { Navigate } from "react-router-dom";
import { useAuthContext } from "../Login/useAuthContext";

/**
 * Wraps any page that requires an active subscription.
 * Redirects to the parent section if the user isn't subscribed.
 *
 * Usage in your router:
 *   <Route path="/interview/interview-tasks"
 *     element={<RequireSubscription redirectTo="/interview"><InterviewTasks /></RequireSubscription>}
 *   />
 */
const RequireSubscription = ({ children, redirectTo = "/" }) => {
  const { subscriptionStatus, isLoading: loading } = useAuthContext();
  const isSubscribed = subscriptionStatus === "subscribed";

  // Don't redirect while auth is still loading
  if (loading) {
    return null; // or a spinner if you prefer
  }

  if (!isSubscribed) {
    return <Navigate to={redirectTo} replace />;
  }

  return children;
};

export default RequireSubscription;
