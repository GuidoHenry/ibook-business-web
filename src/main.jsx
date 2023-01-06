import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './components/auth'
import './index.css'
import { RouterApp } from './routes/RouterApp'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <RouterApp/>
      </BrowserRouter> 
    </AuthProvider>
  </React.StrictMode>
)
