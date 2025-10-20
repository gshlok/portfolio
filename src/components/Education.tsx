import React from 'react';
import './Education.css';

const Education: React.FC = () => {
    return (
        <section id="education" className="section">
            <h2>Education</h2>
            <div className="education-grid">
                <div className="education-card">
                    <img src="/images/education.png" alt="Education" />
                    <h3>BE in Information Science Engineering</h3>
                    <p>RV College of Engineering</p>
                    <p>2024 - Present</p>
                </div>
                <div className="education-card">
                    <img src="/images/education.png" alt="Education" />
                    <h3>II PU</h3>
                    <p>RVPB PU College</p>
                    <p>2022 - 2024</p>
                </div>
                <div className="education-card">
                    <img src="/images/education.png" alt="Education" />
                    <h3>X CBSE Board</h3>
                    <p>SVEI Public School</p>
                    <p>Graduated 2022</p>
                </div>
            </div>
        </section>
    );
};

export default Education;