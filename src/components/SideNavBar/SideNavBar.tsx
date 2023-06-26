import React from "react";
import style from "./SideNavBar.module.scss";
import { ImageUrl } from "../../constants/ImageUrl";
import { NavLink, useNavigate } from "react-router-dom";
import {RightOutlined } from '@ant-design/icons'

type Props = {
  menuItem: any;
};

type menuType = {
  name: string;
  icon: string;
  navLink: string;
};

const SideNavBar = (props: Props) => {
  const sideNavMenu = props.menuItem;

  return (
    <>
      <div className={style["side-nav-container"]}>
        <div className={style["brand-logo"] + " position-relative"}>
          <img src={ImageUrl.BrandLogo} alt="" />
          <h6 className="fw-light m-0 ps-2 text-white">Brand Name</h6>
        </div>
        <div className={style["side-nav-scroll-section"]}>
          <nav>
            {sideNavMenu.map((menu: menuType, index: number) => {
              return (
                <NavLink
                  key={index}
                  to={menu.navLink}
                  className={({ isActive }) =>
                    isActive
                      ? style["active-menu"] + " " + style["nav-item"]
                      : style["nav-item"]
                  }
                >
                  <span className="material-symbols-rounded fw-light">
                    {menu.icon}
                  </span>
                  <h6>{menu.name}</h6>
                  <RightOutlined  className={style["right-arrow-icon"] } />
                  
                </NavLink>
              );
            })}
          </nav>
        </div>
        <div className={style["logout-section"]}></div>
      </div>
    </>
  );
};

export default SideNavBar;
