import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

import { router } from './router/router.jsx';
import AuthProvider from './contexts/AuthProvider.jsx';
import { RouterProvider } from 'react-router';
import App from './App';

const queryClient = new QueryClient()

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <RootLayout></RootLayout>,

//   },
// ]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>



          <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} >


      <App />
    </RouterProvider>,
    </QueryClientProvider>

</AuthProvider>

  </StrictMode>,
)
