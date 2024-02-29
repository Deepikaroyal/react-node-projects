import React, { useState } from "react";
import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import AddTenor from "../../../../assets/SvgIcons/Admin/add.svg";
import AddTenorLight from "../../../../assets/SvgIcons/Admin/add-1.svg";
import RemoveTenor from "../../../../assets/SvgIcons/Admin/remove.svg";
import RemoveTenorLight from "../../../../assets/SvgIcons/Admin/remove-1.svg";
import Status from "../../../../assets/SvgIcons/Admin/status.svg";
import StatusLight from "../../../../assets/SvgIcons/Admin/status-1.svg";
import Reset from "../../../../assets/SvgIcons/FU/reset.svg";
import ResetLight from "../../../../assets/SvgIcons/FU/resetlight.svg";
import save from "../../../../assets/SvgIcons/FU/save.svg";
import saveLight from "../../../../assets/SvgIcons/FU/savelight.svg";
import Grid from "@mui/material/Grid";
import DataGrid from "../../../../components/DataGrid";
import { BenchMark } from "../../../../mock/Benchmark";

export default function FUListButtons(props) {
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
  const [benchRows, setBenchRows] = useState(BenchMark);
  const [selectedRows, setSelectedRows] = React.useState([]);
  const AddBenchmark = () => {
    let K = benchRows;
    const newRow = {
      id: `${Math.random()}`,
      BenchmarkName: "",
      BenchmarkStatus: "",
    };
    K = [newRow, ...K];
    setBenchRows(K);
  };
  const RemoveBenchmark = () => {
    let _benchRows = benchRows;
    selectedRows.map((key) => {
      return (_benchRows = _benchRows.filter((tenor) => tenor.id !== key.id));
    });
    setBenchRows(_benchRows);
  };
  const columns = [
    {
      field: "BenchmarkName",
      headerName: "Benchmark Name",
      width: 150,
      editable: true,
    },
    {
      field: "BenchmarkStatus",
      headerName: "Benchmark Name",
      miwidth: 200,
      editable: true,
    },
  ];
  return (
    <Grid
      container
      spacing={2}
      style={{ height: "auto", alignItems: "flex-end" }}
    >
      <Grid item xs={4}>
        <DataGrid
          rows={benchRows}
          columns={columns}
          pageNum={2}
          pageOpt={[10, 25, 50]}
          _dark={props._dark}
          chkselection={true}
          customtoolbar={false}
          pagination={false}
          hideFooter={true}
          onSelectionModelChange={(ids) => {
            const selectedIDs = new Set(ids);
            const selectedRows = benchRows.filter((row) =>
              selectedIDs.has(row.id)
            );
            setSelectedRows(selectedRows);
          }}
        />
      </Grid>
      <Grid item xs={8}>
        <Button
          className={classes.btnCls}
          startIcon={
            <img
              src={_dark ? AddTenorLight : AddTenor}
              height="17"
              alt="Reset"
            />
          }
          onClick={() => {
            AddBenchmark();
          }}
        >
          Add Benchmark
        </Button>
        <Button
          className={classes.btnCls}
          startIcon={
            <img
              src={_dark ? RemoveTenorLight : RemoveTenor}
              width="17"
              alt="Refresh"
            />
          }
          onClick={() => {
            RemoveBenchmark();
          }}
        >
          Remove Benchmark
        </Button>
        <br />
        <Button
          className={classes.btnCls}
          startIcon={
            <img
              src={_dark ? AddTenorLight : AddTenor}
              height="17"
              alt="Reset"
            />
          }
          onClick={() => {
            props.AddTenor();
          }}
        >
          Add Tenor Band
        </Button>
        <Button
          className={classes.btnCls}
          startIcon={
            <img
              src={_dark ? RemoveTenorLight : RemoveTenor}
              width="17"
              alt="Refresh"
            />
          }
          onClick={() => {
            props.RemoveTenor();
          }}
        >
          Remove Tenor Band
        </Button>
        <Button
          className={classes.btnCls}
          startIcon={
            <img src={_dark ? StatusLight : Status} height="17" alt="Bid" />
          }
        >
          Status
        </Button>
        <Button
          className={classes.btnCls}
          startIcon={
            <img src={_dark ? ResetLight : Reset} height="17" alt="save" />
          }
        >
          Reset
        </Button>
        <Button
          className={classes.btnCls}
          startIcon={
            <img src={_dark ? saveLight : save} height="17" alt="save" />
          }
        >
          Save
        </Button>
      </Grid>
    </Grid>
  );
}
