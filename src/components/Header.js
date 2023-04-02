import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.svg';
import { useTranslation } from 'react-i18next';
import { Navbar, Nav } from 'react-bootstrap';
// import { prop } from '@waves/node-api-js/cjs/tools/utils';

function Header( props ) {
  const { t } = useTranslation();
  const { basename } = props;

  return (
    <Navbar expand="lg">
      <Navbar.Brand as={Link} to={`${basename}/`}>
        <img src={logo} alt="SPIYANAA Logo" width="40" height="40" className="d-inline-block align-text-top" />
        SPIYANAA
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarNav" />
      <Navbar.Collapse id="navbarNav">
        <Nav className="ms-auto">
        <Nav.Link as={Link} to={`${basename}/login`}>{t('login.title')}</Nav.Link>
          <Nav.Link as={Link} to={`${basename}/registration`}>{t('registration.title')}</Nav.Link>
          <Nav.Link as={Link} to={`${basename}/tokens`}>{t('header.tokens')}</Nav.Link>
          <Nav.Link as={Link} to={`${basename}/documents`}>{t('header.documents')}</Nav.Link>
          <Nav.Link as={Link} to={`${basename}/business-correspondence`}>{t('header.businessCorrespondence')}</Nav.Link>
          <Nav.Link as={Link} to={`${basename}/exchange`}>{t('header.exchange')}</Nav.Link>
          <Nav.Link as={Link} to={`${basename}/support`}>{t('header.support')}</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
