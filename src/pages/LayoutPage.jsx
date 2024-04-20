import React from 'react'
import { Outlet } from 'react-router-dom'
import SidebarComponent from '../components/SidebarComponent'
import ProjectDashboardRoutes from '../utils/ProjectDashboardRoutes'

const LayoutPage = () => {
  return (
    <div style={{display:'flex',height:'100vh', width:'100vw'}}>
      <SidebarComponent/>
      <Outlet/>
      <ProjectDashboardRoutes/>
    </div>
  )
}

export default LayoutPage