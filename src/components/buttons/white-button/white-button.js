import React from "react";
import "./white-button.css";

const STYLES = ["btn--primary", "btn--outline", "btn--outline-variant-item"];

const SIZES = ["btn--medium", "btn--large", 'btn--medium-variant-item'];

export const WhiteButton = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
  );
};
