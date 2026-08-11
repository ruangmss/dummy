import fail from '../../assets/icons/fail.svg';
import './Error.css';

const Error = ({ error }) => {
  return (
    <div className="error">
      <div className="error-icon">
        <img src={fail} alt="Ícone de erro" />
      </div>

      <div className="error-content">
        <strong>Ops! Algo deu errado...</strong>
        <p>{error}</p>
      </div>
    </div>
  );
};

export default Error;
