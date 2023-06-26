import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { RouteConstants } from "../../constants/RouteConstant";

const Layout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location,'location');
  

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
