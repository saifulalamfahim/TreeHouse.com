import { useEffect, useState } from "react";
import { getStoredCart } from "../utilities/fakedb";


const useCart = (products) => {

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
    return [cart, setCart];
};

export default useCart;