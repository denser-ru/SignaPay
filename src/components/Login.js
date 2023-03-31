import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Login() {
    const { t } = useTranslation();

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
                                <h3>{t('login.title')}</h3>
                            </div>
                            <div className="card-body">
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group mb-3">
                                        <label htmlFor="email">{t('login.email')}</label>
                                        <input type="email" className="form-control" id="email" placeholder={t('login.emailPlaceholder')} value={email} onChange={(e) => setEmail(e.target.value)} required />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label htmlFor="password">{t('login.password')}</label>
                                        <input type="password" className="form-control" id="password" placeholder={t('login.passwordPlaceholder')} value={password} onChange={(e) => setPassword(e.target.value)} required />
                                    </div>
                                    <button type="submit" className="btn btn-primary me-2">{t('login.loginBtn')}</button>
                                    <Link to="/registration" className="btn btn-secondary">{t('login.signUpBtn')}</Link>
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
