import React, { useState } from "react";
import back from "../icon/back.png";
import backHover from "../icon/backHover.png";

function ButtonKembali({ handleBackClick }) {
  const [isHoveredBack, setIsHoveredBack] = useState(false);

  const handleMouseEnterBack = () => {
    setIsHoveredBack(true);
  };
  const handleMouseLeaveBack = () => {
    setIsHoveredBack(false);
  };

  return (
    <img
      src={isHoveredBack ? backHover : back}
      className={`border border-warning rounded rounded-circle m-3 fixed-top ${
        isHoveredBack === false ? "hoveredBack" : ""
      }`}
      alt="Profile"
      width="40"
      height="40"
      onMouseEnter={handleMouseEnterBack}
      onMouseLeave={handleMouseLeaveBack}
      onClick={handleBackClick}
    />
  );
}

export { ButtonKembali };
