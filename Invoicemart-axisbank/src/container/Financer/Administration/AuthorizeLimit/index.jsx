import React from "react";
import { Typography } from "@mui/material";
import { BuyerLimitsData } from "../../../../mock/AdministrationData";
import DataGrid from "../../../../components/DataGrid";
import ButtonList from "./Buttons";
import { makeStyles } from "@mui/styles";
import moment from "moment";
import BuyerConfiguration from "./BuyerConfiguration";

const AuthorizeLimit = (props) => {
  const _dark = props._dark ? props._dark : false;
  const [pageSize, setPageSize] = React.useState(10);
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
    typocls: {
      fontFamily: "Lato !important",
      cursor: "pointer",
      fontSize: 10,
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
    // {
    //   field: "id",
    //   hideable: false,
    //   headerName: "FU Number (Invoices Count)",
    //   flex: 1,
    //   minWidth: 110,
    //   renderCell: (params) => (
    //     <Typography variant="subtitle2" className={classes.typocls} onClick={() => { props.ShowFuDetails(params.id) }}>
    //       {params.id}<span style={{ color: '#97144D' }}>({params.row.InvoiceCount})</span>
    //     </Typography>
    //   )
    // },
    {
      field: "Buyer",
      flex: 1,
      minWidth: 80,
      headerName: "Buyer",
    },
    {
      field: "Buyer BU",
      headerName: "Buyer BU",
      flex: 1,
      type: "number",
      minWidth: 32,
      align: "center",
    },
    {
      field: "Valid Till",
      headerName: "Valid Till",
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
      field: "Limit",
      headerName: "Limit",
      flex: 1,
      minWidth: 35,
      ...inrPrice,
    },
    {
      field: "Limit Type",
      headerName: "Limit Type",
      flex: 1,
      minWidth: 32,
      align: "center",
      type: "singleSelect",
      valueOptions: ["Yes", "No"],
      renderCell: (params) => (
        <Typography
          className={classes.stpCls}
          style={{
            backgroundColor: params.value === "Yes" ? "#1FC24E" : "#FF2121",
          }}
        >
          {params.value}
        </Typography>
      ),
    },
    {
      field: "Warning",
      headerName: "Warning %",
      flex: 1,
      align: "center",
      minWidth: 32,
      renderCell: (parms) => (
        <Typography className={classes.fcCls}>
          {parms.value}
          {" %"}
        </Typography>
      ),
    },
    {
      field: "Seller",
      headerName: "Seller",
      flex: 1,
      minWidth: 62,
    },
    {
      field: "Seller Limit Type",
      headerName: "Seller Limit Type",
      flex: 1,
      minWidth: 32,
      type: "singleSelect",
      valueOptions: ["Yes", "No"],
      renderCell: (params) => (
        <Typography
          className={classes.stpCls}
          style={{
            backgroundColor: params.value === "Yes" ? "#1FC24E" : "#FF2121",
          }}
        >
          {params.value}
        </Typography>
      ),
    },
    {
      field: "Seller Limit Value",
      headerName: "Seller Limit Value",
      flex: 1,
      minWidth: 35,
      ...inrPrice,
    },
    {
      field: "Limit Status",
      headerName: "Limit Status",
      flex: 1,
      minWidth: 32,
      renderCell: (parms) => (
        <Typography className={classes.fcCls}>{parms.value}</Typography>
      ),
    },
    {
      field: "Config Status",
      headerName: "Config Status",
      flex: 1,
      minWidth: 32,
      renderCell: (parms) => (
        <Typography className={classes.fcCls}>{parms.value}</Typography>
      ),
      // type: 'singleSelect',
      // valueOptions: ['CREATED', 'APPROVED', 'CP - ACCEPTED', 'CP - AUTHORIZED'],
      // renderCell: (params) => (
      //   <Typography className={classes.fuCls} style={{ backgroundColor: params.value === 'CREATED' ? '#C17294' : params.value === 'APPROVED' ? '#97144D' : '#AC4371' }}>
      //     {params.value}
      //   </Typography>
      // ),
    },
  ];
  return (
    <>
      {!open && (
        <>
          <ButtonList
            _dark={_dark}
            handleOpen={handleOpen}
            selectedRows={selectedRows}
          />
          <div style={{ width: "100%", marginTop: "20px", color: "#404040" }}>
            <DataGrid
              rows={BuyerLimitsData}
              columns={columns}
              pageNum={pageSize}
              onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
              pageOpt={[10, 25, 50]}
              chkselection={true}
              customtoolbar={true}
              _dark={props._dark}
              onSelectionModelChange={(ids) => {
                const selectedIDs = new Set(ids);
                const selectedRows = BuyerLimitsData.filter((row) =>
                  selectedIDs.has(row.id)
                );
                setSelectedRows(selectedRows);
              }}
            />
          </div>
        </>
      )}
      {open && (
        <BuyerConfiguration
          _dark={_dark}
          handleClose={handleClose}
          open={open}
        />
      )}
    </>
  );
};
export default AuthorizeLimit;
