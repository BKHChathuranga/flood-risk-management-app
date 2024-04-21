import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import React from "react";
import {HomeIcon, SignalIcon, NewspaperIcon, QuestionMarkCircleIcon, ChatBubbleOvalLeftEllipsisIcon, UserCircleIcon} from '@heroicons/react/24/solid';

const SidebarComponent = () => {
  return (
    <div className="flex h-full">
      
      <Sidebar collapsed={false} toggled={true}>
      <div className="mt-5 mb-10">
        <p className="text-2xl font-semibold text-blue-950 pl-4">Flood Risk Management</p>
      </div>
        <Menu 
          menuItemStyles={{
            button: {
              [`&.active`]: {
                backgroundColor: "red",
                color: "red",
              },
            },
          }}
        >
          <MenuItem component={<Link to="dashboard" />} icon={<HomeIcon className="h-6"/>}>Dashboard</MenuItem>
          <MenuItem component={<Link to="forecasting"/>} icon={<SignalIcon className="h-6"/>}>Flood Forecasting</MenuItem>
          <MenuItem component={<Link to="news" />} icon={<NewspaperIcon className="h-6"/>}>Weather News</MenuItem>
          <MenuItem component={<Link to="faq" />} icon={<QuestionMarkCircleIcon className="h-6"/>}>FAQ</MenuItem>
          <MenuItem component={<Link to="query" />} icon={<ChatBubbleOvalLeftEllipsisIcon className="h-6"/>}>Ask Your Query</MenuItem>
          <MenuItem component={<Link to="profile" />} icon={<UserCircleIcon className="h-6"/>}>Profile</MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
};

export default SidebarComponent;
