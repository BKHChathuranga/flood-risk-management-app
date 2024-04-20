import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import React from "react";

const SidebarComponent = () => {
  return (
    <Sidebar>
      <Menu
        menuItemStyles={{
          button: {
            [`&.active`]: {
              backgroundColor: "#13395e",
              color: "#b6c8d9",
            },
          },
        }}
      >
        <MenuItem component={<Link to="/documentation" />}>
          Documentation
        </MenuItem>
        <MenuItem component={<Link to="dashboard" />}>Dashboard</MenuItem>
        <MenuItem component={<Link to="/e-commerce" />}> E-commerce</MenuItem>
      </Menu>
    </Sidebar>
  );
};

export default SidebarComponent;
