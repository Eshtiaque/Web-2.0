// import React from 'react';

import { useState ,useEffect } from "react";
import ServicesCard from "./ServicesCard";

const Services = () => {
    const [services, setServices] =useState([]);
    useEffect (()=>{
        fetch('Services.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    })
    return (
        <div className="mt-4">
            <div className="text-center">
                <h3 className="text-3xl font-semibold text-orange-600 ">Our Services</h3>
                <h2 className="text-5xl font-bold mb-2">Our Services Area</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At nihil totam rerum <br/>expedita sint esse soluta labore fuga fugit commodi?</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
               
                {
                    services.map(service=>
                    <ServicesCard key={service._id}
                    service={service}></ServicesCard>)
                }
            </div>
        </div>
    );
};

export default Services;