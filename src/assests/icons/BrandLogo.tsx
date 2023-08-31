import React from "react";
import style from "./BrandLogo.module.scss";
import { Ripple } from "primereact/ripple";
import PrimeReact from "primereact/api";

interface BrandLogoProps {
  size?: "sm" | "lg";
}

const BrandLogo = ({ size }: BrandLogoProps) => {
  PrimeReact.ripple = true;

  return (
    <>
      <div className={style["brand-logo"]}>
        <div className={"px-2 f-22 fw-300"}>
          {size === "lg" ? <>ML Blog</> : <>ML_B</>}
        </div>
        <div className={"pe-2 f-22 fw-600"}>
          {size === "lg" ? <>Lane</> : <>L</>}
        </div>
       <Ripple />
      </div>
    </>
  );
};

export default BrandLogo;
