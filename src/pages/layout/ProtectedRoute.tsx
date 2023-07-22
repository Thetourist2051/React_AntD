import React, { useEffect } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import style from "./ProtectedRoute.module.scss";
import TopNavBar from "../../components/TopNavBar/TopNavBar";
import SideNavBar from "../../components/SideNavBar/SideNavBar";
import { RouteConstants } from "../../constants/RouteConstant";

const ProtectedRoute = () => {
  const navigate = useNavigate();
  const menuItem = [
    {
      name: "Dashboard",
      icon: "dashboard",
      navLink: RouteConstants.Dashboard,
    },
    {
      name: "User Page",
      icon: "group",
      navLink: RouteConstants.UserPage,
    },
  ];

  const loginToken = localStorage.getItem("login_token")

  useEffect(() => {
    let interval = setInterval(() => {
      if (!localStorage.getItem("login_token")) {
        verifyUser()
      } else {
        console.log("Credential Found :)")
      }
    }, 200000)

    const verifyUser = () => {
      navigate(RouteConstants.Login);
      clearInterval(interval);
    }

  })

  let auth = { token: loginToken };
  return auth.token ? (
    <>
      <div className={style["render-layout"]}>
        <div className={style["sidenav-section"]}>
          <SideNavBar menuItem={menuItem} />
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
