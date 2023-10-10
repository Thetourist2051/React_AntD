import React, { ReactNode, useEffect, useRef, useState } from "react";
import classes from "./PopupComponent.module.scss";

interface PopupProps {
  popupTitle: string;
  children: ReactNode;
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  popupStyle?: "centered" | "stretchRight" | "stretchLeft";
  size: "md" | "lg";
}
const PopupComponent = ({
  popupTitle,
  children,
  visible,
  setVisible,
  popupStyle = "centered",
  size,
}: PopupProps) => {
  const sizeRef = useRef(size);
  const isMaximized = sizeRef && sizeRef.current === "lg" ? true : false;
  const [maximize, setMaximize] = useState<boolean>(isMaximized);

  const onMaximizeClick = (maximize: boolean) => {
    if (maximize) {
      sizeRef.current = "lg";
    }
    if (!maximize) {
      sizeRef.current = "md";
    }
    setMaximize(!maximize);
  };
  useEffect(() => {
    console.log("size", sizeRef.current, "isMaximized", isMaximized);
  }, [visible, size, maximize, sizeRef, isMaximized]);

  return (
    <>
      {visible ? (
        <>
          <div className={classes["popup-overlay"]}>
            <div
              className={
                classes["popup"] +
                " " +
                `${popupStyle}` +
                " " +
                classes[`popup-${sizeRef.current}`]
              }
            >
              <header
                className={
                  classes["popup-header"] +
                  " " +
                  classes[`popup-${sizeRef.current}-header`]
                }
              >
                <h3>{popupTitle}</h3>
                <div className={classes["popup-right-btns"]}>
                  <div
                    className={
                      classes["popup-right-icon"] + " " + classes["maxi-icon"]
                    }
                    onClick={() => onMaximizeClick(maximize)}
                  >
                    <i
                      className={`pi pi-window-${
                        !maximize ? "maximize" : "minimize"
                      }`}
                    ></i>
                  </div>
                  <div
                    className={classes["popup-right-icon"]}
                    onClick={() => setVisible(false)}
                  >
                    <i className="pi pi-times"></i>
                  </div>
                </div>
              </header>
              <div
                className={
                  classes["popup-content"] +
                  " " +
                  classes[`popup-${sizeRef.current}-content`]
                }
              >
                {children}
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default PopupComponent;
