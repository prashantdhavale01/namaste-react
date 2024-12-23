import { useState } from "react";
import {LOGO_URL} from "../utils/constant";

const Header = () => {

  const [btnLoginName, setBtnLoginName] = useState('Login')

  return(
    <div className="header-container">
      <div className="logo-container">
          <img className="logo-image" src={LOGO_URL} alt="logo" />
      </div>
      <div className="nav-container">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
          <li>Cart</li>
          <li><button type="button" className="btn-login" onClick={()=>{btnLoginName === "Login" ? setBtnLoginName("Logout") : setBtnLoginName("Login")}}>{btnLoginName}</button></li>
        </ul>
      </div>
    </div>
  );
}

export default Header;