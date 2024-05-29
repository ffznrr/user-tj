import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import DetailPage from "./component/detailpage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./page/home";
import { Login } from "./component/login";
import Homey from "./component/homey";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/detailpage/:id",
    element: <DetailPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/homey",
    element: <Homey />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
