import React from 'react';

const Cart = ({ cart }) => {
    // const cart=props.cart;
    // const cart =props;
    console.log(cart);
    let totalPrice = 0;
    let totalShipping = 0;
    for (const product of cart) {
        totalPrice = totalPrice + product.price;
        totalShipping = totalShipping + product.Shipping;
    }
    const tax = totalPrice * 7 / 100;
    const grandTotal = totalPrice + tax;

    return (
        <div className='cart-container'>
            <h3 className='summary'>Order Summary</h3>
            <p>Selected Item : {cart.length}</p>
            <p>Total Price : ${totalPrice} </p>
            <p>Total Shipping : ${totalShipping} </p>
            <p>Tax : ${tax.toFixed(2)}</p>
            <h3>Grand Total : ${grandTotal.toFixed(2)}</h3>

            {/* <button>Clear Cart</button>
                <button>Proceed Checkout</button>  */}
        </div>
    );
};

export default Cart;