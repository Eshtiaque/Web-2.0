import React from 'react';
import { Link } from 'react-router-dom';

const SingleFriend = ({ friend }) => {
    const { name, email, id, phone } = friend;
    return (
        <div className='grid md:grid grid-row-3 p-2 text-left 
 bg-black text-white border-2 border-black rounded-md m-1 '>

            <h3>{id} : Name: {name}</h3>
            <p>email: {email}</p>
            <p className='mb-2'>Phone: {phone}</p>
    <p ><Link to={`/love/${id}`} className='text-yellow-400 rounded border p-1'>"Show Me Details"</Link></p>
        </div>
    );
};
 
export default SingleFriend;