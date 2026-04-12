import { createBrowserRouter } from "react-router";
import RootLayout from './../layouts/RootLayout';
import HomePage from '../Pages/HomePage/HomePage';
import CoveragePage from '../Pages/HomePage/Coverage/CoveragePage';
import AuthLayout from './../layouts/AuthLayout';
import Login from "../Pages/AuthPage/Login/Login";
import Register from "../Pages/AuthPage/Register/Register";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage/>,
      },
      {
        path: "coverage",
        element: <CoveragePage />,
        loader: () => fetch("/warehouse.json"),
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
        },
         {
        path: "register",
        element: <Register></Register>,
      },
    ],
  },
]);