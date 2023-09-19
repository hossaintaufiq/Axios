import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import ProductDetail from './Components/ProductDetail/ProductDetail';
import NotFound from './Components/NotFound/NotFound';
import Users from './Components/users/Users';


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App/>,
//   },
//   {
//     path: "/about",
//     element: "hello your are in a about page "
//   },
//   {
//     path: "/contact",
//     element: "hello to contact page"
//   },
//   {
//     path: "/Details",
//     element: "You are in a details page"
//   }
// ])

// nested routes 
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    children: [
      {
        path:"/About",
        element: <About/>
      },
      {
        path: "/Contact",
        element: <Contact/>
      },
      {
        path: "/ProductDetail",
        element: <ProductDetail/>

      },
      {
        path: "/NotFound",
        element: <NotFound/>

      },
      {
        path: "/users",
        element: <Users/>

      }
      

    ],
   
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <RouterProvider router={router} />

  </React.StrictMode>,
)
