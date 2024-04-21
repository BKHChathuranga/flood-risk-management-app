import React from 'react'
import { Routes, Route } from "react-router-dom";
import DashboardPage from '../pages/DashboardPage';
import ForecastingPage from '../pages/ForecastingPage';
import NewsPage from '../pages/NewsPage';
import FaqPage from '../pages/FaqPage';
import ProfilePage from '../pages/ProfilePage';
import QueryPage from '../pages/QueryPage';

const ProjectDashboardRoutes = () => {
  return (
    <Routes>
      <Route path="dashboard" element={<DashboardPage/>}/>
      <Route path="forecasting" element={<ForecastingPage/>}/>
      <Route path="news" element={<NewsPage/>}/>
      <Route path="query" element={<QueryPage/>}/>
      <Route path="faq" element={<FaqPage/>}/>
      <Route path="profile" element={<ProfilePage/>}/>
      </Routes>
  )
}

export default ProjectDashboardRoutes