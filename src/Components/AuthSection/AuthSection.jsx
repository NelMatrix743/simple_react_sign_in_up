import { useState } from "react";
import "./AuthSection.css";

import userIco from "~/Assets/user.png";
import emailIco from "~/Assets/email.png";
import passwordIco from "~/Assets/password.png";


let AuthSection = () => {

    let [isLogin, changeAuth] = useState(true);

    return (
        <div className="container">

            <div className="header-section">
                <p className="header-text">{ isLogin ? "Login" : "Sign Up" }</p>
                <div className="underline"></div>
            </div>

            <div className="input-section">

                <div className={isLogin ? "hide" : "input-item" }>
                    <img className="icon" src={userIco} alt="username" />
                    <input type="text" name="" id="" placeholder="username"/>
                </div>

                <div className="input-item">
                    <img className="icon" src={emailIco} alt="email" />
                    <input type="email" name="" id="" placeholder="example@domain.com"/>
                </div>

                <div className="input-item">
                    <img className="icon" src={passwordIco} alt="password" />
                    <input type="password" name="" id="" placeholder="password"/>
                </div>

            </div>

            <div className="button-section">
                <button className="sign-in-btn" onClick={() => changeAuth(true)}>SIGN IN</button>
                <button className="sign-up-btn" onClick={() => changeAuth(false)}>SIGN UP</button>
            </div>

            <div className={ isLogin ? "forgot-password-section" : "hide" }>
                Forgot your password?
                <a href="">click here</a>
            </div>
            
        </div>
    )
};


export default AuthSection;