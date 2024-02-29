/* eslint-disable */
import React, { useState, useEffect } from "react";
import { Typography, Stack } from "@mui/material";
import { BidsSummary } from "../../../../mock/FUdata";
import DataGrid from "../../../../components/DataGrid";
import BidListButtons from "./BidSummaryButtons";
import WonBid from "../../../../assets/SvgIcons/WonBid.svg";
import LostBid from "../../../../assets/SvgIcons/LostBid.svg";
import NotBid from "../../../../assets/SvgIcons/NotBid.svg";
import WonBidDark from "../../../../assets/SvgIcons/WonDark.svg";
import LostBidDark from "../../../../assets/SvgIcons/lostDark.svg";
import NotBidDark from "../../../../assets/SvgIcons/NotBidDark.svg";
import { makeStyles } from "@mui/styles";
// import YesSwitch from '../../../../assets/SvgIcons/yes.svg'
// import NoSwitch from '../../../../assets/SvgIcons/no.svg'
// import NoGrant from '../../../../assets/SvgIcons/NoGrant.svg'
import moment from "moment";
import CustomDatePicker from "../../../../components/Common/customDatepicker";
import AutoCompleteInput from "../../../../components/Common/AutoCompleteInput";
import { toast } from "react-toastify";
import { ApiFUResponses, fetchBidCount, fetchBidApi } from "../Api";
import Fudetails from "../FUdetail";
import InvoiceDetails from "../FUdetail/InvoiceDetails";
import BackButton from "../../../../components/Common/BackButton";

export default function BidsSummaryList(props) {
  // console.log('bidding summary', props)
  const _dark = props._dark ? props._dark : false;
  const [pageSize, setPageSize] = useState(10);
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filterValue, setFilterValue] = useState();
  const [isSet, setIsSet] = useState(true);
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  const [buyerEntityIds, setBuyerEntityIds] = useState([]);
  const [title, setTitle] = useState("FU Listing");
  const [fuNumber, setFunumber] = useState();
  const [fuData, setFuData] = useState();
  const [fuInvnumber, setFuInvnumber] = useState();
  const [page, SetPage] = useState("list");

  const ShowFuDetails = (Id) => {
    setFunumber(Id);
    var _data = rows.filter((x) => x.id === Id);
    setFuData(_data);
    setTitle(Id);
    SetPage("details");
  };
  const ShowInvoiceDetails = (Id) => {
    setTitle("INV " + Id);
    setFuInvnumber(Id);
    SetPage("invoice");
  };
  const backFlow = () => {
    setTitle("FU Listing");
    SetPage("list");
  };
  function loadServerRows(commodityFilterValue) {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (!commodityFilterValue) {
          resolve(props.bidfuResponse ? props.bidfuResponse : []);
          return;
        }
      }, Math.random() * 500 + 100); // simulate network latency
    });
  }
  useEffect(() => {
    let active = true;
    (async () => {
      setLoading(true);
      const newRows = await loadServerRows(filterValue);
      if (!active) {
        return;
      }
      setRows(newRows);
      setLoading(false);
    })();
    return () => {
      active = false;
    };
  }, [filterValue]);

  const resetFilter = () => {
    setBuyerEntityIds([]);
    setRows(props.bidfuResponse ? props.bidfuResponse : []);
    setToDate(null);
    setFromDate(null);
  };

  const refreshData = () => {
    setRows(props.bidfuResponse ? props.bidfuResponse : []);
  };

  const useStyles = makeStyles({
    stpCls: {
      padding: 8,
      borderRadius: 4,
      textAlign: "center",
      cursor: "pointer",
      color: "#ffffff",
      fontSize: "10px",
      fontFamily: "Lato",
      backgroundColor: "#97144D",
      marginLeft: 5,
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
      headerName: "FU Number (Invoices Count)",
      flex: 1,
      minWidth: 100,
      renderCell: (params) => (
        <Typography
          variant="subtitle2"
          style={{ cursor: "pointer", fontFamily: "Lato", fontSize: 10 }}
          onClick={() => {
            ShowFuDetails(params.id);
          }}
        >
          {params.id}
          <span style={{ color: "#97144D" }}>({params.row.InvoiceCount})</span>
        </Typography>
      ),
    },
    {
      field: "Udyam",
      flex: 1,
      minWidth: 90,
      headerName: "Udyam Number",
      align: "left",
    },
    {
      field: "Buyer",
      headerName: "Buyer Name",
      flex: 1,
      minWidth: 66,
      align: "center",
      hide: true,
    },
    {
      field: "Seller",
      headerName: "Seller Name",
      flex: 1,
      minWidth: 66,
      align: "center",
      hide: true,
    },
    {
      field: "FU_Amount",
      headerName: "FU Amount",
      flex: 1,
      minWidth: 35,
      ...inrPrice,
    },
    {
      field: "FU_Status",
      headerName: "FU Status",
      flex: 1,
      minWidth: 105,
      hide: true,
      type: "singleSelect",
      valueOptions: ["CREATED", "APPROVED", "CP - ACCEPTED", "CP - AUTHORIZED"],
      renderCell: (params) => (
        <Typography
          className={classes.fuCls}
          style={{
            backgroundColor:
              params.value === "CREATED"
                ? "#C17294"
                : params.value === "APPROVED"
                ? "#97144D"
                : "#AC4371",
          }}
        >
          {params.value}
        </Typography>
      ),
    },
    {
      field: "My_Bid_Status",
      headerName: "My Bid Status",
      flex: 1,
      minWidth: 66,
      type: "singleSelect",
      valueOptions: ["WON", "LOST", "NA"],
      align: "center",
      renderCell: (params) => (
        <>
          {params.value === "WON" ? (
            <img src={_dark ? WonBidDark : WonBid} alt="bid" />
          ) : params.value === "LOST" ? (
            <img src={_dark ? LostBidDark : LostBid} alt="bid" />
          ) : (
            <img src={_dark ? NotBidDark : NotBid} alt="bid" />
          )}
        </>
      ),
    },
    // {
    //     field: "Crisil Rating",
    //     headerName: "Crisil Rating",
    //     flex: 1,
    //     minWidth: 66,
    //     align: 'center',
    //     hide: true
    // },
    {
      field: "STP",
      headerName: "Integration?",
      flex: 1,
      minWidth: 50,
      hide: true,
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
      field: "Related_Party",
      headerName: "Related Party?",
      flex: 1,
      minWidth: 50,
      hide: true,
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
      field: "MSME_Classfication",
      headerName: "MSME Classfication",
      flex: 1,
      minWidth: 62,
      type: "singleSelect",
      valueOptions: ["SMALL", "MICRO", "MEDIUM"],
      renderCell: (params) => (
        <Typography
          className={classes.msmeCls}
          style={{
            backgroundColor:
              params.value === "SMALL"
                ? "#C17294"
                : params.value === "MICRO"
                ? "#97144D"
                : "#AC4371",
          }}
        >
          {params.value}
        </Typography>
      ),
      hide: true,
    },
    {
      field: "ResidualTenor",
      headerName: "Residual Tenor",
      flex: 1,
      minWidth: 30,
      align: "center",
      type: "number",
    },
    {
      field: "Won_Bid",
      headerName: "Won Bid (Bids Count)",
      flex: 1,
      align: "center",
      minWidth: 30,
      type: "number",
    },
    {
      field: "My_Bid",
      headerName: "My Bid",
      flex: 1,
      align: "center",
      minWidth: 30,
      type: "number",
    },
    {
      field: "Earnings",
      headerName: "Earnings",
      flex: 1,
      minWidth: 50,
      ...inrPrice,
    },
    // {
    //     field: "Insurance",
    //     headerName: "Insurance",
    //     flex: 1,
    //     minWidth: 72,
    //     hide: true,
    //     type: 'singleSelect',
    //     valueOptions: ['Yes', 'No', 'N (Grey)'],
    //     renderCell: (params) => (
    //         params.value === "Yes" ?
    //             <img src={YesSwitch} alt="insurance" style={{ cursor: 'pointer' }} />
    //             : params.value === "No" ?
    //                 <img src={NoGrant} alt="insurance" style={{ cursor: 'pointer' }} />
    //                 :
    //                 <img src={NoSwitch} alt="insurance" style={{ cursor: 'pointer' }} />
    //     )
    // },
    {
      field: "FU_Due_Date",
      headerName: "FU Due Date",
      type: "date",
      flex: 1,
      minWidth: 66,
      renderCell: (params) => (
        <Typography variant="subtitle2" style={{ fontSize: 10 }}>
          {moment(new Date(params.value)).format("DD")}
          {"/"}
          {moment(new Date(params.value)).format("MMM")}{" "}
          {moment(new Date(params.value)).format("HH:mm")}
        </Typography>
      ),
    },
  ];
  const onAutoChange = async (Newdata) => {
    setBuyerEntityIds(Newdata);
    let NewRows = await ApiFUResponses(Newdata, fromDate, toDate);
    if (NewRows) {
      let fetchBidCountResponse = await fetchBidCount(
        NewRows.furow,
        NewRows.fuNumArray
      );
      let fetchBidResponse = await fetchBidApi(
        fetchBidCountResponse,
        NewRows.fuNumArray
      );
      setRows(fetchBidResponse);
    } else {
      setRows([]);
    }
  };
  const dateChange = async (_date, _e) => {
    if (_e === "t") {
      if (fromDate) {
        if (fromDate <= _date) {
          setToDate(_date);
          let NewRows = await ApiFUResponses(buyerEntityIds, fromDate, _date);
          if (NewRows) {
            let fetchBidCountResponse = await fetchBidCount(
              NewRows.furow,
              NewRows.fuNumArray
            );
            let fetchBidResponse = await fetchBidApi(
              fetchBidCountResponse,
              NewRows.fuNumArray
            );
            setRows(fetchBidResponse);
          } else {
            setRows([]);
          }
        } else {
          toast.error(
            "Please select proper dates! from date should be less than or equal to date."
          );
        }
      } else {
        toast.error("Please select from Date!");
      }
    } else {
      setFromDate(_date);
    }
  };
  return (
    <>
      {page !== "list" ? (
        <h3
          className="fu-listing"
          style={{
            borderBottom:
              page === "list" ? "dashed 1px #CBCBCB" : "solid 1px #CBCBCB",
            color: _dark ? "#ffffff" : "#404040",
          }}
        >
          {title}
          <BackButton
            sx={{ float: "right" }}
            width="10%"
            onClick={() => {
              backFlow();
            }}
          />
        </h3>
      ) : (
        ""
      )}
      {page === "list" ? (
        <>
          <Stack direction="row" spacing={2} sx={{ paddingBottom: 2 }}>
            <AutoCompleteInput
              data={props.BuyerEntityList}
              relation="Buyer Entity Name"
              onAutoChange={onAutoChange}
              value={buyerEntityIds}
            />
            <CustomDatePicker
              label="From Date*"
              value={fromDate}
              onChange={(newValue) => {
                dateChange(newValue, "f");
              }}
            />
            <CustomDatePicker
              label="To Date*"
              value={toDate}
              onChange={(newValue) => {
                dateChange(newValue, "t");
              }}
            />
          </Stack>
          <BidListButtons
            _dark={_dark}
            resetFilter={resetFilter}
            refreshData={refreshData}
          />
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
              loading={loading}
            />
          </div>
        </>
      ) : page === "details" ? (
        <Fudetails
          fuNumber={fuNumber}
          fuData={fuData}
          backFlow={backFlow}
          _dark={_dark}
          ShowInvoiceDetails={ShowInvoiceDetails}
        />
      ) : (
        <InvoiceDetails FuInvnumber={fuInvnumber} _dark={_dark} />
      )}
    </>
  );
}
