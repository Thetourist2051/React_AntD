import React from "react";
import classes from "./LoginPage.module.scss";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { RouteConstants } from "../../constants/RouteConstant";
import { message } from "antd";
import "./LoginPage";
import axios from "axios";

const LoginPage = () => {
  const navigate = useNavigate();
  const loginValues = {
    username: "Afridi",
    password: "123",
  };

  const initialFromValues = {
    username: "",
    password: "",
  };
  
  const submitLoginForm = (values: any) => {
    console.log("form Values", values);
    localStorage.setItem("login_token", values.username);
  
    const options = {
      method: 'GET',
      url: 'http://localhost:3000/login',
      params: values ,
      headers: {
          'content-type': 'application/json',
      },
  };
    // if (values.username === loginValues.username) {
    //   console.log("form Submitted");
    //   localStorage.setItem("login_token", values.username);
    //   navigate(RouteConstants.Dashboard);
    //   message.success("Login Successful");
    // } else {
    //   message.error("Login Error");
    // }

    axios.request(options).then((response:any)=>{
      if(response?.status === 200 )
      {
        navigate(RouteConstants.Dashboard);
        console.log('login response',response);
        message.success("Login Successful");
      }
      else{
        message.error("Authentication Error!");
      }
    })
  };


  const loginFromValidations = Yup.object({
    username: Yup.string().min(2, "Min len 3").required("Required!"),
    password: Yup.string().min(2, "Min len 3").required("Required!"),
  });

  const formikForm = useFormik({
    initialValues: initialFromValues,
    onSubmit: submitLoginForm,
    validationSchema: loginFromValidations,
  });

  // console.log("formikForm", formikForm);

  return (
    <>
      <div className={classes["page-content"]}>
        <div className={classes["login-body"]}>
          <h3 className="fw-bolder">Login Page</h3>
          <p className="fw-light f-15">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            alias deserunt aspernatur? Recusandae, at optio!
          </p>
          <form onSubmit={formikForm.submitForm}>
            <div className={classes["formItem"] + " position-relative"}>
              <h6 className={classes["formLabel"]}>Enter Username </h6>
              <Input
                status={
                  formikForm.errors.username && formikForm.touched.username
                    ? "error"
                    : ""
                }
                name="username"
                onChange={formikForm.handleChange}
                placeholder="Enter username"
                size={"large"}
                className="f-14"
              />
              <span className={classes["custom-error"] + " f-10 text-danger"}>
                {formikForm.errors.username && formikForm.touched.username ? (
                  <>{formikForm.errors.username}</>
                ) : null}
              </span>
            </div>

            <div className={classes["formItem"] + " position-relative"}>
              <h6 className={classes["formLabel"]}>Enter Password </h6>
              <Input.Password
                status={
                  formikForm.errors.password && formikForm.touched.password
                    ? "error"
                    : ""
                }
                name="password"
                onChange={formikForm.handleChange}
                placeholder="Enter Password"
                size={"large"}
                className="f-14"
              />
              <span className={classes["custom-error"] + " f-10 text-danger"}>
                {formikForm.errors.password && formikForm.touched.password ? (
                  <>{formikForm.errors.password}</>
                ) : null}
              </span>
            </div>
            <div className="row mx-0 mt-3 justify-content-start">
              <Button
                size={'large'}
                type="primary"
                shape={"round"}
                className="primary-btn"
                onClick={formikForm.submitForm}
                disabled={!formikForm.isValid}
                color={'info'}
              >
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
