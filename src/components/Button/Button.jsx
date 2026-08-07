import React from 'react';
import './Button.css';

const Button = ({ type, text, disabled }) => {
  return (
    <button className={`button ${type}`} disabled={disabled}>
      {text}
    </button>
  );
};

export default Button;
