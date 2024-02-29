import React from "react";
import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import AddTenor from "../../../../assets/SvgIcons/Admin/add.svg";
import AddTenorLight from "../../../../assets/SvgIcons/Admin/add-1.svg";
import RemoveTenor from "../../../../assets/SvgIcons/Admin/remove.svg";
import RemoveTenorLight from "../../../../assets/SvgIcons/Admin/remove-1.svg";
import Authorize from "../../../../assets/SvgIcons/FU/AuthorizeBid.svg";
import AuthorizeLight from "../../../../assets/SvgIcons/FU/AuthorizeBidlight.svg";
import Reset from "../../../../assets/SvgIcons/FU/reset.svg";
import ResetLight from "../../../../assets/SvgIcons/FU/resetlight.svg";
import Grid from "@mui/material/Grid";
import DataGrid from "../../../../components/DataGrid";

export default function ListButtons(props) {
  const _dark = props._dark ? props._dark : false;
  const useStyles = makeStyles({
    btnCls: {
      color: `${_dark ? "#ffffff" : "#97144D"} !important`,
      padding: "10px",
      borderRadius: `4px !important`,
      textTransform: "uppercase !important",
      fontSize: "12px !important",
      fontFamily: "Lato",
      lineHeight: "18px",
      border: `1px solid ${_dark ? "#ffffff" : "#97144D"}`,
      marginRight: 15,
      fontWeight: 700,
      marginBottom: 10,
    },
  });
  const classes = useStyles();
  const BenchmarkData = [
    {
      id: "1",
      BenchmarkName: "Tata steel",
      BenchmarkStatus: "Tata steel",
    },
    {
      id: "2",
      BenchmarkName: "Tata steel",
      BenchmarkStatus: "Tata steel",
    },
  ];
  const columns = [
    {
      field: "BenchmarkName",
      headerName: "Benchmark Name",
      width: 150,
    },
    {
      field: "BenchmarkStatus",
      headerName: "Benchmark Name",
      width: 150,
    },
  ];
  return (
    <Grid container spacing={2} style={{ height: 130, alignItems: "flex-end" }}>
      <Grid item xs={4}>
        <DataGrid
          rows={BenchmarkData}
          columns={columns}
          pageNum={2}
          pageOpt={[10, 25, 50]}
          _dark={props._dark}
          chkselection={true}
          customtoolbar={false}
          pagination={false}
          hideFooter={true}
        />
      </Grid>
      <Grid item xs={8}>
        <Button
          className={classes.btnCls}
          startIcon={
            <img
              src={_dark ? AuthorizeLight : Authorize}
              height="17"
              alt="Authorize"
            />
          }
        >
          Authorize
        </Button>
        <Button
          className={classes.btnCls}
          startIcon={
            <img
              src={_dark ? AddTenorLight : AddTenor}
              height="17"
              alt="Tenor"
            />
          }
        >
          Add Tenor Band
        </Button>
        <Button
          className={classes.btnCls}
          startIcon={
            <img
              src={_dark ? RemoveTenorLight : RemoveTenor}
              width="17"
              alt="Tenor"
            />
          }
        >
          Remove Tenor Band
        </Button>
        <Button
          className={classes.btnCls}
          startIcon={
            <img src={_dark ? ResetLight : Reset} height="17" alt="Reset" />
          }
        >
          Reset
        </Button>
      </Grid>
    </Grid>
  );
}
