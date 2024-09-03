import React, { useContext, useState } from 'react'
import './navbar.css';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/storeContext';
function Navbar({ setShowLogin }) {

  const [menu, setMenu] = useState("Home");

  const { getCartTotalAmount } = useContext(StoreContext);
  return (
    <div className='navbar '>
      <Link to='/'> <img src={"images/logo.png"} className='logo' /></Link>
      <ul className='navbar-menu'>
        <Link to="/" onClick={() => setMenu("home")} className={menu === "Home" ? "active" : ""}>Home</Link>
        <a href="#explore-menu" onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>Menu</a>
        <a href="#app-download" onClick={() => setMenu("Mobile-app")} className={menu === "Mobile-app" ? "active" : ""}>Mobile-app</a>
        <a href="#footer" onClick={() => setMenu("Contact us")} className={menu === "Contact us" ? "active" : ""}>Contact us</a>
      </ul>
      <div className='navbar-right'>
        <img src={"images/search_icon.png"} alt="not found" />
        <div className='navbar-search-icon'>
          <Link to='/cart'>  <img src={"images/basket_icon.png"} alt="not found" /></Link>
          <div className={getCartTotalAmount()===0?"":"dot"}> </div>
        </div>
      </div>
      <button onClick={() => setShowLogin(true)} className='navbar button'>Signin</button>
    </div>
  )
}

export default Navbar