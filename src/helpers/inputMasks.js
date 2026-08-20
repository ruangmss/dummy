const onlyDigits = (value) => value.replace(/\D/g, '');

export const maskLetters = (value) => value.replace(/[^\p{L} '\-]/gu, '');

export const maskState = (value) =>
  value
    .replace(/[^\p{L}]/gu, '')
    .slice(0, 2)
    .toUpperCase();

export const maskPostalCode = (value) => {
  const digits = onlyDigits(value).slice(0, 8);

  return digits.replace(/^(\d{5})(\d)/, '$1-$2');
};

export const maskCardNumber = (value) => {
  const digits = onlyDigits(value).slice(0, 20);

  return digits.replace(/(\d{4})(?=\d)/g, '$1 ');
};

export const maskCardExpiration = (value) => {
  const digits = onlyDigits(value).slice(0, 4);

  return digits.replace(/^(\d{2})(\d)/, '$1/$2');
};

export const maskCvv = (value) => onlyDigits(value).slice(0, 4);
