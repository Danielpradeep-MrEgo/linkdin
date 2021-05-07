import { Avatar } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import "./Sidebar.css";

function Sidebar() {
  const user = useSelector(selectUser);

  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://images.unsplash.com/photo-1614089916276-eb5be76854bd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
          // src="https://images.unsplash.com/photo-1614098249470-2a6020392df8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
          alt=""
        />
        <Avatar
          // src={user.photoUrl}
          className="sidebar__avatar"
        >
          {user.email[0]}
        </Avatar>
        <h3>{user.displayName}</h3>
        <h5>{user.email}</h5>

        <div className="sidebar__stats">
          <div className="sidebar__stat">
            <p>who viewed you</p>
            <p className="sidebar__statNumber">10,000</p>
          </div>

          <div className="sidebar__stat">
            <p>Views on post</p>
            <p className="sidebar__statNumber">450,000</p>
          </div>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("ReactJs")}
        {recentItem("Hacking")}
        {recentItem("Python")}
        {recentItem("Design")}
      </div>
    </div>
  );
}

export default Sidebar;
