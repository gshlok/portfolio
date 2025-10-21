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
                            <img src="/portfolio/images/email.png" alt="Email" className="footer-icon" />
                            <span>shlokgraman@gmail.com</span>
                        </a>
                        <a href="https://in.linkedin.com/in/shlok-g" className="footer-link">
                            <img src="/portfolio/images/linkedin.png" alt="LinkedIn" className="footer-icon" />
                            <span>linkedin.com/in/shlok-g</span>
                        </a>
                        <a href="https://github.com/gshlok" className="footer-link">
                            <img src="/portfolio/images/github.png" alt="GitHub" className="footer-icon" />
                            <span>github.com/gshlok</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;