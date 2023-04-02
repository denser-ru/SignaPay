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
              <img src="https://www.cryptocompare.com/media/19633/btc.png" alt="Bitcoin" className="w-50 mw-100" />
              <h3>Bitcoin</h3>
              <p>{t('tokens.btcDescription')}</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="token-card">
              <img src="https://www.cryptocompare.com/media/20646/eth_logo.png" alt="Ethereum" className="w-50 mw-100" />
              <h3>Ethereum</h3>
              <p>{t('tokens.ethDescription')}</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="token-card">
              <img src="https://www.cryptocompare.com/media/19782/litecoin-logo.png" alt="Litecoin" className="w-50 mw-100" />
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
