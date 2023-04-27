import React, { useEffect, useState } from 'react';
import PriceCart from '../PriceCart/PriceCart';

const PriceList = () => {
    const [prices, setPrices] = useState([])
    useEffect(() => {
        fetch('prices.json')
            .then(res => res.json())
            .then(data => setPrices(data));
    }, [])
    return (
        <div>
            <h2 className='text-6xl text-center bg-yellow-500 rounded ms-3 me-3 font-bold p-4'>Awesome Price</h2>
        <div className='grid md:grid-cols-3 text-center'>
        {
            prices.map(price=><PriceCart
            key={price.id}
            price={price}
            ></PriceCart>)
        }
        </div>
        </div>

    );
};

export default PriceList;