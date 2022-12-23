import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { AuthProvider } from './components/auth'
import './index.css'
import routerApp from './routes/router'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={routerApp}/>
    </AuthProvider>
  </React.StrictMode>,
)
