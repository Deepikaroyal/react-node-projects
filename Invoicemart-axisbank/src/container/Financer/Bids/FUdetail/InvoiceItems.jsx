import React from "react";
import { Typography } from "@mui/material";
// import { InvoiceData } from '../../../../mock/InvoiceData';
import DataGrid from "../../../../components/DataGrid";
import BackButton from "../../../../components/Common/BackButton";
import InvoiceModal from "./InvoiceModal";
import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import WorkFlow from "../../../../assets/SvgIcons/FU/fuworkflow.svg";
import WorkFlowLight from "../../../../assets/SvgIcons/FU/fuworkflowlight.svg";
import { downloadInvoice } from "../../../../api/auth";
import { toast } from "react-toastify";
// import { PDFDownloadLink } from "@react-pdf/renderer";
// import PdfDocument from "../../../../components/GenerateInvoice/index";

export default function InoviceItems(props) {
  const rowsData = props.invoiceData
    ? props.invoiceData?.data?.map((v) => ({ ...v, id: v.invNum }))
    : [];
  const _dark = props._dark ? props._dark : false;
  const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [InvoiceId, setInoviceId] = React.useState("");
  const [loading, setLoading] = React.useState({});
  const [allLoading, setAllLoading] = React.useState(false);

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
  const OpenInvoice = async (Id) => {
    // const invNum = Id.slice(Id.lastIndexOf("/")+1)
    setInoviceId(Id);
    try {
      let _body = JSON.stringify({
        // "invoiceNum": ["jk99"]
        invoiceNum: [Id],
      });
      const response = await downloadInvoice(_body);
      const { filename } = response.headers;
      let extension = filename
        .toLowerCase()
        .slice(filename.lastIndexOf(".") + 1);
      let fileType = "";
      if (extension === "pdf") {
        fileType = "application/pdf";
      } else if (extension === "jpeg" || "png" || "gif" || "jpg") {
        fileType = "image/" + extension;
      }
      const url = URL.createObjectURL(
        new Blob([response.data], {
          type: fileType ? fileType : "application/octet-stream",
        })
      );
      const link = document.createElement("a");
      link.href = url;
      link.target = "_blank";
      // link.download = filename;
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      toast.error(`${Id} Invoice Not Found To Open!`);
      // console.log(error)
    }
    // handleOpen();
  };
  const handleDownload = async (Id) => {
    // console.log("Clicked", Id)
    setLoading({ ...loading, [Id]: true });
    try {
      let _body = JSON.stringify({
        // "invoiceNum": ["199"]
        invoiceNum: [Id],
      });
      const response = await downloadInvoice(_body);
      // console.log("Response", response)
      const url = URL.createObjectURL(new Blob([response.data]));
      const { filename } = response.headers;
      const link = document.createElement("a");
      link.href = url;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      toast.error(`${Id} Invoice Not Found To Download!`);
      // console.log("Error", error)
    } finally {
      setLoading({ ...loading, [Id]: false });
    }
  };
  const handleAllDownload = async () => {
    setAllLoading(true);
    // let fuNum = props.fus
    let allInvoices = rowsData.map((obj) => obj.id.toString());
    // console.log(allInvoices, "All Invoices")
    try {
      let _body = JSON.stringify({
        // "invoiceNum": ["jk99", "jk98", "199"],
        // "fus": fuNum
        invoiceNum: allInvoices,
      });
      const response = await downloadInvoice(_body);
      // console.log("Response", response)
      const url = URL.createObjectURL(new Blob([response.data]));
      const { filename } = response.headers;
      const link = document.createElement("a");
      link.href = url;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      toast.error("Invoices Not Found To Download!");
      // console.log("Error", error)
    } finally {
      setAllLoading(false);
    }
  };
  const columns = [
    {
      field: "id",
      flex: 1,
      minWidth: 66,
      headerName: "Invoice .No",
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
    // {
    //   field: "invSno",
    //   flex: 1,
    //   minWidth: 66,
    //   headerName: "Invoice S.No",
    // },
    {
      field: "goodsDesc",
      flex: 1,
      minWidth: 66,
      headerName: "Description of Goods",
    },
    {
      field: "totalQuantity",
      flex: 1,
      minWidth: 66,
      headerName: "Quantity",
      renderCell: (params) => (
        <Typography variant="subtitle2" style={{ fontSize: 10 }}>
          {params.row.invLineItemOneQty +
            params.row.invLineItemTwoQty +
            params.row.invLineItemThreeQty +
            params.row.invLineItemFourQty +
            params.row.invLineItemFiveQty}
        </Typography>
      ),
    },
    {
      field: "totalRatePerUnit",
      flex: 1,
      minWidth: 66,
      headerName: "Rate Per Unit",
      renderCell: (params) => (
        <Typography variant="subtitle2" style={{ fontSize: 10 }}>
          {params.row.invLineItemOneRatePerUnit +
            params.row.invLineItemTwoRatePerUnit +
            params.row.invLineItemThreeRatePerUnit +
            params.row.invLineItemFourRatePerUnit +
            params.row.invLineItemFiveRatePerUnit}
        </Typography>
      ),
    },
    {
      field: "invNetAmount",
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
          disabled={loading[params.id]}
          startIcon={
            <img
              src={_dark ? WorkFlowLight : WorkFlow}
              height="12"
              alt="workflow"
            />
          }
          onClick={(e) => {
            e.preventDefault();
            handleDownload(params.id);
          }}
        >
          {loading[params.id] ? "Downloading..." : "Invoice"}
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
          rows={rowsData}
          columns={columns}
          pageNum={5}
          pageOpt={[5, 10]}
          _dark={_dark}
          chkselection={false}
          customtoolbar={false}
          disableColumnFilter
          disableSelectionOnClick
          getDetailPanelContent={({ row }) => <div>Inv No: {row.id}</div>}
          getDetailPanelHeight={({ row }) => "auto"}
        />
        <Button
          sx={{ mt: 2 }}
          className={classes.btnCls}
          disabled={allLoading}
          startIcon={
            <img
              src={_dark ? WorkFlowLight : WorkFlow}
              height="12"
              alt="workflow"
            />
          }
          onClick={() => handleAllDownload()}
        >
          {allLoading ? "Downloading...." : "All Invoice"}
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
          data={rowsData}
          InvoiceId={InvoiceId}
          _dark={_dark}
        />
      ) : (
        ""
      )}
    </>
  );
}
