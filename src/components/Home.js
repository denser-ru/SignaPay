import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Home() {
  const { t } = useTranslation();

  return (
    <div className="home">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <h1>{t('home.welcome')}</h1>
            <p>{t('home.description')}</p>
            <Link className="btn btn-primary" to="/registration">{t('home.signup')}</Link>
          </div>
          <div className="col-lg-6 col-md-12">
            <img src="./assets/img/home.png" alt="SignaPay Home" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
