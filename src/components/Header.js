import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.svg';

function Header() {
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
<Link className="nav-link" to="/login">Login</Link>
</li>
<li className="nav-item">
<Link className="nav-link" to="/registration">Registration</Link>
</li>
<li className="nav-item">
<Link className="nav-link" to="/tokens">Tokens</Link>
</li>
<li className="nav-item">
<Link className="nav-link" to="/documents">Documents</Link>
</li>
<li className="nav-item">
<Link className="nav-link" to="/trading">Trading</Link>
</li>
<li className="nav-item">
<Link className="nav-link" to="/exchange">Exchange</Link>
</li>
<li className="nav-item">
<Link className="nav-link" to="/contacts">Contacts</Link>
</li>
<li className="nav-item">
<Link className="nav-link" to="/support">Support</Link>
</li>
</ul>
</div>
</div>
</nav>
</header>
);
}

export default Header;