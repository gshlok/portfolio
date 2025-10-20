import React, { useState } from 'react';
import './Skills.css';

const Skills: React.FC = () => {
    const [activeTab, setActiveTab] = useState<string | null>(null);

    const programmingLanguages = [
        { name: 'C++', description: 'Object-oriented programming language' },
        { name: 'HTML', description: 'Markup language for creating web pages' },
        { name: 'CSS', description: 'Styling language for web design' },
        { name: 'Python', description: 'High-level programming language for general-purpose programming' },
        { name: 'JavaScript', description: 'Scripting language for interactive web applications' }
    ];

    const frameworksTools = [
        { name: 'React.js', description: 'JavaScript library for building user interfaces' },
        { name: 'n8n', description: 'Workflow automation tool' },
        { name: 'VS Code', description: 'Source-code editor developed by Microsoft' }
    ];

    const versionControl = [
        { name: 'Git', description: 'Distributed version control system' },
        { name: 'GitHub', description: 'Cloud-based hosting service for version control' }
    ];

    return (
        <section id="skills" className="section">
            <h2>Skills</h2>
            <div className="skills-tabs">
                <div className="tab" onClick={() => setActiveTab(activeTab === 'programming' ? null : 'programming')}>
                    <h3>Programming Languages</h3>
                    <p>Click to view</p>
                </div>
                <div className="tab" onClick={() => setActiveTab(activeTab === 'frameworks' ? null : 'frameworks')}>
                    <h3>Frameworks and Tools</h3>
                    <p>Click to view</p>
                </div>
                <div className="tab" onClick={() => setActiveTab(activeTab === 'version' ? null : 'version')}>
                    <h3>Version Control</h3>
                    <p>Click to view</p>
                </div>
            </div>
            <div className="skills-content">
                {activeTab === 'programming' && (
                    <div className="skills-category">
                        <div className="skills-list">
                            {programmingLanguages.map((skill, index) => (
                                <div className="skill-card" key={`pl-${index}`}>
                                    <h4>{skill.name}</h4>
                                    <div className="skill-description">
                                        <p>{skill.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
                {activeTab === 'frameworks' && (
                    <div className="skills-category">
                        <div className="skills-list">
                            {frameworksTools.map((skill, index) => (
                                <div className="skill-card" key={`ft-${index}`}>
                                    <h4>{skill.name}</h4>
                                    <div className="skill-description">
                                        <p>{skill.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
                {activeTab === 'version' && (
                    <div className="skills-category">
                        <div className="skills-list">
                            {versionControl.map((skill, index) => (
                                <div className="skill-card" key={`vc-${index}`}>
                                    <h4>{skill.name}</h4>
                                    <div className="skill-description">
                                        <p>{skill.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Skills;