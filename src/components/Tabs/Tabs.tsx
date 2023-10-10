import React from "react";
import { TabView, TabPanel } from "primereact/tabview";
import BankDetailForm from "../../pages/BankDetailFormPage/BankDetailForm";
import Button from "../Button/Button";
import "./Tabs.scss";

const Tabs = (tabs: any) => {
  const headingTabs = tabs?.tabs;
  const onFormSubmit = () => {
    console.log("form --> submit");
  };
  const onFormClose = () => {
    console.log("form --> close");
  };
  return (
    <div>
      <TabView>
        {headingTabs && headingTabs.length
          ? headingTabs?.map((item: any, index: number) => {
              return (
                <TabPanel
                  key={index}
                  header={item?.header}
                  leftIcon={item?.icon}
                  headerClassName="flex align-items-center"
                >
                  <BankDetailForm onClick = {onFormSubmit} />

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
                </TabPanel>
              );
            })
          : null}
      </TabView>
    </div>
  );
};

export default Tabs;
