import React from 'react'
import { Routes, Route } from "react-router-dom";
import DashboardPage from '../pages/DashboardPage';

const ProjectDashboardRoutes = () => {
  return (
    <Routes>
      <Route path="dashboard" element={<DashboardPage/>}/>
      </Routes>
  )
}

export default ProjectDashboardRoutes