import { createBrowserRouter } from "react-router";
import HomePage from "../Pages/HomePage/HomePage";
import RootLayout from "../layouts/RootLayout";
import Coverage from "../Pages/HomePage/Coverage/CoverageMap";
import CoveragePage from "../Pages/HomePage/Coverage/CoveragePage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout></RootLayout>,
        children: [
            {
                index: true,
                element: <HomePage></HomePage>
            }, {
               path:"coverage",
                element: <CoveragePage></CoveragePage>,
                loader:()=>fetch("../warehouse.json")
            }
        ]

    },
]);