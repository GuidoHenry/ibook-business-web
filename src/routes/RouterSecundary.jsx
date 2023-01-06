import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { HomePage, LayoudPage } from '../pages'

export const RouterSecundary = () => {
  return (
    <>
      <Routes>
        <Route path='home' element = {<HomePage/>} />
        <Route path='layoud' element = {<LayoudPage/>} />
        <Route path='/*' element = {<Navigate to={'/home'}/>} />
      </Routes>
    </>
  )
}
