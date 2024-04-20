import React from 'react'
import { Route, Routes } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import LayoutPage from '../pages/LayoutPage';

const AppRoutes = () => {
  return (
    <Routes>
    <Route path='/' element={<LoginPage/>}/>
    <Route path='app/*' element={<LayoutPage/>}/>
</Routes>
  )
}

export default AppRoutes