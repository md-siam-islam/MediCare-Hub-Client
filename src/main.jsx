import { StrictMode } from "react";
import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homelayout from "./Components/HomeLayout/Homelayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homelayout></Homelayout>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div style={{ fontFamily: 'Lexend, serif' }}>
      <RouterProvider router={router} />
    </div>
  </StrictMode>
);
