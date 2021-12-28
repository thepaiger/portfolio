// Packages
import { NavHashLink } from 'react-router-hash-link';

// CSS
import './Layout.css';

// Assets
import githubLogo from '../assets/graphics/github.svg';
import linkedinLogo from '../assets/graphics/linkedin.svg';
import homeButtonCorners from '../assets/graphics/home-button-corners.png'
import resumePdf from '../assets/resume/paige-hoeppner-resume.pdf';

export default function Layout({ children }) {
  return (
    <div className="layout">
      <nav>
        {/* <img className="home-button-corners" src={homeButtonCorners} alt="home button corners" /> */}
        <NavHashLink className="home-link" smooth to="#top">Home</NavHashLink>
        <div className="section-links">
          <NavHashLink className="nav-link" smooth to="#about">About</NavHashLink>
          <NavHashLink className="nav-link" smooth to="#projects" activeClassName="selected" activeStyle={{ color: 'red' }}>Projects</NavHashLink>
          <NavHashLink className="nav-link" smooth to="#contact">Contact</NavHashLink>
          <a className="nav-link" href={resumePdf} target="_blank">Resume</a>
        </div>
      </nav>
      <main>
        {children}
      </main>
      <footer>
        <a href="https://www.linkedin.com/in/paige-hoeppner/" target="_blank"><img src={githubLogo} alt="Github Logo" /></a>
        <a href="https://github.com/thepaiger" target="_blank"><img src={linkedinLogo} alt="LinkedIn Logo" /></a>
        Designed & Built by Paige Hoeppner | 2021
      </footer>
    </div>
  )
}
