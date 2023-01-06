import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { LoginPage } from '../pages'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'
import { RouterSecundary } from './RouterSecundary'

export const RouterApp = () => {
  return (
    <Routes>
      <Route 
        path='/login' 
        element = {<PublicRoute> <LoginPage/></PublicRoute>}
      />
      <Route 
        path='/*' 
        element = {<PrivateRoute> <RouterSecundary/></PrivateRoute>}
      />
    </Routes>
  )
}
