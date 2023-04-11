import React from 'react';
import "./Cosmo.css";
import { addToDb, removeFromDb } from '../Utilities/Fakedb';
const Cosmo = (props) => {
    const {name,price,id}=props.co;
    const addToCart=(id)=>{
        // console.log('item:', id)
        addToDb(id);
    }
    // const arrowFunction =()=>addToCart(id);


    const removeFromCart =id=>{
        removeFromDb(id);
    }
    return (
        <div className='product'>
            {/* <h2>Name:{props.co.name}</h2>
            <h3>Price:{props.co.price}</h3> */}
             <h2>Name : {name}</h2>
            <h3>Price : {price}</h3>
            <h4>Id : {id}</h4>
     {/* <button onClick={arrowFunction}>Add to cart</button> */}
     {/* /////////////// */}
     <button onClick={()=>addToCart(id)}>Add to cart</button>
     <button onClick={()=>removeFromCart(id)}>Remove cart</button>

        </div>
    );
};

export default Cosmo;