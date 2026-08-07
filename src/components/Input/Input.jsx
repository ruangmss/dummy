import React from 'react';
import './Input.css';
import Eye from '../../assets/icons/eye.svg?react';
import ClosedEye from '../../assets/icons/closed-eye.svg?react';
import Search from '../../assets/icons/search.svg?react';

const Input = ({ className = '', placeholder, type = 'text', value, onChange }) => {
  const [visible, setVisible] = React.useState(false);

  if (className === 'search') {
    return (
      <div className="input-wrapper">
        <input type={type} value={value} onChange={onChange} className="input search" placeholder={placeholder} />

        <button type="submit" className="search-button" aria-label="Buscar">
          <Search />
        </button>
      </div>
    );
  }

  if (type !== 'password') {
    return (
      <input type={type} value={value} onChange={onChange} className={`input ${className}`} placeholder={placeholder} />
    );
  }

  return (
    <div className="input-wrapper">
      <input
        className={`input password`}
        placeholder={placeholder}
        type={visible ? 'text' : 'password'}
        value={value}
        onChange={onChange}
      />

      <button type="button" className="visibility-button" onClick={() => setVisible((visible) => !visible)}>
        {visible ? <Eye /> : <ClosedEye />}
      </button>
    </div>
  );
};

export default Input;
