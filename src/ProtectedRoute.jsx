import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children, isLoggedIn, isAdmin, isLoading }) => {
  const location = useLocation();

  // Show loading state while auth is being determined
  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <div>Loading...</div>
      </div>
    );
  }

  // If user is not logged in, redirect to login with return path
  if (!isLoggedIn && !isAdmin) {
    return <Navigate to={`/login?redirect=${location.pathname}`} replace />;
  }

  // User is authenticated (either regular user or admin), render protected content
  return children;
};

export default ProtectedRoute;
