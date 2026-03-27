import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import { router } from './WorkingFolder/routes/router.jsx'
import Aos from 'aos'
import 'aos/dist/aos.css'; // Y
import AuthProvider from './contexts/AuthContext/AuthProvider.jsx'

Aos.init();
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='urbanist max-w-7xl mx-auto'>
      <AuthProvider>      <RouterProvider router={router}></RouterProvider></AuthProvider>

    </div>
  </StrictMode>,
)
