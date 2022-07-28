import { Link } from "react-router-dom";
import logo from "./assets/pokedex_logo.png";

function Header() {
  return (
    <header>
      <Link to="/">
        <img className="logo" src={logo} alt="logo of pokemon"></img>
      </Link>
    </header>
  );
}
export default Header;
