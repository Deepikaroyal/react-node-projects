/* eslint-disable */
import React, { useState, useEffect } from "react";
import { Typography, Stack, Grid } from "@mui/material";
import { PlaceBids } from "../../../../mock/FUdata";
import DataGrid from "../../../../components/DataGrid";
import BackButton from "../../../../components/Common/BackButton";
import BidListButtons from "./BidListButtons";
import { makeStyles } from "@mui/styles";
import YesSwitch from "../../../../assets/SvgIcons/yes.svg";
import NoSwitch from "../../../../assets/SvgIcons/no.svg";
import NoGrant from "../../../../assets/SvgIcons/NoGrant.svg";
import BidIcon from "../../../../assets/SvgIcons/Bid.svg";
import BidIconHover from "../../../../assets/SvgIcons/BidHover.svg";
import BidIconDark from "../../../../assets/SvgIcons/BidIconDark.svg";
import moment from "moment";
import PlaceModal from "../../../../components/Common/PlaceModalFin";
import CustomDatePicker from "../../../../components/Common/customDatepicker";
import AutoCompleteInput from "../../../../components/Common/AutoCompleteInput";
import TextInput from "../../../../components/Common/CustomTextInput";
import { Button } from "@mui/material";
import TakeBid from "../../../../assets/SvgIcons/FU/takebid.svg";
import TakeBidLight from "../../../../assets/SvgIcons/FU/takebidlight.svg";
import ApplyIcon from "../../../../assets/SvgIcons/ApplyIcon.svg";
import { useTheme } from "@mui/material";
import { toast } from "react-toastify";
import {
  ApiFUResponses,
  fetchBidCount,
  fetchBidApi,
  fuFetchAdditionalDetails,
} from "../Api";
import Fudetails from "../FUdetail";
import InvoiceDetails from "../FUdetail/InvoiceDetails";
import { ConvertDaysToDate } from "../../../../utils/general";
import { RequestFinBidPlace } from "../../../../api/bids";
import Otpinput from "../../../../components/Common/Otpinput";
import OTPModal from "../../../../components/Common/OTPModalFin";

export default function PlaceBidsList(props) {
  //console.log(props)
  const [page, SetPage] = useState("list");
  const [rows, setRows] = useState([]);
  const _dark = props._dark ? props._dark : false;
  const theme = useTheme();
  const [pageSize, setPageSize] = React.useState(10);
  const [filterValue, setFilterValue] = React.useState();
  const [loading, setLoading] = React.useState(false);
  const [selectedRows, setSelectedRows] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);
  const [openOtp, setOpenOtp] = React.useState(false);
  const handleOtp = () => setOpenOtp(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    // setRows(rows.filter( function( el ) {
    //                 return !selectedRows.includes( el );
    //               } ))
  };
  const [bidrate, setBidrate] = useState();
  const [bidvalid, setBidvalid] = useState();
  const [bidId, setBidId] = useState([]);
  const [isSet, setIsSet] = useState(true);
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  const [buyerEntityIds, setBuyerEntityIds] = React.useState([]);
  const [title, setTitle] = useState("FU Listing");
  const [fuNumber, setFunumber] = useState();
  const [fuData, setFuData] = useState("");
  const [fuInvnumber, setFuInvnumber] = useState();
  const [accessTokn, setAccessTokn] = useState("");
  const [userId, setUserId] = useState("");
  const [placeBidRespo, setplaceBidRespo] = useState([]);
  const [newSelRows, setNewSelRows] = useState({});
  const [bidAction, setBidAction] = useState("");
  const handleCloseOtp = async () => {
    setOpenOtp(false);
    // if (selectedRows && selectedRows.length > 0) {
    //     if (selectedRows.length < 26) {

    // setAccessTokn(sessionStorage.getItem("token"));

    // console.log('selectedRows', selectedRows)
    let RequestArray = [];
    newSelRows.forEach((element) => {
      const container = {};
      container.factoringUnitNumber = element.id;
      container.roi = element.My_Bid;
      container.validityPeriod = ConvertDaysToDate(element.Valid_For);
      RequestArray.push(container);
    });
    let data = JSON.stringify({ placeBids: RequestArray });
    // console.log('Place Bids', data)
    const placeBidRes = await RequestFinBidPlace(data)
      .then((Response) => {
        setplaceBidRespo(Response.data);
        // console.log("PlacebidResponse", Response);
        handleOpen();
        setRows(
          rows.filter(function (el) {
            return !newSelRows.includes(el);
          })
        );
      })
      .catch((err) => {
        let errArray1 = err.response.data.responseList;
        // console.log("err123", errArray1)
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
  const handleChange = (e) => {
    //const value = e.target.value.replace(/\D/g, "");
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
          //resolve(PlaceBids);
          resolve(props.fuResponse ? props.fuResponse : []);
          return;
        }
        resolve();
        //     PlaceBids.filter(
        //     (row) => row.commodity.toLowerCase().indexOf(commodityFilterValue) > -1,
        //   ),
      }, 100); // simulate network latency
    });
  }
  useEffect(() => {
    let active = true;
    (async () => {
      setLoading(true);
      props.buyerId ? setBidId(props.buyerId) : null;
      const newRows = await loadServerRows(filterValue);
      if (!active) {
        return;
      }
      if (props.buyerId) {
        let _newRows = newRows.filter(
          (row) => row.buyerEntityId == props.buyerId
        );
        setRows(_newRows);
      } else {
        setRows(newRows);
      }
      setLoading(false);
      //console.log(newRows)
    })();
    return () => {
      active = false;
    };
  }, [filterValue]);

  const onFilterChange = React.useCallback((filterModel) => {
    // console.log(filterModel);
    setFilterValue(filterModel.items[0].value);
  }, []);

  const resetFilter = () => {
    setRows(props.fuResponse ? props.fuResponse : []);
    buyerEntityIds.length = 0;
    //setBuyerEntityIds(buyerEntityIds,[])
    setBuyerEntityIds([]);
    //  console.log("###111",buyerEntityIds);
    setToDate(null);
    setFromDate(null);
    // console.log("###222",buyerEntityIds,'####to ',toDate, "#from#", fromDate)
  };

  const refreshData = () => {
    props.refreshApiData({ refresh: "placeBid" });
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
    fcCls: {
      width: 60,
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
    },
    imgCls: {
      height: 17,
      [theme.breakpoints.down("sm")]: {
        height: 20,
      },
    },
  });
  const classes = useStyles();
  const backFlow = () => {
    setTitle("FU Listing");
    SetPage("list");
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
  const columns = [
    {
      field: "id",
      headerName: "FU Number (Invoices Count)",
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
          {params.id}{" "}
          <span style={{ color: "#97144D" }}>({params.row.InvoiceCount})</span>
        </Typography>
      ),
    },
    {
      field: "Buyer",
      headerName: "Buyer Name",
      flex: 1,
      minWidth: 66,
      align: "center",
      hide: false,
      renderCell: (params) => (
        <Typography
          variant="subtitle2"
          style={{ cursor: "pointer", fontFamily: "Lato", fontSize: 10 }}
          onClick={() => {
            ShowFuDetails(params.id);
          }}
        >
          {params.value}
        </Typography>
      ),
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
      field: "Udyam",
      flex: 1,
      minWidth: 80,
      headerName: "Udyam Number",
      align: "left",
      hide: true,
    },
    {
      field: "FU_Created_Date",
      headerName: "FU Created Date",
      flex: 1,
      minWidth: 66,
      type: "date",
      renderCell: (parms) => (
        <Typography className={classes.fcCls}>
          {moment(new Date(parms.value)).format("DD")}
          {"/"}
          {moment(new Date(parms.value)).format("MMM")}{" "}
          {moment(new Date(parms.value)).format("HH:mm")}
        </Typography>
      ),
    },
    {
      field: "FU_Amount",
      headerName: "FU Amount",
      flex: 1,
      minWidth: 35,
      ...inrPrice,
    },
    {
      field: "Buyer_Limit_Available",
      headerName: "Buyer Limit Available?",
      flex: 1,
      minWidth: 66,
      align: "center",
      // type: 'singleSelect',
      // valueOptions: ['Yes', 'No'],
      hide: true,
      // renderCell: (params) => (
      //     <Typography className={classes.stpCls} >
      //         {params.value}
      //     </Typography>
      // )
    },
    {
      field: "Seller_Limit_Available",
      headerName: "Seller Limit Available?",
      flex: 1,
      minWidth: 66,
      align: "center",
      // type: 'singleSelect',
      // valueOptions: ['Yes', 'No'],
      hide: true,
      // renderCell: (params) => (
      //     <Typography className={classes.stpCls} style={{ backgroundColor: params.value === 'Yes' ? '#1FC24E' : '#FF2121' }}>
      //         {params.value?params.value:0}
      //     </Typography>
      // )
    },
    {
      field: "Crisil Rating",
      headerName: "Crisil Rating",
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
      type: "singleSelect",
      valueOptions: ["Yes", "No"],
      hide: true,
      renderCell: (params) => (
        <Typography
          className={classes.stpCls}
          style={{
            backgroundColor: params.value === "Yes" ? "#1FC24E" : "#FF2121",
          }}
        >
          {params.value ? params.value : "NO"}
        </Typography>
      ),
    },
    {
      field: "Crisil Rating",
      headerName: "Crisil Rating",
      flex: 1,
      minWidth: 66,
      align: "center",
      hide: true,
    },
    {
      field: "FU_Due_Date",
      headerName: "FU Due Date",
      flex: 1,
      minWidth: 66,
      type: "date",
      hide: true,
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
      field: "STP",
      headerName: "Integration?",
      flex: 1,
      minWidth: 66,
      hide: true,
      // type: 'singleSelect',
      // valueOptions: ['Yes', 'No'],
      // renderCell: (params) => (
      //     <Typography className={classes.stpCls} style={{ backgroundColor: params.value === 'Yes' ? '#1FC24E' : '#FF2121' }}>
      //         {params.value}
      //     </Typography>
      // )
    },
    {
      field: "Related_Party",
      headerName: "Related Party?",
      flex: 1,
      minWidth: 66,
      hide: true,
      // type: 'singleSelect',
      // valueOptions: ['Yes', 'No'],
      // renderCell: (params) => (
      //     <Typography className={classes.stpCls} style={{ backgroundColor: params.value === 'Yes' ? '#1FC24E' : '#FF2121' }}>
      //         {params.value}
      //     </Typography>
      // )
    },
    // {
    //     field: "MSME_Classfication",
    //     headerName: "MSME Classfication",
    //     flex: 1,
    //     minWidth: 62,
    //     type: 'singleSelect',
    //     valueOptions: ['SMALL', 'MICRO', 'MEDIUM'],
    //     renderCell: (params) => (
    //         <Typography className={classes.msmeCls} style={{ backgroundColor: params.value === 'SMALL' ? '#C17294' : params.value === 'MICRO' ? '#97144D' : '#AC4371' }}>
    //             {params.value}
    //         </Typography>
    //     ),
    //     hide: true
    // },
    {
      field: "MSME_Classfication",
      headerName: "MSME Classfication",
      flex: 1,
      minWidth: 62,
      type: "string",
      //valueOptions: ["SMALL", "MICRO", "MEDIUM"],
      hide: true,
    },
    {
      field: "Fu_Tenor",
      headerName: "FU Tenor (Residual Tenor)",
      flex: 1,
      minWidth: 32,
      align: "center",
      type: "number",
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
      field: "My_Bid",
      headerName: "My Bid",
      flex: 1,
      minWidth: 32,
      colSpan: 2,
      editable: true,
      align: "center",
      type: "number",
      renderCell: (params) => (
        <>
          <Typography className={classes.mybidCls}>{params.value}</Typography>
          {/* <img style={{ cursor: 'pointer' }} src={_dark ? BidIconDark : BidIcon} alt="bid"
                        onMouseOver={(e) => {
                            BidIconHover && (e.currentTarget.src = BidIconHover);
                        }}
                        onMouseOut={(e) => {
                            BidIconHover && (e.currentTarget.src = _dark ? BidIconDark : BidIcon || '');
                        }}
                        onClick={() => {
                            handlePlaceBid()
                        }} /> */}
        </>
      ),
    },
    {
      field: "Placebid",
      headerName: "Place Bid",
      flex: 1,
      minWidth: 32,
      // maxwidth: 20,
      // editable: true,
      align: "center",
      // type: 'number',
      renderCell: (params) => (
        <>
          {/* {console.log("singledata", params.id)}
                    {console.log("Bidrate", params.My_Bid)}
                    {console.log("valid for", params.Valid_For)} */}
          {/* <Typography className={classes.mybidCls}>
                        {params.value}
                    </Typography> */}
          <img
            style={{ cursor: "pointer" }}
            src={_dark ? BidIconDark : BidIcon}
            alt="bid"
            onMouseOver={(e) => {
              BidIconHover && (e.currentTarget.src = BidIconHover);
            }}
            onMouseOut={(e) => {
              BidIconHover &&
                (e.currentTarget.src = _dark ? BidIconDark : BidIcon || "");
            }}
            onClick={() => handlePlaceBidsingle(params.id)}
          />
        </>
      ),
    },
    {
      field: "Valid_For",
      headerName: "Valid For",
      flex: 1,
      minWidth: 35,
      editable: true,
      align: "center",
      type: "number",
      renderCell: (params) => (
        <Typography className={classes.mybidCls}>
          {params.value ? params.value : 2}
        </Typography>
      ),
    },
    {
      field: "Earnings",
      headerName: "Earnings",
      flex: 1,
      minWidth: 35,
      ...inrPrice,
    },
    // {
    //     field: "Insurance",
    //     headerName: "Insurance",
    //     flex: 1,
    //     minWidth: 40,
    //     editable: true,
    //     type: 'singleSelect',
    //     valueOptions: ['Yes', 'No', 'N (Grey)'],
    //     renderCell: (params) => (
    //         params.value === "Yes" ?
    //             <img src={YesSwitch} alt="insurance" style={{ cursor: 'pointer' }} onClick={(e) => {
    //                 onInsuranceCheck(e, params)
    //             }} />
    //             : params.value === "No" ?
    //                 <img src={NoGrant} alt="insurance" style={{ cursor: 'pointer' }} onClick={(e) => {
    //                     onInsuranceCheck(e, params)
    //                 }} />
    //                 :
    //                 <img src={NoSwitch} alt="insurance" style={{ cursor: 'pointer' }} />
    //     )
    // },
    // {
    //     field: "Insurance Provider",
    //     headerName: "Insurance Provider",
    //     flex: 1,
    //     minWidth: 35,
    //     hide: true
    // },
    // {
    //     field: "Insurance Premium",
    //     headerName: "Insurance Premium",
    //     flex: 1,
    //     minWidth: 35,
    //     hide: true,
    //     ...inrPrice
    // }
  ];
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
  const handleCellEditCommit = React.useCallback(async (params) => {
    try {
      // Make the HTTP request to save in the backend
      // console.log("#",params.id)
      // console.log("#",params.value)
      if (params.field === "My_Bid" && Number.isInteger(params.value)) {
        const newValue = params.value.toFixed(2);
        setRows((prev) =>
          prev.map((row) =>
            row.id === params.id ? { ...row, [params.field]: newValue } : row
          )
        );
      } else {
        setRows((prev) =>
          prev.map((row) =>
            row.id === params.id
              ? { ...row, [params.field]: params.value }
              : row
          )
        );
      }
    } catch (error) {}
  });
  const handleApplyFu = () => {
    if (selectedRows && selectedRows.length > 0) {
      if (bidvalid && bidrate) {
        let updateRow = rows;
        selectedRows.forEach((element) => {
          var foundIndex = updateRow.findIndex((x) => x.id === element.id);
          // console.log(updateRow[foundIndex])
          updateRow[foundIndex].Valid_For = bidvalid;
          const floatTestregex = /[1-9]*\.[0-9]+$/;
          if (floatTestregex.test(bidrate)) {
            updateRow[foundIndex].My_Bid = bidrate;
          } else {
            updateRow[foundIndex].My_Bid = bidrate + ".00";
          }
        });
        setRows(updateRow);
        setIsSet(!isSet);
      } else {
        toast.error("Please enter bid rate and bit valid for(days)!");
      }
    } else {
      toast.error("Please select atleast one record!");
    }
  };

  const onAutoChange = async (Newdata) => {
    setBuyerEntityIds(Newdata);
    let fuArray = props.entityFuNumber;
    //console.log("^^^^",fuArray,"%%%%",Newdata)
    let NewRows = await ApiFUResponses(Newdata, fromDate, toDate, fuArray);
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
            let fetchAdditionalResponse = await fuFetchAdditionalDetails(
              fetchBidResponse,
              NewRows.fuNumArray
            );
            setRows(fetchAdditionalResponse);
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

  const handlePlaceBidsingle = async (rowid) => {
    // console.log("handlePlaceBidsingle", rowid);
    // console.log("Rows", rows);
    let newRowsset = rows;
    let selRow = newRowsset.filter((row) => row.id === rowid);

    // console.log("selRow", selRow)
    setSelectedRows(selRow);

    // console.log("Selected rows", selectedRows);
    if (selectedRows && selectedRows.length > 0) {
      handlePlaceBid();
    }
  };

  const handlePlaceBid = async () => {
    setNewSelRows([...selectedRows]);
    // console.log('placebids')
    if (selectedRows && selectedRows.length > 0) {
      if (selectedRows.length < 26) {
        setBidAction("Placed");
        handleOtp();
      } else {
        toast.error("Please select only 25 Records!");
      }
    } else {
      toast.error("Please select atleast one record!");
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
              dataTest={props.BuyerEntityListTest}
              relation="Buyer Entity Name"
              onAutoChange={onAutoChange}
              value={buyerEntityIds}
              buyerId={props.buyerId}
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
            selectedRows={selectedRows}
            handleOpen={handleOpen}
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
                style={{ marginTop: 10, marginRight: 10 }}
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
                    src={_dark ? TakeBidLight : TakeBid}
                    className={classes.imgCls}
                    alt="Bid"
                  />
                }
                onClick={() => {
                  handlePlaceBid();
                }}
                style={{ marginTop: 10 }}
              >
                Place Bids
              </Button>
            </Grid>
          </Grid>
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
              onCellEditCommit={handleCellEditCommit}
              onSelectionModelChange={(ids) => {
                const selectedIDs = new Set(ids);
                const selectedRows = rows.filter((row) =>
                  selectedIDs.has(row.id)
                );
                setSelectedRows(selectedRows);
              }}
              //filterMode="server"
              //onFilterModelChange={onFilterChange}
              loading={loading}
              //isCellEditable={(params) => params.row.Insurance ? (params.row.Insurance === "Yes" || params.row.Insurance === "No") : true}
            />
          </div>
          {open ? (
            <PlaceModal
              open={open}
              handleClose={handleClose}
              placeBidRespo={placeBidRespo}
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
