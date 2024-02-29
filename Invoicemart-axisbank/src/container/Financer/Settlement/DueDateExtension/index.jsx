import React from "react";
import EarlySettlementBtn from "../EarlySettlement/EarlySettlementBtn";
import { Typography } from "@mui/material";
import { EarlySettlementData } from "../../../../mock/SettlementData";
import DataGrid from "../../../../components/DataGrid";
import { makeStyles } from "@mui/styles";
import AcceptIcon from "../../../../assets/SvgIcons/Accept.svg";
import RejectIcon from "../../../../assets/SvgIcons/Reject.svg";
import AcceptDarkIcon from "../../../../assets/SvgIcons/Accept-dark.svg";
import RejectDarkIcon from "../../../../assets/SvgIcons/reject-dark.svg";
import CalendarIcon from "../../../../assets/SvgIcons/Calendar.svg";
import moment from "moment";

const DueDateExtension = (props) => {
  const _dark = props._dark ? props._dark : false;
  const [pageSize, setPageSize] = React.useState(20);

  const useStyles = makeStyles({
    stpCls: {
      width: 35,
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
    msmeCls: {
      width: 58,
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
    fpCls: {
      width: 90,
      paddingTop: "4px",
      paddingBottom: "5px",
      borderRadius: 4,
      textAlign: "center",
      fontSize: "10px",
      display: "flex",
      justifyContent: "space-evenly",
      fontFamily: "Lato !important",
      textTransform: "uppercase !important",
      border: "solid 1px #cfcfcf",
      boxShadow: "1px 3px 1px #bebebe",
    },
    typenalcls: {
      fontFamily: "Lato !important",
      cursor: "pointer",
      fontSize: 12,
      border: "1px solid #bebebe",
      width: 70,
      borderRadius: 5,
      textAlign: "center",
      paddingBottom: "4px",
      paddingTop: "4px",
    },
    typocls: {
      fontFamily: "Lato !important",
      cursor: "pointer",
      fontSize: 14,
      color: `${_dark ? "#ffffff" : "#97144D"}`,
      textDecoration: "underline",
    },
  });
  const classes = useStyles();

  const currencyFormatter = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  });

  const inrPrice = {
    type: "number",
    valueFormatter: ({ value }) =>
      currencyFormatter.format(Number(value)).slice(0, -3),
    cellClassName: "font-tabular-nums",
  };

  const columns = [
    {
      field: "id",
      hideable: false,
      headerName: "FU Number",
      flex: 1,
      minWidth: 110,
      renderCell: (params) => (
        <Typography className={classes.typocls}>{params.id} </Typography>
      ),
    },
    {
      field: "Buyer",
      flex: 1,
      minWidth: 20,
      headerName: "Buyer",
      align: "left",
    },
    {
      field: "FU Amount",
      flex: 1,
      minWidth: 32,
      headerName: "FU Amount",
      align: "center",
      ...inrPrice,
    },
    {
      field: "Current...",
      headerName: "Current...",
      flex: 1,
      minWidth: 35,
      type: "date",
      renderCell: (parms) => (
        <Typography className={classes.fcCls}>
          {moment(new Date(parms.value)).format("DD")}
          {"/"}
          {moment(new Date(parms.value)).format("MMM")}{" "}
        </Typography>
      ),
    },
    {
      field: "Proposed...",
      headerName: "Proposed...",
      flex: 1,
      minWidth: 35,
      type: "date",
      renderCell: (parms) => (
        <Typography className={classes.fpCls}>
          {moment(new Date(parms.value)).format("DD")}
          {"/"}
          {moment(new Date(parms.value)).format("MMM")}{" "}
          <img style={{ cursor: "pointer" }} src={CalendarIcon} alt="bid" />
        </Typography>
      ),
    },
    {
      field: "Current Re...",
      headerName: "Current Re...",
      flex: 1,
      minWidth: 32,
      align: "center",
    },
    {
      field: "New Interest",
      headerName: "New Interest",
      flex: 1,
      minWidth: 32,
      align: "center",
    },
    {
      field: "New Repa...",
      headerName: "New Repa...",
      flex: 1,
      minWidth: 32,
      align: "center",
    },
    {
      field: "Buyer Penal...",
      headerName: "Buyer Penal...",
      type: "number",
      flex: 1,
      minWidth: 32,
      align: "center",
      ...inrPrice,
      renderCell: (params) => (
        <Typography className={classes.typenalcls}>
          ₹ {params.value}{" "}
        </Typography>
      ),
    },
    {
      field: "Action",
      headerName: "Action",
      flex: 1,
      minWidth: 32,
      type: "singleSelect",
      renderCell: (params) => (
        <>
          <img
            style={{ cursor: "pointer" }}
            src={_dark ? AcceptDarkIcon : AcceptIcon}
            alt="bid"
          />
          <img
            style={{ cursor: "pointer" }}
            src={_dark ? RejectDarkIcon : RejectIcon}
            alt="bid"
          />
        </>
      ),
    },
  ];

  return (
    <div>
      <EarlySettlementBtn _dark={_dark} />
      <div style={{ width: "100%", marginTop: "20px", color: "#404040" }}>
        <DataGrid
          rows={EarlySettlementData}
          columns={columns}
          pageNum={pageSize}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          pageOpt={[10, 25, 50]}
          chkselection={true}
          customtoolbar={true}
          _dark={props._dark}
        />
      </div>
    </div>
  );
};
export default DueDateExtension;
