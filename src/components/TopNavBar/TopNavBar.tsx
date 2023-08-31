import React, { useEffect, useRef, useState } from "react";
import style from "./TopNavBar.module.scss";
import { useLocation } from "react-router-dom";
import { RouteConstants } from "../../constants/RouteConstant";
import { Menu } from "primereact/menu";
import { Dialog } from "primereact/dialog";

type Props = {};

const TopNavBar = (props: Props) => {
  const menuRight = useRef<Menu>(null);
  const location = useLocation();
  const [pageName, setPagename] = useState<string>("Dashbaord");
  console.log("location from top nav", location);

  const [profilePopup, setProfilePopup] = useState<boolean>(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    setSelectedFile(file);
    console.log('file2', file);
    
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreviewUrl(imageUrl);
      localStorage.setItem('profile-photo', imageUrl);
      console.log('file', imageUrl)
    }
  };

  
  const handleImageClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const getProfileImg = ()=>{
    if(localStorage.getItem('profile-photo')){
      
      console.log('hii');
    }
  }

  useEffect(() => {
    getProfileImg()
    if (location.pathname === `/${RouteConstants.Dashboard}`) {
      setPagename("Dashbaord");
    } else if (location.pathname === `${RouteConstants.UserPage}`) {
      setPagename("User Page");
    }
  }, [location]);

  const items = [
    {
      label: "Profile Options",
      items: [
        {
          label: "Profile",
          icon: "pi pi-user",
          command: () => {
            setProfilePopup(true);
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
          icon: "pi pi-sign-out",
          command: () => {
            console.log("Log out!");
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
          {previewUrl ? <img src={previewUrl} alt="" className={style['user-img']} />  : <span className="material-symbols-rounded">account_circle</span> }
        </div>
      </nav>
      <Menu
        model={items}
        popup
        ref={menuRight}
        id="popup_menu_right"
        popupAlignment="right"
        className="pullDown header-menu-class py-0"
      />

      <Dialog
        header="Upload Profile Image"
        visible={profilePopup}
        style={{ width: "50vw" }}
        onHide={() => setProfilePopup(false)}
        headerClassName="px-3 py-2"
        pt={{
          headerTitle: { className: "f-16" },
          content: {
            className: "p-3 overflow-hidden",
            style: { height: "45vh" },
          },
        }}
      >
        <div className="row mx-0 h-100">
          <div className="col-md-6 pl-0 pr-2 perfect-center">
            <div
              className={
                style["select-img-section"] +
                " " +
                "h-75 w-75 border-2 rounded-3 perfect-center overflow-hidden cursor-pointer perfect-center"
              }
              onClick={handleImageClick}
            >
              <div className={style["icon-class"] + " " + "pi pi-image"}></div>
              <input
                type="file"
                name="img-selection"
                id="image-selection"
                onChange={handleFileChange}
                ref={fileInputRef}
                className="d-none"
              />
            </div>
          </div>
          <div className="col-md-6 pl-2 pr-0 text-center">
            {selectedFile ? (
              <>
               <p className="f-14 m-0 pt-0 pb-2">
                  Selected File: {selectedFile.name}
                </p>
                <div className={style["preview-img"]+ ' '+'rounded-circle m-auto overflow-hidden border border-light perfect-center'}>
                  {previewUrl && (
                    <img
                      src={previewUrl}
                      alt="Preview"
                      className="object-fit-contain mw-100"
                    />
                  )}
                </div>
               
              </>
            ) : null}
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default TopNavBar;
