import React from 'react';
import Toast from '../components/Toast/Toast';

export const ToastContext = React.createContext();

export const ToastProvider = ({ children }) => {
  const [toast, setToast] = React.useState(null);
  const timeoutRef = React.useRef(null);

  function showToast(type, text) {
    clearInterval(timeoutRef.current);

    setToast({ type, text }); // Usa um objeto para ser possível passar diversos atributos

    timeoutRef.current = setTimeout(() => {
      setToast(null);
    }, 3000);
  }

  return (
    <ToastContext.Provider value={showToast}>
      {children}
      {toast && <Toast type={toast.type} text={toast.text} />}
    </ToastContext.Provider>
  );
};
