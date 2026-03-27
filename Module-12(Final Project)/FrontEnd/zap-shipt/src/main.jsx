import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import { router } from './WorkingFolder/routes/router.jsx'
import Aos from 'aos'
import 'aos/dist/aos.css'; // Y

  Aos.init();
createRoot(document.getElementById('root')).render(
  <StrictMode>
<div className='urbanist max-w-7xl mx-auto'>
    <RouterProvider router={router}></RouterProvider></div>
  </StrictMode>,
)
