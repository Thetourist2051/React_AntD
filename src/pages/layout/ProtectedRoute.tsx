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
    {
      name: "Post Page",
      icon: "book",
      navLink: RouteConstants.PostPage,
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
    }, 2000)

    const verifyUser = () => {
      navigate(RouteConstants.Login);
      clearInterval(interval);
    }

  })

  let auth = { token: loginToken };
  return auth.token ? (
    <>
    <link
        rel="stylesheet"
        type="text/css"
        href={`${window.origin}/themes/md-light-indigo/theme.css`}
      />
      <div className={style["render-layout"]}>
        <div className={style["sidenav-section"]}>
          <SideNavBar menuItem={menuItem} />
        </div>
        <div className={style["outlet-section"]}>
          <TopNavBar />
          <div className={style["scrollable-outlet-section"]+ ' '+ 'px-lg-3 py-lg-3 p-2'}>
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
