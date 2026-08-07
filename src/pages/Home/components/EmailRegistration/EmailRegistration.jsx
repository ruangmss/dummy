import React from 'react';
import './EmailRegistration.css';
import Input from '../../../../components/Input/Input';
import Button from '../../../../components/Button/Button';
import { ToastContext } from '../../../../contexts/ToastContext';
import useForm from '../../../../hooks/useForm';

const EmailRegistration = () => {
  const showToast = React.useContext(ToastContext);
  const email = useForm('email');

  function showDummyValidation(event) {
    event.preventDefault();
    const validation = email.validate();

    if (!validation.valid) {
      showToast('fail', validation.message);
      return;
    }

    showToast('success', 'Cadastro efetuado com sucesso!');
    email.reset();
  }

  return (
    <form className="container" onSubmit={showDummyValidation}>
      <div className="email-registration">
        <div className="email-registration-left">
          <h2>Ofertas exclusivas no e-mail</h2>
          <p>Cadastre-se para receber notificações acerca de ofertas e cupons.</p>
        </div>

        <div className="email-registration-right">
          <Input
            type="email"
            placeholder="seu@email.com"
            required
            value={email.value}
            onChange={email.onChange}
            onBlur={email.onBlur}
          />
          <Button text="Cadastrar-me" type="secondary email-registration-button" disabled={email.value.length < 1} />
        </div>
      </div>
    </form>
  );
};

export default EmailRegistration;
