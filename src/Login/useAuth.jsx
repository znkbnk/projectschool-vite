import {
  useEffect,
  useState,
  useRef,
  useCallback,
} from "react";
import { auth } from "../components/firebase";

const STORAGE_KEY = "userAuthData";

const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [subscriptionStatus, setSubscriptionStatus] = useState("free");
  
  const [isLoading, setIsLoading] = useState(() => {
    try {
      if (typeof window === "undefined") return true;
      const item = sessionStorage.getItem(STORAGE_KEY);
      return !item;
    } catch {
      return true;
    }
  });

  const [error, setError] = useState(null);
  const isMountedRef = useRef(false);
  const fetchAbortControllerRef = useRef(null);

  const saveToStorage = (status, admin) => {
    sessionStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        subscriptionStatus: status,
        isAdmin: admin,
        timestamp: Date.now(),
      })
    );
  };

  const loadFromStorage = useCallback(() => {
    try {
      const item = sessionStorage.getItem(STORAGE_KEY);
      if (!item) return null;
      const data = JSON.parse(item);
      // Expire cache after 1 hour
      if (Date.now() - data.timestamp > 60 * 60 * 1000) {
        sessionStorage.removeItem(STORAGE_KEY);
        return null;
      }
      return data;
    } catch {
      sessionStorage.removeItem(STORAGE_KEY);
      return null;
    }
  }, []);

  const clearAuthState = useCallback(() => {
    sessionStorage.removeItem(STORAGE_KEY);
    setIsLoggedIn(false);
    setIsAdmin(false);
    setUserEmail("");
    setSubscriptionStatus("free");
    setError(null);
  }, []);

  const fetchUserData = useCallback(
    async (user, force = false) => {
      if (!isMountedRef.current) return;

      if (fetchAbortControllerRef.current) {
        fetchAbortControllerRef.current.abort();
      }

      const controller = new AbortController();
      fetchAbortControllerRef.current = controller;
      const { signal } = controller;

      if (!force) {
        const cached = loadFromStorage();
        if (cached) {
          setSubscriptionStatus(cached.subscriptionStatus);
          setIsAdmin(cached.isAdmin);
          setIsLoading(false);
          return;
        }
      }

      const timeoutId = setTimeout(() => controller.abort(), 10000);

      try {
        const idToken = await user.getIdToken();
        const apiUrl = `${import.meta.env.VITE_API_URL}/api/users/${user.uid}/subscription-status`;

        const response = await fetch(apiUrl, {
          signal,
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${idToken}`,
          },
        });

        clearTimeout(timeoutId);

        if (!response.ok) {
          throw new Error(`API Error: ${response.status}`);
        }

        const data = await response.json();
        const normalizedStatus = (data.subscriptionStatus || "free").toLowerCase();
        const isAdminUser = data.isAdmin === true;

        setSubscriptionStatus(normalizedStatus);
        setIsAdmin(isAdminUser);
        saveToStorage(normalizedStatus, isAdminUser);
        setError(null);
      } catch (err) {
        clearTimeout(timeoutId);
        if (err.name === "AbortError") return;

        const cached = loadFromStorage();
        if (cached) {
          setSubscriptionStatus(cached.subscriptionStatus);
          setIsAdmin(cached.isAdmin);
        } else {
          setSubscriptionStatus("free");
          setIsAdmin(false);
        }
        setError("Failed to load subscription info");
      } finally {
        if (isMountedRef.current) {
          setIsLoading(false);
        }
        if (fetchAbortControllerRef.current === controller) {
          fetchAbortControllerRef.current = null;
        }
      }
    },
    [loadFromStorage]
  );

  const refreshUserData = useCallback(async () => {
    const user = auth.currentUser;
    if (user && isMountedRef.current) {
      await fetchUserData(user, true);
    }
  }, [fetchUserData]);

  useEffect(() => {
    isMountedRef.current = true;

    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (!isMountedRef.current) return;

      if (!user) {
        clearAuthState();
        setIsLoading(false);
        return;
      }

      setIsLoggedIn(true);
      setUserEmail(user.email || "");
      setError(null);
      await fetchUserData(user);
    });

    return () => {
      isMountedRef.current = false;
      unsubscribe();
      if (fetchAbortControllerRef.current) {
        fetchAbortControllerRef.current.abort();
      }
    };
  }, [fetchUserData, clearAuthState]);

  return {
    isLoggedIn,
    isAdmin,
    userEmail,
    subscriptionStatus,
    isLoading,
    error,
    refreshUserData,
  };
};

export default useAuth;