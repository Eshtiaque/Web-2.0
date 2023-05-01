import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './Components/About/About.jsx';
import Contact from './Components/Contact/Contact.jsx';
import Home from './Components/Home/Home.jsx';
import Friend from './Components/Friend/Friend.jsx';
import FriendDetails from './Components/FriendDetails/FriendDetails.jsx';
import Post from './Components/Posts/Posts.jsx';
import Posts from './Components/Posts/Posts.jsx';
import PostDetails from './Components/PostDetails/PostDetails.jsx';


const router = createBrowserRouter([
  // {
  //   path: "/about",
  //   element: <About></About>,
  // },
  {
    path: "/",
    element: <Home></Home>,

    children: [
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "love/:loveId",
        element: <FriendDetails></FriendDetails>,
        loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/users/${params.loveId}`)
      },
      {
        path: "/friend",
        element: <Friend></Friend>,
        loader: () => fetch('https://jsonplaceholder.typicode.com/users')
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "posts",
        element: <Posts></Posts>,
        loader: () => fetch(`https://jsonplaceholder.typicode.com/posts/`)
      },
      {
        path: "post/:postId",
        element: <PostDetails></PostDetails>,
        loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
      },
      {
        path: "*",
        element: <div>
          <h1>
            <strong>404</strong>
          </h1>
        </div>
      }
    ]
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
