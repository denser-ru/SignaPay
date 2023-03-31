import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.svg';
import { useTranslation } from 'react-i18next';
import { Navbar, Nav } from 'react-bootstrap';
// import { prop } from '@waves/node-api-js/cjs/tools/utils';

function Header() {
  const { t } = useTranslation();

  return (
    <Navbar expand="lg">
      <Navbar.Brand as={Link} to="/">
        <img src={logo} alt="SignaPay Logo" width="40" height="40" className="d-inline-block align-text-top" />
        SignaPay
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarNav" />
      <Navbar.Collapse id="navbarNav">
        <Nav className="ms-auto">
          <Nav.Link as={Link} to="/login">{t('login.title')}</Nav.Link>
          <Nav.Link as={Link} to="/registration">{t('registration.title')}</Nav.Link>
          <Nav.Link as={Link} to="/tokens">{t('header.tokens')}</Nav.Link>
          <Nav.Link as={Link} to="/documents">{t('header.documents')}</Nav.Link>
          <Nav.Link as={Link} to="/business-correspondence">{t('header.businessCorrespondence')}</Nav.Link>
          <Nav.Link as={Link} to="/exchange">{t('header.exchange')}</Nav.Link>
          <Nav.Link as={Link} to="/support">{t('header.support')}</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
