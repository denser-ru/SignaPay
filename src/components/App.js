import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Login from './Login';
import Registration from './Registration';
import Tokens from './Tokens';
import Documents from './Documents';
import Trading from './Trading';
import Exchange from './Exchange';
import Contacts from './Contacts';
import Support from './Support';
import Footer from './Footer';
import './index.css';

function App() {
return (
<Router>
<div className="app">
<Header />
<main className="main">
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/login" element={<Login />} />
  <Route path="/registration" element={<Registration />} />
  <Route path="/tokens" element={<Tokens />} />
  <Route path="/documents" element={<Documents />} />
  <Route path="/trading" element={<Trading />} />
  <Route path="/exchange" element={<Exchange />} />
  <Route path="/contacts" element={<Contacts />} />
  <Route path="/support" element={<Support />} />
</Routes>

</main>
<Footer />
</div>
</Router>
);
}

export default App;
