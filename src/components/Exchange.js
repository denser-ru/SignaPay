import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

function Exchange() {
  const { t } = useTranslation();

  return (
    <Container>
      <Row className="justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h3>{t('exchange.exchangePage')}</h3>
            </div>
            <div className="card-body">
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
        </div>
      </Row>
    </Container>
  );
}

export default Exchange;
