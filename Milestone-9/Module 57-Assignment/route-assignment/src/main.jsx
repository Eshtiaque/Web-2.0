import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Nav from './Components/Navbar/Nav';
import Home from './Components/MyHome/Home';
import MainPage from './Components/MainPAge/MainPage';
import Statistic from './Components/Statistic/Statistic';
import Blogs from './Components/Blogs/Blogs';
import Notfound from './Components/Notfound/Notfound';
const router = createBrowserRouter([
  {
   path: "/",
   element: <MainPage></MainPage>, 
    children: [
      {
        path: "/",
    element: <Home></Home>,
    loader: () => fetch('Jobs.json'),
      },
      {
        path: "Statistic",
        element:<Statistic></Statistic> 
      },
      {
        path: "Blogs",
        element: <Blogs></Blogs>
      },
      {
        path: "*",
        element: <Notfound></Notfound>
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
