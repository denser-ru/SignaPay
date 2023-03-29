import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
return (
<div className="home">
<div className="container">
<div className="row">
<div className="col-lg-6 col-md-12">
<h1>Secure Payment Solution</h1>
<p>SignaPay provides a secure and easy-to-use platform for sending and receiving payments online.</p>
<Link className="btn btn-primary" to="/registration">Sign Up Now</Link>
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
