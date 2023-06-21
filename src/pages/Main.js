import React from "react";
import { Link } from "react-router-dom";
import "./Main.css";


function Main() {
  return (
    <div className="main-container">
      <h1>Adorable cat</h1>
      <div className="info-container">
        <Link to="/login">
          <button className="login-btn">
            Login
          </button>
        </Link>
          <Link to="/register">
          <button className="register-btn">
          Register  
          </button>
          </Link>
      </div>
      <Link to="/cat_image">
        <button className="no-login-btn">
          Adorable cats
        </button>
      </Link>
    </div>
  )
}

export default Main;