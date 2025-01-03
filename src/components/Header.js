import { useState, useContext } from "react";
import {LOGO_URL} from "../utils/constant";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {

  const [btnLoginName, setBtnLoginName] = useState('Login');
  const onlineStatus = useOnlineStatus();

  const {loggedUser} = useContext(UserContext);

  // Subscribe the - useSelector() hook
  const cartItems = useSelector((store) => store.cart.items);

  return(
    <div className="flex justify-between items-center bg-white shadow-md shadow-slate-900/10 -shadow-spread-1 mb-3">
      <div className="w-[100]">
      <Link to='/'><img className="logo-image" src={LOGO_URL} alt="logo" /></Link>
      </div>
      <div className="nav-container">
        <ul className="flex list-none">
          <li className="p-2 m-2"> {onlineStatus ? "✅ Network Up" : "🔴 Network Down"}</li>
          <li className="p-2 m-2"><Link to='/'>Home</Link></li>
          <li className="p-2 m-2"><Link to='/about'>About Us</Link></li>
          <li className="p-2 m-2"><Link to='/grocery'>Grocery</Link></li>
          <li className="p-2 m-2"><Link to='/contact'>Contact</Link></li>
          <li className="p-2 m-2 font-bold text-lg"><Link to='/cart'>Cart - {cartItems.length}</Link></li>
          <li className="p-2 m-2">{loggedUser}</li>
          <li className="p-2 m-2">
            <button type="button" className={"text-white font-bold px-3"+ (btnLoginName == "Login" ? " bg-green-700" : " bg-red-700")} onClick={()=>{btnLoginName === "Login" ? setBtnLoginName("Logout") : setBtnLoginName("Login")}}>
              {btnLoginName}
            </button>
            </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;