import { useState } from "react";
import "./Login.css";
import Header from "../components/Header"

function Login() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [count, setCount] = useState(1);

  const idChange = (event) => {
    setId(event.target.value);
  }

  const passwordChange = (event) => {
    setPassword(event.target.value);
  }

  const countClick = (event) => {
    setCount(count + 1);
  }

  return (
    <div>
      <Header />
      <div className="login-container">
        <h1>로그인</h1>
        <input
          type="text"
          placeholder="아이디"
          className="id"
          onChange={idChange}
        />
        <input
          type="password"
          placeholder="비밀번호"
          className="password"
          onChange={passwordChange}
        />
        <button
          onClick={countClick}
        >
          로그인
        </button>
        <button
        >
          로그아웃
        </button>
      </div>
    </div>
  )
}

export default Login;