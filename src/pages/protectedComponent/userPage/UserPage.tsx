import React from "react";
import CustomTable from "../../../components/CustomTable/CustomTable";

const UserPage = (props: any) => {
  // const dataSource = [
  //   {
  //     key: "1",
  //     name: "Mike",
  //     fname: 'M',
  //     lname:'MIke Tyson',
  //     age: 32,
  //     address: "10 Downing Street",
  //   },
  //   {
  //     key: "2",
  //     name: "John",
  //     fname: 'J',
  //     lname:'John Jhon',
  //     age: 42,
  //     address: "10 Downing Street",
  //   },
  //   {
  //     key: "3",
  //     name: "John Doe",
  //     fname: 'JD',
  //     lname:'John Rambo Tyson',
  //     age: 42,
  //     address: "10 Downing Street",
  //   },
  //   {
  //     key: "3",
  //     name: "John Doe",
  //     fname: 'JD',
  //     lname:'John Rambo Tyson',
  //     age: 42,
  //     address: "10 Downing Street",
  //   },
  //   {
  //     key: "3",
  //     name: "John Doe",
  //     fname: 'JD',
  //     lname:'John Rambo Tyson',
  //     age: 42,
  //     address: "10 Downing Street",
  //   },
  //   {
  //     key: "3",
  //     name: "John Doe",
  //     fname: 'JD',
  //     lname:'John Rambo Tyson',
  //     age: 42,
  //     address: "10 Downing Street",
  //   },
  //   {
  //     key: "3",
  //     name: "John Doe",
  //     fname: 'JD',
  //     lname:'John Rambo Tyson',
  //     age: 42,
  //     address: "10 Downing Street",
  //   },
  // ];

  const data: {}[] = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    fname: `Edward Fname King ${i}`,
    lname: `Edward Lname King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
    college:'Jadavput University',
  });
}
  
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "FName",
      dataIndex: "fname",
      key: "fname",
    },
    {
      title: "LName",
      dataIndex: "lname",
      key: "lname",
    },
    {
      title: "Key",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "College",
      dataIndex: "college",
      key: "college",
    },
  ];

  return (
    <>
      <CustomTable data={data} columnArray={columns} loading={false} scrollHeight={'400px'} />
    </>
  );
};

export default UserPage;
