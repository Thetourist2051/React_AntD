import React from "react";
import { ImageUrl } from "../../../constants/ImageUrl";
import { useForm } from "react-hook-form";

function RegistrationForm() {
  const { register, handleSubmit } = useForm();
  const formSubmit = (formData:any)=>{
    console.log('formData', formData);
  }
  return (
    <div>
      <div className="h-100 bg-dark">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col">
              <div className="card card-registration my-4">
                <div className="row g-0">
                  <div className="col-xl-6 d-none d-xl-block">
                    <img
                      src={ImageUrl?.card1}
                      alt="Samplephoto"
                      className="img-fluid"
                      style={{
                        borderTopLeftRadius: ".25rem",
                        borderBottomLeftRadius: ".25rem",
                      }}
                    />
                  </div>
                  <div className="col-xl-6">
                    <div className="card-body p-md-5 text-black">
                      <h3 className="mb-5 text-uppercase">
                        Student registration form
                      </h3>
               <form onSubmit={handleSubmit(formSubmit)} >
                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                            <input
                              type="text"
                              id="form3Example1m"
                              className="form-control form-control-lg"
                              {...register("firstName")}
                            />
                            <label className="form-label">First name</label>
                          </div>
                        </div>
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                            <input
                              type="text"
                              id="form3Example1n"
                              className="form-control form-control-lg"
                              {...register("lastName")}
                            />
                            <label className="form-label">Last name</label>
                          </div>
                        </div>
                      </div>

                      {/* <div className="row">
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                            <input
                              type="text"
                              id="form3Example1m1"
                              className="form-control form-control-lg"
                            />
                            <label className="form-label">Mother's name</label>
                          </div>
                        </div>
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                            <input
                              type="text"
                              id="form3Example1n1"
                              className="form-control form-control-lg"
                            />
                            <label className="form-label">Father's name</label>
                          </div>
                        </div>
                      </div> */}
{/* 
                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          id="form3Example8"
                          className="form-control form-control-lg"
                        />
                        <label className="form-label">Address</label>
                      </div> */}

                      <div className="d-md-flex justify-content-start align-items-center mb-4 py-2">
                        <h6 className="mb-0 me-4">Gender: </h6>

                        <div className="form-check form-check-inline mb-0 me-4">
                          <input
                            className="form-check-input"
                            type="radio"
                            value="female"
                            {...register('gender',{required:true})}
                          />
                          <label className="form-check-label">Female</label>
                        </div>

                        <div className="form-check form-check-inline mb-0 me-4">
                          <input
                            className="form-check-input"
                            type="radio"
                            value="male"
                            {...register('gender',{required:true})}
                          />
                          <label className="form-check-label">Male</label>
                        </div>

                        <div className="form-check form-check-inline mb-0">
                          <input
                            className="form-check-input"
                            type="radio"
                            value="other"
                            {...register('gender',{required:true})}
                          />
                          <label className="form-check-label">Other</label>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <select className="select">
                            <option value="1">State</option>
                            <option value="2">Option 1</option>
                            <option value="3">Option 2</option>
                            <option value="4">Option 3</option>
                          </select>
                        </div>
                        <div className="col-md-6 mb-4">
                          <select className="select">
                            <option value="1">City</option>
                            <option value="2">Option 1</option>
                            <option value="3">Option 2</option>
                            <option value="4">Option 3</option>
                          </select>
                        </div>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          id="form3Example9"
                          className="form-control form-control-lg"
                        />
                        <label className="form-label">DOB</label>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          id="form3Example90"
                          className="form-control form-control-lg"
                        />
                        <label className="form-label">Pincode</label>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          id="form3Example99"
                          className="form-control form-control-lg"
                        />
                        <label className="form-label">Course</label>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          id="form3Example97"
                          className="form-control form-control-lg"
                        />
                        <label className="form-label">Email ID</label>
                      </div>

                      <div className="d-flex justify-content-end pt-3">
                        <button type="button" className="btn btn-light btn-lg">
                          Reset all
                        </button>
                        <button
                          type="submit"
                          className="btn btn-warning btn-lg ms-2"
                        >
                          Submit form
                        </button>
                      </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegistrationForm;
