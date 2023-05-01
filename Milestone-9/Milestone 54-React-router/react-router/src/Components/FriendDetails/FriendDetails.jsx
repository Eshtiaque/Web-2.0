import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetails = () => {
    const friend =useLoaderData();
    console.log(friend);
    return (
        <div>
            <h1>All about One person</h1>
            <h2>{friend.name}</h2>
            <p>{friend.phone}</p>
        </div>
    );
};

export default FriendDetails;