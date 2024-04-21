import React from "react";
import { format } from "date-fns";

const Navbar = () => {
  const today = new Date();
  const monthYear = format(today, "MMMM yyyy");
  const dayOfWeekDate = format(today, "EEEE, dd");

  return (
    <div className="navbar bg-base-100" >
      <div className="flex-1 justify-start">
      <div className="flex-col">
        <span className="flex text-lg font-bold">{monthYear}</span>
        <span className="flex text-sm text-stone-500">{dayOfWeekDate}</span>
      </div>
      </div>
      <div className="flex-none">
    <div className="dropdown dropdown-end">
    <button className="btn btn-ghost btn-circle">
      <div className="indicator">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
        <span className="badge badge-xs badge-primary indicator-item"></span>
      </div>
    </button>
      <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
        <div className="card-body">
          <span className="font-bold text-lg">Notifications</span>
          <span className="text-info">Notification 1</span>
          <div className="card-actions">
            <button className="btn btn-primary btn-block">View All</button>
          </div>
        </div>
      </div>
    </div>
      <div className="flex-none" role="button">
        <div className="dropdown dropdown-end flex items-center mr-5">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-60 top-12"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
          <p className="mx-2">User Name</p>
        </div>
        
      </div>
    </div>
    </div>
  );
};

export default Navbar;
