import React from "react";
// import { useForm } from "react-hook-form";
import { ImageUrl } from "../../constants/ImageUrl";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ResigtrationPage.scss";
import CustomCarousel from "../../components/CustomCarousel/CustomCarousel";
import Tabs from "../../components/Tabs/Tabs";
import PracticePage from "../practicePage/practicePage";
function ResigtrationPage() {
  // const form = useForm();

  const cardObj = [
    {
      img: ImageUrl.ResigtrationImage,
      name: "Dashboard",
      color: "blue",
    },
    {
      img: ImageUrl.ResigtrationImage,
      name: "Read More",
      color: "green",
    },
    {
      img: ImageUrl.ResigtrationImage,
      name: "Contact Me",
      color: "red",
    },
  ];

  const tabsArr = [
    {
      header: "Personal",
      icon: "pi pi-table",
      formType: 'Formik',
    },
    {
      header: "Bank",
      icon: "pi pi-database",
      formType: 'Basic-Form',
    },
    {
      header: "Educational",
      icon: "pi pi-book",
      formType: 'React-Form',
    },
    {
      header: "Upload",
      icon: "pi pi-folder-open",
      formType: 'Upload',
    },
  ];

  return (
    <>
    <PracticePage />
    </>
    // <div style={{ width: "100%" }}>
    //   <div className="row header">
    //     <div className="top-header">
    //       <h1>
    //         Hey bro!{" "}
    //         <span>Pehle register karoooo, phir biswas karooooo...</span>
    //       </h1>
    //     </div>
    //   </div>
    //   <div className="row main-body">
    //     <div className="col-md-2">
    //       <CustomCarousel data={cardObj} />
    //     </div>
    //     <div className="col-md-10">
    //       <div className="row">
    //         <Tabs tabs={tabsArr} />
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default ResigtrationPage;
