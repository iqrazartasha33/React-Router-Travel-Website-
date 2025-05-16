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
          <li><a href="/">Home</a></li>
          <li><a href="/Aboutpage">About</a></li>
          <li><a href="/Contactpage">Contact</a></li>
        </ul>
      </div>
       <div>
        <Button />
      </div>
    </div>
  );
}

export default Navbar;
