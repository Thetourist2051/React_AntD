import React from "react";
import style from "./BrandLogo.module.scss";
import { Ripple } from "primereact/ripple";
import PrimeReact from "primereact/api";

interface BrandLogoProps {
  size?: "sm" | "lg";
}

const BrandLogo = ({ size }: BrandLogoProps) => {
  // PrimeReact.ripple = true;

  return (
    <>
      <div className={style["brand-logo"] + " " + "p-ripple"}>
        {size === "lg" ? (
          <>
            <div className={"px-2 f-22 fw-300"}>
              <>ML Blog</>
            </div>
            <div className={"pe-2 f-22 fw-600"}>
              <>Lane</>
            </div>
          </>
        ) : (
          <>
            <div className={"px-2 f-16 fw-300"}>
              <>ML</>
            </div>
            <div className={"pe-2 f-16 fw-600"}>
              <>Lane</>
            </div>
          </>
        )}
        <Ripple />
      </div>
    </>
  );
};

export default BrandLogo;
