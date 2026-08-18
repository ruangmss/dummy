import React from 'react';

const types = {
  email: {
    regex: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i,
    message: 'Por favor, insira um e-mail válido.',
  },

  password: {
    regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9\s]).{8,}$/,
    message:
      'Por favor, insira uma senha forte: caracteres minúsculos e maiúsculos, caractere especial, dígito e ao menos 8 caracteres.',
  },

  user: {
    regex: /^\S+$/,
    message: 'Por favor, remova os espaços inseridos.',
  },

  fullName: {
    regex: /^\p{L}+(?:[ '-]\p{L}+)+$/u,
    message: 'Por favor, insira o nome e o sobrenome.',
  },

  street: {
    regex: /^(?=.{3,100}$)(?=.*\p{L})[\p{L}\s.,ºª°'#/-]+$/u,
    message: 'Por favor, insira um logradouro válido.',
  },

  city: {
    regex: /^\p{L}+(?:[ '-]\p{L}+)*$/u,
    message: 'Por favor, insira uma cidade válida.',
  },

  state: {
    regex: /^(?:AC|AL|AP|AM|BA|CE|DF|ES|GO|MA|MT|MS|MG|PA|PB|PR|PE|PI|RJ|RN|RS|RO|RR|SC|SP|SE|TO)$/i,
    message: 'Por favor, insira uma UF válida. Exemplo: SP.',
  },

  postalCode: {
    regex: /^\d{5}-?\d{3}$/,
    message: 'Por favor, insira um CEP válido.',
  },

  cardNumber: {
    regex: /^(?:\d[ -]?){12,18}\d$/,
    message: 'Por favor, insira um número de cartão válido.',
  },

  cardName: {
    regex: /^\p{L}+(?:[ '-]\p{L}+)+$/u,
    message: 'Por favor, insira o nome completo como está no cartão.',
  },

  cardExpiration: {
    regex: /^(?:0[1-9]|1[0-2])\/\d{2}$/,
    message: 'Por favor, insira a validade no formato MM/AA.',
  },

  cardCvv: {
    regex: /^\d{3,4}$/,
    message: 'Por favor, insira um CVV válido.',
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
    setValue,
  };
};

export default useForm;
