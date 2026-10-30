
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../ThemeContext";

function Navbar() {
  const { theme, setTheme } = useContext(ThemeContext);

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <nav className={`navbar ${theme}`}>
      <h2 className="logo">MyWebsite</h2>

      <div className="nav-links">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/user/10">User Profile</NavLink>
      </div>

      <button className="theme-button" onClick={toggleTheme}>
        {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
      </button>
    </nav>
  );
}

export default Navbar;
