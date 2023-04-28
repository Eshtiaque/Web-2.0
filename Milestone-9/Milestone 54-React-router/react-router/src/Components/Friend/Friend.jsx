import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleFriend from '../SingleFriend/SingleFriend';


const Friend = () => {
    const friends = useLoaderData();
    console.log(friends);
    return (
        <div>
            <h3>Dark World friend:{friends.length}</h3>
            <div className='grid'>
                {
                    friends.map(friend => <SingleFriend
                        key={friend.id}
                        friend={friend}
                    ></SingleFriend>)
                }
            </div>
        </div>
    );
};

export default Friend;