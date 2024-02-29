import React, { useState } from "react";
import { Typography } from "@mui/material";
import { InvoiceData } from "../../../../mock/InvoiceData";
import DataGrid from "../../../../components/DataGrid";

export default function InoviceList(props) {
  const _dark = props._dark ? props._dark : false;
  const [Funumber, setFunumber] = useState();
  console.log(Funumber);
  const ShowFuDetails = (Id) => {
    setFunumber(Id);
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
  ];
  return (
    <div
      style={{
        height: 420,
        width: "100%",
        marginTop: "20px",
        color: "#404040",
      }}
    >
      <DataGrid
        rows={InvoiceData}
        columns={columns}
        pageNum={5}
        pageOpt={[5, 10]}
        _dark={_dark}
      />
    </div>
  );
}
