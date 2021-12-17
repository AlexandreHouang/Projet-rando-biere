// == Import npm
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// == Import

// == Component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// == Export
export default ScrollToTop;
