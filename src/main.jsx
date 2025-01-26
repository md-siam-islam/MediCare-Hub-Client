import { StrictMode } from "react";
import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homelayout from "./Components/HomeLayout/Homelayout";
import Signup from "./Page/Signup/Signup";
import Login from "./Page/Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homelayout></Homelayout>,
  },
  {
    path:'/signup',
    element:<Signup></Signup>
  },
  {
    path:'/login',
    element:<Login></Login>
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div style={{ fontFamily: 'Lexend, serif' }}>
      <RouterProvider router={router} />
    </div>
  </StrictMode>
);
