import React from 'react';
// import { Done, multiply } from '../Utilities/Utilities';
import Cosmo from '../Cosmo/Cosmo';

const Shoes = () => {
    // const first =30;
    // const second= 3;
    // const  total =Done(first,second);
    // const ok =multiply(first,second);
    const cos=[
        {
            id: 43753756327561,
            name: "Product 1",
            price: 9.99
          },
          {
            id: 43753756327562,
            name: "Product 2",
            price: 14.99
          },
          {
            id: 43753756327563,
            name: "Product 3",
            price: 19.99
          }
        ]
    return (
        <div className='product'>
            {/* <h1>Total Device :{total}</h1>
            <h1>Total multiply :{ok}</h1> */}

            {/* ////////////////////////// */}

            {
                cos.map(co =><Cosmo
                key={co.id}
                co ={co}
                ></Cosmo>)
            }

        </div>
    );
};

export default Shoes;