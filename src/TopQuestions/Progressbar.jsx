import React, { useState, useEffect } from "react";
import "./topq.css";

function Progressbar({ progress }) {
  const [progressValue, setProgressValue] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setProgressValue(progress);
    }, 10);
  }, []);

  return (
    <div className="progress-container">
      <div
        className="progressbar"
        role="progressbar"
        aria-valuenow={progress}
        aria-valuemax="100"
        aria-valuemin="0"
        style={{
          //   width: `${progress}%`,
          transform: `translateX(${progressValue - 100}%)`,
          color: progress > 5 ? "white" : "black",
        }}
      >
        {progress}%
      </div>
    </div>
  );
}

export default Progressbar;
