// ====================IMPORTS====================
// Packages
import { NavHashLink } from "react-router-hash-link";

// Components
import Footer from "../Footer/Footer"

// CSS
import "./Layout.css";

// Assets
import resumePdf from "../../assets/resume/paige-hoeppner-resume.pdf";

// Services
import { logos } from "../../services/logos";
import NavDesktop from "../NavDesktop/NavDesktop";

// ====================NAV & FOOTER TO WRAP MAIN CONTENT====================

export default function Layout({ children }) {
  return (
    <div className="layout">
      {/* ==========MOBILE NAVBAR========== */}
      <nav className="nav-mobile"></nav>

      {/* ==========DESKTOP NAVBAR========== */}
      <NavDesktop />
      {/* <nav className="nav-desktop"> */}
      {/* HOME BUTTON */}
      {/* <NavHashLink
          className="home-link"
          smooth
          to="#top"
          activeClassName="selected"
        >
          {logos[4].svg}
        </NavHashLink> */}

      {/* NAVLINKS - ABOUT, PROJECTS, CONTACT, RESUME */}
      {/* <div className="section-links">
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
        </div> */}

      {/* GITHUB & LINKEDIN LINKS */}
      {/* <div className="logo-links">
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
      </nav> */}

      {/* ==========MAIN CONTENT========== */}
      <main>{children}</main>

      {/* ==========FOOTER========== */}
      <Footer />
    </div>
  );
}
