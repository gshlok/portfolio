import React from 'react';
import './Experience.css';
import RiloLogo from '../assets/Rilo-logo.svg';

const Experience: React.FC = () => {
    return (
        <section id="experience" className="section">
            <h2>Experience</h2>
            <div className="experience-timeline">
                <div className="experience-item">
                    <div className="experience-content">
                        <div className="experience-header">
                            <h3>Automation Intern</h3>
                            <p className="company-name">
                                <a href="https://www.getrilo.ai/" target="_blank" rel="noopener noreferrer">
                                    Rilo
                                </a>
                            </p>
                            <p className="experience-duration">November 2024 - Present</p>
                        </div>
                        <ul className="experience-details">
                            <li>Created multiple automation workflows for departments like sales, marketing, growth, content, email, and meetings, reducing manual workload and streamlining operations.</li>
                            <li>Worked closely with founders to identify automation needs and integrate scalable solutions.</li>
                        </ul>
                        <div className="experience-links">
                            <a href="https://www.getrilo.ai/" target="_blank" rel="noopener noreferrer" className="experience-link">
                                <img src={RiloLogo} alt="Rilo" className="link-icon" /> Website
                            </a>
                            <a href="https://www.linkedin.com/company/getriloai" target="_blank" rel="noopener noreferrer" className="experience-link">
                                <img src="/portfolio/images/linkedin.png" alt="LinkedIn" className="link-icon" /> LinkedIn
                            </a>
                        </div>
                    </div>
                </div>
                <div className="experience-item">
                    <div className="experience-content">
                        <div className="experience-header">
                            <h3>Volunteer & Event Organizer</h3>
                            <p className="company-name">Coding Club, RV College of Engineering</p>
                            <p className="experience-duration">December 2024 - Present • Bangalore, Karnataka</p>
                        </div>
                        <ul className="experience-details">
                            <li>Volunteered for multiple technical events and workshops, contributing to the club's community outreach and technical engagement.</li>
                            <li>Organized several hackathons and coding workshops with hundreds of participants, managing event flow, logistics, and mentorship.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
