import {
    createBrowserRouter,
    RouterProvider,
  } 
  from "react-router-dom";


import Home from '../../pages/home/Home'
import About from "../../pages/about/About";
import Contact from "../../pages/contact/Contact";
import Blog from "../../pages/blog/Blog";
import React from 'react'

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
  ]);

function Navigation() {
  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default Navigation