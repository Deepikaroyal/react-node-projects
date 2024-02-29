/* eslint-disable */
import React, { useState, useEffect } from "react";
import { Typography, Stack, Grid } from "@mui/material";
//import { BidsManage } from "../../../../mock/FUdata";
import DataGrid from "../../../../components/DataGrid";
import BidListButtons from "./BidManageButtons";
import { makeStyles } from "@mui/styles";
import YesSwitch from "../../../../assets/SvgIcons/yes.svg";
//import NoSwitch from "../../../../assets/SvgIcons/no.svg";
import AuthorizeBid from "../../../../assets/SvgIcons/Authorize.svg";
import CancelBid from "../../../../assets/SvgIcons/CancelBid.svg";
import AuthorizeBidDark from "../../../../assets/SvgIcons/AuthorizeDark.svg";
import CancelBidDark from "../../../../assets/SvgIcons/CancelBidDark.svg";
import NoGrant from "../../../../assets/SvgIcons/NoGrant.svg";
import AuthorizeBidHover from "../../../../assets/SvgIcons/AuthorizeHover.svg";
import CancelBidHover from "../../../../assets/SvgIcons/CancelBidHover.svg";
import moment from "moment";
import CustomDatePicker from "../../../../components/Common/customDatepicker";
import AutoCompleteInput from "../../../../components/Common/AutoCompleteInput";
import TextInput from "../../../../components/Common/CustomTextInput";
import { Button } from "@mui/material";
import AuthorizeBidBtn from "../../../../assets/SvgIcons/FU/AuthorizeBid.svg";
import AuthorizeBidBtnlight from "../../../../assets/SvgIcons/FU/AuthorizeBidlight.svg";
import CancelBidBtn from "../../../../assets/SvgIcons/FU/Cancelbid.svg";
import CancelBidBtnlight from "../../../../assets/SvgIcons/FU/Cancelbidlight.svg";
import ApplyIcon from "../../../../assets/SvgIcons/ApplyIcon.svg";
import { useTheme } from "@mui/material";
import { toast } from "react-toastify";
import {
  ApiFUResponses,
  ApiBidManageFUResponses,
  fetchBidCount,
  fetchBidApi,
  fetchBiddedFuNumber,
  fuFetchAdditionalDetails,
} from "../Api";
import Fudetails from "../FUdetail";
import InvoiceDetails from "../FUdetail/InvoiceDetails";
import BackButton from "../../../../components/Common/BackButton";
import { RequestFinBidAuthorise } from "../../../../api/bids";
//import OTPModal from "../PlaceBids/OTPModal";
import { ConvertDaysToDate } from "../../../../utils/general";
import OTPModal from "../../../../components/Common/OTPModalFin";
import PlaceModal from "../../../../components/Common/PlaceModalFin";

export default function BidsManageList(props) {
  const _dark = props._dark ? props._dark : false;
  const theme = useTheme();
  const [pageSize, setPageSize] = React.useState(10);
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = React.useState(false);
  const [filterValue, setFilterValue] = React.useState();
  const [bidrate, setBidrate] = useState();
  const [bidvalid, setBidvalid] = useState();
  const [selectedRows, setSelectedRows] = React.useState([]);
  const [isSet, setIsSet] = useState(true);
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  const [buyerEntityIds, setBuyerEntityIds] = useState([]);
  const [title, setTitle] = useState("FU Listing");
  const [fuNumber, setFunumber] = useState();
  const [fuData, setFuData] = useState();
  const [fuInvnumber, setFuInvnumber] = useState();
  const [page, SetPage] = useState("list");
  const [open, setOpen] = React.useState(false);
  const [openOtp, setOpenOtp] = React.useState(false);
  const [authBidRespo, setAuthBidRespo] = useState([]);
  const [bidAction, setBidAction] = useState("");

  const handleOtp = () => setOpenOtp(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
  };
  const handleCloseOtp = async () => {
    setOpenOtp(false);
    let RequestArray = [];
    selectedRows.forEach((element) => {
      const container = {};
      container.factoringUnitNumber = element.id;
      container.bidId = element.bidFetchData.bidId;
      container.roi = element.My_Bid;
      container.validityPeriod = ConvertDaysToDate(element.Valid_For);
      RequestArray.push(container);
    });
    let data = JSON.stringify({ authoriseBids: RequestArray });
    // console.log('Authorize Bids', data)
    let authoriseBidRes = await RequestFinBidAuthorise(data);
    setAuthBidRespo(authoriseBidRes.data);

    // console.log("userID", sessionStorage.getItem("userId"))
    // console.log("AuthBidRespo", authBidRespo.data)
    if (authBidRespo.data.astrid) {
      handleOpen();
      setRows(
        rows.filter(function (el) {
          return !selectedRows.includes(el);
        })
      );
    } else {
      // alert("My Bid and Valid for are mandatory")
      setSelectedRows([]);
    }
    // const selectedRows = rows.filter((row) =>
    // selectedIDs.has(row.id),
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
  const handleChange = (e) => {
    // const value = e.target.value.replace(/\D/g, "");
    const regex = /[^0-9.]/g;
    const value = e.target.value.replace(regex, "");
    setBidrate(value);
  };
  const handleBidValidChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setBidvalid(value);
  };
  function loadServerRows(commodityFilterValue) {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (!commodityFilterValue) {
          resolve(props.bidManageFuRes ? props.bidManageFuRes : []);
          return;
        }
      }, Math.random() * 500 + 100); // simulate network latency
    });
  }
  const resetFilter = () => {
    setRows(props.bidManageFuRes ? props.bidManageFuRes : []);
    buyerEntityIds.length = 0;
    //setBuyerEntityIds(buyerEntityIds,[])
    setBuyerEntityIds([]);
    setToDate(null);
    setFromDate(null);
  };

  const refreshData = () => {
    props.refreshApiData({ refresh: "Bid Mange" });
  };
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

  const useStyles = makeStyles({
    made_button: {
      backgroundColor: "#CAF0F8",
      color: "#1D78F5",
      border: "1px solid #1D78F5 !important",
      width: 58,
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
    modify_button: {
      backgroundColor: "#F1FFFA",
      color: "#2BA84A",
      border: "1px solid #2BA84A !important",
      width: 58,
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
    cancel_button: {
      backgroundColor: "#F2EBFB",
      color: "#9163CB",
      border: "1px solid #9163CB !important",
      width: 58,
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
    stpCls: {
      padding: 8,
      borderRadius: 4,
      textAlign: "center",
      color: "#ffffff",
      fontSize: "10px",
      fontFamily: "Lato",
      backgroundColor: "#97144D",
      marginLeft: 5,
      textTransform: "uppercase",
    },
    mybidCls: {
      padding: 8,
      borderRadius: 6,
      textAlign: "center",
      color: "#404040",
      fontSize: "10px",
      fontFamily: "Lato",
      textTransform: "capitalize !important",
      backgroundColor: "#ffffff",
      boxShadow: "0 0px 8px 0 rgba(0,0,0,0.2);",
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
    BtnCls: {
      color: `${_dark ? "#ffffff" : "#97144D"} !important`,
      padding: "10px",
      borderRadius: `4px !important`,
      textTransform: "uppercase !important",
      fontSize: "12px !important",
      [theme.breakpoints.down("sm")]: {
        fontSize: "0px !important",
        paddingRight: 0,
      },
      fontFamily: "Lato",
      lineHeight: "18px",
      border: `1px solid ${_dark ? "#ffffff" : "#97144D"}`,
      fontWeight: 700,
      top: 10,
      marginRight: 10,
    },
    imgCls: {
      height: 17,
      [theme.breakpoints.down("sm")]: {
        height: 20,
      },
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
  const onInsuranceCheck = async (e, value) => {
    // Get the row
    const rowIndex = rows.findIndex((row) => row.id === value.id);
    if (rowIndex >= 0) {
      const row = rows[rowIndex];
      // Validate if changed
      if (value.field in row) {
        const newRows = [...rows];
        newRows[rowIndex][value.field] = value.value === "Yes" ? "No" : "Yes";
        setRows(newRows);
        if (value.value === "Yes") {
          e.currentTarget.src = NoGrant;
        } else if (value.value === "No") {
          e.currentTarget.src = YesSwitch;
        }
      }
    }
  };
  const columns = [
    {
      field: "id",
      headerName: "FU Number (Invoice Count)",
      flex: 1,
      minWidth: 110,
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
      minWidth: 80,
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
      //field: "Bid Placed On",
      field: "FU_Created_Date",
      headerName: "Bid Placed",
      flex: 1,
      minWidth: 66,
      type: "date",
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
      field: "CheckerLevel",
      headerName: "Checker Level",
      flex: 1,
      minWidth: 32,
      align: "center",
    },
    {
      field: "FU_Amount",
      headerName: "FU Amount",
      flex: 1,
      minWidth: 35,
      ...inrPrice,
    },
    {
      field: "Bid_Made_By",
      headerName: "Bid Made By",
      flex: 1,
      minWidth: 50,
      hide: true,
    },
    {
      field: "Buyer_Limit_Available",
      headerName: "Buyer Limit Available?",
      flex: 1,
      minWidth: 66,
      align: "center",
      hide: true,
    },
    {
      field: "Seller_Limit_Available",
      headerName: "Seller Limit Available?",
      flex: 1,
      minWidth: 66,
      align: "center",
      hide: true,
    },
    // {
    //   field: "Crisil Rating",
    //   headerName: "Crisil Rating",
    //   flex: 1,
    //   minWidth: 50,
    //   hide: true,
    //   align: "center",
    // },
    {
      field: "checkedBy",
      headerName: "Last Checked By",
      flex: 1,
      minWidth: 50,
      hide: true,
    },
    {
      field: "STP",
      headerName: "Integration?",
      flex: 1,
      minWidth: 50,
      hide: true,
      type: "singleSelect",
      valueOptions: ["Yes", "No"],
      // renderCell: (params) => (
      //   <Typography
      //     className={classes.stpCls}
      //     style={{
      //       backgroundColor: params.value === "Yes" ? "#1FC24E" : "#FF2121",
      //     }}
      //   >
      //     {params.value}
      //   </Typography>
      // ),
    },
    {
      field: "Related_Party",
      headerName: "Related Party?",
      flex: 1,
      minWidth: 66,
      hide: true,
      type: "singleSelect",
      valueOptions: ["Yes", "No"],
      // renderCell: (params) => (
      //   <Typography
      //     className={classes.stpCls}
      //     style={{
      //       backgroundColor: params.value === "Yes" ? "#1FC24E" : "#FF2121",
      //     }}
      //   >
      //     {params.value}
      //   </Typography>
      // ),
    },
    {
      field: "MSME_Classfication",
      headerName: "MSME Classfication",
      flex: 1,
      minWidth: 62,
      type: "singleSelect",
      valueOptions: ["SMALL", "MICRO", "MEDIUM"],
      hide: true,
    },
    {
      field: "Fu_Tenor",
      headerName: "FU Tenor (Residual Tenor)",
      flex: 1,
      minWidth: 32,
      align: "center",
      type: "number",
      hide: true,
      renderCell: (params) => (
        <Typography
          variant="subtitle2"
          style={{ fontFamily: "Lato", fontSize: 10 }}
        >
          {params.value}{" "}
          <span style={{ color: "#97144D" }}>({params.row.ResidualTenor})</span>
        </Typography>
      ),
    },
    {
      field: "Lowest_Bid",
      headerName: "Lowest Bid",
      flex: 1,
      minWidth: 32,
      align: "center",
      type: "number",
      renderCell: (params) => (
        <Typography
          variant="subtitle2"
          style={{ fontFamily: "Lato", fontSize: 10 }}
        >
          {params.value}%
        </Typography>
      ),
    },

    {
      field: "BidCount",
      headerName: "Bid Count",
      flex: 1,
      minWidth: 32,
      align: "center",
      type: "number",
    },
    {
      field: "Auth_Action",
      headerName: "Auth Action",
      flex: 1,
      minWidth: 32,
      align: "center",
      type: "string",
      //type: 'singleSelect',
      valueOptions: ["MADE", "MODIFIED", "CANCEL"],
      hide: true,
      renderCell: (params) => (
        // <Typography variant="subtitle2" style={{ fontFamily: 'Lato', fontSize: 10 }}>
        //   {params.value} <span style={{ color: '#97144D' }}>({params.row.authAction?params.row.authAction:'-'})</span>
        // </Typography>
        <Typography
          className={
            params.value === "MADE"
              ? classes.made_button
              : params.value === "MODIFIED"
              ? classes.modify_button
              : classes.cancel_button
          }
        >
          {params.value}
        </Typography>
      ),
    },
    {
      field: "My_Bid",
      headerName: "My Bid",
      flex: 1,
      minWidth: 32,
      editable: true,
      align: "center",
      renderCell: (params) => (
        <>
          <Typography className={classes.mybidCls}>{params.value}</Typography>
          {/* <img
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
          <img
            style={{ cursor: "pointer" }}
            src={_dark ? CancelBidDark : CancelBid}
            alt="bid"
            onMouseOver={(e) => {
              CancelBidHover && (e.currentTarget.src = CancelBidHover);
            }}
            onMouseOut={(e) => {
              CancelBidHover &&
                (e.currentTarget.src = _dark ? CancelBidDark : CancelBid || "");
            }}
          /> */}
        </>
      ),
    },
    {
      field: "AuthBid",
      headerName: "Authorize",
      flex: 1,
      minWidth: 32,
      // maxwidth: 20,
      // editable: true,
      align: "center",
      renderCell: (params) => (
        <>
          {/* <Typography className={classes.mybidCls}>{params.value}</Typography> */}
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
            onClick={() => handleAuthorizeBidsingle(params.id)}
          />
          {/* <img
            style={{ cursor: "pointer" }}
            src={_dark ? CancelBidDark : CancelBid}
            alt="bid"
            onMouseOver={(e) => {
              CancelBidHover && (e.currentTarget.src = CancelBidHover);
            }}
            onMouseOut={(e) => {
              CancelBidHover &&
                (e.currentTarget.src = _dark ? CancelBidDark : CancelBid || "");
            }}
          /> */}
        </>
      ),
    },
    {
      field: "Valid_For",
      headerName: "Valid For",
      flex: 1,
      minWidth: 40,
      editable: true,
      align: "center",
      renderCell: (params) => (
        <Typography className={classes.mybidCls}>{params.value}</Typography>
      ),
    },
    {
      field: "Earnings",
      headerName: "Earnings",
      flex: 1,
      minWidth: 50,
      ...inrPrice,
    },
    // {
    //   field: "Insurance",
    //   headerName: "Insurance",
    //   flex: 1,
    //   editable: (params) => (params.value === "Yes" ? true : false),
    //   minWidth: 72,
    //   type: "singleSelect",
    //   valueOptions: ["Yes", "No", "N (Grey)"],
    //   renderCell: (params) =>
    //     params.value === "Yes" ? (
    //       <img
    //         src={YesSwitch}
    //         alt="insurance"
    //         style={{ cursor: "pointer" }}
    //         onClick={(e) => {
    //           onInsuranceCheck(e, params);
    //         }}
    //       />
    //     ) : params.value === "No" ? (
    //       <img
    //         src={NoGrant}
    //         alt="insurance"
    //         style={{ cursor: "pointer" }}
    //         onClick={(e) => {
    //           onInsuranceCheck(e, params);
    //         }}
    //       />
    //     ) : (
    //       <img src={NoSwitch} alt="insurance" style={{ cursor: "pointer" }} />
    //     ),
    // },
    // {
    //   field: "Insurance Provider",
    //   headerName: "Insurance Provider",
    //   flex: 1,
    //   minWidth: 35,
    //   hide: true,
    // },
    // {
    //   field: "Insurance Premium",
    //   headerName: "Insurance Premium",
    //   flex: 1,
    //   minWidth: 35,
    //   hide: true,
    //   ...inrPrice,
    // },
  ];
  const handleApplyFu = () => {
    if (selectedRows && selectedRows.length > 0) {
      if (bidvalid && bidrate) {
        let updateRow = rows;
        selectedRows.forEach((element) => {
          var foundIndex = updateRow.findIndex((x) => x.id === element.id);
          updateRow[foundIndex].Valid_For = bidvalid;
          const floatTestregex = /[1-9]*\.[0-9]+$/;
          if (floatTestregex.test(bidrate)) {
            updateRow[foundIndex].My_Bid = bidrate;
          } else {
            updateRow[foundIndex].My_Bid = bidrate + ".00";
          }
        });
        setRows(updateRow);
      } else {
        toast.error("Please enter bid rate and bit valid for(days)!");
      }
    } else {
      toast.error("Please select atleast one record!");
    }
  };

  const handleAuthorizeBidsingle = async (rowid) => {
    let newRowsset = rows;
    let selRow = newRowsset.filter((row) => row.id === rowid);
    setSelectedRows(selRow);
    if (selectedRows && selectedRows.length > 0) {
      handleAuthorizeBid();
    }
  };

  const handleAuthorizeBid = async () => {
    if (selectedRows && selectedRows.length > 0) {
      if (selectedRows.length < 26) {
        setBidAction("Authorise");
        handleOtp();
      } else {
        toast.error("Please select only 25 Records!");
      }
    } else {
      toast.error("Please select atleast one record!");
    }
  };
  const handleCancelBid = () => {
    if (selectedRows && selectedRows.length > 0) {
    } else {
      toast.error("Please select atleast one record!");
    }
  };
  const onAutoChange = async (Newdata) => {
    setBuyerEntityIds(Newdata);
    let fuArray = props.entityFuNumber;
    // let biddedFu = await fetchBiddedFuNumber(fromDate, _date)
    // let NewRows = await ApiFUResponses(Newdata, fromDate, toDate, fuArray)
    // if (NewRows) {
    //   let fetchBidCountResponse = await fetchBidCount(NewRows.furow, NewRows.fuNumArray)
    //   let fetchBidResponse = await fetchBidApi(fetchBidCountResponse, NewRows.fuNumArray)
    //   let fetchAdditionalResponse = await fuFetchAdditionalDetails(fetchBidResponse, NewRows.fuNumArray)
    //   setRows(fetchAdditionalResponse)
    // } else {
    //   setRows([])
    // }
  };
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
            {/* <AutoCompleteInput data={props.BuyerEntityList} relation="Buyer Entity Name"
              onAutoChange={onAutoChange} value={buyerEntityIds} /> */}
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
          <Grid container spacing={2}>
            <Grid item>
              <TextInput
                label="Bid Rate"
                placeholder="Bid Rate"
                size="small"
                width="100%"
                value={bidrate}
                onChange={handleChange}
                InputProps={{ inputProps: { min: 0, max: 2 } }}
              />
            </Grid>
            <Grid item>
              <TextInput
                label="Bid valid for (days)"
                placeholder="Bid valid for (days)"
                size="small"
                width="100%"
                value={bidvalid}
                onChange={handleBidValidChange}
                InputProps={{ inputProps: { min: 0, max: 5 } }}
              />
            </Grid>
            <Grid item>
              <Button
                className={classes.BtnCls}
                startIcon={
                  <img
                    src={_dark ? ApplyIcon : ApplyIcon}
                    className={classes.imgCls}
                    alt="Bid"
                  />
                }
                onClick={() => {
                  handleApplyFu();
                }}
              >
                Apply
              </Button>
              <Button
                className={classes.BtnCls}
                startIcon={
                  <img
                    src={_dark ? AuthorizeBidBtnlight : AuthorizeBidBtn}
                    className={classes.imgCls}
                    alt="Bid"
                  />
                }
                onClick={() => {
                  handleAuthorizeBid();
                }}
              >
                Authorize{" "}
              </Button>
              {/* <Button className={classes.BtnCls} startIcon={<img src={_dark ? CancelBidBtnlight : CancelBidBtn} className={classes.imgCls} alt="Bid" />}
                onClick={() => {
                  handleCancelBid()
                }}>Cancel Bids</Button> */}
            </Grid>
          </Grid>
          {/* <Grid item spacing={3}>

          </Grid> */}
          <div style={{ width: "100%", marginTop: "20px", color: "#404040" }}>
            <DataGrid
              rows={rows}
              columns={columns}
              pageNum={pageSize}
              onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
              pageOpt={[10, 25, 50]}
              _dark={props._dark}
              chkselection={true}
              customtoolbar={true}
              loading={loading}
              onSelectionModelChange={(ids) => {
                const selectedIDs = new Set(ids);
                const selectedRows = rows.filter((row) =>
                  selectedIDs.has(row.id)
                );
                setSelectedRows(selectedRows);
              }}
              //isCellEditable={(params) => (params.row.Insurance === "Yes" || params.row.Insurance === "N (Grey)")}
            />
          </div>
          {open ? (
            <PlaceModal
              open={open}
              handleClose={handleClose}
              placeBidRespo={authBidRespo}
              _dark={_dark}
              action={bidAction}
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
