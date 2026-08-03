import React from 'react';
import './Button.css';

const Button = ({ text, disabled, className }) => {
  return (
    <button className={`button ${className}`} disabled={disabled}>
      {text}
    </button>
  );
};

export default Button;
