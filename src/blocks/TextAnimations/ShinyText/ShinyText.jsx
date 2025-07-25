/*
	jsrepo 1.24.0
	Installed from github/davidhdev/react-bits
	7-1-2025
*/

import "./ShinyText.scss";

const ShinyText = ({ text, disabled = false, speed = 5, className = "" }) => {
  const animationDuration = `${speed}s`;

  return (
    <div
      className={`shiny-text ${disabled ? "disabled" : ""} ${className}`}
      style={{ animationDuration }}
    >
      {text}
    </div>
  );
};

export default ShinyText;
