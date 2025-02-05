import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

const Button = ({ onClick, children, type = "button", disabled = false }) => {
  return (
    <button
      type={type}
      className={`button-root`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  disabled: PropTypes.bool,
};

export default Button;
