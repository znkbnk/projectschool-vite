import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    const sendPageView = (path) => {
      if (window.gtag) {
        window.gtag('config', 'G-7L2NMEJKB6', {
          page_path: path,
        });
      }
    };

    sendPageView(location.pathname + location.search);
  }, [location]);
};

export default usePageTracking;
