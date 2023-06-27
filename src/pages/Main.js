import React from "react";
import { useNavigate } from "react-router-dom";
import "./Main.css";

function Main() {
  const navigate = useNavigate();
  return (
    <div className="main-container">
      <h1>Adorable cat</h1>
      <div className="info-container">
        <button onClick={() => navigate("login")} className="login-btn">
            Login
          </button>
          <button onClick={() => navigate("register")} className="register-btn">
            Register  
          </button>
      </div>
        <button onClick={() => navigate("cat_image")} className="no-login-btn">
          Adorable cats
        </button>
    </div>
  )
}

export default Main;