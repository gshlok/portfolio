import React from 'react';
import './Projects.css';

const Projects: React.FC = () => {
    const projects = [
        {
            title: "Time-sink-estimator",
            technologies: "Streamlit, scikit-learn, Python",
            description: "Developed an interactive web tool using Streamlit and scikit-learn to estimate hours spent on a video game based on user preferences and play history.",
            githubUrl: "https://github.com/gshlok/time-sink-estimator"
        },
        {
            title: "Slack n8n Automator Bot",
            technologies: "n8n, Slack, OpenAI, Anthropic",
            description: "Built an AI-powered Slack bot using n8n, OpenAI GPT, and Slack API to convert natural language requests into fully configured automation workflows.",
            githubUrl: "https://github.com/gshlok/slack-n8n-automatorbot"
        },
        {
            title: "AchainI",
            technologies: "Gemini API, Smart Contracts, MetaMask",
            description: "Built a tool which aims to prove ownership of AI generated content using blockchain.",
            githubUrl: "https://github.com/gshlok/AchainI"
        }
    ];

    return (
        <section id="projects" className="section">
            <h2>Projects</h2>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <a 
                        key={index} 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="project-card"
                    >
                        <div className="project-content">
                            <h3>{project.title}</h3>
                            <p className="technologies">{project.technologies}</p>
                            <p className="description">{project.description}</p>
                            <div className="github-link">
                                <span>View on GitHub</span>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default Projects;