import React, { useEffect, useRef, useState } from "react";
import style from "./TopNavBar.module.scss";
import { useLocation } from "react-router-dom";
import { RouteConstants } from "../../constants/RouteConstant";
import { Menu } from "primereact/menu";

type Props = {};

const TopNavBar = (props: Props) => {
  const menuRight = useRef<Menu>(null);
  const location = useLocation();
  const [pageName, setPagename] = useState<string>("Dashbaord");
  console.log("location from top nav", location);

  useEffect(() => {
    if (location.pathname === `/${RouteConstants.Dashboard}`) {
      setPagename("Dashbaord");
    } else if (location.pathname === `${RouteConstants.UserPage}`) {
      setPagename("User Page");
    }
  }, [location]);

  const items = [
    {
      label: "Options",
      items: [
        {
          label: "Update",
          icon: "pi pi-refresh",
          command: () => {
            console.log('Hello world!');
          },
          // template:()=>{
          //   <div className="template-div d-flex justify-content-center align-items-center">
          //    <div className="template-icon">
          //     <div className="pi pi-check"></div>
          //    </div>
          //    <div className="template-name">
          //     Afridi
          //    </div>
          //   </div>
          // }
        },
        {
          label: "Delete",
          icon: "pi pi-times",
          command: () => {
            console.log('Hello world2!');
          },
        },
      ],
    },
  ];

  return (
    <>
      <nav
        className={
          style["topNav"] + " " + "py-lg-2 px-lg-4 px-md-3 p-2 text-white"
        }
      >
        <div className={style["nav-page-menu-name"]}>
          <div className={style["nav-menu"] + " d-xs-flex d-md-none"}>
            <span className="material-symbols-rounded">menu</span>
          </div>
          <div className={style["nav-page-name"] + " " + "px-0"}>
            <h5 className="fw-semibold">{pageName}</h5>
          </div>
        </div>
        <div
          className={style["nav-profile"]}
          aria-controls="popup_menu_right"
          aria-haspopup
          onClick={(event: any) =>
            menuRight.current ? menuRight.current.toggle(event) : null
          }
        >
          <span className="material-symbols-rounded">account_circle</span>
        </div>
      </nav>
      <Menu
        model={items}
        popup
        ref={menuRight}
        id="popup_menu_right"
        popupAlignment="right"
        className="pullDown header-menu-class"
      />
    </>
  );
};

export default TopNavBar;
