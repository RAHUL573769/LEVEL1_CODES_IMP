import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import create from './Components/CretaeUser/create';
import update from './Components/UpdateUser/update';
import dlete from './Components/DeleteUser/dlete';
  const router = createBrowserRouter([
    {
      path: "/",
      element:<App></App>
    },
    {
      path:"/add",
      element:<create></create>
    },
    {
      path: "update",
      element:<update></update>
    },
     {
      path: "delete",
      element:<dlete></dlete>
    }
  ])
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}> <App /></RouterProvider>
  </StrictMode>,
)
