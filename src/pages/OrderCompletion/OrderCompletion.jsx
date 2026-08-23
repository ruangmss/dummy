import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import SuccessIcon from '../../assets/icons/success.svg?react';
import qrCode from '../../assets/images/qr-code.png';
import './OrderCompletion.css';
import Error from '../../components/Error/Error';

const OrderCompletion = () => {
  const location = useLocation();
  const purchaseCompleted = location.state?.purchaseCompleted;
  const paymentMethod = location.state?.paymentMethod;
  const pixExpiresAt = location.state?.pixExpiresAt;
  const isPix = paymentMethod === 'pix';
  const [remainingSeconds, setRemainingSeconds] = React.useState(() => {
    if (!isPix || !pixExpiresAt) {
      return 0;
    }

    return Math.max(0, Math.ceil((pixExpiresAt - Date.now()) / 1000));
  });

  React.useEffect(() => {
    if (!isPix || !pixExpiresAt) {
      return undefined;
    }

    function updateRemainingTime() {
      const remaining = Math.max(0, Math.ceil((pixExpiresAt - Date.now()) / 1000));

      setRemainingSeconds(remaining);

      if (remaining === 0) {
        window.clearInterval(interval);
      }
    }

    const interval = window.setInterval(updateRemainingTime, 1000);
    updateRemainingTime();

    return () => window.clearInterval(interval);
  }, [isPix, pixExpiresAt]);

  if (!purchaseCompleted) {
    return <Error error="Você não possui um pedido recém-finalizado." />;
  }

  const minutes = String(Math.floor(remainingSeconds / 60)).padStart(2, '0');
  const seconds = String(remainingSeconds % 60).padStart(2, '0');
  const pixExpired = isPix && remainingSeconds === 0;

  return (
    <section className="container order-completion">
      {!isPix && (
        <div className="order-completion-icon">
          <SuccessIcon />
        </div>
      )}

      <div className="order-completion-content">
        <h1>{isPix ? 'Finalize o pagamento via PIX' : 'Compra concluída!'}</h1>

        {isPix ? (
          <div className="order-completion-pix">
            <p>
              Escaneie o QR Code no aplicativo do seu banco. O pedido será confirmado assim que o
              pagamento for identificado.
            </p>

            <img
              className="order-completion-qr-code"
              src={qrCode}
              alt="QR Code para pagamento via PIX"
            />

            <div className={`order-completion-timer ${pixExpired ? 'expired' : ''}`}>
              <span>{pixExpired ? 'Tempo esgotado' : 'Tempo restante para pagamento:'}</span>
              {!pixExpired && (
                <strong>
                  {minutes}:{seconds}
                </strong>
              )}
            </div>

            {pixExpired && (
              <p className="order-completion-expired-message">
                Este QR Code expirou. Inicie uma nova compra para gerar outro pagamento.
              </p>
            )}
          </div>
        ) : (
          <p>
            Recebemos seu pedido e enviaremos a confirmação para o e-mail cadastrado. Obrigado por
            comprar com a Dummy.
          </p>
        )}

        <div className="order-completion-buttons">
          <Link to="/" className="button secondary">
            Voltar ao Início
          </Link>
          <Link to="/produtos" className="button">
            Continuar Comprando
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OrderCompletion;
