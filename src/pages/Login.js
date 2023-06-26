import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import "./Login.css";
import Header from "../components/Header"

function Login() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [count, setCount] = useState(1);

  const idRef = useRef(null);
  const passwordRef = useRef(null);

  const { state } = useLocation();

  const idChange = (event) => {
    setId(event.target.value);
  }

  const passwordChange = (event) => {
    setPassword(event.target.value);
  }

  const countClick = (event) => {
    setCount(count + 1);
  }

  useEffect(() => {
    if (state?.registerStatus) {
      idRef.current.value = state?.id;
      passwordRef.current.value = state?.password;
    }
  }, [])

  return (
    <div>
      <Header />
      <div className="login-container">
        <h1>로그인</h1>
        <input
          type="text"
          placeholder="아이디"
          className="id"
          ref={idRef}
          onChange={idChange}
        />
        <input
          type="password"
          placeholder="비밀번호"
          className="password"
          ref={passwordRef}
          onChange={passwordChange}
        />
        <button onClick={countClick}>
          로그인
        </button>
      </div>
    </div>
  )
}

export default Login;