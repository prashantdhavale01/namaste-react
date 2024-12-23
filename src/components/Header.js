import {LOGO_URL} from "../utils/constant";

const Header = () => {
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
        </ul>
      </div>
    </div>
  );
}

export default Header;