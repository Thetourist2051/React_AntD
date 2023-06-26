import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import style from "./ProtectedRoute.module.scss";
import TopNavBar from "../../components/TopNavBar/TopNavBar";
import SideNavBar from "../../components/SideNavBar/SideNavBar";
import { RouteConstants } from "../../constants/RouteConstant";

const ProtectedRoute = () => {
  const menuItem = [{
    name: 'Dashboard',
    icon:'dashboard',
    navLink: RouteConstants.Dashboard
  },
  {
    name: 'User Page',
    icon:'group',
    navLink: RouteConstants.UserPage
  }
]
  const refreshToken = localStorage.getItem("refresh_token");
  let auth = { token: refreshToken };
  return auth.token ? (
    <>
      <div className={style["render-layout"]}>
        <div className={style["sidenav-section"]}>
          <SideNavBar menuItem={menuItem}/>
        </div>
        <div className={style["outlet-section"]}>
          <TopNavBar />
          <div className={style["scrollable-outlet-section"]}>
          <Outlet />
          </div>
        </div>
      </div>
    </>
  ) : (
    <Navigate to="/login" />
  );
};

export default ProtectedRoute;
