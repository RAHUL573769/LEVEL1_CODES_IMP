import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/HomePage/Home";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../Authentication/Login/Login";
import Register from "../Authentication/Register/Register";

export const router = createBrowserRouter([
    {
        path: "/",
        Component:
            RootLayout,

        children: [
            { index: true, Component: Home }
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
    }
])