import React from 'react';


import Nav from '../Navbar/Nav';
import Header from '../Header/Header';
import Category from '../Category/Category';
import Feature from '../Feature/Feature';
// import Slice from '../Slice/Slice';

const Home = () => {
    return (
        <div>
            <Nav></Nav>
            <Header></Header>
            <Category></Category>
            <Feature></Feature>
            {/* <Slice></Slice> */}
            {/* <Slice></Slice> */}
            {/* <Slice></Slice> */}
            {/* <Outlet></Outlet> */}
        </div>
    );
};

export default Home;