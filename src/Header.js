import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HeaderOption from "./HeaderOption";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "./features/userSlice";
import { auth } from "./firebase";

function Header() {
  const dispatch = useDispatch();
  // const user = useSelector(selectUser);

  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };

  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://eaes.eu/wp-content/uploads/2017/05/linkedin-logo.png"
          alt=""
        />

        <div className="header__search">
          <SearchIcon />
          <input placeholder="search" type="text" />
        </div>
      </div>
      <div className="header__right">
        <HeaderOption title="Home" Icon={HomeIcon} />
        <HeaderOption title="My Network" Icon={SupervisorAccountIcon} />
        <HeaderOption title="Jobs" Icon={BusinessCenterIcon} />
        <HeaderOption title="Messaging" Icon={ChatIcon} />
        <HeaderOption title="Notifications" Icon={NotificationsIcon} />
        <HeaderOption
          title="Mr.Ego"
          // avatar="https://www.thestatesman.com/wp-content/uploads/2019/02/DJ-Marshmellow.jpg"
          // avatar={user.photoUrl}
          avatar={true}
          onClick={logoutOfApp}
        />
      </div>
    </div>
  );
}

export default Header;
