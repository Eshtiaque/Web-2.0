import React from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import Header from '../Header/Header';

const Home = () => {
    const navigation = useNavigation();
    return (
        <div className='font-black'>
            <Header></Header>
            <h1>Home
                <br></br>
                <small >Never Give Up</small>
            </h1>
            <div>
    {navigation.state === 'loading'? 'loading...':''}
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;