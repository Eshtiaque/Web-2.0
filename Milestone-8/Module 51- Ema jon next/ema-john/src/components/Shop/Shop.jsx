import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product'
import Cart from '../Cart/Cart';


const Shop = () => {
    const [products, setProduct] = useState([]);
    const [cart, setCart] = useState([]);




    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, []);
    const eventHandler = (product) => {
        const newCart =[...cart,product];
        setCart(newCart);
    }
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        eventHandler={eventHandler}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
                {/* <h3 className='summary'>Order Summary</h3>
                <p>Selected Item :  {cart.length}</p>
                <p>Total Price : </p>
                <p>Total Shipping Charge : </p>
                <p>Tax : </p>
                <h3>Grand Total :</h3>
                <button>Clear Cart</button>
                <button>Proceed Checkout</button> */}
            </div>
        </div>
    );
};

export default Shop;