import React from 'react';
import "./Product.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


const Product = (props) => {
    const {name, img, seller, price, ratings} = props.product;
    
    return (
        <div className='product'>
           <div className='product-details'>
           <img src={img} alt={name} />
            <div>
            <h1>{name}</h1>
            <h3>Price: ${price}</h3>
            </div>
            <div>
                <p><small>Manufacturer: {seller}</small></p>
            <p><small>Rating: {ratings}</small></p>
            </div>
           </div>
           <div className='Add-to-Cart'>
                <button onClick={() =>props.handleAddToCart(props.product)}>Add To Cart  <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></button>
               
           </div>
        </div>
    );
};

export default Product;