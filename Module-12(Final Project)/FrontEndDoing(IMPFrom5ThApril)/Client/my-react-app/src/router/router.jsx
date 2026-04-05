import { createBrowserRouter } from "react-router";
import HomePage from "../Pages/HomePage/HomePage";
import RootLayout from "../layouts/RootLayout";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout></RootLayout>,
        children: [
            {
                index: true,
                element: <HomePage></HomePage>
            }
        ]

    },
]);