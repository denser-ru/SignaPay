import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.svg';
import { useTranslation } from 'react-i18next';

function Header() {
  const { t } = useTranslation();

  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="SignaPay Logo" width="40" height="40" className="d-inline-block align-text-top" />
            SignaPay
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/login">{t('login.title')}</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/registration">{t('registration.title')}</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/tokens">{t('header.tokens')}</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/documents">{t('header.documents')}</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/business-correspondence">{t('header.businessCorrespondence')}</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/exchange">{t('header.exchange')}</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/support">{t('header.support')}</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
