// ====================IMPORTS====================
// Packages
import { useState, useEffect } from "react";
import { NavHashLink } from "react-router-hash-link";

// CSS
import "./Layout.css";

// Assets
import resumePdf from "../assets/resume/paige-hoeppner-resume.pdf";

// Services
import { logos } from "../services/logos";

// ====================NAV & FOOTER TO WRAP MAIN CONTENT====================

export default function Layout({ children }) {
  // USESTATE, USEEFFECT FOR SCROLL-TO-TOP BUTTON
  const [showScrollBtn, setShowScrollBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowScrollBtn(true);
      } else {
        setShowScrollBtn(false);
      }
    });
  }, []);

  return (
    <div className="layout">
      {/* ==========MOBILE NAVBAR========== */}
      <nav className="nav-mobile"></nav>

      {/* ==========DESKTOP NAVBAR========== */}
      <nav className="nav-desktop">
        {/* HOME BUTTON */}
        <NavHashLink
          className="home-link"
          smooth
          to="#top"
          activeClassName="selected"
        >
          {logos[4].svg}
        </NavHashLink>

        {/* NAVLINKS - ABOUT, PROJECTS, CONTACT, RESUME */}
        <div className="section-links">
          <NavHashLink
            className="nav-link"
            smooth
            to="#about"
            activeClassName="selected"
          >
            About
          </NavHashLink>
          <NavHashLink
            className="nav-link"
            smooth
            to="#projects"
            activeClassName="selected"
          >
            Projects
          </NavHashLink>
          <NavHashLink
            className="nav-link"
            smooth
            to="#contact"
            activeClassName="selected"
          >
            Contact
          </NavHashLink>
          <a href={resumePdf} target="_blank" rel="noopener noreferrer">
            <button className="resume-btn-nav">Resume</button>
          </a>
        </div>

        {/* GITHUB & LINKEDIN LINKS */}
        <div className="logo-links">
          <a
            className="github-logo"
            href="https://github.com/thepaiger"
            target="_blank"
            rel="noopener noreferrer"
          >
            {logos[0].svg}
          </a>
          <a
            className="linkedin-logo"
            href="https://www.linkedin.com/in/paige-hoeppner/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {logos[1].svg}
          </a>
        </div>
      </nav>

      {/* ==========MAIN CONTENT========== */}
      <main>{children}</main>

      {/* ==========FOOTER========== */}
      <footer>
        Designed & Built by Paige Hoeppner | 2021
        {/* Scroll-To-Top Button */}
        {showScrollBtn && (
          <NavHashLink
            className="scroll-up-btn"
            smooth
            to="#top"
            activeClassName="selected"
          >
            {logos[3].svg}
          </NavHashLink>
        )}
      </footer>
    </div>
  );
}
