import React from 'react';
import { LOGIN_POST, AUTH_USER_GET, USER_ADD_POST, USER_UPDATE } from '../api/api';
import { useNavigate } from 'react-router-dom';

export const UserContext = React.createContext();

export const UserProvider = ({ children }) => {
  const [data, setData] = React.useState(null);
  const [login, setLogin] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const navigate = useNavigate();

  async function getUser(token) {
    const { url, options } = AUTH_USER_GET(token);
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error('Erro ao validar usuário.');
    }

    const json = await response.json();

    setData(json);
    setLogin(true);
  }

  async function userLogin(username, password) {
    try {
      setError(null);
      setLoading(true);

      const { url, options } = LOGIN_POST(username, password);
      const response = await fetch(url, options);
      const json = await response.json();

      if (!response.ok) {
        throw new Error(json.message);
      }

      localStorage.setItem('token', json.accessToken);

      await getUser(json.accessToken);

      navigate('/');

      return true;
    } catch (error) {
      setError(error.message);
      setLogin(false);
      return false;
    } finally {
      setLoading(false);
    }
  }

  async function autoLogin() {
    const token = localStorage.getItem('token');

    if (!token) {
      setLogin(false);
      return;
    }

    try {
      setError(null);
      setLoading(true);
      await getUser(token);
    } catch (error) {
      userLogout();
    } finally {
      setLoading(false);
    }
  }

  function userLogout() {
    setData(null);
    setError(null);
    setLogin(false);

    localStorage.removeItem('token');

    navigate('/login');
  }

  async function userRegister(user) {
    try {
      setError(null);
      setLoading(true);

      const { url, options } = USER_ADD_POST(user);
      const response = await fetch(url, options);
      const json = await response.json();

      if (!response.ok) {
        throw new Error(json.message);
      }

      navigate('/login');

      return true;
    } catch (error) {
      setError(error.message);
      return false;
    } finally {
      setLoading(false);
    }
  }

  async function userEdition(id, user) {
    try {
      setError(null);
      setLoading(true);

      const { url, options } = USER_UPDATE(id, user);
      const response = await fetch(url, options);
      const json = await response.json();

      if (!response.ok) {
        throw new Error(json.message);
      }

      setData(json);

      navigate('/usuario');

      return true;
    } catch (error) {
      setError(error.message);
      return false;
    } finally {
      setLoading(false);
    }
  }

  React.useEffect(() => {
    autoLogin(); // Assim que o provider é montado, tenta efetuar o login
  }, []);

  return (
    <UserContext.Provider
      value={{
        data,
        login,
        loading,
        error,
        userLogin,
        userRegister,
        userEdition,
        userLogout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
