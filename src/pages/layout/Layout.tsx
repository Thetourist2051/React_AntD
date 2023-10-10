import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { RouteConstants } from "../../constants/RouteConstant";

const Layout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  

  return (
    <>
      layoutPage
      <button onClick={() => navigate(RouteConstants.Dashboard)}>
        Dashboard
      </button>
    </>
  );
};

export default Layout;
