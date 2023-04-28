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


const router = createBrowserRouter([
  // {
  //   path: "/about",
  //   element: <About></About>,
  // },
  {
    path: "/",
    element: <Home></Home>,
    
    children:[
      {
        path:"/about",
        element: <About></About>
      },
      {
        path:"love/:loveId",
        element:<FriendDetails></FriendDetails>
      },
      {
        path:"/friend",
        element:<Friend></Friend>,
        loader:()=>fetch('https://jsonplaceholder.typicode.com/users')
      },
      {
          path: "/contact",
          element: <Contact></Contact>,
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
