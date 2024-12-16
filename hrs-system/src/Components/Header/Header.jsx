import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import styles from './header.module.css'; // Import as styles
import logo from '../../assets/jimma-logo.png'; // Import the logo image

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img src={logo} alt="Jimma University Logo" className={styles.logoImage} />
                HR Management System
            </div>
            <nav>
                <ul className={styles['nav-links']}>
                    <li><Link to="/">Home</Link></li> {/* Use Link for navigation */}
                    <li><Link to="/jobs">Jobs</Link></li>
                    <li><Link to="/candidates">Candidates</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;