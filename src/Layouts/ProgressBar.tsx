import React, { useEffect, useRef, useState } from "react";
// import './ProgressBar.css'; // Make sure to create a CSS file for your styles

const ProgressBar: React.FC = () => {
  const progressPathRef = useRef<SVGPathElement | null>(null);
  const [isActive, setIsActive] = useState<boolean>(false);

  useEffect(() => {
    const progressPath = progressPathRef.current;
    if (!progressPath) return;

    const pathLength = progressPath.getTotalLength();
    progressPath.style.transition = "none";
    progressPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
    progressPath.style.strokeDashoffset = `${pathLength}`;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = "stroke-dashoffset 10ms linear";

    const updateProgress = () => {
      const scroll = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const progress = pathLength - (scroll * pathLength) / height;
      progressPath.style.strokeDashoffset = `${progress}`;
    };

    const handleScroll = () => {
      updateProgress();
      setIsActive(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    updateProgress();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`progress-wrap ${isActive ? "active-progress" : ""}`}
      onClick={handleClick}
    >
      <svg width="56" height="56" viewBox="0 0 100 100">
        <path
          ref={progressPathRef}
          d="M50,1 a49,49 0 1,1 0,98 a49,49 0 1,1 0,-98"
          stroke="black"
          strokeWidth="3"
          fill="none"
        />
      </svg>
    </div>
  );
};

export default ProgressBar;
