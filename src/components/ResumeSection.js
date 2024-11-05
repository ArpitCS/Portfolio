import React, { useEffect } from 'react';
import "./ResumeSection.css";

const ResumeSection = () => {
    useEffect(() => {
        const progressBars = Array.from(document.getElementsByClassName('progress'));
        progressBars.forEach(bar => {
            const width = bar.dataset.width;
            bar.style.width = '0%';
            bar.style.transition = 'width 1s ease-in-out';
            setTimeout(() => {
                bar.style.width = width;
            }, 100);
        });
    }, []);

    return (
        <div className="section-container">
            <h2 className="section-header">Resume</h2>
            <hr />

            <div className="section-content">
                <h3 className="content-header">Education</h3>
                <ul className="resume-list">
                    <li className="resume-item">
                        <div className="resume-heading">Bachelor of Science in Computer Science</div>
                        <div className="resume-timeline">2023 - Present</div>
                        <div className="resume-description">
                            Pursuing Bachelor's in Computer Science from Chitkara University. Covering subjects like Data Structures, Algorithms, and Web Development.
                        </div>
                    </li>
                </ul>

                <h3 className="content-header">Experience</h3>
                <ul className="resume-list">
                    <li className="resume-item">
                        <div className="resume-heading">Member of Web Team @ IE(I) Student Chapter</div>
                        <div className="resume-timeline">2024 - Present</div>
                        <div className="resume-description">
                            Working as a member of the Web Team in the Institute of Engineers Student Chapter at Chitkara University, Punjab. Responsible for maintaining the website and adding new features.
                        </div>
                    </li>
                </ul>

                <h3 className="content-header">My Skills</h3>
                <ul className="skills-list">
                    <li className="skill-item">
                        <div className="skill-name">JavaScript</div>
                        <div className="progress-bar">
                            <div className="progress" data-width="45%"></div>
                        </div>
                    </li>
                    <li className="skill-item">
                        <div className="skill-name">HTML</div>
                        <div className="progress-bar">
                            <div className="progress" data-width="70%"></div>
                        </div>
                    </li>
                    <li className="skill-item">
                        <div className="skill-name">CSS</div>
                        <div className="progress-bar">
                            <div className="progress" data-width="55%"></div>
                        </div>
                    </li>
                    <li className="skill-item">
                        <div className="skill-name">React</div>
                        <div className="progress-bar">
                            <div className="progress" data-width="30%"></div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default ResumeSection;
