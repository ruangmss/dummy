import React from 'react';
import './Button.css';

const Button = ({ type, text, disabled, onClick }) => {
  return (
    <button className={`button ${type}`} disabled={disabled} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
