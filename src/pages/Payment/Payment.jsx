import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { PRODUCT_GET } from '../../api/api';
import CardIcon from '../../assets/icons/payment-card.svg?react';
import InvoiceIcon from '../../assets/icons/invoice.svg?react';
import QrCodeIcon from '../../assets/icons/qr-code.svg?react';
import arrow from '../../assets/icons/arrow.svg';
import Input from '../../components/Input/Input';
import { BagContext } from '../../contexts/BagContext';
import {
  maskCardExpiration,
  maskCardNumber,
  maskCvv,
  maskLetters,
  maskPostalCode,
  maskState,
} from '../../helpers/inputMasks';
import useForm from '../../hooks/useForm';
import Empty from '../Bag/components/Empty/Empty';
import Summary from '../Bag/components/Summary/Summary';
import './Payment.css';
import Spinner from '../../components/Spinner/Spinner';
import Error from '../../components/Error/Error';
import { UserContext } from '../../contexts/UserContext';

const Payment = () => {
  const navigate = useNavigate();
  const [products, setProducts] = React.useState([]);
  const [paymentMethod, setPaymentMethod] = React.useState('');
  const { bag, cleanCart } = React.useContext(BagContext);
  const fullName = useForm('fullName', maskLetters);
  const email = useForm('email');
  const street = useForm('street');
  const city = useForm('city', maskLetters);
  const state = useForm('state', maskState);
  const postalCode = useForm('postalCode', maskPostalCode);
  const cardNumber = useForm('cardNumber', maskCardNumber);
  const cardName = useForm('cardName', maskLetters);
  const cardExpiration = useForm('cardExpiration', maskCardExpiration);
  const cardCvv = useForm('cardCvv', maskCvv);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const validCustomerData =
    fullName.valid && email.valid && street.valid && city.valid && state.valid && postalCode.valid;
  const cardPayment = paymentMethod === 'credit' || paymentMethod === 'debit';
  const validCardData = cardNumber.valid && cardName.valid && cardExpiration.valid && cardCvv.valid;
  const validPaymentMethod =
    paymentMethod === 'pix' || paymentMethod === 'invoice' || (cardPayment && validCardData);
  const validForm = validCustomerData && validPaymentMethod;
  const { data } = React.useContext(UserContext);

  React.useEffect(() => {
    async function fetchBagProducts() {
      try {
        setLoading(true);
        setError(null);

        const products = await Promise.all(
          bag.map(async (item) => {
            const { url, options } = PRODUCT_GET(item.id);

            const response = await fetch(url, options);

            if (!response.ok) {
              throw new Error(`Erro ao buscar o produto ${item.id}.`);
            }

            const product = await response.json();

            return {
              ...product,
              quantity: item.quantity,
            };
          }),
        );

        setProducts(products);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    fetchBagProducts();
  }, [bag]);

  React.useEffect(() => {
    if (paymentMethod === 'credit' || paymentMethod === 'debit') return;

    cardCvv.reset();
    cardExpiration.reset();
    cardName.reset();
    cardNumber.reset();
  }, [paymentMethod]);

  React.useEffect(() => {
    if (!data) {
      return;
    }

    fullName.setValue(`${data.firstName} ${data.lastName}`);
    email.setValue(data.email);
  }, [data]);

  function finishPayment() {
    const pixExpiresAt = paymentMethod === 'pix' ? Date.now() + 15 * 60 * 1000 : null;

    cleanCart();
    navigate('/pedido-concluido', {
      state: {
        purchaseCompleted: true,
        paymentMethod,
        pixExpiresAt,
      },
      replace: true,
    });
  }

  if (bag.length === 0) {
    return <Empty />;
  }

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <Error error={error} />;
  }

  return (
    <>
      <div className="container payment-top">
        <nav>
          <ol className="payment-breadcrumb">
            <li>
              <Link to="/">Início</Link>
              <img src={arrow} alt="" />
            </li>
            <li>
              <Link to="/sacola">Sacola</Link>
              <img src={arrow} alt="" />
            </li>
            <li>
              <strong>Pagamento</strong>
            </li>
          </ol>
        </nav>
        <h1>Finalizar Compra</h1>
      </div>

      <div className="payment-content container">
        <form className="payment-form">
          <section className="payment-form-section">
            <h2>Dados Pessoais</h2>

            <div className="payment-form-inputs">
              <Input
                className="form-input"
                label="Nome completo"
                name="fullName"
                placeholder="Digite seu nome completo"
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
                fullWidth
                value={email.value}
                onChange={email.onChange}
                onBlur={email.onBlur}
                error={email.error}
              />
            </div>
          </section>

          <section className="payment-form-section">
            <h2>Endereço de Entrega</h2>

            <div className="payment-form-inputs">
              <Input
                className="form-input"
                label="Logradouro"
                name="street"
                placeholder="Rua, avenida ou travessa"
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
                maxLength={9}
                fullWidth
                value={postalCode.value}
                onChange={postalCode.onChange}
                onBlur={postalCode.onBlur}
                error={postalCode.error}
              />
            </div>
          </section>

          <section className="payment-form-section">
            <h2>Forma de Pagamento</h2>

            <ul className="payment-methods">
              <li>
                <button
                  type="button"
                  className={`payment-method ${paymentMethod === 'credit' ? 'active' : ''}`}
                  onClick={() => setPaymentMethod('credit')}
                >
                  <CardIcon />
                  <span>Cartão de Crédito</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className={`payment-method ${paymentMethod === 'debit' ? 'active' : ''}`}
                  onClick={() => setPaymentMethod('debit')}
                >
                  <CardIcon />
                  <span>Cartão de Débito</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className={`payment-method ${paymentMethod === 'pix' ? 'active' : ''}`}
                  onClick={() => setPaymentMethod('pix')}
                >
                  <QrCodeIcon />
                  <span>PIX</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className={`payment-method ${paymentMethod === 'invoice' ? 'active' : ''}`}
                  onClick={() => setPaymentMethod('invoice')}
                >
                  <InvoiceIcon />
                  <span>Boleto Bancário</span>
                </button>
              </li>
            </ul>

            {(paymentMethod === 'credit' || paymentMethod === 'debit') && (
              <div className="payment-form-inputs">
                <Input
                  className="form-input"
                  label="Número do cartão"
                  name="cardNumber"
                  placeholder="0000 0000 0000 0000"
                  inputMode="numeric"
                  maxLength={19}
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
                  maxLength={5}
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
                  placeholder="000 | 0000"
                  inputMode="numeric"
                  maxLength={4}
                  fullWidth
                  value={cardCvv.value}
                  onChange={cardCvv.onChange}
                  onBlur={cardCvv.onBlur}
                  error={cardCvv.error}
                />
              </div>
            )}

            {paymentMethod === 'pix' && (
              <p className="pix-method">
                Após a confirmação da compra, um QR Code PIX será gerado para pagamento. Você terá
                15 minutos para concluir a transação. Assim que o pagamento for confirmado, você
                receberá um e-mail de confirmação.
              </p>
            )}

            {paymentMethod === 'invoice' && (
              <div className="invoice-method">
                <span>1234.56789 01234.567890 12345.678901 1 00000000000000</span>
                <p>
                  O boleto vence em 3 dias úteis. O pagamento pode levar até 2 dias para ser
                  confirmado.
                </p>
              </div>
            )}
          </section>
        </form>

        <Summary
          products={products}
          payment={true}
          validForm={validForm}
          onFinish={finishPayment}
        />
      </div>
    </>
  );
};

export default Payment;
