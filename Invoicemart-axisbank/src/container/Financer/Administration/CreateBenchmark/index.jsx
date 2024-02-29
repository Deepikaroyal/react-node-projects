import React, { useState } from "react";
import { Typography } from "@mui/material";
import { BenchmarkData } from "../../../../mock/AdministrationData";
import DataGrid from "../../../../components/DataGrid";
import ButtonList from "./Buttons";
import { makeStyles } from "@mui/styles";
import moment from "moment";

const CreateBenchmark = (props) => {
  const _dark = props._dark ? props._dark : false;
  const [pageSize, setPageSize] = useState(10);
  const [tenorRows, setTenorRows] = useState(BenchmarkData);
  const [selectedRows, setSelectedRows] = React.useState([]);

  const useStyles = makeStyles({
    fuCls: {
      width: 100,
      paddingTop: "4px",
      paddingBottom: "4px",
      paddingLeft: "8px",
      paddingRight: "8px",
      borderRadius: 4,
      textAlign: "center",
      color: "#ffffff",
      fontSize: "10px",
      fontFamily: "Lato !important",
      textTransform: "uppercase !important",
    },
    fcCls: {
      width: 60,
      paddingTop: "4px",
      paddingBottom: "4px",
      paddingLeft: "8px",
      paddingRight: "8px",
      borderRadius: 4,
      textAlign: "center",
      fontSize: "10px",
      fontFamily: "Lato !important",
      textTransform: "uppercase !important",
    },
  });
  const classes = useStyles();

  const columns = [
    {
      field: "TenorFrom",
      headerName: "Tenor From",
      type: "date",
      editable: true,
      renderCell: (params) => (
        <Typography className={classes.fcCls}>
          {moment(new Date(params.value)).format("DD")}
          {"/"}
          {moment(new Date(params.value)).format("MMM")}{" "}
        </Typography>
      ),
    },
    {
      field: "TenorTo",
      headerName: "Tenor To",
      type: "date",
      editable: true,
      renderCell: (params) => (
        <Typography className={classes.fcCls}>
          {moment(new Date(params.value)).format("DD")}
          {"/"}
          {moment(new Date(params.value)).format("MMM")}{" "}
        </Typography>
      ),
    },
    {
      field: "Rateofinterest",
      headerName: "Rate Of Interest",
      type: "number",
      editable: true,
      width: 150,
      renderCell: (parms) => (
        <Typography className={classes.fcCls}>
          {parms.value}
          {" %"}
        </Typography>
      ),
    },
    {
      field: "Effectivefrom",
      headerName: "Effective From",
      type: "date",
      editable: true,
      width: 150,
      renderCell: (params) => (
        <Typography className={classes.fcCls}>
          {moment(new Date(params.value)).format("DD")}
          {"/"}
          {moment(new Date(params.value)).format("MMM")}{" "}
        </Typography>
      ),
    },
    {
      field: "Benchmarktype",
      headerName: "Benchmark Type",
      width: 150,
      editable: true,
      align: "center",
    },
  ];
  const AddTenor = () => {
    let K = tenorRows;
    const newRow = {
      id: `${Math.random()}`,
      TenorFrom: Date.now(),
      TenorTo: Date.now(),
      Rateofinterest: "",
      Effectivefrom: Date.now(),
      Benchmarktype: "",
    };
    K = [newRow, ...K];
    setTenorRows(K);
  };
  const RemoveTenor = () => {
    let _tenorRows = tenorRows;
    selectedRows.map((key) => {
      return (_tenorRows = _tenorRows.filter((tenor) => tenor.id !== key.id));
    });
    setTenorRows(_tenorRows);
  };
  return (
    <>
      <div style={{ width: "100%", height: "auto" }}>
        <ButtonList
          _dark={_dark}
          AddTenor={AddTenor}
          RemoveTenor={RemoveTenor}
        />
      </div>
      <div style={{ width: "100%", marginTop: "20px", color: "#404040" }}>
        <DataGrid
          rows={tenorRows}
          columns={columns}
          pageNum={pageSize}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          pageOpt={[10, 25, 50]}
          chkselection={true}
          customtoolbar={true}
          _dark={props._dark}
          onSelectionModelChange={(ids) => {
            const selectedIDs = new Set(ids);
            const selectedRows = tenorRows.filter((row) =>
              selectedIDs.has(row.id)
            );
            setSelectedRows(selectedRows);
          }}
        />
      </div>
    </>
  );
};
export default CreateBenchmark;
