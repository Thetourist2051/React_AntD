import React, { useEffect, useState } from "react";
import CustomTable from "../../../components/CustomTable/CustomTable";
import Title from "antd/es/typography/Title";
import { Tooltip } from "antd";
import axios from "axios";
import { ApiUrls } from "../../../constants/ApiUrls";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";

const UserPage = (props: any) => {
  const [userData, setUserData] = useState([]);
  const [displayPopup, setDisplayPopup] = useState<boolean>(false);

  const getUserList = () => {
    axios
      .get("http://localhost:3002/getUser")
      .then((response: any) => {
        console.log(response);
        if (response && response?.data.state == 1) {
          setUserData(response?.data?.data);
        }
      })
      .catch((error: any) => {
        console.log(`error in fetching users data ${error.message}`);
      });
  };

  useEffect(() => {
    getUserList();
  }, []);

  const actionBody = (rowData: any) => {
    return (
      <>
        <span
          className="material-symbols-rounded"
          onClick={() => {
            console.log("rowData", rowData);
          }}
        >
          edit_note
        </span>
      </>
    );
  };

  const [value, setValue] = useState<number>(10)

  const buttonsArr = [
    {
      label: "Add",
      addFunction: () => onOperationClick(),
      tooltip: "Add",
    },
  ];

  const onOperationClick = () => {
    setDisplayPopup(true);
  };

  const columns = [
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      body: actionBody,
      width: 100,
      frozen: true,
      alignFrozen: "left",
      headerStyle: "center",
      alignItems: "center",
    },
    {
      title: `Name${value}`,
      dataIndex: "name",
      width: 160,
    },
    {
      title: "FName",
      dataIndex: "first_name",
      width: 160,
    },
    {
      title: "LName",
      dataIndex: "last_name",
      showTooltip: true,
      width: 160,
    },
    {
      title: "Key",
      dataIndex: "id",
      sorter: true,
    },
    {
      title: "Age",
      dataIndex: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
    },
    {
      title: "College",
      dataIndex: "college",
    },
    {
      title: "Department",
      dataIndex: "department",
    },
  ];

  const headerElement = (
    <div className="inline-flex align-items-center justify-content-center gap-2">
        <h6>Add User</h6>
    </div>
);

const footerContent = (
    <div>
        <Button label="Ok" icon="pi pi-check" onClick={() => setDisplayPopup(false)} autoFocus />
    </div>
);

  return (
    <>
      <CustomTable
        data={userData}
        columnArray={columns}
        loading={false}
        downloadFileName={"User"}
        btnArray={buttonsArr}
      />
      {/* <CountUp end={10000} /> */}
      <Dialog
        visible={displayPopup}
        modal
        header={headerElement}
        footer={footerContent}
        style={{ width: "50rem" }}
        onHide={() => setDisplayPopup(false)}
      >
        <p className="m-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </Dialog>
    </>
  );
};

export default UserPage;
