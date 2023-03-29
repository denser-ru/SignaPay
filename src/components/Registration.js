import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Registration() {
const [firstName, setFirstName] = useState('');
const [lastName, setLastName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const handleSubmit = (e) => {
e.preventDefault();
// console.log(First Name: ${firstName}, Last Name: ${lastName}, Email: ${email}, Password: ${password});
// Add your registration logic here
};

return (
<div className="registration">
<div className="container">
<div className="row justify-content-center">
<div className="col-md-6">
<div className="card">
<div className="card-header">
<h3>Registration</h3>
</div>
<div className="card-body">
<form onSubmit={handleSubmit}>
<div className="form-group mb-3">
<label htmlFor="firstName">First Name</label>
<input type="text" className="form-control" id="firstName" placeholder="Enter your first name" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
</div>
<div className="form-group mb-3">
<label htmlFor="lastName">Last Name</label>
<input type="text" className="form-control" id="lastName" placeholder="Enter your last name" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
</div>
<div className="form-group mb-3">
<label htmlFor="email">Email</label>
<input type="email" className="form-control" id="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required />
</div>
<div className="form-group mb-3">
<label htmlFor="password">Password</label>
<input type="password" className="form-control" id="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} required />
</div>
<button type="submit" className="btn btn-primary me-2">Register</button>
<Link to="/login" className="btn btn-secondary">Login</Link>
</form>
</div>
</div>
</div>
</div>
</div>
</div>
);
}

export default Registration;
