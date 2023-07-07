import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./pages/login";

import "./index.css";
import SignIn from "./pages/signin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <h1>Not found</h1>,
  },
  {
    path: "/signIn",
    element: <SignIn />,
  },
  {
    path: "/dashboard",
    element: <p>Bienvenido</p>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
