import React from 'react';
import './Input.css';
import EyeIcon from '../../assets/icons/eye.svg?react';
import ClosedEyeIcon from '../../assets/icons/closed-eye.svg?react';
import LockIcon from '../../assets/icons/lock.svg?react';
import MailIcon from '../../assets/icons/mail.svg?react';
import SearchIcon from '../../assets/icons/search.svg?react';
import UserIcon from '../../assets/icons/user.svg?react';

const variantIcons = {
  email: MailIcon,
  password: LockIcon,
  user: UserIcon,
};

const Input = ({ ref, className = '', fullWidth = false, icon, id, label, type = 'text', variant, ...inputProps }) => {
  const [passwordVisible, setPasswordVisible] = React.useState(false);
  const generatedId = React.useId();

  const resolvedVariant = variant ?? (type === 'email' || type === 'password' ? type : 'text');
  const isPassword = resolvedVariant === 'password';
  const isSearch = resolvedVariant === 'search';

  const Icon = icon ?? variantIcons[resolvedVariant];
  const inputType = isPassword && passwordVisible ? 'text' : isSearch ? 'search' : type;
  const inputId = id ?? (label ? generatedId : undefined);

  return (
    <div className={`input-container input-${resolvedVariant}-container${fullWidth ? ' input-full-width' : ''}`}>
      {label && (
        <label className="input-label" htmlFor={inputId}>
          {label}
        </label>
      )}

      <div className="input-content">
        {Icon && (
          <span className="input-icon">
            <Icon />
          </span>
        )}

        <input
          {...inputProps}
          ref={ref}
          id={inputId}
          type={inputType}
          className={`input input-${resolvedVariant} ${className}`.trim()}
        />

        {isPassword && (
          <button
            type="button"
            className="input-password-button"
            onClick={() => setPasswordVisible((visible) => !visible)}
          >
            {passwordVisible ? <EyeIcon /> : <ClosedEyeIcon />}
          </button>
        )}

        {isSearch && (
          <button type="submit" className="input-search-button">
            <SearchIcon />
          </button>
        )}
      </div>
    </div>
  );
};

export default Input;
