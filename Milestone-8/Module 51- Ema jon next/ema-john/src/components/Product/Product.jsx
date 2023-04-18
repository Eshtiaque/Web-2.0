import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
const Product = (props) => {
    console.log(props);
    const { img, ratings, name, seller, price } = props.product;
    const eventHandler = props.eventHandler;


    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h4 className='name'>Name: {name}</h4>
                <h5 className='price'>Price : $ {price}</h5>
                <h5 className='seller'>Manufacturer : {seller}</h5>
                <h5 className='rating'>Rating : {ratings}</h5>
            </div>
            <button onClick={() => eventHandler(props.product)} className='button'>
                Add to Cart
                <FontAwesomeIcon icon={faCartShopping} />
            </button>
        </div>
    );
};
export default Product;