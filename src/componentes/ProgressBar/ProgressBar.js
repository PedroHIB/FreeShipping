import React from "react";
import "./style.css";

function ProgressBar({ count, goal }) {
  const progress = (count / goal) * 100;
  const progressLabel = progress.toFixed(2);

  return (
    <div className="progress-bar">
      <span style={{ width: `${progress}%` }}>{`${progressLabel}%`}</span>
    </div>
  );
}

export default ProgressBar;
