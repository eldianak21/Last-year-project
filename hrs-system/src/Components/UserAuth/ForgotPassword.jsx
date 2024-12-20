// src/Components/Auth/ForgotPassword.jsx

import React, { useState } from 'react';
import styles from './userauth.module.css'; // Create this CSS file for styling

const ForgotPassword = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send a password reset link to the user's email
        console.log('Password reset link sent to:', email);
        // Show a success message
    };

    return (
        <div className={styles.authContainer}>
            <h1>Forgot Password</h1>
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
                <button type="submit">Send Reset Link</button>
            </form>
        </div>
    );
};

export default ForgotPassword;