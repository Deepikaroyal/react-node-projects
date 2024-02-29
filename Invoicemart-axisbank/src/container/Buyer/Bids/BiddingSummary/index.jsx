/* eslint-disable */
import React, { useState, useEffect } from "react";
import BidSummaryBtnList from "../../../Financer/Bids/BidsSummary/BidSummaryButtons";
import { Typography, Stack } from "@mui/material";
import DataGrid from "../../../../components/DataGrid";
import moment from "moment";
import CustomDatePicker from "../../../../components/Common/customDatepicker";
import AutoCompleteInput from "../../../../components/Common/AutoCompleteInput";
import { toast } from "react-toastify";
import {
  fetchBidCount,
  fetchBidApi,
  fuFetchAdditionalDetails,
} from "../../../Financer/Bids/Api";
import { ApiBUResponses } from "../Api";
import Fudetails from "../../../Financer/Bids/FUdetail";
import InvoiceDetails from "../../../Financer/Bids/FUdetail/InvoiceDetails";
import BackButton from "../../../../components/Common/BackButton";
import FUStatusListButtons from "./FUStatusBtnList";
import { makeStyles } from "@mui/styles";

const BiddingSummary = (props) => {
  const _dark = props._dark ? props._dark : false;
  const [pageSize, setPageSize] = React.useState(10);
  const [filterValue, setFilterValue] = useState();
  const [loading, setLoading] = useState(false);
  const [rows, setRows] = useState([]);
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  const [sellerEntityIds, setSellerEntityIds] = useState([]);
  const [title, setTitle] = useState("FU Listing");
  const [fuNumber, setFunumber] = useState();
  const [fuData, setFuData] = useState();
  const [fuInvnumber, setFuInvnumber] = useState();
  const [page, SetPage] = useState("list");
  const [activeButtons, setActiveButtons] = useState([]);

  useEffect(() => {
    filterData(props.fuResponse, activeButtons);
  }, [activeButtons, props.fuResponse]);

  const filterData = (data, activeButtons) => {
    // console.log("Data", data)
    // console.log("Active Buttons", activeButtons)
    const filteredData = data.filter((item) => {
      if (activeButtons.length > 0 && !activeButtons.includes(item.FU_Status)) {
        return false;
      }
      return true;
    });
    // console.log("Filter Data", filteredData)
    setRows(filteredData);
  };

  const handleButtonClick = (buttonName) => {
    if (activeButtons.includes(buttonName)) {
      setActiveButtons(activeButtons.filter((name) => name !== buttonName));
    } else {
      setActiveButtons([...activeButtons, buttonName]);
    }
  };

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
          resolve(props.fuResponse ? props.fuResponse : []);
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
    sellerEntityIds.length = 0;
    setSellerEntityIds([]);
    setActiveButtons([]);
    setRows(props.fuResponse ? props.fuResponse : []);
    setToDate(null);
    setFromDate(null);
  };

  const refreshData = () => {
    props.refreshApiData();
    // setRows(props.fuResponse ? props.fuResponse : [])
  };

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
  const dateChange = async (_date, _e) => {
    if (_e === "t") {
      if (fromDate) {
        if (fromDate <= _date) {
          setToDate(_date);
          let NewRows = await ApiBUResponses(sellerEntityIds, fromDate, _date);
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
  const onAutoChange = async (Newdata) => {
    setSellerEntityIds(Newdata);
    let fuArray = props.entityFuNumber;
    let NewRows = await ApiBUResponses(Newdata, fromDate, toDate, fuArray);
    if (NewRows) {
      let fetchBidCountResponse = await fetchBidCount(
        NewRows.furow,
        NewRows.fuNumArray
      );
      let fetchBidResponse = await fetchBidApi(
        fetchBidCountResponse,
        NewRows.fuNumArray
      );
      let fetchAdditionalResponse = await fuFetchAdditionalDetails(
        fetchBidResponse,
        NewRows.fuNumArray
      );
      setRows(fetchAdditionalResponse);
      // setRows(fetchBidResponse)
    } else {
      setRows([]);
    }
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
      field: "Buyer",
      flex: 1,
      minWidth: 90,
      headerName: "Buyer Name",
      align: "left",
    },
    {
      field: "Seller",
      headerName: "Seller Name",
      flex: 1,
      minWidth: 66,
      align: "left",
    },
    {
      field: "FU_Amount",
      headerName: "FU Amount",
      flex: 1,
      align: "center",
      minWidth: 35,
      ...inrPrice,
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
      headerName: "Won Bids",
      flex: 1,
      align: "center",
      minWidth: 30,
      type: "number",
    },
    {
      field: "FU_Due_Date",
      headerName: "FU Due Date",
      type: "date",
      flex: 1,
      minWidth: 66,
      align: "center",
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
      field: "FU_Status",
      headerName: "FU Status",
      flex: 1,
      align: "center",
      minWidth: 30,
    },
  ];

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
            {/* <MultipleSelect label="Seller Entity Name"/> */}
            <AutoCompleteInput
              data={props.SellerEntityList}
              relation="Seller Entity Name"
              onAutoChange={onAutoChange}
              value={sellerEntityIds}
              sellerId={sellerEntityIds}
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
          <FUStatusListButtons
            _dark={_dark}
            activeButtons={activeButtons}
            handleButtonClick={handleButtonClick}
          />
          <BidSummaryBtnList
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
};

export default BiddingSummary;
