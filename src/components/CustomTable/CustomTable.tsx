import React, { useState } from "react";
import "./CustomTable.scss";
import style from "./CustomTable.module.scss";
import { Table, Tooltip } from "antd";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import "primereact/resources/themes/md-light-deeppurple/theme.css";
import {
  FileExcelOutlined,
  FilePdfOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { Button } from "primereact/button";
import * as XLSX from "xlsx";
import { InputText } from "primereact/inputtext";

type tableProps = {
  data: {}[];
  columnArray: {}[];
  size?: "large" | "middle" | "small";
  loading: boolean;
  scrollHeight?: string;
  showTooltip?: boolean;
  onRowClick?: any;
  downloadFileName?: string;
  headerStyle?: React.CSSProperties | undefined;
  alignItems?: any;
};

const CustomTable = ({
  data,
  columnArray,
  loading,
  scrollHeight,
  onRowClick,
  downloadFileName,
  alignItems,
}: tableProps) => {
  columnArray.forEach((column: any) => {
    column.width = (column && column.width) || 140;
    column.alignItems = (column && column.alignItems) || "left";
  });
  console.log("columnArray", columnArray);

  const exportColumns = columnArray
    .filter((column: any) => column.title !== "Action")
    .map(({ title }: any) => title);
  console.log("exportColumns", exportColumns);

  const filterKeys = columnArray
    .filter((column: any) => column.title !== "Action")
    .map(({ key }: any) => key);
  console.log("filterKeys", filterKeys);

  const exportData = data.map((item) => Object.values(item));
  console.log("titl", exportColumns, exportData);

  const generatePdf = () => {
    const doc = new jsPDF();
    const tableData: any[][] = [exportColumns, ...exportData];

    autoTable(doc, {
      head: tableData.slice(0, 1),
      body: tableData.slice(1),
    });
    doc.text(`${downloadFileName} Table`, 10, 10);
    doc.save(`${downloadFileName}.pdf`);
  };

  const generateCsv = () => {
    const csvContent = exportColumns.join(",") + "\n"; // Generate the CSV header row
    const csvData = exportData.map((row) => row.join(",")).join("\n"); // Generate the CSV data rows
    const csv = csvContent + csvData; // Combine the header and data rows
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `${downloadFileName}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const generateExcel = () => {
    const worksheet = XLSX.utils.aoa_to_sheet([exportColumns, ...exportData]); // Create a worksheet with the data

    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet 1"); // Add the worksheet to the workbook

    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    }); // Convert workbook to Excel file buffer
    const excelData = new Blob([excelBuffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });

    const url = URL.createObjectURL(excelData);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `${downloadFileName}.xlsx`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const [globalFilters, setGlobalFilters] = useState<string>("");

  const handleSpeechRecognition = () => {
    const recognition = new (window as any).webkitSpeechRecognition();

    recognition.lang = 'en-US'; // Set the language for recognition (change as needed).

    recognition.onresult = (event: any) => {
      const transcript = event.results[event.results.length - 1][0].transcript;
      setGlobalFilters(transcript)
    };

    recognition.start();
  };

  const tableHeader = () => {
    return (
      <>
        <div className="row m-0 justify-content-between table-header">
          {/* <h6>Table header name</h6> */}
          <div className="table-btns p-0 d-flex w-auto">
            <Tooltip title={"PDF"}>
              <Button
                rounded
                icon={<FilePdfOutlined />}
                className="header-button pr-2"
                onClick={() => generatePdf()}
              />
            </Tooltip>
            <Tooltip title={"CSV"}>
              <Button
                severity="success"
                rounded
                icon={<FileExcelOutlined />}
                onClick={() => generateCsv()}
                className="header-button mx-2"
              />
            </Tooltip>
            <Tooltip title={"Excel"}>
              <Button
                severity="warning"
                rounded
                icon={<FilePdfOutlined />}
                onClick={() => generateExcel()}
                className="header-button"
              />
            </Tooltip>
          </div>
          <div className="table-serach w-auto pe-0">
            <div className="p-inputgroup">
              <span className="p-inputgroup-addon">
                <i className="pi pi-search"></i>
              </span>
              <InputText
                value={globalFilters}
                onChange={(e) => setGlobalFilters(e.target.value)}
                className="p-inputtext-sm"
                placeholder="Search here..."
              />

              
              <span
                className="p-inputgroup-addon cursor-pointer"
                onClick={() => handleSpeechRecognition()}
              >
                <i className="pi pi-microphone"></i>
              </span>
              <span
                className="p-inputgroup-addon cursor-pointer"
                onClick={() => setGlobalFilters("")}
              >
                <i className="pi pi-times"></i>
              </span>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      {/* <Table
        dataSource={data ? data : []}
        columns={columnArray}
        size={size || "small"}
        bordered={true}
        loading={loading}
        scroll={{ y: scrollHeight || "calc(100vh - 192px)" }}
        title={tableHeader}
        className="global-table-style"
      /> */}

      <DataTable
        value={data}
        scrollable
        scrollHeight={scrollHeight ? scrollHeight : "calc(100vh - 198px)"}
        className="global-table-style"
        size="small"
        stripedRows
        paginator
        rows={20}
        rowsPerPageOptions={[5, 10, 15, 20, 25, 50]}
        paginatorClassName="custom-paginator"
        header={tableHeader}
        globalFilter={globalFilters}
      >
        {columnArray.map((column: any) => {
          const columnStyle = { textAlign: column.alignItems };
          return (
            <Column
              key={column.key}
              field={column.dataIndex}
              header={column.title}
              style={{ ...columnStyle, minWidth: column?.width }}
              frozen={column?.frozen}
              alignFrozen={column?.alignFrozen}
              body={column?.body}
            />
          );
        })}
      </DataTable>
    </>
  );
};

export default CustomTable;
