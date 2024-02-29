/* eslint-disable */
import React, { useState, useEffect } from "react";
import AcceptBidsBtnList from "./AcceptBidsButtonList";
import { Typography, Stack } from "@mui/material";
import { AcceptBidsData } from "../../../../mock/BuyerBids";
import AutoCompleteInput from "../../../../components/Common/AutoCompleteInput";
import DataGrid from "../../../../components/DataGrid";
import AcceptIcon from "../../../../assets/SvgIcons/Accept.svg";
import AcceptDarkIcon from "../../../../assets/SvgIcons/Accept-dark.svg";
import AcceptIconHover from "../../../../assets/SvgIcons/AcceptBidHover.svg";
import moment from "moment";
import FUBidAcceptance from "../FUBidAcceptance";
import AcceptLowestBid from "./AcceptLowestBid";
import BackButton from "../../../../components/Common/BackButton";
import { toast } from "react-toastify";
import CustomDatePicker from "../../../../components/Common/customDatepicker";
import PlaceModal from "../../../../components/Common/PlaceModal";
import OTPModal from "../../../../components/Common/OTPModal";
import { BidAcceptByIBP } from "../../../../api/bids.js";
const AcceptBids = (props) => {
  const _dark = props._dark ? props._dark : false;
  const [pageSize, setPageSize] = React.useState(10);
  const [filterValue, setFilterValue] = useState();
  const [loading, setLoading] = useState(false);
  const [rows, setRows] = useState([]);
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  const [sellerEntityIds, setSellerEntityIds] = React.useState([]);
  const [acceptBidRes, setAcceptBidRes] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [selectedRows, setSelectedRows] = React.useState([]);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [openPlaceModal, setOpenPlaceModal] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);
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
    const acceptBidRes = await BidAcceptByIBP(data)
      .then((Response) => {
        setAcceptBidRes(Response.data);
        console.log("acceptBidRes", Response);
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
          err == "Error: Request failed with status code 422"
        ) {
          alert(errArray1[0].errorInfo);
        } else if (err == "Error: Request failed with status code 403") {
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
  const resetFilter = () => {
    setRows(props.fuResponse ? props.fuResponse : []);
    buyerEntityIds.length = 0;
    //setBuyerEntityIds(buyerEntityIds,[])
    // setBuyerEntityIds([])
    setToDate(null);
    setFromDate(null);
  };

  useEffect(() => {
    // let active = true;
    // (async () => {
    //   setLoading(true);
    //   const newRows = await loadServerRows(filterValue);
    //   if (!active) {
    //     return;
    //   }
    //   setRows(newRows);
    //   setLoading(false);
    // })();
    // return () => {
    //   active = false;
    // };
    setRows(props.fuResponse ? props.fuResponse : []);
    console.log("setRows111", props.fuResponse);
    console.log("setRows", rows);
  }, []);

  const refreshData = () => {
    console.log("rows123", rows);
    setRows(props.fuResponse ? props.fuResponse : []);
  };

  const handleAcceptLowBid = () => {
    // setNewSelRows([...selectedRows]);
    // console.log('placebids')
    if (selectedRows && selectedRows.length > 0) {
      if (selectedRows.length < 26) {
        handleOtp();
      } else {
        toast.error("Please select only 25 Records!");
      }
    } else {
      toast.error("Please select atlease one record!");
    }

    // if (selectedRows && selectedRows.length > 0) {
    //   console.log('selectedRows', selectedRows)
    //   let RequestArray = [];
    //   selectedRows.forEach(element => {
    //     const container = {}
    //     container.factoringUnitNumber = element.id;
    //     container.bidId = element.My_Bid;
    //     RequestArray.push(container)
    //   });
    //   let data = JSON.stringify({ "acceptBids": RequestArray })
    //   console.log('Accept Bids', data)
    //   handleOpen()
    // } else {
    //   toast.error('Please select atlease one record!');
    // }
  };
  const onAutoChange = async (Newdata) => {
    setSellerEntityIds(Newdata);
    // let NewRows = await ApiFUResponses(Newdata, fromDate, toDate)
    if (true) {
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
      field: "FU_Amount", //FU_Amount
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
      field: "Lowest_Bid",
      headerName: "Lowest Bid",
      flex: 1,
      minWidth: 32,
      align: "center",
    },
    {
      field: "validityPeriod", ///
      headerName: "Lowest Bid Validity",
      flex: 1,
      minWidth: 32,
      align: "center",
    },
    {
      field: "financerEntityName", //Bid_Made_By
      headerName: "Lowest Bid By",
      flex: 1,
      minWidth: 32,
      align: "center",
    },
    {
      field: "BidCount", //BidCount
      headerName: "Bids",
      flex: 1,
      minWidth: 32,
      align: "center",
    },
    {
      field: "respLatestBidDttm",
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
      field: "Accept Lowest Bid",
      headerName: "Accept Lowest Bid",
      flex: 1,
      minWidth: 32,
      type: "singleSelect",
      align: "center",
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
  const dateChange = async (_date, _e) => {
    if (_e === "t") {
      if (fromDate) {
        if (fromDate <= _date) {
          setToDate(_date);
          let biddedFu = await fetchBiddedFuNumber(fromDate, _date);
          //  console.log("####",biddedFu)
          let NewRows = await ApiBidManageFUResponses(
            biddedFu,
            fromDate,
            _date
          );
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
            //setRows(fetchBidResponse)
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
          {!open && (
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
              <div>
                <AcceptBidsBtnList
                  _dark={_dark}
                  handleAcceptLowBid={handleAcceptLowBid}
                  selectedRows={selectedRows}
                  refreshData={refreshData}
                />
                <div
                  style={{ width: "100%", marginTop: "20px", color: "#404040" }}
                >
                  {console.log("rows", rows)}
                  <DataGrid
                    rows={rows}
                    columns={columns}
                    pageNum={pageSize}
                    onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                    pageOpt={[10, 25, 50]}
                    chkselection={true}
                    customtoolbar={true}
                    _dark={props._dark}
                    onSelectionModelChange={(ids) => {
                      const selectedIDs = new Set(ids);
                      const selectedRows = rows.filter((row) =>
                        selectedIDs.has(row.id)
                      );
                      setSelectedRows(selectedRows);
                    }}
                  />
                </div>
              </div>
              {open ? (
                <PlaceModal
                  open={open}
                  handleClose={handleClose}
                  placeBidRespo={acceptBidRes}
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
          )}
          {open && (
            <AcceptLowestBid
              _dark={_dark}
              handleClose={handleClose}
              backFlow={props.backFlow}
              open={open}
            />
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
export default AcceptBids;
