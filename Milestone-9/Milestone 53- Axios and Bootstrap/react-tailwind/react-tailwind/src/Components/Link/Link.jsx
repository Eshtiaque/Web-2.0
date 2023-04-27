import React from 'react';

const Link = ({route}) => {
    return (
 <li className='mr-12 hover:bg-black hover:text-white hover:p-1 p-1'>
            <a href={route.path}>{route.name}</a>
        </li>
    );
};

export default Link;