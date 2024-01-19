import React, { useEffect, useState } from "react";
import classes from "./PostPage.module.scss";
import { Splitter, SplitterPanel } from "primereact/splitter";
import { Steps } from "antd";
import { useForm } from "react-hook-form";

type PostPageProps = {};

interface StepProps {
  label: string;
  command: () => void;
}

const PostPage = (props: PostPageProps) => {
  const [tabIndex, setTabIndex] = useState<number>(1);

  const navItems: StepProps[] = [
    {
      label: "Basic Details",
      command: () => {
        setTabIndex(1);
      },
    },
    {
      label: "Educational Details",
      command: () => {
        setTabIndex(2);
      },
    },
    {
      label: "Post Data",
      command: () => {
        setTabIndex(3);
      },
    },
  ];

  const { register, handleSubmit, reset } = useForm();
  
  const submitFormHandleAtFirstLevel = (formData: any) => {
    setTabIndex(tabIndex+1)
    console.log("formData", formData);
  };

  const submitFormHandleAtSecondLevel = (formData: any) => {
    setTabIndex(tabIndex+1)
    console.log("formData", formData);
  };


  useEffect(() => {}, [tabIndex]);
  return (
    <>
      <div
        className={classes["post-page-outer"] + " " + "rounded h-100 w-100 p-0"}
      >
        <h5 className="mb-lg-3 mb-1">
          Create your Post step-wise filling the form
        </h5>
        <Splitter className={classes["spitter-pannel"]}>
          <SplitterPanel
            className="flex align-items-center justify-content-center py-lg-3 px-lg-3 p-2 h-100"
            size={25}
            minSize={10}
          >
            <div className="h-100">
              <ul className="p-0 m-0 list-unstyled">
                {navItems.map((navEl, index) => {
                  return (
                    <>
                      <li
                        className={
                          tabIndex === index + 1
                            ? classes["active-nav-item"] +
                              " " +
                              "py-2 px-lg-3 px-2 cursor-pointer mb-2 rounded"
                            : classes["nav-item"] +
                              " " +
                              "py-2 px-lg-3 px-2 cursor-pointer mb-2 rounded"
                        }
                        key={index}
                        onClick={navEl.command}
                      >
                        <p className="m-0 ellipsis-text f-14">{navEl.label}</p>
                      </li>
                    </>
                  );
                })}
              </ul>
            </div>
          </SplitterPanel>
          <SplitterPanel
            className="flex align-items-center justify-content-center py-lg-3 px-lg-3 p-2 h-100"
            size={75}
          >
            {tabIndex === 1 && (
              <>
                <form onSubmit={handleSubmit(submitFormHandleAtFirstLevel)} className="h-100" >
                <h6 className="fw-600 f-16">Basices Details</h6>
                  <div className={classes["form-content"] + " " + "p-0"}>
                    <div className="row mx-0">
                      <div className="col-md-6 mb-4 px-2">
                        <div className="form-outline">
                          <label className="form-label">First name</label>
                          <input
                            type="text"
                            className="form-control form-control-md"
                            {...register("firstName")}
                            autoFocus
                          />
                        </div>
                      </div>
                      <div className="col-md-6 mb-4 px-2">
                        <div className="form-outline">
                          <label className="form-label">Last name</label>
                          <input
                            type="text"
                            className="form-control form-control-md"
                            {...register("lastName")}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className={
                      classes["navigator-btns"] +
                      " " +
                      "row mx-0 justify-content-end py-2"
                    }
                  >
                    <button
                      className="btn btn-primary w-auto px-lg-4 px-md-3"
                      type="submit"
                      onClick={reset}
                    >
                      Clear Form
                    </button>
                    <button
                      className="btn btn-primary w-auto px-lg-4 px-md-3"
                      type="submit"
                    >
                      Next
                    </button>
                  </div>
                </form>
              </>
            )}
            {tabIndex === 2 && (
              <>
                <form onSubmit={handleSubmit(submitFormHandleAtSecondLevel)} className="h-100" >
                <h6 className="fw-600 f-16">Basices Details</h6>
                  <div className={classes["form-content"] + " " + "p-0"}>
                    <div className="row mx-0">
                      <div className="col-md-6 mb-4 px-2">
                        <div className="form-outline">
                          <label className="form-label">10th Marks</label>
                          <input
                            type="text"
                            className="form-control form-control-md"
                            {...register("10thMarks")}
                          />
                        </div>
                      </div>
                      <div className="col-md-6 mb-4 px-2">
                        <div className="form-outline">
                          <label className="form-label">12th Marks</label>
                          <input
                            type="text"
                            className="form-control form-control-md"
                            {...register("12thMarks")}
                          />
                        </div>
                      </div>
                      <div className="col-md-6 mb-4 px-2">
                        <div className="form-outline">
                          <label className="form-label">College Name</label>
                          <input
                            type="text"
                            className="form-control form-control-md"
                            {...register("collage_name")}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className={
                      classes["navigator-btns"] +
                      " " +
                      "row mx-0 justify-content-end py-2"
                    }
                  >
                    <button
                      className="btn btn-secondary w-auto px-lg-4 px-md-3 me-2"
                      type="submit"
                      onClick={()=>setTabIndex(tabIndex-1)}
                    >
                      Previous
                    </button>
                    <button
                      className="btn btn-primary w-auto px-lg-4 px-md-3"
                      type="submit"
                    >
                      Next
                    </button>
                  </div>
                </form>
              </>
            )}
          </SplitterPanel>
        </Splitter>
      </div>
    </>
  );
};

export default PostPage;
