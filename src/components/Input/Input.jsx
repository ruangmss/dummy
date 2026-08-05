import React from 'react';
import './Input.css';
import Eye from '../../assets/icons/eye.svg?react';
import ClosedEye from '../../assets/icons/closed-eye.svg?react';

const Input = ({ className = '', placeholder, type = 'text' }) => {
  const [value, setValue] = React.useState('');
  const [visible, setVisible] = React.useState(false);

  function changeValue({ target }) {
    setValue(target.value);
  }

  if (type !== 'password') {
    return (
      <input
        type={type}
        value={value}
        onChange={changeValue}
        className={`input ${className}`}
        placeholder={placeholder}
      />
    );
  }

  return (
    <div className="input-wrapper">
      <input
        className={`input password`}
        placeholder={placeholder}
        type={visible ? 'text' : 'password'}
        value={value}
        onChange={changeValue}
      />

      <button type="button" className="visibility-button" onClick={() => setVisible((visible) => !visible)}>
        {visible ? <Eye /> : <ClosedEye />}
      </button>
    </div>
  );
};

export default Input;
