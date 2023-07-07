import React, { useEffect } from "react";
import CustomTable from "../../../components/CustomTable/CustomTable";
import Title from "antd/es/typography/Title";
import { Tooltip } from "antd";
import axios from 'axios';
import { ApiUrls } from "../../../constants/ApiUrls";
import CountUp from 'react-countup';

const UserPage = (props: any) => {
  const data: {}[] = [];
  for (let i = 0; i < 46; i++) {
    data.push({
      key: i,
      name: `Edward King ${i}`,
      fname: `Edward Fname King ${i}`,
      lname: `Edward Lname King ${i}`,
      age: i % 2 === 0 ? "20" : "30",
      address: `London, Park Lane no. ${i}`,
      college: "Jadavput University",
      department: "Computer Science",
    });
  }

  const getUserList = () =>{
    axios.get(ApiUrls.UserList).then((response:any)=>{
      console.log('response', response?.data);
      
    }).catch((error)=>{
      return {}
    })
  }

  useEffect(()=>{
    getUserList()
  })
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

  const columns = [
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      body: actionBody,
      width: 100,
      frozen: true,
      alignFrozen: "left",
      headerStyle: 'center',
      alignItems:'center',
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: 160,
    },
    {
      title: "FName",
      dataIndex: "fname",
      key: "fname",
      width: 160,
    },
    {
      title: "LName",
      dataIndex: "lname",
      key: "lname",
      showTooltip: true,
      width: 160,
    },
    {
      title: "Key",
      dataIndex: "key",
      key: "key",
      sorter: true,
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
      sorter: (a: any, b: any) => a.age - b.age,
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
      render: (address: string) => (
        <Tooltip placement="topLeft" title={address}>
          {address}
        </Tooltip>
      ),
    },
    {
      title: "College",
      dataIndex: "college",
      key: "college",
    },
    {
      title: "Department",
      dataIndex: "department",
      key: "department",
    },
  ];

  return (
    <>
      <CustomTable
        data={data}
        columnArray={columns}
        loading={false}
        downloadFileName={"User"}
      />
      {/* <CountUp end={10000} /> */}
    </>
  );
};

export default UserPage;
