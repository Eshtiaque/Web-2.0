import React from 'react';
import Feature from '../Feature/Feature';

const PriceCart = ({ price }) => {
    return (
        <div className=' bg-yellow-500 m-2 p-2 rounded-md flex flex-col' >
            <h5 className='text-center'>
                <span className='text-3xl font-extrabold'>{price.name}</span>
                <span className='text-1xl'>/mon</span>
            </h5>
            <h5 className='text-2xl font-bold'> {price.price}</h5>
            <p className='text-1xl font-bold'>Feature:</p>
            <span className='text-left p-2'>
                {
                    price.features.map((feature, idx) => <Feature
                    key={idx}
                        feature={feature}
                    ></Feature>)
                }
            </span>
            <button className='w-full mt-auto bg-black text-white text-bold rounded-md p-2 '>Buy Now</button>
        </div>
    );
};

export default PriceCart;