import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import create from './Components/CretaeUser/create';
import update from './Components/UpdateUser/update';
import dlete from './Components/DeleteUser/dlete';
import Create from './Components/CretaeUser/create'
import Update from './Components/UpdateUser/update'
import { Toaster } from 'react-hot-toast'
  const router = createBrowserRouter([
    {
      path: "/",
      element:<App></App>
    },
    {
      path:"/add",
      element:<Create></Create>
    },
    {
      path: "/edit/:id",
      element:<Update></Update>
    },
     {
      path: "/delete",
      element:<dlete></dlete>
    }
  ])
createRoot(document.getElementById('root')).render(
  <StrictMode>


    <RouterProvider router={router}>



      <Toaster position="top-right" reverseOrder={false}>

            <App />
  </Toaster>


    </RouterProvider>

  </StrictMode>,
)
