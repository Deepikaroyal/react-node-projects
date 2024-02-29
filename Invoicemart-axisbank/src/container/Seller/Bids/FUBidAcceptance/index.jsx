/* eslint-disable */
import React, { useEffect, useState } from "react";
import FUBidBtnList from "../../../Financer/Bids/BidsSummary/BidSummaryButtons";
import { Typography, Stack, Grid } from "@mui/material";
import { FUBidAcceptanceData } from "../../../../mock/BuyerBids";
import DataGrid from "../../../../components/DataGrid";
import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";
import AcceptIcon from "../../../../assets/SvgIcons/Accept.svg";
import AcceptDarkIcon from "../../../../assets/SvgIcons/Accept-dark.svg";
import Select from "../../../../components/Common/Select";
import moment from "moment";
import AcceptIconHover from "../../../../assets/SvgIcons/AcceptBidHover.svg";
import { margin } from "@mui/system";
import Checkbox from "@mui/material/Checkbox";

const useStyles = makeStyles({
  BorderCls: {
    border: "solid 1px #d3d3d3",
    width: "70%",
    borderRadius: "5px",
    marginTop: "10px",
    paddingBottom: 15,
  },
  stpCls: {
    cursor: "pointer",
    fontSize: "14px",
    fontFamily: "Lato",
    fontWeight: 400,
    marginTop: "14px",
    marginLeft: "20px",
  },
});
const FUBidAcceptance = (props) => {
  const classes = useStyles();
  const _dark = props._dark ? props._dark : false;
  const [pageSize, setPageSize] = React.useState(10);
  const [rows, setRows] = useState([]);

  const FUUnit = [
    { name: "FU1232323232(10)", value: "1" },
    { name: "FU1232323233(10)", value: "2" },
  ];
  const [fuunit, setfuunit] = React.useState(null);

  const handleChange = (event) => {
    setfuunit(event.target.value);
  };

  useEffect(() => {
    let newRows = FUBidAcceptanceData;
    setRows(newRows);
  }, []);

  const columns = [
    {
      field: "id",
      headerName: "BID ID",
      flex: 1,
      minWidth: 110,
      renderCell: (params) => (
        <Typography
          variant="subtitle2"
          style={{ cursor: "pointer", fontFamily: "Lato", fontSize: 10 }}
        >
          {params.id}{" "}
        </Typography>
      ),
    },
    {
      field: "Bid Placed On",
      flex: 1,
      minWidth: 20,
      headerName: "Bid Placed On",
      // align: 'center'
    },
    {
      field: "Bid Rate",
      flex: 1,
      minWidth: 20,
      headerName: "Bid Rate",
      // align: 'left'
    },
    {
      field: "Bid Validity",
      headerName: "Bid Validity",
      flex: 1,
      minWidth: 35,
      type: "date",
      // align:'center',
      renderCell: (params) => (
        <Typography variant="subtitle2" style={{ fontSize: 10 }}>
          {moment(new Date(params.value)).format("DD")}
          {"/"}
          {moment(new Date(params.value)).format("MMM")}{" "}
          {moment(new Date(params.value)).format("HH:mm")}
        </Typography>
      ),
    },
    {
      field: "Accept Bid",
      headerName: "Accept Bid",
      flex: 1,
      minWidth: 32,
      type: "singleSelect",
      // align: 'center',
      renderCell: (params) => (
        <>
          <img
            style={{ cursor: "pointer" }}
            src={_dark ? AcceptDarkIcon : AcceptIcon}
            alt="bid"
            onMouseOver={(e) => {
              AcceptIconHover && (e.currentTarget.src = AcceptIconHover);
            }}
            onMouseOut={(e) => {
              AcceptIconHover &&
                (e.currentTarget.src = _dark
                  ? AcceptDarkIcon
                  : AcceptIcon || "");
            }}
          />
        </>
      ),
    },
  ];

  return (
    <div>
      <Stack direction="row" spacing={2}>
        <Select
          value={fuunit}
          label=" Factoring Unit"
          onChange={handleChange}
          size="small"
          width="25%"
          data={FUUnit}
        />
        <div style={{ marginTop: "10px" }}>
          <FUBidBtnList _dark={_dark} />
        </div>
      </Stack>
      <div className={classes.BorderCls}>
        <Stack direction="row">
          <Typography className={classes.stpCls}>
            <strong> Buyer : </strong>Banwari Lal Ved Prakash
          </Typography>
          <Typography className={classes.stpCls}>
            <strong>Seller : </strong>Tata Steel
          </Typography>
          <Typography className={classes.stpCls}>
            <strong>FU Created on : </strong>29/07/2022
          </Typography>
          <Typography className={classes.stpCls}>
            <strong>FU Valid till : </strong>05/08/2022
          </Typography>
        </Stack>
      </div>
      <div style={{ width: "100%", marginTop: "20px", color: "#404040" }}>
        <DataGrid
          rows={rows}
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
export default FUBidAcceptance;
