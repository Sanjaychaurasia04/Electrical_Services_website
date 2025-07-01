import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Automatically scrolls to top on route change.
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Only scroll if not already at the top
    if (window.scrollY !== 0) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth', // Optional: 'auto' for instant
      });
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;
