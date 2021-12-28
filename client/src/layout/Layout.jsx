// Packages
import { Link } from 'react-router-dom';

// CSS
import './Layout.css'

export default function Layout({ children }) {
  return (
    <div className="layout">
      <nav>
        <Link to="#home">Home</Link>

        About
        Work
        Contact
        Resume
      </nav>
      <main>
        {children}
      </main>
      <footer>
        <a href="https://www.linkedin.com/in/paige-hoeppner/" target="_blank">LinkedIn</a>
        <a href="https://github.com/thepaiger" target="_blank">Github</a>
        Design & Built by Paige Hoeppner
      </footer>
    </div>
  )
}
