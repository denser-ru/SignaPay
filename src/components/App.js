import React, { useState, useEffect } from 'react';
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

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, ThemeProvider, Form } from 'react-bootstrap';

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

  const [lightMode, setLightMode] = useState('navbar-light bg-light');
  document.body.classList.add('navbar-light', 'bg-light');
  const toggleLightMode = () => {
    setLightMode(lightMode === 'navbar-dark bg-dark' ? 'navbar-light bg-light' : 'navbar-dark bg-dark');
    if (lightMode === 'navbar-dark bg-dark') {
      document.body.classList.remove('navbar-dark', 'bg-dark');
      document.body.classList.add('navbar-light', 'bg-light');
    } else {
      document.body.classList.remove('navbar-light', 'bg-light');
      document.body.classList.add('navbar-dark', 'bg-dark');
    }
  };

  const [theme, setTheme] = useState('spacelab');
  const handleTheme = (event) => {
    setTheme(event.target.value);
  }

  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = `https://bootswatch.com/5/${theme}/bootstrap.min.css`;
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, [theme]);

  return (
    <ThemeProvider>
      <Container className={lightMode}>
        <Header />

        <Container>
          <Row>
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                id="lightModeSwitch"
                checked={lightMode === 'navbar-dark bg-dark'}
                onChange={toggleLightMode}
              />
              <label className="form-check-label" htmlFor="lightModeSwitch">
                {lightMode === 'navbar-light bg-light' ? t('header.toDark') : t('header.toLight')}
              </label>
            </div>
          </Row>
          <Row>
            <Col>
              <Form.Select className='w-auto' onChange={handleTheme} value={theme} size="sm">
                <option value="cerulean">Cerulean</option>
                <option value="cosmo">Cosmo</option>
                <option value="cyborg">Cyborg</option>
                <option value="darkly">Darkly</option>
                <option value="flatly">Flatly</option>
                <option value="journal">Journal</option>
                <option value="litera">Litera</option>
                <option value="lumen">Lumen</option>
                <option value="lux">Lux</option>
                <option value="materia">Materia</option>
                <option value="minty">Minty</option>
                <option value="morph">Morph</option>
                <option value="pulse">Pulse</option>
                <option value="quartz">Quartz</option>
                <option value="sandstone">Sandstone</option>
                <option value="simplex">Simplex</option>
                <option value="sketchy">Sketchy</option>
                <option value="slate">Slate</option>
                <option value="solar">Solar</option>
                <option value="spacelab">Spacelab</option>
                <option value="superhero">Superhero</option>
                <option value="united">United</option>
                <option value="vapor">Vapor</option>
                <option value="zephyr">Zephyr</option>
              </Form.Select>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Select className='w-auto' onChange={handleLanguageChange} value={language} size="sm">
                <option value="ru">Русский</option>
                <option value="es">Español</option>
                <option value="en">English</option>
              </Form.Select>
            </Col>
          </Row>
        </Container>

        <Container>
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
        </Container>
        <Footer />
      </Container>
    </ThemeProvider>
  );
}

export default App;
