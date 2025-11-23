import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const token = localStorage.getItem("token");

  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <nav className="navbar">
      <div className="logo">Digital Literacy</div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/lessons">Lessons</Link>

        {token && <Link to="/dashboard">Dashboard</Link>}
        {!token && <Link to="/login">Login</Link>}
        {!token && <Link to="/register">Register</Link>}
        {token && (
          <button className="logout" onClick={logout}>
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}
