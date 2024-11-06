import React from "react";
import "./AboutSection.css";

import webdev from "../media/web-development.png";
import fundamentals from "../media/computer-fundamentals.png";
import datastructures from "../media/data-structures.png";
import electronics from "../media/electronics.png";

const AboutSection = () => {
  return (
    <>
      <div className="section-container">
        <h1 className="section-header">About Me</h1>
        <hr />
        <div className="section-content">
          Hi, I'm Arpit Garg, a Computer Science student at Chitkara University.
          I'm passionate about learning new technologies and building projects.
          I'm currently focusing on Web Development, Data Structures, and
          Computer Fundamentals. I'm also interested in Electronics and IoT. I
          love to work on projects that solve real world problems and have a
          positive impact on society.
        </div>
        <h2 className="content-header">What I'm Doing</h2>
        <div className="courses-container">
          <div className="course-card">
            <div className="left">
              <img src={webdev} alt="" />
            </div>
            <div className="right">
              <h3 className="course-heading">Web Development</h3>
              <p className="course-info">
                Front-end Based Web Development using HTML, CSS, and JavaScript.
                Even some frameworks like React.
              </p>
            </div>
          </div>
          <div className="course-card">
            <div className="left">
              <img src={fundamentals} alt="" />
            </div>
            <div className="right">
              <h3 className="course-heading">Data Structures</h3>
              <p className="course-info">
                Learning about different data structures and algorithms to
                improve problem-solving skills.
              </p>
            </div>
          </div>
          <div className="course-card">
            <div className="left">
              <img src={datastructures} alt="" />
            </div>
            <div className="right">
              <h3 className="course-heading">Computer Fundamentals</h3>
              <p className="course-info">
                Learning about the basics of computer science and how computers
                work. Operating Systems, Computer Networks, etc.
              </p>
            </div>
          </div>
          <div className="course-card">
            <div className="left">
              <img src={electronics} alt="" />
            </div>
            <div className="right">
              <h3 className="course-heading">Electronics</h3>
              <p className="course-info">
                Solving real world problems using electronics and
                microcontrollers. Arduino, Raspberry Pi, etc.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
