// src/Components/Auth/SignUp.jsx

import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import styles from './userauth.module.css'; // Create this CSS file for styling

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth(); // You may want to connect this to your backend

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically register the user with a backend service
        login({ email }); // Assuming successful registration
        // Redirect or show a success message
    };

    return (
        <div className={styles.authContainer}>
            <h1>Sign Up</h1>
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
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default SignUp;