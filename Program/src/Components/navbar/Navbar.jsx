import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";
function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="navbar">
  <div className="logo">
    <h2>MyWebsite</h2>
  </div>

  <div className="nav-links">
    <Link to="/" className="nav-link">Home</Link>
    <Link to="/about" className="nav-link">About</Link>
    <Link to="/login" className="nav-link">Login</Link>
    <Link to="/signup" className="nav-link">Signup</Link>
  </div>

  <button
  className="theme-toggle-button"
  onClick={toggleTheme}
>
  {theme === "Light" ? "🌙" : "🌞"}
</button>
</nav>
  );
}

export default Navbar;