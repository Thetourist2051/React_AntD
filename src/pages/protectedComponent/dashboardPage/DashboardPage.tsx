import React from "react";
import { ImageUrl } from "../../../constants/ImageUrl";

const DashboardPage = () => {
  return (
    <>
      <p className="d-inline-flex gap-1">
        <button
          className="btn btn-primary"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseExample"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          Button with data-bs-target
        </button>
      </p>
      <div className="collapse" id="collapseExample">
        <div className="card card-body">
          Some placeholder content for the collapse component. This panel is
          hidden by default but revealed when the user activates the relevant
          trigger.
        </div>
      </div>
      <div contentEditable='true' className="border border-primary p-2" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, modi!</div>

      <a href={'https://plus.unsplash.com/premium_photo-1664361480105-33afc4559c40?auto=format&fit=crop&q=80&w=1523&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} target={"_blank"} download={'afridi.jpg'}>Download this image</a>
    </>
  );
};

export default DashboardPage;
