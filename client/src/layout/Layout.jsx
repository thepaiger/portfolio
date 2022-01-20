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
  // USESTATE, USEEFFECT, ONCLICK FUNC FOR SCROLL-TO-TOP BUTTON
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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="layout">
      {/* ==========MOBILE NAVBAR========== */}
      <nav className="nav-mobile"></nav>

      {/* ==========DESKTOP NAVBAR========== */}
      <nav className="nav-desktop">
        {/* HOME BUTTON */}
        <div className="border-corner">
          <NavHashLink
            className="home-link"
            smooth
            to="#top"
            activeClassName="selected"
          >
            Home
          </NavHashLink>
        </div>

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
        {/* SCROLL-TO-TOP BUTTON */}
        {showScrollBtn && (
          <button className="scroll-up-btn" onClick={scrollToTop}>
            {/* &#8679; */}
            {logos[3].svg}
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              class="back-to-top-icon"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M7 11l5-5m0 0l5 5m-5-5v12"
              />
            </svg> */}
          </button>
        )}
      </footer>
    </div>
  );
}
