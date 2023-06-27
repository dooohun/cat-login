import { useNavigate } from "react-router-dom"
import "../components/Header.css"

function Header() {
  const navigate = useNavigate();
  return (
    <header className="top-header">
        <button onClick={() => navigate(`${process.env.PUBLIC_URL}/`)} className="header-main-btn">Main</button>
        <button onClick={() => navigate("/login")} className="header-login-btn">Login</button>
        <button onClick={() => navigate("/register")} className="header-register-btn">Register</button>
        <button onClick={() => navigate("/cat_image")} className="header-cat-image-btn">Cat</button>
    </header>
  )
}

export default Header;
