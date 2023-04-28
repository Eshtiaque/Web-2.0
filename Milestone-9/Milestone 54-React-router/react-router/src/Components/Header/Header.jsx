import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <nav className='m-3 '>
            <Link to="/" className='me-2 bg-black hover:text-yellow-400 text-white rounded p-2'>Home</Link>
            <Link to="/friend" className='me-2 bg-black 
            hover:text-blue-400 text-white rounded p-2'>Friend</Link>
            {/* <Link to="/">Home</Link> */}
            <Link to="/about" className='me-2 bg-black
            hover:text-red-400 text-white rounded p-2'>About</Link>
            <Link to="/contact" className='me-2 bg-black
            hover:text-fuchsia-500 text-white rounded p-2'>Contact</Link>
        </nav>
    );
};

export default Header;