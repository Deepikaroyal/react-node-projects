import React, { useState } from "react";
import { Button, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import "./index.css";
import { FUData } from "../../../../mock/FUdata";
import Fudetails from "../FUdetail/index";
import DataGrid from "../../../../components/DataGrid";
import BackButton from "../../../../components/Common/BackButton";

export default function FUList(props) {
  const [page, SetPage] = useState("list");
  const [title, setTitle] = useState("FU Listing");
  const [Funumber, setFunumber] = useState();
  const _dark = props._dark ? props._dark : false;

  const useStyles = makeStyles({
    btnCls: {
      backgroundColor: "#97144D !important",
      color: "#FFFFFF !important",
      padding: "8px 10px",
      borderRadius: `4px !important`,
      textTransform: "none !important",
      fontSize: "12px !important",
      fontFamily: "Lato",
      lineHeight: "14px",
      fontWeight: "bold",
      marginLeft: 15,
    },
  });
  const classes = useStyles();
  const ShowFuDetails = (Id) => {
    setFunumber(Id);
    setTitle("FU " + Id);
    SetPage("details");
  };
  const backFlow = () => {
    setTitle("FU Listing");
    SetPage("list");
  };
  const columns = [
    {
      field: "id",
      headerName: "FU Number",
      flex: 1,
      minWidth: 66,
      renderCell: (params) => (
        <Typography
          variant="subtitle2"
          style={{ cursor: "pointer" }}
          onClick={() => {
            ShowFuDetails(params.id);
          }}
        >
          {params.id}
        </Typography>
      ),
    },
    {
      field: "Buyer",
      flex: 1,
      minWidth: 66,
      headerName: "Buyer",
    },
    {
      field: "Seller",
      flex: 1,
      minWidth: 66,
      headerName: "Seller",
    },
    {
      field: "FU Created Date",
      headerName: "FU Created Date",
      flex: 1,
      minWidth: 66,
    },
    {
      field: "FU Amount",
      headerName: "FU Amount",
      flex: 1,
      minWidth: 66,
    },
    {
      field: "Buyer Limit Available",
      headerName: "Buyer Limit Available",
      flex: 1,
      minWidth: 66,
    },
    {
      field: "Crisil Rating",
      headerName: "Crisil Rating",
      flex: 1,
      minWidth: 66,
    },
    {
      field: "FU Status",
      headerName: "FU Status",
      flex: 1,
      minWidth: 66,
    },
    {
      field: "Buyer BU",
      headerName: "Buyer BU",
      flex: 1,
      minWidth: 66,
    },
    {
      field: "Seller BU",
      headerName: "Seller BU",
      flex: 1,
      minWidth: 66,
    },
    {
      field: "Total No. Invoices",
      headerName: "Total No. Invoices",
      flex: 1,
      minWidth: 66,
    },
  ];
  return (
    <>
      <h3
        className="fu-listing"
        style={{
          borderBottom:
            page === "list" ? "dashed 1px #CBCBCB" : "solid 1px #CBCBCB",
          color: _dark ? "#ffffff" : "#404040",
        }}
      >
        {title}
        {page !== "list" ? (
          <BackButton
            sx={{ float: "right" }}
            width="10%"
            onClick={() => {
              backFlow();
            }}
          />
        ) : (
          ""
        )}
      </h3>
      {page === "list" ? (
        <>
          <div>
            <Button className={classes.btnCls}>
              Download FU Workflow History
            </Button>
            <Button className={classes.btnCls}>Place Bids</Button>
          </div>
          <div style={{ width: "100%", marginTop: "20px", color: "#404040" }}>
            <DataGrid
              rows={FUData}
              columns={columns}
              pageNum={10}
              pageOpt={[5, 10]}
              _dark={props._dark}
            />
          </div>
        </>
      ) : (
        <Fudetails Funumber={Funumber} backFlow={backFlow} _dark={_dark} />
      )}
    </>
  );
}
