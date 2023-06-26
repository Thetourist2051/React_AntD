import React from "react";
import "./CustomTable.scss";
import style from "./CustomTable.module.scss";
import { Table } from "antd";

type tableProps = {
  data: {}[];
  columnArray: {}[];
  size?: "large" | "middle" | "small";
  loading: boolean;
  scrollHeight?: string,
};

const CustomTable = (props: tableProps) => {
  return (
    <>
      <Table
        dataSource={props?.data ? props.data: []}
        columns={props?.columnArray}
        size={props.size || "middle"}
        bordered={true}
        loading={props?.loading}
        scroll={{y:props?.scrollHeight || 'calc(100vh - 192px)'}}
        className="global-table-style"
      />
    </>
  );
};

export default CustomTable;
