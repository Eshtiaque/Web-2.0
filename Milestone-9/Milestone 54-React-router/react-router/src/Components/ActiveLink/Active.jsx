import React from 'react';
import { NavLink } from 'react-router-dom';


const Active = ({ to, children }) => {
    return (
        <NavLink 
            to={to}
            className= {({ isActive }) => isActive ? "active me-2 bg-yellow-400 hover:text-black text-white rounded p-2" : "me-2 bg-black  hover:text-blue-400 text-white rounded p-2"}
        >
            {children}
        </NavLink>
    );
};

export default Active