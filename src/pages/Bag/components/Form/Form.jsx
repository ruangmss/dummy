import React from 'react';
import Input from '../../../../components/Input/Input';
import useForm from '../../../../hooks/useForm';
import './Form.css';

const Form = () => {
  const fullName = useForm('fullName');
  const email = useForm('email');
  const street = useForm('street');
  const city = useForm('city');
  const state = useForm('state');
  const postalCode = useForm('postalCode');
  const cardNumber = useForm('cardNumber');
  const cardName = useForm('cardName');
  const cardExpiration = useForm('cardExpiration');
  const cardCvv = useForm('cardCvv');

  return (
    <form className="checkout-form-bg container">
      <div className="checkout-form">
        <div className="checkout-form-section">
          <h2>Dados Pessoais</h2>

          <div className="checkout-form-section-inputs">
            <Input
              className="form-input"
              label="Nome completo"
              name="fullName"
              placeholder="Digite seu nome completo"
              autoComplete="name"
              fullWidth
              value={fullName.value}
              onChange={fullName.onChange}
              onBlur={fullName.onBlur}
              error={fullName.error}
            />
            <Input
              className="form-input"
              label="E-mail"
              name="email"
              type="email"
              variant="email"
              placeholder="exemplo@email.com"
              autoComplete="email"
              fullWidth
              value={email.value}
              onChange={email.onChange}
              onBlur={email.onBlur}
              error={email.error}
            />
          </div>
        </div>

        <div className="checkout-form-section">
          <h2>Endereço de Entrega</h2>

          <div className="checkout-form-section-inputs">
            <Input
              className="form-input"
              label="Logradouro"
              name="street"
              placeholder="Rua, avenida ou travessa"
              autoComplete="street-address"
              fullWidth
              value={street.value}
              onChange={street.onChange}
              onBlur={street.onBlur}
              error={street.error}
            />
            <Input
              className="form-input"
              label="Cidade"
              name="city"
              placeholder="Digite sua cidade"
              autoComplete="address-level2"
              fullWidth
              value={city.value}
              onChange={city.onChange}
              onBlur={city.onBlur}
              error={city.error}
            />
            <Input
              className="form-input"
              label="Estado"
              name="state"
              placeholder="SP"
              autoComplete="address-level1"
              maxLength={2}
              fullWidth
              value={state.value}
              onChange={state.onChange}
              onBlur={state.onBlur}
              error={state.error}
            />
            <Input
              className="form-input"
              label="CEP"
              name="postalCode"
              placeholder="00000-000"
              inputMode="numeric"
              autoComplete="postal-code"
              fullWidth
              value={postalCode.value}
              onChange={postalCode.onChange}
              onBlur={postalCode.onBlur}
              error={postalCode.error}
            />
          </div>
        </div>

        <div className="checkout-form-section">
          <h2>Forma de Pagamento</h2>

          <div className="checkout-form-section-inputs">
            <Input
              className="form-input"
              label="Número do cartão"
              name="cardNumber"
              placeholder="0000 0000 0000 0000"
              inputMode="numeric"
              autoComplete="cc-number"
              fullWidth
              value={cardNumber.value}
              onChange={cardNumber.onChange}
              onBlur={cardNumber.onBlur}
              error={cardNumber.error}
            />
            <Input
              className="form-input"
              label="Nome no cartão"
              name="cardName"
              placeholder="Nome impresso no cartão"
              autoComplete="cc-name"
              fullWidth
              value={cardName.value}
              onChange={cardName.onChange}
              onBlur={cardName.onBlur}
              error={cardName.error}
            />
            <Input
              className="form-input"
              label="Validade"
              name="cardExpiration"
              placeholder="MM/AA"
              inputMode="numeric"
              autoComplete="cc-exp"
              fullWidth
              value={cardExpiration.value}
              onChange={cardExpiration.onChange}
              onBlur={cardExpiration.onBlur}
              error={cardExpiration.error}
            />
            <Input
              className="form-input"
              label="CVV"
              name="cardCvv"
              type="password"
              placeholder="000"
              inputMode="numeric"
              autoComplete="cc-csc"
              fullWidth
              value={cardCvv.value}
              onChange={cardCvv.onChange}
              onBlur={cardCvv.onBlur}
              error={cardCvv.error}
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default Form;
