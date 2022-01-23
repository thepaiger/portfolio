// ====================IMPORTS====================
// Packages
import { useState, useEffect } from "react";
import { NavHashLink } from "react-router-hash-link";

// CSS
import "./Footer.css";

// Services
import { logos } from "../../services/logos";

export default function Footer() {
  // USESTATE, USEEFFECT FOR SCROLL-TO-TOP BUTTON
  const [showScrollBtn, setShowScrollBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowScrollBtn(true);
      } else {
        setShowScrollBtn(false);
      }
    });
  }, []);

  return (
    <footer>
      Designed & Built by Paige Hoeppner | 2021
      {/* Scroll-To-Top Button */}
      {showScrollBtn && (
        <NavHashLink
          className="scroll-up-btn"
          smooth
          to="#top"
          activeClassName="selected"
        >
          {logos[3].svg}
        </NavHashLink>
      )}
    </footer>
  );
}
