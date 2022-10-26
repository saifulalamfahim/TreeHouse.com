import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import "./Navber.css";

const Header = () => {
    return (
       <nav className='navber '>
            <img src={logo} alt="" />
            <div>
                <Link to="/shop">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>
            </div>
       </nav>
    );
};

export default Header;