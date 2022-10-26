import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useProduct from '../../Hooks/useProduct';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Header from '../Header/Header';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {

    const [products, setProducts] = useProduct();
    const [cart, setCart] = useState([]);

    

    useEffect(() => {
        const storedCart = getStoredCart();
        const saveCart = [];
        for(const id in storedCart){
            const addedProuct = products.find(product => product.id === id);
            if(addedProuct) {
                const quantity = storedCart[id];
                addedProuct.quantity = quantity;
                saveCart.push(addedProuct);
            }
        }
        setCart(saveCart);
       
    }, [products]);

    const handleAddToCart = (selectedProduct) =>{
        let newCart = [];
        const exists = cart.find(product => product.id === selectedProduct.id);
        if(!exists) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else{
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exists.quantity = exists.quantity + 1;
            newCart = [ ...rest, exists];
        }
    
        setCart(newCart);
        addToDb(selectedProduct.id);
    };

    return (
       <div>
         <Header></Header>
        <div className="shop-container">
            <div className='products-container'>
               {
                products.map(product => <Product
                key={product.id}
                product={product}
                handleAddToCart={handleAddToCart}
                ></Product>)
               }
            </div>
            <div className='cart-container'>
                 <Cart cart={cart}>
                 <button className='Clear-Cart-button'>Clear Cart</button>
                    <Link to="/orders">
                        <button className='ReviewOrder-button'>Review Order</button>
                    </Link>
                 </Cart>
            </div>
        </div>
       </div>
    );
};

export default Shop;