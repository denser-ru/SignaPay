import React from 'react';
import { useTranslation } from 'react-i18next';

function Exchange() {
  const { t } = useTranslation();

  return (
    <div className="exchange">
      <div className="container">
        <h2>{t('exchange.exchangePage')}</h2>
        <p>{t('exchange.exchangeInfo')}</p>
        <form>
          <div className="mb-3">
            <label htmlFor="fromCurrency" className="form-label">{t('exchange.fromCurrency')}</label>
            <select className="form-select" id="fromCurrency">
              <option value="usd">USD</option>
              <option value="eur">EUR</option>
              <option value="gbp">GBP</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="toCurrency" className="form-label">{t('exchange.toCurrency')}</label>
            <select className="form-select" id="toCurrency">
              <option value="btc">BTC</option>
              <option value="eth">ETH</option>
              <option value="ltc">LTC</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="amount" className="form-label">{t('exchange.amount')}</label>
            <input type="text" className="form-control" id="amount" />
          </div>
          <button type="submit" className="btn btn-primary">{t('exchange.exchangeButton')}</button>
        </form>
      </div>
    </div>
  );
}

export default Exchange;
