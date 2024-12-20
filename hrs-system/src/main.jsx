// src/main.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthProvider } from './Contexts/AuthContext'; // Import the AuthProvider

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <AuthProvider> {/* Wrap App with AuthProvider */}
            <App />
        </AuthProvider>
    </React.StrictMode>
);