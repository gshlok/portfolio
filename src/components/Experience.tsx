import React, { useState } from 'react';
import './Experience.css';
import RiloLogo from '../assets/Rilo-logo.svg';

const Experience: React.FC = () => {
    const [expandedCard, setExpandedCard] = useState<number | null>(null);

    const toggleCard = (index: number) => {
        setExpandedCard(expandedCard === index ? null : index);
    };

    return (
        <section id="experience" className="section">
            <h2>Experience</h2>
            <div className="experience-timeline">
                <div className="experience-item">
                    <div 
                        className={`experience-content ${expandedCard === 0 ? 'expanded' : ''}`}
                        onClick={() => toggleCard(0)}
                    >
                        <div className="experience-header">
                            <h3>Automation Intern</h3>
                            <p className="company-name">
                                <a href="https://www.getrilo.ai/" target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                                    Rilo
                                </a>
                            </p>
                            <p className="experience-duration">November 2024 - Present</p>
                        </div>
                        <div className="experience-links">
                            <a href="https://www.getrilo.ai/" target="_blank" rel="noopener noreferrer" className="experience-link" onClick={(e) => e.stopPropagation()}>
                                <img src={RiloLogo} alt="Rilo" className="link-icon" /> Website
                            </a>
                            <a href="https://www.linkedin.com/company/getriloai" target="_blank" rel="noopener noreferrer" className="experience-link" onClick={(e) => e.stopPropagation()}>
                                <img src="/portfolio/images/linkedin.png" alt="LinkedIn" className="link-icon" /> LinkedIn
                            </a>
                        </div>
                        <ul className="experience-details">
                            <li>Created multiple automation workflows for departments like sales, marketing, growth, content, email, and meetings, reducing manual workload and streamlining operations.</li>
                            <li>Worked closely with founders to identify automation needs and integrate scalable solutions.</li>
                        </ul>
                    </div>
                </div>
                <div className="experience-item">
                    <div 
                        className={`experience-content ${expandedCard === 1 ? 'expanded' : ''}`}
                        onClick={() => toggleCard(1)}
                    >
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
