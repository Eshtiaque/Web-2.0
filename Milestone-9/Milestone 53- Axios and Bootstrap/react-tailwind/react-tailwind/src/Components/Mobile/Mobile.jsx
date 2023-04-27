import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Bar, BarChart } from 'recharts';


const Mobile = () => {
    const [phones, setPhones]=useState([])
    useEffect(()=>{
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then (data=>{
            const loadedData =data.data.data;
            console.log(loadedData);
            const phonesData=loadedData.map(phone=>{
                const parts =phone.slug.split('-')
                const price =parseInt(parts[1]);
                const phoneInfo={
                    name : phone.phone_name,
                    price:price
                }
                return phoneInfo;
            })
            console.log(phonesData);
            setPhones(phonesData);
        })
    },[])
    return (
        <div className='mt-5 '>
    <BarChart width={800} height ={300} data ={phones}>
            <Bar  dataKey="price" fill="black"/>
            <XAxis stroke="black" dataKey="name"></XAxis>
            <YAxis stroke="black"/>
           </BarChart>
         
        </div>
    );
};

export default Mobile;