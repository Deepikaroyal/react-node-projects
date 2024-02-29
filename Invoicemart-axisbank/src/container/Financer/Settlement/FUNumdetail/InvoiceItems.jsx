import React from "react";
import { Typography } from "@mui/material";
import { InvoiceData } from "../../../../mock/InvoiceData";
import DataGrid from "../../../../components/DataGrid";
import BackButton from "../../../../components/Common/BackButton";
import InvoiceModal from "./InvoiceModal";
import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import WorkFlow from "../../../../assets/SvgIcons/FU/fuworkflow.svg";
import WorkFlowLight from "../../../../assets/SvgIcons/FU/fuworkflowlight.svg";

export default function InoviceItems(props) {
  const _dark = props._dark ? props._dark : false;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [InvoiceId, setInoviceId] = React.useState("");

  const useStyles = makeStyles({
    btnCls: {
      color: `${_dark ? "#ffffff" : "#97144D"} !important`,
      borderRadius: `4px !important`,
      textTransform: "uppercase !important",
      fontSize: "10px !important",
      fontFamily: "Lato",
      lineHeight: "12px",
      border: `1px solid ${_dark ? "#ffffff" : "#97144D"}`,
      marginRight: 15,
      fontWeight: 700,
      cursor: "pointer",
    },
  });
  const classes = useStyles();
  const OpenInvoice = (Id) => {
    setInoviceId(Id);
    handleOpen();
  };
  const columns = [
    {
      field: "id",
      flex: 1,
      minWidth: 66,
      headerName: "Invoice S.No",
      renderCell: (params) => (
        <Typography
          variant="subtitle2"
          style={{ cursor: "pointer", fontSize: 10 }}
          onClick={() => {
            OpenInvoice(params.id);
          }}
        >
          {params.id}
        </Typography>
      ),
    },
    {
      field: "Invoice",
      flex: 1,
      minWidth: 66,
      headerName: "Invoice .No",
    },
    {
      field: "Description",
      flex: 1,
      minWidth: 66,
      headerName: "Description of Goods",
    },
    {
      field: "Quantity",
      flex: 1,
      minWidth: 66,
      headerName: "Quantity",
    },
    {
      field: "RatePerUnit",
      flex: 1,
      minWidth: 66,
      headerName: "Rate Per Unit",
    },
    {
      field: "Amount",
      flex: 1,
      minWidth: 66,
      headerName: "Amount",
    },
    {
      field: "Download",
      flex: 1,
      minWidth: 66,
      headerName: "Download",
      renderCell: (params) => (
        <Button
          className={classes.btnCls}
          startIcon={
            <img
              src={_dark ? WorkFlowLight : WorkFlow}
              height="12"
              alt="workflow"
            />
          }
        >
          Invoice
        </Button>
      ),
    },
  ];
  return (
    <>
      <div
        style={{
          height: 420,
          width: "100%",
          marginTop: "20px",
          marginBottom: "20px",
          color: "#404040",
        }}
      >
        <DataGrid
          rows={InvoiceData}
          columns={columns}
          pageNum={5}
          pageOpt={[5, 10]}
          _dark={_dark}
          chkselection={false}
          customtoolbar={false}
          disableColumnFilter
        />
        <Button
          sx={{ mt: 2 }}
          className={classes.btnCls}
          startIcon={
            <img
              src={_dark ? WorkFlowLight : WorkFlow}
              height="12"
              alt="workflow"
            />
          }
        >
          All Invoices
        </Button>
        <BackButton
          sx={{ mt: 2, mr: 2, float: "right" }}
          width="10%"
          onClick={props.backFlow}
        />
      </div>
      {open ? (
        <InvoiceModal
          open={open}
          handleClose={handleClose}
          InvoiceId={InvoiceId}
          _dark={_dark}
        />
      ) : (
        ""
      )}
    </>
  );
}
