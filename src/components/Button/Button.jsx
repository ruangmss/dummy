import React from 'react';
import './Button.css';

const Button = ({ type = '', text, disabled, onClick, className = '' }) => {
  return (
    <button className={`button ${type} ${className}`.trim()} disabled={disabled} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
