import React from 'react';
import img from '../../images/blake-cheek-3ZJ9zHjJWKk-unsplash (1).jpg';
import './Header.css';
const Header = () => {
    return (
        <div className='Header'>
           <div className='Header-Details'>
                <h6>Sale up to 70% off</h6>
                <h1>New Collection For Fall</h1>
                <p>Discover all the new arrivals of ready-to-wear collection.</p>
                <button>SHOP NOW</button>
           </div>
           <div className='Header-img'>
            <div>
                <img src={img} alt="" />
            </div>
           </div>
        </div>
    );
};

export default Header;