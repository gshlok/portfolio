import React from 'react';
import './Education.css';

const Education: React.FC = () => {
    return (
        <section id="education" className="section">
            <h2>Education</h2>
            <div className="education-timeline">
                <div className="education-item">
                    <div className="education-content">
                        <img src="/images/education.png" alt="Education" />
                        <h3>X CBSE Board</h3>
                        <p><strong>Institution:</strong> SVEI Public School</p>
                        <p><strong>Period:</strong> Completed in 2022</p>
                    </div>
                </div>
                <div className="education-item">
                    <div className="education-content">
                        <img src="/images/education.png" alt="Education" />
                        <h3>II PU (Pre-University Course)</h3>
                        <p><strong>Institution:</strong> RVPB PU College</p>
                        <p><strong>Period:</strong> 2022 - 2024</p>
                    </div>
                </div>
                <div className="education-item">
                    <div className="education-content">
                        <img src="/images/education.png" alt="Education" />
                        <h3>Bachelor of Engineering in Information Science</h3>
                        <p><strong>Institution:</strong> RV College of Engineering</p>
                        <p><strong>Period:</strong> 2024 - Present</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;