import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const handleSubmit = (e) => {
e.preventDefault();
// console.log(Email: ${email}, Password: ${password});
// Add your login logic here
};

return (
<div className="login">
<div className="container">
<div className="row justify-content-center">
<div className="col-md-6">
<div className="card">
<div className="card-header">
<h3>Login</h3>
</div>
<div className="card-body">
<form onSubmit={handleSubmit}>
<div className="form-group mb-3">
<label htmlFor="email">Email</label>
<input type="email" className="form-control" id="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required />
</div>
<div className="form-group mb-3">
<label htmlFor="password">Password</label>
<input type="password" className="form-control" id="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} required />
</div>
<button type="submit" className="btn btn-primary me-2">Login</button>
<Link to="/registration" className="btn btn-secondary">Sign Up</Link>
</form>
</div>
</div>
</div>
</div>
</div>
</div>
);
}

export default Login;
