import { useTranslation } from 'react-i18next';

function Tokens() {
  const { t } = useTranslation();

  return (
    <div className="tokens">
      <div className="container">
        <h2>{t('tokens.tokensPage')}</h2>
        <p>{t('tokens.tokensDescription')}</p>
        <div className="row">
          <div className="col-md-4">
            <div className="token-card">
              <img src="./assets/img/btc.png" alt="Bitcoin" className="img-fluid" />
              <h3>Bitcoin</h3>
              <p>{t('tokens.btcDescription')}</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="token-card">
              <img src="./assets/img/eth.png" alt="Ethereum" className="img-fluid" />
              <h3>Ethereum</h3>
              <p>{t('tokens.ethDescription')}</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="token-card">
              <img src="./assets/img/ltc.png" alt="Litecoin" className="img-fluid" />
              <h3>Litecoin</h3>
              <p>{t('tokens.ltcDescription')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tokens;
