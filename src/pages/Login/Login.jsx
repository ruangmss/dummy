import React from 'react';
import './Login.css';
import logo from '../../assets/icons/logo.svg';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import { Link, useNavigate } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import { LOGIN_POST } from '../../api/api';
import useFetch from '../../hooks/useFetch';
import FormError from '../../components/FormError/FormError';
import { ToastContext } from '../../contexts/ToastContext';

const Login = () => {
  const username = useForm('user');
  const password = useForm();
  const { data, error, request, loading } = useFetch();
  const validForm = username.valid && password.valid;
  const navigate = useNavigate();
  const showToast = React.useContext(ToastContext);

  async function submitForm(event) {
    event.preventDefault();

    const { valid: validUsername } = username.validate();
    const { valid: validPassword } = password.validate();

    if (validUsername && validPassword) {
      const { url, options } = LOGIN_POST(username.value.trim(), password.value);
      const { response } = await request(url, options);

      if (response?.ok) {
        showToast('success', `Bem vindo(a), ${username.value.charAt(0).toUpperCase() + username.value.slice(1)}!`);
        navigate('/');
      }
    }
  }

  return (
    <div className="container login-bg">
      <div className="login">
        <div className="login-header">
          <div className="login-header-icon">
            <img src={logo} alt="Logo Dummy" />
          </div>

          <div className="login-header-content">
            <h1>Fazer login na Dummy</h1>
            <span>Acesse sua conta para ver seus dados</span>
          </div>
        </div>

        <form className="login-form" onSubmit={submitForm}>
          <div className="login-form-inputs">
            <Input
              className="form-input"
              label="Usuário"
              variant="user"
              placeholder="Insira seu usuário"
              fullWidth
              value={username.value}
              onChange={username.onChange}
              onBlur={username.onBlur}
              error={username.error}
            />
            <Input
              className="form-input"
              label="Senha"
              variant="password"
              type="password"
              placeholder="••••••••"
              fullWidth
              value={password.value}
              onChange={password.onChange}
              onBlur={password.onBlur}
              error={password.error}
            />
          </div>

          <div className="login-form-buttons">
            <Link to="/cadastro" className="button secondary">
              Cadastrar-se
            </Link>
            <Button text="Login" type={loading ? 'loading' : ''} disabled={!validForm} />
          </div>
        </form>

        <FormError error={error && `Ocorreu um erro no login: ${error}`} />
      </div>
    </div>
  );
};

export default Login;
