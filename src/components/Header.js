import { useState } from "react";
import {LOGO_URL} from "../utils/constant";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {

  const [btnLoginName, setBtnLoginName] = useState('Login');
  const onlineStatus = useOnlineStatus();

  return(
    <div className="header-container">
      <div className="logo-container">
          <img className="logo-image" src={LOGO_URL} alt="logo" />
      </div>
      <div className="nav-container">
        <ul>
          <li>Online Status {onlineStatus ? "✅" : "🔴"}</li>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About Us</Link></li>
          <li><Link to='/grocery'>Grocery</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
          <li>Cart</li>
          <li><button type="button" className="btn-login" onClick={()=>{btnLoginName === "Login" ? setBtnLoginName("Logout") : setBtnLoginName("Login")}}>{btnLoginName}</button></li>
        </ul>
      </div>
    </div>
  );
}

export default Header;