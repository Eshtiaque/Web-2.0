import React from 'react';
import { useState, useEffect } from "react";



const SingleJob = ({job}) => {
    const {picture, name, company,salary, button1, button2, address} = job;

  
    return (
        <section>
            <div className='p-3 border-2  text-left'>
                <img className='h-10 w-25' src={picture} alt="" />
                <h4>{name}</h4>
                <h3>{company}</h3>
                <div>
                    <button className='bg-gray-500 border-2 font-bold text-xs p-2 me-1 rounded-md text-white'>{button1}</button>
                    <button className='bg-gray-500 border-2 font-bold text-xs p-2 rounded-md text-white'>{button2}</button>
                </div>
                <p className='pb-1'><small>{address}  <br></br>${salary}</small></p>
                <button className='bg-pink-500 font-bold text-xs p-2 rounded-md text-white'>View Details</button>
               
            </div>
        </section>
    );
};

export default SingleJob;