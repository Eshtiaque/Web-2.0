import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Post from '../Post/Post';

const Posts = () => {
    const Posts =useLoaderData();
    console.log(Posts);
    return (
        <div>
            <h1>All post:  {Posts.length}</h1>
            <div>
                {
                    Posts.map (post=><Post
                    key={post.id}
                    post={post}></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;