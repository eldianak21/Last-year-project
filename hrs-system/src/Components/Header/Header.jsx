import React from 'react';
import styles from './header.module.css'; // Import as styles
import logo from '../../assets/jimma-logo.png'; // Import the logo image

const Header = () => {
    return (
        <header className={styles.header}> {/* Use styles.header */}
            <div className={styles.logo}>
                <img src={logo} alt="Jimma University Logo" className={styles.logoImage} /> {/* Add image */}
                HR Management System
            </div> {/* Use styles.logo */}
            <nav>
                <ul className={styles['nav-links']}> {/* Use styles['nav-links'] */}
                    <li><a href="/">Home</a></li>
                    <li><a href="/jobs">Jobs</a></li>
                    <li><a href="/candidates">Candidates</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;