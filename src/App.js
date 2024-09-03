import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {Home} from './components/pages/home/home';
import {Cart} from './components/pages/cart/cart';
import {PlaceOrder} from './components/pages/placeOrder/placeOrder';
import { Footer } from './components/footer/footer';
import { NotFound } from './components/pages/pageNotFound/pageNotFound';
import { useState } from 'react';
import { LoginPopUp } from './components/loginPopup/loginPopup';
function App() {

  const[showLogin,setShowLogin]=useState(false);
  return (
    <>
    {showLogin?<LoginPopUp setShowLogin={setShowLogin}/>:<></>}
    <div className='App'>
     <Navbar setShowLogin={setShowLogin}/>
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="cart" element={<Cart/>}/>
        <Route path="placeOrder" element={<PlaceOrder/>}/>
        <Route path="/*" element={<NotFound/>}/>
      </Routes>
     
      <Footer/>
    </div>
    </>
  );
}

export default App;
