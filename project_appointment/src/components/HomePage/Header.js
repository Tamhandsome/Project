import React from 'react';
import '../../styles/Header.scss';

const Header = () => {
    return (
        <header className="header">
            <div className="logo">Healthcare</div>
            <nav>
                <a href="#">Home</a>
                <a href="#">Service</a>
                <a href="#">Contact Us</a>
                <a href="#">Help</a>
                <a href="#">Blogs</a>
            </nav>
            <div className="auth-buttons">
                <button className="sign-up">Sign Up</button>
                <button className="log-in">Log In</button>
            </div>
        </header>
    );
};

export default Header;
