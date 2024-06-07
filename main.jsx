import React from "react";
import ReactDOM from "react-dom/client";
import App from "./src/App.jsx"; 
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./assets/Home.jsx"; 

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
