import './Spinner.css';

const Spinner = () => {
  return (
    <div className="spinner-container" role="status" aria-label="Carregando">
      <span className="spinner" />
    </div>
  );
};

export default Spinner;
