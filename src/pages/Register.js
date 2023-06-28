import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";
import Header from "../components/Header"

function Register() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [studentId, setStudentId] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [idMessage, setIdMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [studentIdMessage, setStudentIdMessage] = useState("");

  const idPattern = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/i;

  const navigate = useNavigate();

  const validateEmail = (email) => {
    if (email.match(idPattern) != null) {
      setIdMessage("올바른 형태입니다.");
    } else {
      setIdMessage("올바른 이메일 형태가 아닙니다.");
    }
  }

  const findMajor = () => {
    const majorNum = studentId.slice(5, 7);

    if (majorNum === "20") {
      setStudentIdMessage("기계공학부");
    } else if(majorNum === "40"){
      setStudentIdMessage("메카트로닉스공학부");
    } else if(majorNum === "61"){
      setStudentIdMessage("전기․전자․통신공학부");
    } else if(majorNum === "36"){
      setStudentIdMessage("컴퓨터공학부");
    } else if(majorNum === "51"){
      setStudentIdMessage("디자인·건축공학부 디자인공학전공");
    } else if(majorNum === "72"){
      setStudentIdMessage("디자인·건축공학부 건축공학전공");
    } else if(majorNum === "74"){
      setStudentIdMessage("에너지신소재화학공학부");
    } else if(majorNum === "80"){
      setStudentIdMessage("산업경영학부");
    } else{
      setStudentIdMessage("");
    }
  }

  const onIdHandler = (event) => {
    setId(event.target.value);
    validateEmail(event.target.value);
  }


  function checkPasswordMatch(currentPassword) {
    if (currentPassword !== confirmPassword && currentPassword !== password)
      setPasswordMessage("비밀번호가 일치하지 않습니다.");
    else
      setPasswordMessage("비밀번호가 일치합니다!");
  }

  const onPasswordHandler = (event) => {
    const currentPassword = event.target.value;
    setPassword(currentPassword);
    checkPasswordMatch(currentPassword);
  
  }
  
  const onConfirmPasswordHandler = (event) => {
    const currentPasswordConfirm = event.target.value;
    setConfirmPassword(currentPasswordConfirm);
    checkPasswordMatch(currentPasswordConfirm);
  }

  const onStudentHandler = (event) => {
    const studentIdValue = event.target.value;
    setStudentId(studentIdValue);
    if (studentIdValue.length > 6)
      findMajor();
  }

  const onPhoneNumberHandler = (event) => {
    const autoHyphen = event.target.value
    .replace(/[^0-9]/g, '')
      .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, "$1-$2-$3").replace(/(\-{1,2})$/g, "");
    setPhoneNumber(autoHyphen);
  }

  return (
    <div>
      <Header />
      <div className="register-container">
        <h1>회원가입</h1>
        <p>{idMessage}</p>
        <input
          type="email"
          placeholder="아이디"
          onChange={onIdHandler}
        />
        <br/>
        <input
          type="password"
          placeholder="비밀번호"
          onChange={onPasswordHandler}
        />
        <br/>
        <input
          type="password"
          placeholder="비밀번호 확인"
          onChange={onConfirmPasswordHandler}
        />
        <p>{ passwordMessage }</p>
        <input
          type="text"
          placeholder="학번"
          onChange={onStudentHandler}
        />
        <p>{ studentIdMessage }</p>
        <input
          type="text"
          placeholder="전화번호"
          onChange={onPhoneNumberHandler}
          value={phoneNumber}
        />
        <div>
          <button onClick={() => navigate("/login", {
            state: {
              id: id,
              password: password,
              registerStatus: true,
            }
          })}>회원가입</button>
          <button className="cancel-btn" onClick={() => navigate("/login")}>
            취소
          </button>
        </div>
      </div>
    </div>
  )
}

export default Register;
