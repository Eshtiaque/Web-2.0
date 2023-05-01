import React from 'react';
import{ Link, useNavigate } from 'react-router-dom';

const Post = ({post}) => {
    const {id,body, title}=post


    const navigate = useNavigate();
    const HandleNavigation =()=>{
   navigate (`/post/${id}`);
    }
    return (
        <div className='border-4 border-black m-2 rounded-md'>
            <h5>{id}</h5>
            <h5>{title}</h5>
            <Link to={`/post/${id}`}>Details</Link>
            <Link to={`/post/${id}`}> <button className='border-black m-2 rounded'>Show more Details</button></Link>
            <button onClick={HandleNavigation}>New One</button>
           
        </div>
    );
};

export default Post;