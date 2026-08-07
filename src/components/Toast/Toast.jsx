import React from 'react';
import './Toast.css';

const Toast = ({ type, text }) => {
  return (
    <div className={`toast ${type}`}>
      <span>{text}</span>
    </div>
  );
};

export default Toast;
