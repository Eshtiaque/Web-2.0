import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className='grid grid-cols-3'>
        <div>
            <h1 className='text-2xl font-extrabold '>Found Career</h1>
        </div>

        <div className='flex gap-6 ms-6'>
            <p><Link to="">Home</Link></p>
            <p><Link to="Statistic">My Statistic</Link></p>
            <p><Link to="">Applied-Jobs</Link></p>
            <p><Link to="Blogs">Blogs</Link></p>
        </div>

        <div>
    <button className='font-bold text-white p-2 rounded-md bg-pink-500'>Start Applying</button>
        </div>
    </nav>
    );
};

export default Nav;