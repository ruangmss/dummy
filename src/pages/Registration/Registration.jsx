import React from 'react';
import Input from '../../components/Input/Input';
import './Registration.css';
import Button from '../../components/Button/Button';
import useFetch from '../../hooks/useFetch';
import useForm from '../../hooks/useForm';
import { USER_ADD_POST } from '../../api/api';
import { useNavigate } from 'react-router-dom';
import { ToastContext } from '../../contexts/ToastContext';
import FormError from '../../components/FormError/FormError';

const Registration = () => {
  const { data, request, error, loading } = useFetch();
  const name = useForm();
  const lastName = useForm();
  const username = useForm('user');
  const email = useForm('email');
  const password = useForm('password');
  const passwordConfirmation = useForm();
  const navigate = useNavigate();
  const showToast = React.useContext(ToastContext);
  const differentPasswords = passwordConfirmation.value.length > 0 && password.value !== passwordConfirmation.value;
  const differentPasswordsText = differentPasswords ? 'As senhas não coincidem.' : '';
  const validForm =
    name.valid &&
    lastName.valid &&
    username.valid &&
    email.valid &&
    password.valid &&
    passwordConfirmation.valid &&
    !differentPasswords;

  async function submitForm(event) {
    event.preventDefault();

    if (validForm) {
      const { url, options } = USER_ADD_POST({
        firstName: name.value,
        lastName: lastName.value,
        username: username.value,
        email: email.value,
        password: password.value,
      });
      const { response } = await request(url, options);

      if (response?.ok) {
        showToast('success', 'Cadastro efetuado com sucesso!');
        navigate('/login');
      }
    }
  }

  return (
    <div className="registration-bg container">
      <div className="registration">
        <div className="registration-header">
          <h1>Cadastro</h1>
          <p>
            Nota: a{' '}
            <a href="https://dummyjson.com/" target="_blank" rel="noopener noreferrer">
              DummyJSON
            </a>{' '}
            apenas simula o cadastro e não adiciona novos usuários de forma permanente.
          </p>
        </div>
        <form className="registration-form" onSubmit={submitForm}>
          <div className="registration-inputs">
            <Input
              label="Nome"
              className="form-input"
              fullWidth
              value={name.value}
              onChange={name.onChange}
              onBlur={name.onBlur}
              error={name.error}
            />

            <Input
              label="Sobrenome"
              className="form-input"
              fullWidth
              value={lastName.value}
              onChange={lastName.onChange}
              onBlur={lastName.onBlur}
              error={lastName.error}
            />

            <Input
              label="Usuário"
              className="form-input"
              variant="user"
              fullWidth
              value={username.value}
              onChange={username.onChange}
              onBlur={username.onBlur}
              error={username.error}
            />

            <Input
              label="E-mail"
              className="form-input"
              variant="email"
              fullWidth
              value={email.value}
              onChange={email.onChange}
              onBlur={email.onBlur}
              error={email.error}
            />

            <Input
              label="Senha"
              className="form-input"
              variant="password"
              type="password"
              fullWidth
              value={password.value}
              onChange={password.onChange}
              onBlur={password.onBlur}
              error={password.error}
            />

            <Input
              label="Confirmar Senha"
              className="form-input"
              variant="password"
              type="password"
              fullWidth
              value={passwordConfirmation.value}
              onChange={passwordConfirmation.onChange}
              onBlur={passwordConfirmation.onBlur}
              error={differentPasswordsText || passwordConfirmation.error}
            />
          </div>

          <Button text="Cadastrar" disabled={!validForm || loading} type={loading ? 'loading' : ''} />
        </form>

        <FormError error={error && `Ocorreu um erro no cadastro: ${error}`} />
      </div>
    </div>
  );
};

export default Registration;
