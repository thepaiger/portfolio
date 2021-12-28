// Packages
import { Link } from 'react-router-dom';

// CSS
import './Layout.css'

// Assets
import githubLogo from '../assets/graphics/github.svg';
import linkedinLogo from '../assets/graphics/linkedin.svg';
import resumePdf from '../assets/resume/paige-hoeppner-resume.pdf'

export default function Layout({ children }) {
  return (
    <div className="layout">
      <nav>
        <Link to="#home">Home</Link>
        About
        Projects
        Contact
        <a href={resumePdf} target="_blank">Resume</a>
      </nav>
      <main>
        {children}
      </main>
      <footer>
        <a href="https://www.linkedin.com/in/paige-hoeppner/" target="_blank"><img src={githubLogo} alt="Github Logo" /></a>
        <a href="https://github.com/thepaiger" target="_blank"><img src={linkedinLogo} alt="LinkedIn Logo" /></a>
        Design & Built by Paige Hoeppner | 2021
      </footer>
    </div>
  )
}
