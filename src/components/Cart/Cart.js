import React from 'react';
import "./Cart.css";

const Cart = (props) => {
    return (
        <div className='cart'>
             <h4>Orders Summery {props.cart.length}</h4>
        </div>
    );
};

export default Cart;