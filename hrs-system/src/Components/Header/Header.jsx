import React from 'react';
import  header from './header.module.css';

const Header = () => {
    return (
        <header className="header">
            <div className="logo">HR Management System</div>
            <nav>
                <ul className="nav-links">
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