import React from 'react';
import './EmailRegistration.css';
import Input from '../../../../components/Input/Input';
import Button from '../../../../components/Button/Button';
import { ToastContext } from '../../../../contexts/ToastContext';

const EmailRegistration = () => {
  const showToast = React.useContext(ToastContext);

  function showDummyValidation(event) {
    event.preventDefault();
    showToast('success', 'Cadastro efetuado com sucesso!');
    event.target.reset();
  }

  return (
    <form className="container" onSubmit={showDummyValidation}>
      <div className="email-registration">
        <div className="email-registration-left">
          <h2>Ofertas exclusivas no e-mail</h2>
          <p>Cadastre-se para receber notificações acerca de ofertas e cupons.</p>
        </div>

        <div className="email-registration-right">
          <Input placeholder="seu@email.com" type="email" />
          <Button text="Cadastrar-me" type="secondary email-registration-button" />
        </div>
      </div>
    </form>
  );
};

export default EmailRegistration;
