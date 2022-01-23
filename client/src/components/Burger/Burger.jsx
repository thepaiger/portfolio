// ====================IMPORTS====================
// CSS
import "./Burger.css";

// Services
// import { logos } from "../../services/logos";

export default function Burger({ open, setOpen }) {
  return (
    <div className={open ? "burger-icon open" : "burger-icon"} onClick={() => setOpen(!open)}>
      {/* {logos[2].svg} */}
      <div className="line-1" />
      <div className="line-2" />
      <div className="line-3" />
    </div>
  );
}
