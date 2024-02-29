/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import AuthorizeBidsBtnList from "./AuthorizeBidsBtnList";
import { Typography, Stack } from "@mui/material";
import { AuthorizeBidAcceptData } from "../../../../mock/BuyerBids";
import AutoCompleteInput from "../../../../components/Common/AutoCompleteInput";
import {
  ApiFUResponses,
  fetchBidCount,
  fetchBidApi,
} from "../../../Financer/Bids/Api";
import DataGrid from "../../../../components/DataGrid";
import AuthorizeBid from "../../../../assets/SvgIcons/Authorize.svg";
import AuthorizeBidDark from "../../../../assets/SvgIcons/AuthorizeDark.svg";
import AuthorizeBidHover from "../../../../assets/SvgIcons/AuthorizeHover.svg";
import moment from "moment";
import FUBidAcceptance from "../FUBidAcceptance";
import BackButton from "../../../../components/Common/BackButton";
import { toast } from "react-toastify";
import CustomDatePicker from "../../../../components/Common/customDatepicker";
import { BidAuthByIBP } from "../../../../api/bids.js";
import OTPModal from "../../../../components/Common/OTPModal";
import PlaceModal from "../../../../components/Common/PlaceModal";

const AuthorizeBidsAccept = (props) => {
  const _dark = props._dark ? props._dark : false;
  const [pageSize, setPageSize] = React.useState(10);
  const [selectedRows, setSelectedRows] = React.useState([]);
  const [sellerEntityIds, setSellerEntityIds] = React.useState([]);
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  const [rows, setRows] = useState([]);
  const [authBidRes, setAuthBidRes] = useState([]);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [openPlaceModal, setOpenPlaceModal] = React.useState(false);
  const [openOtp, setOpenOtp] = React.useState(false);
  const handleOtp = () => setOpenOtp(true);
  const handleOpenPlaceModal = () => setOpenPlaceModal(true);
  const handleCloseOtp = async () => {
    setOpenOtp(false);

    let RequestArray = [];
    selectedRows.forEach((element) => {
      const container = {};
      container.factoringUnitNumber = element.id;
      container.bidId = element.bidId;
      RequestArray.push(container);
    });
    console.log("acceptBids", RequestArray);
    let data = JSON.stringify({ acceptBids: RequestArray });
    console.log("acceptBids data", data);
    const authBidRes = await BidAuthByIBP(data)
      .then((Response) => {
        setAuthBidRes(Response.data);
        console.log("authBidRes", Response);
        handleOpen();
        setRows(
          rows.filter(function (el) {
            return !selectedRows.includes(el);
          })
        );
      })
      .catch((err) => {
        let errArray1 = err.response;
        console.log("err123", errArray1);

        // console.log("errArray1[0].errorInfo", errArray1[0].errorInfo)
        if (
          err.response &&
          err === "Error: Request failed with status code 422"
        ) {
          alert(errArray1[0].errorInfo);
        } else if (err === "Error: Request failed with status code 403") {
          alert("refresh token expired");
        }
        // setSelectedRows([]);
      });
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
          // let biddedFu = await fetchBiddedFuNumber(fromDate, _date)
          //  console.log("####",biddedFu)
          // let NewRows = await ApiBidManageFUResponses(biddedFu, fromDate, _date)
          // if (NewRows) {
          //   let fetchBidCountResponse = await fetchBidCount(NewRows.furow, NewRows.fuNumArray)
          //   let fetchBidResponse = await fetchBidApi(fetchBidCountResponse, NewRows.fuNumArray)
          //   let fetchAdditionalResponse = await fuFetchAdditionalDetails(fetchBidResponse, NewRows.fuNumArray)
          //   setRows(fetchAdditionalResponse)
          //   setRows(fetchBidResponse)
          // } else {
          //   setRows([])
          // }
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
    let NewRows = await ApiFUResponses(Newdata, fromDate, toDate);
    if (NewRows) {
      // let fetchBidCountResponse = await fetchBidCount(NewRows.furow, NewRows.fuNumArray)
      // let fetchAdditionalResponse = await fuFetchAdditionalDetails(NewRows.furow, NewRows.fuNumArray)
      // let fetchBidResponse = await fetchBidApi(fetchBidCountResponse, NewRows.fuNumArray)
      // setRows(fetchAdditionalResponse)
      console.log("rows111", rows);
    } else {
      setRows([]);
    }
  };
  const columns = [
    {
      field: "id",
      headerName: "FU Number (Invoices Count)",
      flex: 1,
      minWidth: 110,
      align: "center",
      renderCell: (params) => (
        <Typography
          variant="subtitle2"
          style={{ cursor: "pointer", fontFamily: "Lato", fontSize: 10 }}
          onClick={() => {
            props.ShowFuDetails(params.id);
          }}
        >
          {params.id} <span style={{ color: "#97144D" }}>({10})</span>
        </Typography>
      ),
    },
    {
      field: "Seller",
      flex: 1,
      minWidth: 20,
      headerName: "Seller",
      align: "left",
    },
    {
      field: "FU Amount", //FU_Amount
      headerName: "FU Amount",
      type: "number",
      flex: 1,
      minWidth: 32,
      align: "center",
      ...inrPrice,
      renderCell: (params) => (
        <Typography fontSize="10px">₹ {params.value} </Typography>
      ),
    },
    {
      field: "Accepted Ra...", //Not available
      headerName: "Accepted Ra...",
      flex: 1,
      minWidth: 32,
      align: "center",
    },
    {
      field: "Bid Validity", //Valid_For
      headerName: "Bid Validity",
      flex: 1,
      minWidth: 32,
      align: "center",
    },

    {
      field: "Lowest Bid By", //Bid_Made_By
      headerName: "Lowest Bid Id",
      flex: 1,
      minWidth: 32,
      align: "center",
    },
    {
      field: "# of Bids", //BidCount
      headerName: "Bids",
      flex: 1,
      minWidth: 32,
      align: "center",
    },
    {
      field: "Latest Bid On", //Not available
      headerName: "Latest Bid On",
      flex: 1,
      minWidth: 35,
      type: "date",
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
      field: "Bid Acc on", //Not available
      headerName: "Bid Acc on",
      flex: 1,
      minWidth: 35,
      type: "date",
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
      field: "Bid Acc...", //Not available
      headerName: "Bid Acc...",
      flex: 1,
      minWidth: 32,
      align: "center",
    },
    {
      field: "Current", //Not available
      headerName: "Change Pending Level",
      flex: 1,
      minWidth: 32,
      align: "center",
    },
    {
      field: "Last Authorize", //Not available
      headerName: "Last Authorize",
      flex: 1,
      minWidth: 32,
      align: "center",
    },

    {
      field: "Authorize",
      headerName: "Authorize",
      flex: 1,
      minWidth: 32,
      type: "singleSelect",
      align: "center",
      renderCell: (params) => (
        <>
          <img
            style={{ cursor: "pointer" }}
            src={_dark ? AuthorizeBidDark : AuthorizeBid}
            alt="bid"
            onMouseOver={(e) => {
              AuthorizeBidHover && (e.currentTarget.src = AuthorizeBidHover);
            }}
            onMouseOut={(e) => {
              AuthorizeBidHover &&
                (e.currentTarget.src = _dark
                  ? AuthorizeBidDark
                  : AuthorizeBid || "");
            }}
          />
        </>
      ),
    },
  ];
  const handleAuthorizeBid = () => {
    if (selectedRows && selectedRows.length > 0) {
      if (selectedRows.length < 26) {
        handleOtp();
      } else {
        toast.error("Please select only 25 Records!");
      }
    } else {
      toast.error("Please select atleast one record!");
    }
  };
  return (
    <>
      {props.page !== "list" ? (
        <h3
          className="fu-listing"
          style={{
            borderBottom:
              props.page === "list"
                ? "dashed 1px #CBCBCB"
                : "solid 1px #CBCBCB",
            color: _dark ? "#ffffff" : "#404040",
          }}
        >
          {props.title}
          <BackButton
            sx={{ float: "right" }}
            width="10%"
            onClick={() => {
              props.backFlow();
            }}
          />
        </h3>
      ) : (
        ""
      )}
      {props.page === "list" ? (
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
          <AuthorizeBidsBtnList
            _dark={_dark}
            handleAuthorizeBid={handleAuthorizeBid}
          />
          <div style={{ width: "100%", marginTop: "20px", color: "#404040" }}>
            <DataGrid
              rows={AuthorizeBidAcceptData}
              columns={columns}
              pageNum={pageSize}
              onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
              pageOpt={[10, 25, 50]}
              chkselection={true}
              customtoolbar={true}
              _dark={props._dark}
              onSelectionModelChange={(ids) => {
                const selectedIDs = new Set(ids);
                const selectedRows = AuthorizeBidAcceptData.filter((row) =>
                  selectedIDs.has(row.id)
                );
                setSelectedRows(selectedRows);
              }}
            />
          </div>
          {open ? (
            <PlaceModal
              open={open}
              handleClose={handleClose}
              placeBidRespo={authBidRes}
              _dark={_dark}
            />
          ) : (
            ""
          )}
          {openOtp ? (
            <OTPModal
              open={openOtp}
              handleClose={handleCloseOtp}
              selectedRows={selectedRows}
              _dark={_dark}
            />
          ) : (
            ""
          )}
        </>
      ) : (
        <FUBidAcceptance
          Funumber={props.Funumber}
          backFlow={props.backFlow}
          _dark={_dark}
          ShowInvoiceDetails={props.ShowInvoiceDetails}
        />
      )}
    </>
  );
};

export default AuthorizeBidsAccept;
