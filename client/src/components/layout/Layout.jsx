// ====================IMPORTS====================
// Components
import Footer from "../Footer/Footer"
import NavDesktop from "../NavDesktop/NavDesktop";

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
