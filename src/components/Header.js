import { Link } from "react-router-dom"
import "../components/Header.css"

function Header() {
  return (
    <header className="top-header">
      <div>
        <Link to="/" className="header-main-btn">Main</Link>
      </div>
      <div>
        <Link to="/login" className="header-login-btn">Login</Link>
      </div>
      <div>
        <Link to="/register" className="header-register-btn">Register</Link>
      </div>
      <div>
        <Link to="/cat_image" className="header-cat-image-btn">Cat</Link>
      </div>
    </header>
  )
}

export default Header;
