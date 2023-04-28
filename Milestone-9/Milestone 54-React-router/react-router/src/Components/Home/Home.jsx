import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

const Home = () => {
    return (
        <div className='font-black'>
            <Header></Header>
            <h1>Home
                <br></br>
               <small >Never Give Up</small>
                </h1>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;