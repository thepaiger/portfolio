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
        LinkedIn
        Github
        Design & Built by Paige Hoeppner
      </footer>
    </div>
  )
}
