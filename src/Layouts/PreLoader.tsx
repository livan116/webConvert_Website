import React, { useEffect, useState } from "react";

const Preloader: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`preloader ${!isLoading ? "fade-out" : "fade-in"}`}>
      <div className="loading-container">
        <div className="loading"></div>
        <div id="loading-icon">
          <img src="../assets/img/logo/preloader.png" alt="Loading Icon" />
        </div>
      </div>
    </div>
  );
};

export default Preloader;
