// ====================IMPORTS====================
// Components
import Footer from "../Footer/Footer.jsx"
import NavDesktop from "../NavDesktop/NavDesktop.jsx";

// CSS
import "./Layout.css";

// ====================NAV & FOOTER TO WRAP MAIN CONTENT====================

export default function Layout({ children }) {
  return (
    <div className="layout">
      <NavDesktop />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
