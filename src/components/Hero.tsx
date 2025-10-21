import React, { useState, useEffect } from 'react';
import './Hero.css';

const Hero: React.FC = () => {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);

    const phrases = ["Hello, I'm Shlok"];

    useEffect(() => {
        const handleType = () => {
            const i = loopNum % phrases.length;
            const fullText = phrases[i];
            
            setText(isDeleting 
                ? fullText.substring(0, text.length - 1) 
                : fullText.substring(0, text.length + 1)
            );

            setTypingSpeed(isDeleting ? 30 : 150);

            if (!isDeleting && text === fullText) {
                setTimeout(() => setIsDeleting(true), 500);
            } else if (isDeleting && text === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        };

        // Stop looping after one complete cycle
        if (loopNum > 0 && !isDeleting && text === phrases[0]) {
            return;
        }

        const timer = setTimeout(handleType, typingSpeed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum, phrases, typingSpeed]);

    return (
        <section id="home" className="section hero-section">
            <div className="hero-content">
                <h1 className="typewriter">{text}<span className="cursor">|</span></h1>
                <p className="subtitle">BE ISE Student & Developer</p>
                <p className="description">Currently in 3rd semester at RVCE</p>
                <div className="social-links">
                    <a href="https://in.linkedin.com/in/shlok-g" className="social-link">
                        <img src="/portfolio/images/linkedin.png" alt="LinkedIn" />
                    </a>
                    <a href="https://github.com/gshlok" className="social-link">
                        <img src="/portfolio/images/github.png" alt="GitHub" />
                    </a>
                    <br /><br />
                    <a href="/portfolio/CV/Resume 2.pdf" className="social-link" download="Resume.pdf">
                        <button type="button">Download CV</button>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;