import React, { useState } from "react";
import "./App.scss";
import { ErrorBoundary } from "./components/ErrorBoundary/ErrorBoundary";
import RouterConfig from "./pages/layout/RouterConfig";
import { Ripple } from "primereact/ripple";
import PrimeReact from "primereact/api";
import { Sidebar } from "primereact/sidebar";

function App() {
  const [selectedTheme, setSelectedTheme] = useState("md-light-indigo");
  const [visiblePanel, setVisiblePanel] = useState<boolean>(false);
  PrimeReact.ripple = true;

  return (
    <>
      <div className="app position-relative">
        {/* <link
          rel="stylesheet"
          type="text/css"
          href={`${window.origin}/themes/${selectedTheme}/theme.css`}
        /> */}

        <ErrorBoundary>
          <RouterConfig />
        </ErrorBoundary>

        <div
          className="menuPanel position-fixed btn btn-secondary perfect-center top-50 end-0 p-ripple border-0"
          onClick={() => setVisiblePanel(true)}
        >
          <i className="pi pi-spin pi-cog f-12"></i>
          <Ripple />
        </div>
      </div>
      <Sidebar
        visible={visiblePanel}
        position="right"
        onHide={() => setVisiblePanel(false)}
        pt={{
          root: {
            className: "custom-sidebar w-25rem",
          },
        }}
        className="position-relative"
      >
        <div className="f-16 fw-600 position-absolute top-20">
          Choose Theme Option
        </div>

        <h6>Bootstrap</h6>
        <div className="row mx-0 mb-3">
          <div className="col-3 ps-0 pe-1">
            <h6
              className="f-10 fw-300 m-0 text-left cursor-pointer"
              onClick={() => setSelectedTheme("bootstrap4-light-blue")}
            >
              Bootstrap Blue Light
            </h6>
          </div>
          <div className="col-3 px-1">
            <h6
              className="f-10 fw-300 m-0 text-left cursor-pointer"
              onClick={() => setSelectedTheme("bootstrap4-light-purple")}
            >
              Bootstrap Purple Light
            </h6>
          </div>
          <div className="col-3 px-1">
            <h6
              className="f-10 fw-300 m-0 text-left cursor-pointer"
              onClick={() => setSelectedTheme("bootstrap4-dark-blue")}
            >
              Bootstrap Blue Dark
            </h6>
          </div>
          <div className="col-3 ps-1 pe-0">
            <h6
              className="f-10 fw-300 m-0 text-left cursor-pointer"
              onClick={() => setSelectedTheme("bootstrap4-dark-purple")}
            >
              Bootstrap Purple Dark
            </h6>
          </div>
        </div>
        <h6>PrimeOne Design</h6>
        <div className="row mx-0 mb-3">
          <div className="col-3 ps-0 pe-1">
            <h6
              className="f-10 fw-300 m-0 text-left cursor-pointer"
              onClick={() => setSelectedTheme("saga-blue")}
            >
              Saga Blue
            </h6>
          </div>
          <div className="col-3 px-1">
            <h6
              className="f-10 fw-300 m-0 text-left cursor-pointer"
              onClick={() => setSelectedTheme("saga-green")}
            >
              Saga Green
            </h6>
          </div>
          <div className="col-3 px-1">
            <h6
              className="f-10 fw-300 m-0 text-left cursor-pointer"
              onClick={() => setSelectedTheme("saga-orange")}
            >
              Saga Orange
            </h6>
          </div>
          <div className="col-3 px-1">
            <h6
              className="f-10 fw-300 m-0 text-left cursor-pointer"
              onClick={() => setSelectedTheme("saga-purple")}
            >
              Saga Purple
            </h6>
          </div>
        </div>
        <div className="row mx-0 mb-3">
          <div className="col-3 ps-0 pe-1">
            <h6
              className="f-10 fw-300 m-0 text-left cursor-pointer"
              onClick={() => setSelectedTheme("vela-blue")}
            >
              Vela Blue
            </h6>
          </div>
          <div className="col-3 px-1">
            <h6
              className="f-10 fw-300 m-0 text-left cursor-pointer"
              onClick={() => setSelectedTheme("vela-green")}
            >
              Vela Green
            </h6>
          </div>
          <div className="col-3 px-1">
            <h6
              className="f-10 fw-300 m-0 text-left cursor-pointer"
              onClick={() => setSelectedTheme("vela-orange")}
            >
              Vela Orange
            </h6>
          </div>
          <div className="col-3 px-1">
            <h6
              className="f-10 fw-300 m-0 text-left cursor-pointer"
              onClick={() => setSelectedTheme("vela-purple")}
            >
              Vela Purple
            </h6>
          </div>
        </div>
        <h6>Material Design</h6>
        <div className="row mx-0 mb-3">
          <div className="col-3 ps-0 pe-1">
            <h6
              className="f-10 fw-300 m-0 text-left cursor-pointer"
              onClick={() => setSelectedTheme("md-light-indigo")}
            >
              Indigo Light
            </h6>
          </div>
          <div className="col-3 px-1">
            <h6
              className="f-10 fw-300 m-0 text-left cursor-pointer"
              onClick={() => setSelectedTheme("md-light-deeppurple")}
            >
              Deep Purple
            </h6>
          </div>
          <div className="col-3 px-1">
            <h6
              className="f-10 fw-300 m-0 text-left cursor-pointer"
              onClick={() => setSelectedTheme("md-dark-indigo")}
            >
              Indigo Dark
            </h6>
          </div>
          <div className="col-3 px-1">
            <h6
              className="f-10 fw-300 m-0 text-left cursor-pointer"
              onClick={() => setSelectedTheme("md-dark-deeppurple")}
            >
              Deep Purple
            </h6>
          </div>
        </div>
      </Sidebar>
    </>
  );
}

export default App;
