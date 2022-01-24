// ====================IMPORTS====================
// Packages
import { useState, useRef } from "react";

// Components
import Burger from "../Burger/Burger";
import Footer from "../Footer/Footer"
import NavDesktop from "../NavDesktop/NavDesktop";

// CSS
import "./Layout.css";

// Services
import { useOnClickOutside } from "../../services/hooks"

// ====================NAV & FOOTER TO WRAP MAIN CONTENT====================

export default function Layout({ children }) {
  const node = useRef();
  const [open, setOpen] = useState(false);

  useOnClickOutside(node, () => setOpen(false));

  return (
    <div className="layout">
      <div ref={node}>
        <Burger open={open} setOpen={setOpen} />
        <NavDesktop open={open} />
      </div>
      <main>{children}</main>
      <Footer />
    </div>
  );
}
