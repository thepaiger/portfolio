// Packages
import { NavHashLink } from "react-router-hash-link";

// CSS
import "./Layout.css";

// Assets
import githubLogo from "../assets/graphics/github.svg";
import linkedinLogo from "../assets/graphics/linkedin.svg";
import resumePdf from "../assets/resume/paige-hoeppner-resume.pdf";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <nav>
        <NavHashLink
          className="home-link"
          smooth
          to="#top"
          activeClassName="selected"
        // activeStyle={{ color: "red" }}
        >
          Home
        </NavHashLink>
        <div className="section-links">
          <NavHashLink
            className="nav-link"
            smooth
            to="#about"
            activeClassName="selected"
          // activeStyle={{ color: "red" }}
          >
            About
          </NavHashLink>
          <NavHashLink
            className="nav-link"
            smooth
            to="#projects"
            activeClassName="selected"
          // activeStyle={{ color: "red" }}
          >
            Projects
          </NavHashLink>
          <NavHashLink
            className="nav-link"
            smooth
            to="#contact"
            activeClassName="selected"
          // activeStyle={{ color: "red" }}
          >
            Contact
          </NavHashLink>
          <button>
            <a

              href={resumePdf}
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </button>
        </div>
        <div className="logo-links">
          <a
            className="github-logo"
            href="https://github.com/thepaiger"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={githubLogo} alt="Github Logo" />
          </a>
          <a
            className="linkedin-logo"
            href="https://www.linkedin.com/in/paige-hoeppner/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedinLogo} alt="LinkedIn Logo" />
          </a>
        </div>
      </nav>
      <main>{children}</main>
      <footer>
        Designed & Built by Paige Hoeppner | 2021
      </footer>
    </div>
  );
}
