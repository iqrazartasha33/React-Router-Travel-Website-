import { Link } from "react-router-dom";
import Button from "./Button";

function Navbar() {
  function toggleMenu() {
    const menu = document.querySelector(".list");
    menu.classList.toggle("show");
  }

  return (
    <div className="main">
      <h1 className="heading"><span>T</span>Travel</h1>

      <div className="hamburger" onClick={toggleMenu}>☰</div>

      <div>
        <ul className="list">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Aboutpage">About</Link></li>
        <li><Link to="/Contactpage">Contact</Link></li>
        </ul>
      </div>
       <div>
        <Button />
      </div>
    </div>
  );
}

export default Navbar;
