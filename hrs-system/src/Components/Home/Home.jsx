// Home.jsx
import React from 'react';
import styles from './home.module.css'; // Import your CSS module

const Home = () => {
    return (
        <div className={styles.home}>
            <h1>Welcome to the HR Management System</h1>
            <p>
                The HR Management System is designed to streamline the recruitment process and manage human resources effectively. Our platform provides a user-friendly interface that simplifies hiring and improves efficiency.
            </p>
            <h2>Key Features</h2>
            <ul>
                <li>Automated Job Posting</li>
                <li>Applicant Tracking System</li>
                <li>Interview Scheduling</li>
                <li>Data Analytics Dashboard</li>
            </ul>
            <h2>Get Started</h2>
            <p>
                To learn more about our system, visit the <a href="/about">About</a> page.
            </p>
        </div>
    );
};

export default Home;