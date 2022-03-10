import React, { useState } from 'react';

import './style.css';
import { Link } from 'react-router-dom'
import { connect } from "react-redux";
import cart from '../../../redux/cart';
import CartImg from './shopping-cart.png';
import WishlistImg from './wishlist.png';
import HamburgerMenuImg from './menu.png';


function Nav ( { cartItems } ) {

  const [menu, setMenu] = useState('nav_wrapper-items hamburger_close');
  const [logo, setLogo] = useState('nav_wrapper-logo_open_menu');

  function openCloseMenu () {
    if (menu === 'nav_wrapper-items hamburger_close') {
      setMenu('nav_wrapper-items hamburger_open')
    } else {
      setMenu('nav_wrapper-items hamburger_close')
    }
  }

  function closeMenu () {
    setMenu('nav_wrapper-items hamburger_close')
  }

  return (
    <div className="nav_wrapper wrapper wrapper-m">

    <div className="nav_wrapper_left_box">
      <span onClick={closeMenu} className="nav_wrapper-logo"><Link to="/">UMEA</Link></span>

      <div className={menu}>
        <span onClick={closeMenu} className="nav_wrapper-logo-fixed"><Link to="/">UMEA</Link></span>
        <span onClick={closeMenu} className="nav_wrapper-link"><Link to="/">Home</Link></span>
        <span onClick={closeMenu} className="nav_wrapper-link"><Link to="/">Products</Link></span>
        <span onClick={closeMenu} className="nav_wrapper-link"><Link to="/">About us</Link></span>
        <span onClick={closeMenu} className="nav_wrapper-link"><Link to="/">Contacts</Link></span>
      </div>
    </div>

      <div className="nav_wrapper-profile">
        <span className="shopping-cart_cart-img"><Link to="/chechout"> <img src={CartImg} alt="shopping cart"/> </Link> <span className="cart-count">({cartItems.length})</span> </span>
      </div>


      <div className="nav_wrapper_hamburger">
        <span className="shopping-cart_cart-img"><Link to="/chechout"> <img src={CartImg} alt="shopping cart"/> </Link> <span className="cart-count">{cartItems.length}</span> </span>
        <div className="nav_wrapper_hamburger-img">
          <img onClick={openCloseMenu} src={HamburgerMenuImg} alt="menu"/>
        </div>
      </div>
    </div>
  );
}

function mapStateToProps ({ cart }) {
  return {
    cartItems: cart.addToCart,
  }
}

export default connect(mapStateToProps)(Nav);
