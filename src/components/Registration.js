import React from 'react';
import { useTranslation } from 'react-i18next';

function Registration() {
  const { t } = useTranslation();

  return (
    <div className="registration">
      <div className="container">
        <h2>{t('registration.title')}</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">{t('registration.name')}</label>
            <input type="text" className="form-control" id="name" />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">{t('registration.email')}</label>
            <input type="email" className="form-control" id="email" />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">{t('registration.password')}</label>
            <input type="password" className="form-control" id="password" />
          </div>
          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">{t('registration.confirmPassword')}</label>
            <input type="password" className="form-control" id="confirmPassword" />
          </div>
          <button type="submit" className="btn btn-primary">{t('registration.button')}</button>
        </form>
      </div>
    </div>
  );
}

export default Registration;
