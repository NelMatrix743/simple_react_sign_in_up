import "./AuthSection.css";

import userIco from "~/Assets/user.png";
import emailIco from "~/Assets/email.png";
import passwordIco from "~/Assets/password.png";


let AuthSection = () => {
    return (
        <div className="container">

            <div className="header-section">
                <p className="header-text">Sign Up</p>
                <div className="underline"></div>
            </div>

            <div className="input-section">

                <div className="input-item">
                    <img className="icon" src={userIco} alt="username" />
                    <input type="text" name="" id="" />
                </div>

                <div className="input-item">
                    <img className="icon" src={emailIco} alt="email" />
                    <input type="email" name="" id="" />
                </div>

                <div className="input-item">
                    <img className="icon" src={passwordIco} alt="password" />
                    <input type="password" name="" id="" />
                </div>

            </div>

            <div className="button-section">
                <button className="sign-in-btn">SIGN IN</button>
                <button className="sign-up-btn">SIGN UP</button>
            </div>

            <div className="forgot-password-section">
                Forgot your password?
                <a href="">CLICK HERE</a>
            </div>
            
        </div>
    )
};


export default AuthSection;