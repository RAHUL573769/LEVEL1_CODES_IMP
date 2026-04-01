import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/HomePage/Home";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../Authentication/Login/Login";
import Register from "../Authentication/Register/Register";

import PrivateRoute from "./PrivateRoute";
import Orders from './../pages/Orders/Orders';
import Coverage from "../pages/Coverage/Coverage";
import SendParcel from "../pages/SendParcel/SendParcel";
import DashboardLayout from "../layouts/DashboardLayout";
import MyParcels from "../pages/Dashboard/MyParcels";

export const router = createBrowserRouter([
    {
        path: "/",
        Component:
            RootLayout,

        children: [
            { index: true, element: <Home></Home> },

            {
                path: "/coverage",
                Component: Coverage,
                loader: () => fetch("warehouse.json")
            },
            {
                path: "orders",
                // Component: Orders
                element: <PrivateRoute>
                    Orders
                </PrivateRoute>
            },
            {
                path: "/send",
                element: <PrivateRoute><SendParcel></SendParcel></PrivateRoute>
            }

        ]
    }, {
        path: "/",

        Component: AuthLayout,
        children: [
            {
                path: "login",


                Component: Login,
            },
            {
                path: "register",


                Component: Register,
            }

        ]
    }, {
        path: "/dashboard",
        element: <PrivateRoute>
            <DashboardLayout></DashboardLayout>
        </PrivateRoute>,

        children: [
            {
                path: "myParcels",
                element: <MyParcels></MyParcels>

            }
        ]
    }
])