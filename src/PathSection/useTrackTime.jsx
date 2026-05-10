// useTrackTime.js
import { useEffect, useRef } from "react";

const useTrackTime = (localStorageKey) => {
  const startTimeRef = useRef(null);
  const isActiveRef = useRef(true);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        isActiveRef.current = true;
        startTimeRef.current = performance.now();
      } else {
        isActiveRef.current = false;
        if (startTimeRef.current) {
          const endTime = performance.now();
          const timeSpent = Math.round((endTime - startTimeRef.current) / 1000);
          const existingTime = localStorage.getItem(localStorageKey)
            ? parseInt(localStorage.getItem(localStorageKey), 10)
            : 0;
          localStorage.setItem(localStorageKey, (existingTime + timeSpent).toString());
          startTimeRef.current = null;
          window.dispatchEvent(new Event("customStorageChange"));
        }
      }
    };

    // Start timer if page is visible
    if (document.visibilityState === "visible") {
      startTimeRef.current = performance.now();
    }

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      if (startTimeRef.current && isActiveRef.current) {
        const endTime = performance.now();
        const timeSpent = Math.round((endTime - startTimeRef.current) / 1000);
        const existingTime = localStorage.getItem(localStorageKey)
          ? parseInt(localStorage.getItem(localStorageKey), 10)
          : 0;
        localStorage.setItem(localStorageKey, (existingTime + timeSpent).toString());
        window.dispatchEvent(new Event("customStorageChange"));
      }
    };
  }, [localStorageKey]);
};

export default useTrackTime;