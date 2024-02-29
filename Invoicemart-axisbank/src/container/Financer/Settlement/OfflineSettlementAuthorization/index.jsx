import React from "react";
import OfflineSettlementAuthoBtn from "./OfflineSettlementAuthoBtn";
import OfflineSettlementDetails from "./OfflineSettlementDetails";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import RejectIcon from "../../../../assets/SvgIcons/Reject.svg";
import RejectDarkIcon from "../../../../assets/SvgIcons/reject-dark.svg";
import AuthorizeIcon from "../../../../assets/SvgIcons/Authorize.svg";
import AuthorizeDarkIcon from "../../../../assets/SvgIcons/AuthorizeSettlementDark.svg";
import CalendarIcon from "../../../../assets/SvgIcons/Calendar.svg";
import moment from "moment";
import DataGrid from "../../../../components/DataGrid";
import { OfflineSettlementAuthoData } from "../../../../mock/SettlementData";

const OfflineSettlementAuthorization = (props) => {
  const _dark = props._dark ? props._dark : false;
  const [pageSize, setPageSize] = React.useState(20);
  const [open, setOpen] = React.useState(false);
  const [selectedRows, setSelectedRows] = React.useState([]);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
    typocls: {
      fontFamily: "Lato !important",
      cursor: "pointer",
      fontSize: 14,
      color: `${_dark ? "#ffffff" : "#97144D"}`,
      textDecoration: "underline",
    },
    remtypocls: {
      border: "1px solid #cfcfcf",
      boxShadow: "1px 3px 1px #bebebe",
      fontSize: 12,
      font: "lato",
      width: 110,
      textAlign: "center",
      borderRadius: 5,
      paddingTop: "3px",
      paddingBottom: "3px",
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
      minWidth: 50,
      renderCell: (params) => (
        <Typography className={classes.typocls}>{params.id} </Typography>
      ),
    },
    {
      field: "Buyer",
      flex: 1,
      minWidth: 32,
      headerName: "Buyer",
      align: "left",
    },
    {
      field: "nextauthle",
      flex: 1,
      minWidth: 32,
      headerName: "Next Auth Le...",
      align: "center",
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
      field: "duedate",
      headerName: "Due Date",
      flex: 1,
      minWidth: 32,
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
      field: "repayeddate",
      headerName: "Repayed Date",
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
      field: "penalinterest",
      headerName: "Penal Interest Collected",
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
      field: "remarks",
      headerName: "Remarks",
      flex: 1,
      minWidth: 32,
      align: "center",
      renderCell: (params) => (
        <Typography className={classes.remtypocls}>{params.value} </Typography>
      ),
    },

    {
      field: "action",
      headerName: "Action",
      flex: 1,
      minWidth: 32,
      type: "singleSelect",
      renderCell: (params) => (
        <>
          <img
            style={{ cursor: "pointer" }}
            src={_dark ? AuthorizeDarkIcon : AuthorizeIcon}
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
    <>
      {!open && (
        <>
          <OfflineSettlementAuthoBtn
            _dark={_dark}
            handleOpen={handleOpen}
            selectedRows={selectedRows}
          />
          <div style={{ width: "100%", marginTop: "20px", color: "#404040" }}>
            <DataGrid
              rows={OfflineSettlementAuthoData}
              columns={columns}
              pageNum={pageSize}
              onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
              pageOpt={[10, 25, 50]}
              chkselection={true}
              customtoolbar={true}
              _dark={props._dark}
              onSelectionModelChange={(ids) => {
                const selectedIDs = new Set(ids);
                const selectedRows = OfflineSettlementAuthoData.filter((row) =>
                  selectedIDs.has(row.id)
                );
                setSelectedRows(selectedRows);
              }}
            />
          </div>
        </>
      )}
      {open && (
        <OfflineSettlementDetails
          _dark={_dark}
          handleClose={handleClose}
          open={open}
        />
      )}
    </>
  );
};
export default OfflineSettlementAuthorization;
