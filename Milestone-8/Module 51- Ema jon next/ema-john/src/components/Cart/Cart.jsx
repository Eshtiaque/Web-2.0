import React from 'react';

const Cart = ({ cart }) => {
    // const cart=props.cart;
    // const cart =props;
    // console.log(cart);
    let totalPrice = 0;
    let  totalShipping = 0;
    let quantity = 0;
    for (const product of cart) {
        product.quantity =product.quantity || 1;
        totalPrice = totalPrice + product.price * product.quantity;
        totalShipping = totalShipping + product.Shipping;
        quantity = quantity + product.quantity;
    }
    const tax = totalPrice * 7 / 100;
    const grandTotal = totalPrice + totalShipping + tax;

    return (
        <div className='cart-container'>
            <h3 className='summary'>Order Summary</h3>
            <p>Selected Item : {quantity}</p>
            <p>Total Price : ${totalPrice} </p>
            <p>Total Shipping : ${totalShipping} </p>
            <p>Tax : ${tax.toFixed(2)}</p>
            <h3>Grand Total : ${grandTotal.toFixed(2)}</h3>

            <button onClick={()=>deleteShoppingCart(id)}>Clear Cart</button>
                <button>Proceed Checkout</button> 
        </div>
    );
};

export default Cart;