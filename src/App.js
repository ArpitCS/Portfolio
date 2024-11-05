import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
import Profile from "./components/Profile";
import AboutSection from "./components/AboutSection";
import ResumeSection from "./components/ResumeSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";

import "./Animations.css";
import "./Responsive.css";

function App() {
  const [currentPage, setCurrentPage] = useState("about");

  const renderPage = () => {
    switch (currentPage) {
      case "about":
        return <AboutSection />;
      case "resume":
        return <ResumeSection />;
      case "projects":
        return <ProjectsSection />;
      case "contact":
        return <ContactSection />;
      default:
        return <AboutSection />;
    }
  };

  return (
    <div className="row app-container">
      <div className="col-md-3 col-12">
        <Profile />
      </div>
      <div className="col-md-9 col-12 sections">
          <div className="page-header">
            <button
              className={currentPage === "about" ? "active" : ""}
              onClick={() => setCurrentPage("about")}
            >
              About
            </button>
            <button
              className={currentPage === "resume" ? "active" : ""}
              onClick={() => setCurrentPage("resume")}
            >
              Resume
            </button>
            <button
              className={currentPage === "projects" ? "active" : ""}
              onClick={() => setCurrentPage("projects")}
            >
              Projects
            </button>
            <button
              className={currentPage === "contact" ? "active" : ""}
              onClick={() => setCurrentPage("contact")}
            >
              Contact
            </button>
          </div>
          {renderPage()}
      </div>
    </div>
  );
}

export default App;
