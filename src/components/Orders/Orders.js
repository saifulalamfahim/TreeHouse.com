import React from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../Hooks/useCart';
import useProduct from '../../Hooks/useProduct';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItems/ReviewItem';
import './Order.css';



const Orders = () => {
    const [products, setProducts] = useProduct();
    const [cart, setCart] = useCart(products);
    const handleRemoveProduct = product => {
        const rest = cart.filter(pd => pd.id !== product.id);
        setCart(rest);
        removeFromDb(product.id)
    }
    return (
        <div className='order-container'>
          <div className='review-items-container'>
            {
                cart.map(product => <ReviewItem
                key={product.id}
                product={product}
                handleRemoveProduct={handleRemoveProduct}
                ></ReviewItem>)
            }
          </div>
          <div className='cart-container'>
                <Cart cart={cart}>
                    <Link to="/inventory">
                        <button className='ProccesCheckout-button'>Precced Checkout</button>
                    </Link>
                </Cart>
          </div>
        </div>
    );
};

export default Orders;