import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Login from './Login';
import Registration from './Registration';
import Tokens from './Tokens';
import Documents from './Documents';
import BusinessCorrespondence from './BusinessCorrespondence';
import Exchange from './Exchange';
import Support from './Support';
import Footer from './Footer';
import './index.css';
import i18n from 'i18next';
import { initReactI18next, useTranslation } from 'react-i18next';
import translationEN from '../translations/en.json';
import translationRU from '../translations/ru.json';
import translationES from '../translations/es.json';

// добавляем словари
const resources = {
  en: {
    translation: translationEN
  },
  ru: {
    translation: translationRU
  },
  es: {
    translation: translationES
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'ru',
  interpolation: {
    escapeValue: false
  }
});

function App() {
  const [language, setLanguage] = useState('ru');
  const { t } = useTranslation();

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
    i18n.changeLanguage(event.target.value);
  }

  return (
    <div className="app">
      <Header />
      <main className="main">
        <div>
          <select onChange={handleLanguageChange} value={language}>
            <option value="ru">Русский</option>
            <option value="es">Español</option>
            <option value="en">English</option>
          </select>
        </div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/tokens" element={<Tokens />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/business-correspondence" element={<BusinessCorrespondence />} />
          <Route path="/exchange" element={<Exchange />} />
          <Route path="/support" element={<Support />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
