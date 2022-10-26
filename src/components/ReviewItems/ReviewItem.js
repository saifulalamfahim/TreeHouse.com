import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import "./ReviewItem.css";

const ReviewItem = (props) => {
    const {product, handleRemoveProduct} = props;
    const {name, img, price, shipping, qunatity} = product;
    return (
        <div className='review-items'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='review-item-details-container'>
                <div className='review-item-details'>
                    <h3 className='product-name'>{name}</h3>
                    <p>Price <span className='orange-color'>{price}</span></p>
                    <p><small>Shipping: {shipping}</small></p>
                    <p><small>Quantity: {qunatity}</small></p>
                </div>

            </div>
            <div className='delete-container'>
                    <button onClick={() =>handleRemoveProduct(product)} className='delete-button'>
                        <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
                    </button>
            </div>
        </div>
    );
};

export default ReviewItem;