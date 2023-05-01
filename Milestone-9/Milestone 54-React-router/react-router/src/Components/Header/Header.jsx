import React from 'react';
// import { Link } from 'react-router-dom';
import ActiveLink from '../ActiveLink/Active';


const Header = () => {
    return (
        <nav className='m-3 '>
            <ActiveLink to="/" className='me-2 bg-black hover:text-yellow-400 text-white rounded p-2'>Home</ActiveLink>
            <ActiveLink  to="/friend" >Friend</ActiveLink>
            {/* <Link to="/">Home</Link> */}
            <ActiveLink to="/about" className='me-2 bg-black
            hover:text-red-400 text-white rounded p-2'>About</ActiveLink>
            <ActiveLink to="/contact" className='me-2 bg-black
            hover:text-fuchsia-500 text-white rounded p-2'>Contact</ActiveLink>
             <ActiveLink to="/posts" className='me-2 bg-black
            hover:text-sky-500 text-white rounded p-2'>Post</ActiveLink>
        </nav>
    );
};

export default Header;