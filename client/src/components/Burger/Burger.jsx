// ====================IMPORTS====================
// CSS
import "./Burger.css";

// Services
import { logos } from "../../services/logos";

export default function Burger({ open, setOpen }) {
  return (
    <div className="burger-icon" onClick={() => setOpen(!open)}>
      {logos[2].svg}
    </div>
  );
}
