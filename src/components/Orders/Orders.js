import React from 'react';
import useCart from '../../Hooks/useCart';
import useProduct from '../../Hooks/useProduct';
import "./Order.css";



const Orders = () => {
    const [products, setProducts] = useProduct();
    const [cart, setCart] = useCart(products);
    return (
        <div>
            <h1>This is Orders Section bla bla bla {products.length}  </h1>
            <h1>This is Orders Section bla bla bla {cart.length}  </h1>
        </div>
    );
};

export default Orders;