import './FormError.css';
import FailIcon from '../../assets/icons/fail.svg?react';

const FormError = ({ error }) => {
  if (!error) return null;

  return (
    <div className="form-error">
      <FailIcon />
      <p>{error}</p>
    </div>
  );
};

export default FormError;
