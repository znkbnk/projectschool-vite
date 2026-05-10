import { AuthContext } from "./AuthContext";
import useAuth from "./useAuth";

export const AuthProvider = ({ children }) => {
  const authLogic = useAuth();

  return (
    <AuthContext.Provider value={authLogic}>
      {children}
    </AuthContext.Provider>
  );
};