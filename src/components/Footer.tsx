import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
    return (
        <footer id="footer" className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h3>Contact Me</h3>
                    <div className="footer-links">
                        <a href="mailto:shlokgraman@gmail.com" className="footer-link">
                            <img src="/images/email.png" alt="Email" className="footer-icon" />
                            <span>shlokgraman@gmail.com</span>
                        </a>
                        <a href="https://in.linkedin.com/in/shlok-g" className="footer-link">
                            <img src="/images/linkedin.png" alt="LinkedIn" className="footer-icon" />
                            <span>linkedin.com/in/shlok-g</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;