import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import "./BankDetailForm.scss";
import Button from "../../components/Button/Button";
import { Dropdown } from "primereact/dropdown";
import { MultiSelect } from "primereact/multiselect";

type formItemType = {
  username: string;
  email: string;
  accNumber: number;
  mobile: number;
  aadhar: number;
  panNumber: string;
};

const BankDetailForm = (props: any) => {
  const form = useForm<formItemType>();
  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState;
  const cities = [
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Istanbul", code: "IST" },
    { name: "Paris", code: "PRS" },
  ];
  const skills =[
    { name: "Angular", code: "ang" },
    { name: "Javascript", code: "java" },
    { name: "React", code: "rea" },
    { name: "Typescript", code: "type" },
    { name: "Css", code: "css" },
  ]
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedSkill, setSelectedSkill] = useState(null);

  const formSubmit = (data: formItemType) => {
    props.onClick(data);
    console.log(data, "Pritam");
  };
  const onFormSubmit = () => {
    console.log("form --> submit");
  };
  const onFormClose = () => {
    console.log("form --> close");
  };
  return (
    <div>
      <form onSubmit={handleSubmit(formSubmit)} noValidate>
        <div className="form-group">
          <label className="label-design" htmlFor="username">
            User Name
          </label>
          <input
            className="form-control mt-1"
            type="text"
            id="username"
            {...register("username", {
              required: "User name is required",
            })}
          />
          {errors?.username?.message && (
            <p className="error-msg">*{errors?.username?.message}</p>
          )}
        </div>
        <div className="form-group mt-2">
          <label className="label-design" htmlFor="email">
            User Email
          </label>
          <input
            className="form-control mt-1"
            type="email"
            id="email"
            {...register("email")}
          />
          {errors?.email?.message && (
            <p className="error-msg">*{errors?.email?.message}</p>
          )}
        </div>
        <div className="form-group mt-2">
          <label className="label-design" htmlFor="accNumber">
            Account Number
          </label>
          <input
            className="form-control mt-1"
            type="number"
            id="accNumber"
            {...register("accNumber")}
          />
          {errors?.accNumber?.message && (
            <p className="error-msg">*{errors?.accNumber?.message}</p>
          )}
        </div>
        <div className="form-group mt-2">
          <label className="label-design" htmlFor="mobile">
            Mobile Number
          </label>
          <input
            className="form-control mt-1"
            type="number"
            id="mobile"
            {...register("mobile")}
          />
          {errors?.mobile?.message && (
            <p className="error-msg">*{errors?.mobile?.message}</p>
          )}
        </div>
        <div className="form-group mt-2">
          <label className="label-design" htmlFor="aadhar">
            Aadhar Number
          </label>
          <input
            className="form-control mt-1"
            type="number"
            id="aadhar"
            {...register("aadhar")}
          />
          {errors?.aadhar?.message && (
            <p className="error-msg">*{errors?.aadhar?.message}</p>
          )}
        </div>
        <div className="form-group mt-2">
          <label className="label-design" htmlFor="panNumber">
            Pan Number
          </label>
          <input
            className="form-control mt-1"
            type="text"
            id="panNumber"
            {...register("panNumber")}
          />
          {errors?.panNumber?.message && (
            <p className="error-msg">*{errors?.panNumber?.message}</p>
          )}
        </div>
        <div className="form-group mt-2">
          <label className="label-design" htmlFor="panNumber">
            Choose Your Location
          </label>
          <Dropdown
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.value)}
            options={cities}
            optionLabel="name"
            placeholder="Select a City"
            className="w-100"
          />
        </div>
        <div className="form-group mt-2">
          <label className="label-design" htmlFor="panNumber">
            Choose Your Skills
          </label>
          <MultiSelect
            value={selectedSkill}
            onChange={(e) => setSelectedSkill(e.value)}
            options={skills}
            optionLabel="name"
            display="chip"
            placeholder="Select Skills"
            maxSelectedLabels={3}
            className="w-100"
          />
        </div>
        <div className="button-class">
          <Button
            type="reset"
            text="Reset"
            className="btn btn-secondary"
            onClick={onFormClose}
          />
          &nbsp;
          <Button
            type="submit"
            text="Submit"
            className="btn btn-success"
            onClick={onFormSubmit}
          />
        </div>
      </form>

      <DevTool control={control} />
    </div>
  );
};

export default BankDetailForm;
