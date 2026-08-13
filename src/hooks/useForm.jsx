import React from 'react';

const types = {
  email: {
    regex: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i,
    message: 'Por favor, insira um e-mail válido.',
  },

  password: {
    regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/,
    message:
      'Por favor, insira uma senha forte: caracteres minúsculos e maiúsculos, caracteres especiais, dígitos e ao menos 8 caracteres.',
  },

  user: {
    regex: /^\S+$/,
    message: 'Por favor, remova os espaços inseridos.',
  },
};

const useForm = (type) => {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(null);

  function getValidation(currentValue = value) {
    if (type === false) {
      return {
        valid: true,
        message: null,
      };
    }

    if (currentValue.length === 0) {
      return {
        valid: false,
        message: 'Por favor, preencha este campo.',
      };
    }

    if (types[type] && !types[type].regex.test(currentValue)) {
      return {
        valid: false,
        message: types[type].message,
      };
    }

    return {
      valid: true,
      message: null,
    };
  }

  function validate(currentValue = value) {
    const validation = getValidation(currentValue);

    setError(validation.message);

    return validation;
  }

  function onChange({ target }) {
    setValue(target.value);

    if (error) {
      setError(getValidation(target.value).message); // Valida o input enquanto houver erro
    }
  }

  function onBlur() {
    validate();
  }

  function reset() {
    setValue('');
    setError(null);
  }

  const valid = getValidation().valid;

  return {
    value,
    valid,
    error,
    onChange,
    onBlur,
    validate,
    reset,
  };
};

export default useForm;
