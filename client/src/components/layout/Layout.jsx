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

      {/* ==========MAIN CONTENT========== */}
      <main>{children}</main>

      {/* ==========FOOTER========== */}
      <Footer />
    </div>
  );
}
