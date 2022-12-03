import globe from "../assets/icons/globe.png";

export function Navbar() {
  return (
    <nav className="nav">
      <img className="nav--icon" src={globe} alt="Globe" />
      <p className="nav--text">Travel Journal</p>
    </nav>
  );
}
