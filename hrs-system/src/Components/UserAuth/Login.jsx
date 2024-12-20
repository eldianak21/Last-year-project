// src/Components/Auth/Login.jsx

import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import styles from './userauth.module.css'; // Create this CSS file for styling

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically validate the user with a backend service
        login({ email }); // Assuming successful login
        // Redirect or show a success message
    };

    return (
        <div className={styles.authContainer}>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className={styles.formGroup}>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;