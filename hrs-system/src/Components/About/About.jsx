import React from 'react';
import styles from './About.module.css'; // Import your CSS module

const About = () => {
    return (
        <div className={styles.about}>
            <h1>About the HR Management System</h1>
            <p>
                The HR Management System is designed to streamline and enhance recruitment processes within organizations. It aims to provide a comprehensive solution for managing human resources effectively and efficiently.
            </p>
            <h2>Purpose</h2>
            <p>
                This system simplifies the hiring process, improves data management, and ensures a better experience for HR personnel and candidates alike. By automating key functions, it allows organizations to focus on strategic decision-making.
            </p>
            <h2>Key Features</h2>
            <ul>
                <li>Automated Job Posting and Management</li>
                <li>Applicant Tracking System (ATS)</li>
                <li>Scoring and Evaluation Tools for Candidates</li>
                <li>Streamlined Interview Scheduling</li>
                <li>Analytics Dashboard for Recruitment Insights</li>
                <li>Secure Data Management and Compliance</li>
            </ul>
            <h2>Benefits</h2>
            <p>
                By implementing this HR Management System, organizations can expect to see improved efficiency, reduced time-to-hire, better candidate experiences, and enhanced data security.
            </p>
            <h2>Contact Us</h2>
            <p>
                For more information or inquiries, please reach out via our support email.
            </p>
        </div>
    );
};

export default About;