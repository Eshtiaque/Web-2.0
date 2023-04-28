import React from 'react';

const SingleFriend = ({ friend }) => {
    const { name, email, id, phone } = friend;
    return (
        <div className=' p-2 text-left 
 bg-black text-white border-2 border-black rounded-md m-2'>

            <h3>{id} : Name: {name}</h3>
            <p>email: {email}</p>
            <p>Phone: {phone}</p>
        </div>
    );
};

export default SingleFriend;