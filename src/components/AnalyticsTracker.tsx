import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga4";

let isGAInitialized = false;

const AnalyticsTracker = () => {
  const location = useLocation();

  useEffect(() => {
    const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;
    console.log("[GA4] Measurement ID from env:", measurementId);
    
    if (measurementId && !isGAInitialized) {
      console.log("[GA4] Initializing GA4 with ID:", measurementId);
      ReactGA.initialize(measurementId);
      isGAInitialized = true;
    }

    if (isGAInitialized) {
      console.log("[GA4] Sending pageview for:", location.pathname + location.search);
      ReactGA.send({
        hitType: "pageview",
        page: location.pathname + location.search,
      });
    } else {
      console.warn("[GA4] GA4 not initialized. Missing VITE_GA_MEASUREMENT_ID?");
    }
  }, [location]);

  return null;
};

export default AnalyticsTracker;
