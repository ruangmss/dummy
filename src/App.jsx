import React from 'react';
import ReactDOM from 'react-dom/client';
import Button from './components/Button/Button';

const App = () => {
  return (
    <div>
      <Button text="Loading" className={''} disabled={true} />
    </div>
  );
};

export default App;
