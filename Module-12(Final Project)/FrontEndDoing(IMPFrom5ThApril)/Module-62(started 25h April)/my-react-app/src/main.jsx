import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router';

import { router } from './router/router.jsx';
import AuthProvider from './contexts/AuthProvider.jsx';
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <RootLayout></RootLayout>,

//   },
// ]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>


    <RouterProvider router={router} >


      <App />
    </RouterProvider>,
</AuthProvider>

  </StrictMode>,
)
