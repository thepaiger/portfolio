// Packages
import { NavHashLink } from "react-router-hash-link";

// CSS
import "./Layout.css";

// Assets
import resumePdf from "../assets/resume/paige-hoeppner-resume.pdf";

// Services
import { logos } from "../services/logos";

export default function Layout({ children }) {


  return (
    <div className="layout">
      <nav className="nav-mobile">

      </nav>
      <nav className="nav-desktop">
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
      <main>
        {children}
      </main>
      <footer>
        Designed & Built by Paige Hoeppner | 2021
      </footer>
    </div>
  );
}
