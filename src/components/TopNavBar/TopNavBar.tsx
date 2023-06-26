import React, { useEffect, useState } from "react";
import style from "./TopNavBar.module.scss";
import { useLocation } from "react-router-dom";
import { RouteConstants } from "../../constants/RouteConstant";

type Props = {};

const TopNavBar = (props: Props) => {
  const location = useLocation()
  const [pageName, setPagename] = useState<string>('Dashbaord')
  console.log('location from top nav', location);

  useEffect(()=>{
   if(location.pathname === `/${RouteConstants.Dashboard}`){
    setPagename('Dashbaord')
   }
   else if (location.pathname === `${RouteConstants.UserPage}`)
   {
    setPagename('User Page')
   } 
  },[location])
  
  return (
    <>
      <nav
        className={
          style["topNav"] +
          " " +
          "py-lg-2 px-lg-4 px-md-3 p-2 text-white"
        }
      >
        <div className={style["nav-page-menu-name"]}>
          <div className={style["nav-menu"]+ ' d-xs-flex d-md-none'}>
            <span className="material-symbols-rounded">menu</span>
          </div>
          <div className={style["nav-page-name"] + " " + "ps-lg-0 ps-md-2"}>
            <h5 className="fw-semibold">{pageName}</h5>
          </div>
        </div>
        <div className={style["nav-profile"]}>
          <span className="material-symbols-rounded">account_circle</span>
        </div>
      </nav>
    </>
  );
};

export default TopNavBar;
