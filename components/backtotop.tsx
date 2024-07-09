// components/BackToTop.js
import { useEffect, useState } from 'react';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    const scrollDuration = 400; // Duration of the scroll in ms
    const scrollStep = -window.scrollY / (scrollDuration / 15); // Calculate the step size

    const scrollInterval = setInterval(() => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 15);
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="back-to-top">
      {isVisible && (
        <button onClick={scrollToTop} className="back-to-top-button">
            <div className="">
                ← Back to Top
            </div>
          
        </button>
      )}
      <style jsx>{`
        .back-to-top {
          position: fixed;
          bottom: 40px;
          right: 10px;
          z-index: 1000;
        }
        .back-to-top-button {
          padding: 10px 20px;
          font-size: 14px;
          font-weight: 600
          background-color: transparent;
          cursor: pointer;
          writing-mode: vertical-rl;
          text-orientation: mixed;
          transition: background-color 0.3s ease, transform 0.3s ease;
        }
        .back-to-top-button:hover {
          font-size: 14px;
          transform: scale(1.05);
        }
      `}</style>
    </div>
  );
};

export default BackToTop;
