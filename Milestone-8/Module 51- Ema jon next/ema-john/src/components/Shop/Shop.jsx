import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product'
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';

const Shop = () => {
    const [products, setProduct] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, []);
    //local storage issue
    useEffect(() => {
        const storedCart = getShoppingCart();
        const savedCart = [];
        console.log(storedCart);
        //step 1 get id
        for (const id in storedCart) {
            //step-2 get the product by using id
            const addedProduct = products.find(product => product.id === id)

            if (addedProduct) {
                //step-3 get quantity of the products
                const quantity = storedCart[id];
                addedProduct.quantity = quantity
                // console.log(addedProduct);
                //step-4: add the added product to saved cart.
                savedCart.push(addedProduct);
            }
        }
        //step-5 set the cart
        setCart(savedCart);
    }, [products]);




    const eventHandler = (product) => {
        let newCart = [];
        // const newCart =[...cart,product];
        const exist = cart.find(pd => pd.id === product.id)
        if (!exist) {
            products.quantity = 1;
            newCart = [...cart, product];
        }
        else {
            exist.quantity = exist.quantity + 1;
            const remaining =cart.filter(pd=>pd.id!==product.id);     
            newCart = [...remaining, exist];
        }

        setCart(newCart);
        addToDb(product.id)//local issue
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