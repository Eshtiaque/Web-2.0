import React from 'react';


import Nav from '../Navbar/Nav';
import Header from '../Header/Header';
import Category from '../Category/Category';
import Feature from '../Feature/Feature';

const Home = () => {
    return (
        <div>
            <Nav></Nav>
            <Header></Header>
            <Category></Category>
            <Feature></Feature>
            {/* <Outlet></Outlet> */}
        </div>
    );
};

export default Home;