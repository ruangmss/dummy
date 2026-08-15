import React from "react";
import "./Login.css";
import logo from "../../assets/icons/logo.svg";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";
import useForm from "../../hooks/useForm";
import FormError from "../../components/FormError/FormError";
import { ToastContext } from "../../contexts/ToastContext";
import { UserContext } from "../../contexts/UserContext";

const Login = () => {
  const username = useForm("user");
  const password = useForm();

  const validForm = username.valid && password.valid;

  const showToast = React.useContext(ToastContext);
  const { userLogin, error, loading } = React.useContext(UserContext);

  async function submitForm(event) {
    event.preventDefault();

    const { valid: validUsername } = username.validate();
    const { valid: validPassword } = password.validate();

    if (validUsername && validPassword) {
      const success = await userLogin(username.value.trim(), password.value);

      if (success) {
        showToast(
          "success",
          `Bem vindo(a), ${username.value.charAt(0).toUpperCase() + username.value.slice(1)}!`,
        );
      }
    }
  }

  function setData() {
    username.setValue("emilys");
    password.setValue("emilyspass");
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
              error={!username.valid && username.error}
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
              error={!password.valid && password.error}
            />
          </div>

          <div className="login-form-buttons">
            <Link to="/cadastro" className="button secondary">
              Cadastrar-se
            </Link>

            <Button
              text="Login"
              type={loading ? "loading" : ""}
              disabled={!validForm || loading}
            />
          </div>
        </form>

        <hr />

        <div className="login-form-information">
          <p>
            Nota: a{" "}
            <a
              href="https://dummyjson.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              DummyJSON
            </a>{" "}
            apenas simula o cadastro e não adiciona novos usuários de forma
            permanente. Portanto, para fazer login, utilize as credenciais
            abaixo.
          </p>
        </div>

        <button className="login-form-credentials" onClick={setData}>
          Usuário: emilys | Senha: emilyspass
        </button>

        <FormError error={error && `Ocorreu um erro no login: ${error}`} />
      </div>
    </div>
  );
};

export default Login;
