import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
    return (
        <section id="home" className="section hero-section">
            <div className="hero-content">
                <h1>Hello, I'm Shlok</h1>
                <p className="subtitle">BE ISE Student & Developer</p>
                <p className="description">Currently in 3rd semester at RVCE</p>
                <div className="social-links">
                    <a href="https://in.linkedin.com/in/shlok-g" className="social-link">
                        <img src="/images/linkedin.png" alt="LinkedIn" />
                    </a>
                    <a href="#" className="social-link">
                        <img src="/images/github.png" alt="GitHub" />
                    </a>
                    <br /><br />
                    <a href="/CV/Resume 2.pdf" className="social-link" download="Resume.pdf">
                        <button type="button">Download CV</button>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;