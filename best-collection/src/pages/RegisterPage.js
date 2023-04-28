import React , { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./LoginPage.css"

const RegisterPage = () => {
  const navigate = useNavigate()
 
  const usernameTmp = "davit";
  const passwordTmp = "8888";

  const [Username, setUsername] = useState("")
  const [Password, setPassword] = useState("")
  const [Repassword, setRepassword] = useState("")
  const [Message, setMessage] = useState("")


  const onChangeUsername = (event) =>{
      setUsername(event.target.value)
  }
  const onChangePassword = (event) =>{
      setPassword(event.target.value)
  }
  const onChangeRepassword = (event) =>{
    setRepassword(event.target.value)
}

  const onClickClear = () =>{
    setPassword("")
    setUsername("")
    setRepassword("")
  }
  const onClickLogin = () =>{
    if(Username === ""){
      setMessage("Please fill in username!")
    }else if(Password === Repassword){
      setMessage("Password Not Match")
    }else if(Password === ""){
      setMessage("Please fill in password!")
    }else if(Username === usernameTmp && Password === passwordTmp && Repassword === Password){
      setMessage("Login successfully!")
      navigate("/") // link to another page
      //window.location.href = "/"
    }else{
      setMessage("Username or Password Incorrect")
    }
  }
  return (
    <div>
      <form >
        <div className="container">
          <h1>Register <span>Page</span></h1>

          <hr/>
          <p style={{ color:"red"}}>{Message}</p>

            <label><b>Username</b></label>
            <input type="text" placeholder="Enter Username" value={Username} onChange={onChangeUsername} required/>

            <label><b>Password</b></label>
            <input type="password" placeholder="Enter Password" value={Password} onChange={onChangePassword} required/>

            <label><b>Re-password</b></label>
            <input type="password" placeholder="Enter Re-password" value={Repassword} onChange={onChangeRepassword} required/>
            
            <button className="registerbtn" onClick={onClickLogin}>LOGIN</button>

            <button className="registerbtn" onClick={onClickClear}>CLEAR</button>
        </div>

        <div className="container signin">
            <p>Already have an account? <a href="/login">Login </a>.</p>
        </div>
      </form>
    </div>
  )
}

export default RegisterPage
