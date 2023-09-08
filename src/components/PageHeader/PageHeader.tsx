import React, { useEffect, useState } from "react";
import BrandLogo from "../../assests/icons/BrandLogo";
import classes from "./PageHeader.module.scss";
import { useNavigate } from "react-router-dom";
import { RouteConstants } from "../../constants/RouteConstant";
import Switch from "antd/es/switch";

const PageHeader = () => {
  const navigate = useNavigate();
  const [lightTheme, setLightTheme] = useState<boolean>(true);
  const onToggleChange = () => {
    setLightTheme(!lightTheme);
  };
  useEffect(() => {}, [lightTheme]);
  return (
    <>
      <link
        rel="stylesheet"
        type="text/css"
        href={`${window.origin}/themes/${
          lightTheme === true ? "md-light-indigo" : "md-dark-indigo"
        }/theme.css`}
      />
      <div className={classes["page-header"]}>
        <div className="container px-lg-3 px-md-2 px-sm-0">
          <div className="d-flex mx-0 justify-content-between align-items-center">
            <div
              className={classes["logo-section"]}
              onClick={() => navigate(RouteConstants.DefaultPath)}
            >
              <BrandLogo size="lg" />
            </div>
            <div className={classes["toogle-switch"]}>
              <Switch
                size={"default"}
                checkedChildren={<span className={"toggle-span"}>Light</span>}
                unCheckedChildren={<span className={"toggle-span"}>Dark</span>}
                checked={lightTheme}
                onChange={onToggleChange}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageHeader;
