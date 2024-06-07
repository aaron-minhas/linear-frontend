'use client'

import { useEffect, useState } from "react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show the button if user scrolls down past 500px
      window.scrollY > 500 ? setIsVisible(true) : setIsVisible(false);
    };

    // Listen for scroll events
    window.addEventListener("scroll", toggleVisibility);

    // Clear the listener on component unmount
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // Scroll to top smoothly
  const scrollToTop = () => {
    isVisible &&
      window.scrollTo({
        top: 0,
        behavior: "smooth", // Smooth animation
      });
  };

  return (
    <button
      className={`fixed bottom-10 right-10 px-4 py-2 rounded-full ${
        isVisible ? 'bg-blue-500 text-white hover:bg-blue-700' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
      }`}
      onClick={scrollToTop}
    >
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 11l7-7 7 7" />
      </svg>
    </button>
    
  );
};

export default ScrollToTopButton;
