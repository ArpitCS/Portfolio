import React from 'react';
import './ProjectsSection.css';

import beimage from '../media/beimage-project.png';
import mineguard from '../media/mineguard-project.png';
import quickmed from '../media/quickmed-project.png';

const projects = [
    {
        title: "QuickMed: Medical Hub",
        topic: "Front-End Website with Firebase",
        techStack: ["JS", "CSS", "HTML", "Firebase", "Bootstrap"],
        imageUrl: quickmed,
        link: "https://quick-med-fee.web.app",
        description: "QuickMed is a medical hub website that provides information about various medical services and facilities. It also provides a platform for booking appointments with doctors."
    },
    {
        title: "MineGuard",
        topic: "IoT-Based Monitoring Dashboard",
        techStack: ["React", "Arduino", "Firebase", "Bootstrap"],
        imageUrl: mineguard,
        link: "https://github.com/arpitcs/MineGuard",
        description: "MineGuard is an IoT-based monitoring dashboard that helps in monitoring various parameters of a mine. It uses IoT Sensors & Microcontrollers for data collection and Firebase for data storage."
    },
    {
        title: "BeImage: Image Gallery",
        topic: "Front-End Website with Django",
        techStack: ["Python", "Django", "JS", "CSS", "HTML", "Bootstrap"],
        imageUrl: beimage,
        link: "https://github.com/arpitcs/BeImage-Django",
        description: "BeImage is an image gallery website built using Django. It allows users to upload, view, and download images. It also provides features like search, filter and favorite images."
    }
];

const ProjectsSection = () => {
    return (
        <div className="section-container">
            <h2 className="section-header">Projects</h2>
            <hr />
            {projects.map((project, index) => (
                <div className="project-card" key={index}>
                    <div className="project-details">
                        <h3>{project.title}</h3>
                        <div className="tech-stack">
                            {project.techStack.map((tech, idx) => (
                                <span className="tech-label" key={idx}>{tech}</span>
                            ))}
                        </div>
                        <p>{project.description}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                            <button>View Project</button>
                        </a>
                    </div>
                    <div className="project-image">
                        <img src={project.imageUrl} alt={project.title} />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProjectsSection;