import React from "react";
import { Typography } from "@mui/material";
import { BenchmarkData } from "../../../../mock/AdministrationData";
import DataGrid from "../../../../components/DataGrid";
import ButtonList from "./Buttons";
import { makeStyles } from "@mui/styles";
import moment from "moment";
import ErrorBoundary from "../../../../errors";

const AuthorizeBenchmark = (props) => {
  const _dark = props._dark ? props._dark : false;
  const [pageSize, setPageSize] = React.useState(10);

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
      align: "center",
    },
  ];
  return (
    <>
      <ErrorBoundary>
        <ButtonList _dark={_dark} />
        <div style={{ width: "100%", marginTop: "20px", color: "#404040" }}>
          <DataGrid
            rows={BenchmarkData}
            columns={columns}
            pageNum={pageSize}
            onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
            pageOpt={[10, 25, 50]}
            chkselection={true}
            customtoolbar={true}
            _dark={props._dark}
          />
        </div>
      </ErrorBoundary>
    </>
  );
};
export default AuthorizeBenchmark;
