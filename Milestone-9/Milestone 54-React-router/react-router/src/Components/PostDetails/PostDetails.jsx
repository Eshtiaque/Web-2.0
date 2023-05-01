import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetails = () => {
    const post =useLoaderData();
    const {id, title,body}=post;
    const navigate = useNavigate();
    const handleGoBack =()=>{
  navigate(-1);
    }
       return (
        <div>
            <h3>About Your Post: {id}</h3>
            <br />
            <h2>Title: {title}</h2>
           <br />
            <p>Body: {body}</p>
            <button onClick={handleGoBack}>Go Back</button>

        </div>
    );
};

export default PostDetails;