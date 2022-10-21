import React from 'react';
import logo from '../../images/logo.png';
import "./Navber.css";

const Header = () => {
    return (
       <nav className='navber '>
            <img src={logo} alt="" />
            <div>
                <a href="/shop">Shop</a>
                <a href="/Orders">Orders</a>
                <a href="/inventory">Inventory</a>
                <a href="/about">About</a>
            </div>
       </nav>
    );
};

export default Header;