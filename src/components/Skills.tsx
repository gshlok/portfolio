import React from 'react';
import './Skills.css';

const Skills: React.FC = () => {
    const skills = [
        { name: 'HTML', description: 'Markup language for creating web pages' },
        { name: 'CSS', description: 'Styling language for web design' },
        { name: 'JavaScript', description: 'Scripting language for interactive web applications' },
        { name: 'React', description: 'JavaScript library for building user interfaces' },
        { name: 'Git', description: 'Version control system for code management' },
        { name: 'C++', description: 'Object-oriented programming language' }
    ];

    return (
        <section id="skills" className="section">
            <h2>Skills</h2>
            <div className="skills-grid">
                {skills.map((skill, index) => (
                    <div className="skill-card" key={index}>
                        <h3>{skill.name}</h3>
                        <div className="skill-description">
                            <p>{skill.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;