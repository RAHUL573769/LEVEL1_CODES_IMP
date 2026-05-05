import { createBrowserRouter } from "react-router";
import RootLayout from './../layouts/RootLayout';
import HomePage from '../Pages/HomePage/HomePage';
import CoveragePage from '../Pages/HomePage/Coverage/CoveragePage';
import AuthLayout from './../layouts/AuthLayout';
import Login from "../Pages/AuthPage/Login/Login";
import Register from "../Pages/AuthPage/Register/Register";
import PrivateRoute from "./PrivateRoute";
import BeRider from "../Pages/BeRider/BeRider";
import SendParcel from "./../Pages/sendParcel/sendParcel";
import DashboardLyout from './../layouts/DashboardLyout';
import MyParcel from "../Pages/Dashboard/MyParcel";


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
       {
        path: "send",
         element: <SendParcel></SendParcel>,
         loader: () => fetch('/serviceCenters.json').then(res => res.json())

      },
    ],
  },
  {
    path: "/",
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
  {
    path: "/beRider",
    element: <PrivateRoute>
      <BeRider></BeRider>
    </PrivateRoute>
  },
{
  path:"/dashboard",
  element: <DashboardLyout></DashboardLyout>,
  children: [
    {
      path: "myParcel",
      element:<MyParcel></MyParcel>


  }
  ]
},

  {
    path: "/beRider",
    element: <PrivateRoute>
      <BeRider></BeRider>
    </PrivateRoute>
  },




]);