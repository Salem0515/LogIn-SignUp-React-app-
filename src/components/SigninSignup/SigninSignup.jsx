import React, { useState } from 'react'
import './SigninSignup.css'
import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'

export const SigninSignup = () => {

  const [Action, setAction] = useState("LogIn");










  return (
    <div className='container'>
      <div className="header">
        <div className="text">{Action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {Action === "Login" ? <div></div> : <div className="input">
          <img src={user_icon} alt="" />
          <input type="text" placeholder="Name" /></div>}

        <div className="input">
          <img src={email_icon} alt="" />
          <input type="email" placeholder="Email" />
        </div>
        <div className="input">
          <img src={password_icon} alt="" />
          <input type="password" placeholder='Password' />
        </div>
      </div>
      {Action === "SignUp" ? <div></div> : <div className="forget-password">Lost Password <span>Click Here!</span></div>}
      <div className="submit-container">
        <div className={Action === " LogIn " ? "submit gray" : "submit"} onClick={() => { setAction("SignUp") }}>SignUp</div>
        <div className={Action === "SignUp" ? "submit gray" : "submit"} onClick={() => { setAction("Login") }}>LogIn</div>

      </div>

    </div>
  )
}






