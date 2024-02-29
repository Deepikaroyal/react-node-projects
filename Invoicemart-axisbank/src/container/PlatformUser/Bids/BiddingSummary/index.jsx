import React, { useState, useEffect } from "react";
import { Typography, Stack } from "@mui/material";
import DataGrid from "../../../../components/DataGrid";
import BidListButtons from "../../../Financer/Bids/BidsSummary/BidSummaryButtons";
import { makeStyles } from "@mui/styles";
import moment from "moment";
import CustomDatePicker from "../../../../components/Common/customDatepicker";
import AutoCompleteInput from "../../../../components/Common/AutoCompleteInput";
import { toast } from "react-toastify";
import { ApiFUResponses } from "../Api";
import Fudetails from "../../../Financer/Bids/FUdetail";
import BackButton from "../../../../components/Common/ButtonCommon";
import Button from "@mui/material/Button";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { getCurrentDate, getFromToDate } from "../../../../utils/general";

export default function BidsSummaryList(props) {
  // console.log('bidding summary', props)
  const _dark = props._dark ? props._dark : false;
  const [pageSize, setPageSize] = useState(10);
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [filterValue, setFilterValue] = useState();
  const [fromDate, setFromDate] = useState(getFromToDate());
  const [toDate, setToDate] = useState(getCurrentDate());
  const [buyerEntityIds, setBuyerEntityIds] = useState([]);
  // const [title, setTitle] = useState("FU Listing");
  // const [fuNumber, setFunumber] = useState();
  // const [fuData, setFuData] = useState();
  // const [fuInvnumber, setFuInvnumber] = useState();
  const [page, SetPage] = useState("list");

  // const ShowFuDetails = (Id) => {
  //   setFunumber(Id);
  //   var _data = rows.filter((x) => x.id === Id);
  //   setFuData(_data);
  //   setTitle(Id);
  //   SetPage("details");
  // };
  const ShowInvoiceDetails = (Id) => {
    // setTitle("INV " + Id);
    // setFuInvnumber(Id);
    SetPage("invoice");
  };
  const backFlow = () => {
    // setTitle("FU Listing");
    SetPage("list");
  };
  useEffect(() => {
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
  }, [filterValue, props.bidfuResponse]);

  const resetFilter = () => {
    // setBuyerEntityIds([])
    setRows(props.fuResponse ? props.fuResponse : []);
    setToDate(getCurrentDate());
    setFromDate(getFromToDate());
  };

  const refreshData = () => {
    props.refreshApiData();
  };
  const [buttons, setButtons] = useState([
    { label: "Button 1", active: false },
    { label: "Button 2", active: false },
    { label: "Button 3", active: false },
    { label: "Button 4", active: false },
    { label: "Button 5", active: false },
    { label: "Button 6", active: false },
    { label: "Button 7", active: false },
    { label: "Button 8", active: false },
  ]);

  function handleButtonClick(index) {
    setButtons((prevButtons) => {
      const newButtons = [...prevButtons];
      newButtons[index].active = !newButtons[index].active;
      return newButtons;
    });
  }

  const [button, setButton] = useState([
    { label: "Button 1", active: false },
    { label: "Button 2", active: false },
    { label: "Button 3", active: false },
    { label: "Button 4", active: false },
    { label: "Button 5", active: false },
    { label: "Button 6", active: false },
    { label: "Button 7", active: false },
  ]);

  function handleClick(index) {
    setButton((prevButton) => {
      const newButton = [...prevButton];
      newButton[index].active = !newButton[index].active;
      return newButton;
    });
  }

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

    whitecrt: {
      backgroundColor: "white",
    },
    toggbutt: {
      backgroundColor: "#C9E7FD",
    },
    lightbluecreate: {
      backgroundColor: "#ADE4F7",
      color: "#4F5EFB",
      borderColor: "#4F5EFB",
    },
    bluecreate: {
      backgroundColor: "#C9E7FD",
      color: "#1CA6FE",
      borderColor: "#1CA6FE",
    },
    blcreate: {
      backgroundColor: "#CDF4FE",
      color: "#2FB9DE ",
      borderColor: "#2FB9DE ",
    },
    grcreate: {
      backgroundColor: "#D3FDC8",
      color: "#72D059",
      borderColor: "#72D059",
    },
    drkgrcreate: {
      backgroundColor: "#B9FBA8",
      color: "#4D9E38",
      borderColor: "#4D9E38",
    },
    purcreate: {
      backgroundColor: "#B9FBA8",
      color: "#296419",
      borderColor: "#296419",
    },
    drkpurcreate: {
      backgroundColor: "#F1D0FB",
      color: "#7C2395",
      borderColor: "#7C2395",
    },
    yellcreate: {
      backgroundColor: "#F7E8FC",
      color: "#90689B",
      borderColor: "#90689B",
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
      hide: false,
      // renderCell: (params) => (
      //     <Typography variant="subtitle2" style={{ cursor: 'pointer', fontFamily: 'Lato', fontSize: 10 }} onClick={() => { ShowFuDetails(params.id) }}>
      //         {params.id}<span style={{ color: '#97144D' }}>({params.row.InvoiceCount})</span>
      //     </Typography>
      // )
    },
    {
      field: "fustatus",
      flex: 1,
      minWidth: 90,
      headerName: "FU Status",
      align: "left",
      hide: false,
    },
    {
      field: "Buyer",
      headerName: "Buyer Name",
      flex: 1,
      minWidth: 66,
      align: "center",
      hide: false,
    },
    {
      field: "buyerbu",
      headerName: "Buyer BU",
      flex: 1,
      minWidth: 66,
      align: "center",
      hide: true,
    },
    {
      field: "seller",
      headerName: "Seller",
      flex: 1,
      minWidth: 35,
      ...inrPrice,
      hide: false,
    },
    {
      field: "sellerbu",
      headerName: "Seller BU",
      flex: 1,
      minWidth: 105,
      hide: true,
    },
    {
      field: "financier",
      headerName: "Financier",
      flex: 1,
      minWidth: 105,
      hide: false,
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
      field: "financierbu",
      headerName: "Financier BU",
      flex: 1,
      minWidth: 50,
      hide: true,
    },
    {
      field: "fuamunt",
      headerName: "FU Amount",
      type: "date",
      flex: 1,
      minWidth: 66,
      hide: false,
    },
    {
      field: "FU_Created_Date",
      headerName: "FU Created Date",
      type: "date",
      flex: 1,
      minWidth: 66,
      hide: false,
      renderCell: (params) => (
        <Typography variant="subtitle2" style={{ fontSize: 10 }}>
          {moment(new Date(params.value)).format("DD")}
          {"/"}
          {moment(new Date(params.value)).format("MMM")}{" "}
          {moment(new Date(params.value)).format("YYYY")}
        </Typography>
      ),
    },
    {
      field: "FU_Disbursed_on",
      headerName: "FU Disbursed On    ",
      type: "date",
      flex: 1,
      minWidth: 66,
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
      field: "FU_Due_date",
      headerName: "FU Due Date",
      type: "date",
      flex: 1,
      minWidth: 66,
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
      field: "accepted_rate",
      headerName: "Accepted Rate",
      flex: 1,
      minWidth: 50,
      hide: false,
    },
    {
      field: "interest",
      headerName: "Interest",
      flex: 1,
      minWidth: 50,
      hide: false,
    },
    {
      field: "crisil_Rating",
      headerName: "Buyer Crisil Rating",
      flex: 1,
      minWidth: 50,
      hide: false,
    },
    {
      field: "STP",
      headerName: "STP",
      flex: 1,
      minWidth: 62,
      type: "singleSelect",
      valueOptions: ["YES", "NO"],
      // renderCell: (params) => (
      //     <Typography className={classes.msmeCls} style={{ backgroundColor: params.value === 'SMALL' ? '#C17294' : params.value === 'MICRO' ? '#97144D' : '#AC4371' }}>
      //         {params.value}
      //     </Typography>
      // ),
      hide: true,
    },
    {
      field: "Related_Party",
      headerName: "Related Party",
      flex: 1,
      minWidth: 62,
      type: "singleSelect",
      valueOptions: ["YES", "NO"],
      // renderCell: (params) => (
      //     <Typography className={classes.msmeCls} style={{ backgroundColor: params.value === 'SMALL' ? '#C17294' : params.value === 'MICRO' ? '#97144D' : '#AC4371' }}>
      //         {params.value}
      //     </Typography>
      // ),
      hide: true,
    },
    {
      field: "MSME_Classfication",
      headerName: "Seller MSME Classfication",
      flex: 1,
      minWidth: 62,
      type: "singleSelect",
      // valueOptions: ['SMALL', 'MICRO', 'MEDIUM'],
      // renderCell: (params) => (
      //     <Typography className={classes.msmeCls} style={{ backgroundColor: params.value === 'SMALL' ? '#C17294' : params.value === 'MICRO' ? '#97144D' : '#AC4371' }}>
      //         {params.value}
      //     </Typography>
      // ),
      hide: false,
    },
    {
      field: "IBP",
      headerName: "IBP",
      flex: 1,
      minWidth: 30,
      align: "center",
      hide: false,
    },
    {
      field: "Bid Accepting Entity",
      headerName: "Bid Accepting Entity",
      flex: 1,
      align: "center",
      minWidth: 30,
      hide: true,
    },
    {
      field: "Available_Limit",
      headerName: "Available Limit",
      flex: 1,
      align: "center",
      minWidth: 30,
      type: "number",
      hide: true,
    },
    {
      field: "FU Tenor",
      headerName: "FU Tenor",
      flex: 1,
      minWidth: 50,
      ...inrPrice,
      hide: true,
    },
    {
      field: "Lowest_Bid",
      headerName: "Lowest Bid",
      flex: 1,
      align: "center",
      minWidth: 30,
      type: "number",
      hide: true,
    },
    {
      field: "ESG FU Classification",
      headerName: "ESG FU Classification",
      flex: 1,
      align: "center",
      minWidth: 30,
      hide: true,
    },
    {
      field: "ESG BID Classification",
      headerName: "ESG BID Classification",
      flex: 1,
      align: "center",
      minWidth: 30,
      hide: true,
    },
    {
      field: "ASTRID",
      headerName: "ASTRID",
      flex: 1,
      align: "center",
      minWidth: 30,
      hide: true,
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
  ];
  const onAutoChange = async (Newdata) => {
    setBuyerEntityIds(Newdata);
    let NewRows = await ApiFUResponses(fromDate, toDate);
    if (NewRows) {
      // let fetchBidCountResponse = await fetchBidCount(NewRows.furow, NewRows.fuNumArray)
      // let fetchBidResponse = await fetchBidApi(fetchBidCountResponse, NewRows.fuNumArray)
      setRows(NewRows);
    } else {
      setRows([]);
    }
  };
  const dateChange = async (_date, _e) => {
    if (_e === "t") {
      if (fromDate) {
        if (fromDate <= _date) {
          setToDate(_date);
          let NewRows = await ApiFUResponses(fromDate, _date);
          if (NewRows) {
            // let fetchBidCountResponse = await fetchBidCount(NewRows.furow, NewRows.fuNumArray)
            // let fetchBidResponse = await fetchBidApi(fetchBidCountResponse, NewRows.fuNumArray)
            setRows(NewRows);
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
  // function ColorToggleButton() {
  //   const [alignment, setAlignment] = React.useState("web");

  //   const handleChange = () =>
  //     //   event: React.MouseEvent<HTMLElement>,
  //     //   newAlignment: string,
  //     {
  //       setAlignment(newAlignment);
  //     };
  // }

  return (
    <>
      <div>
        {page !== "list" ? (
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
        {/* <h3 className="fu-listing" style={{ borderBottom: page === 'list' ? 'dashed 1px #CBCBCB' : 'solid 1px #CBCBCB', color: _dark ? '#ffffff' : '#404040' }}>
            {title}
            <BackButton sx={{ float: 'right' }} width="10%" onClick={() => { backFlow() }} />
        </h3> : ''} */}
        {page === "list" ? (
          <>
            <Stack direction="row" spacing={2} sx={{ paddingBottom: 2 }}>
              <AutoCompleteInput
                data={props.BuyerEntityList}
                relation="Buyer"
                onAutoChange={onAutoChange}
                value={buyerEntityIds}
              />
              <AutoCompleteInput
                data={props.BuyerEntityList}
                relation="Seller"
                onAutoChange={onAutoChange}
                value={buyerEntityIds}
              />
              <AutoCompleteInput
                data={props.BuyerEntityList}
                relation="Financier"
                onAutoChange={onAutoChange}
                value={buyerEntityIds}
              />
              <ToggleButtonGroup
                color="primary"
                //   value={alignment}
                exclusive
                //   onChange={handleChange}
                aria-label="Platform"
              >
                <ToggleButton
                  value="fu creation"
                  className={
                    button[0].active ? classes.toggbutt : classes.whitecrt
                  }
                  onClick={() => handleClick(0)}
                >
                  FU Creation{" "}
                </ToggleButton>
                <ToggleButton
                  value="bidding"
                  className={
                    button[1].active ? classes.toggbutt : classes.whitecrt
                  }
                  onClick={() => handleClick(1)}
                >
                  Bidding{" "}
                </ToggleButton>
                <ToggleButton
                  value="settlement"
                  className={
                    button[2].active ? classes.toggbutt : classes.whitecrt
                  }
                  onClick={() => handleClick(2)}
                >
                  Settlement
                </ToggleButton>
              </ToggleButtonGroup>
            </Stack>
            <Stack direction="row" spacing={2} sx={{ paddingBottom: 2 }}>
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
              <ToggleButtonGroup
                color="primary"
                //   value={alignment}
                exclusive
                //   onChange={handleChange}
                aria-label="Platform"
              >
                <ToggleButton value="fu_created">FU Created</ToggleButton>
                <ToggleButton value="fu authorized on">
                  FU Authorized On
                </ToggleButton>
                <ToggleButton value="bid accepted on">
                  Bid Accepted On{" "}
                </ToggleButton>
                <ToggleButton value="fu due date">FU Due Date</ToggleButton>
              </ToggleButtonGroup>
            </Stack>
            <BidListButtons
              _dark={_dark}
              resetFilter={resetFilter}
              refreshData={refreshData}
            />
            <fieldset
              style={{
                borderRadius: "15px",
                display: "flex",
                alignItems: "center",
                padding: "25px",
                width: "fit-content",
              }}
            >
              <legend>FU Status</legend>
              <Stack direction="row" spacing={2} sx={{ paddingBottom: 2 }}>
                <Button
                  variant="outlined"
                  className={
                    buttons[0].active
                      ? classes.lightbluecreate
                      : classes.whitecrt
                  }
                  onClick={() => handleButtonClick(0)}
                >
                  PENDING-DISB
                </Button>
                <Button
                  variant="outlined"
                  className={
                    buttons[1].active ? classes.bluecreate : classes.whitecrt
                  }
                  onClick={() => handleButtonClick(1)}
                >
                  DISBURSED
                </Button>
                <Button
                  variant="outlined"
                  className={
                    buttons[2].active ? classes.blcreate : classes.whitecrt
                  }
                  onClick={() => handleButtonClick(2)}
                >
                  DISB-FAILED
                </Button>
                <Button
                  variant="outlined"
                  className={
                    buttons[3].active ? classes.grcreate : classes.whitecrt
                  }
                  onClick={() => handleButtonClick(3)}
                >
                  REPAID
                </Button>
                <Button
                  variant="outlined"
                  className={
                    buttons[4].active ? classes.drkgrcreate : classes.whitecrt
                  }
                  onClick={() => handleButtonClick(4)}
                >
                  REPAYMENT-FAILED
                </Button>
                <Button
                  variant="outlined"
                  className={
                    buttons[5].active ? classes.purcreate : classes.whitecrt
                  }
                  onClick={() => handleButtonClick(5)}
                >
                  OVERDUE
                </Button>
                <Button
                  variant="outlined"
                  className={
                    buttons[6].active ? classes.drkpurcreate : classes.whitecrt
                  }
                  onClick={() => handleButtonClick(6)}
                >
                  SETTLED-OUTSIDE
                </Button>
                <Button
                  variant="outlined"
                  className={
                    buttons[7].active ? classes.yellcreate : classes.whitecrt
                  }
                  onClick={() => handleButtonClick(7)}
                >
                  OTHERS
                </Button>
              </Stack>
            </fieldset>
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
            // fuNumber={fuNumber}
            // fuData={fuData}
            backFlow={backFlow}
            _dark={_dark}
            ShowInvoiceDetails={ShowInvoiceDetails}
          />
        ) : // <InvoiceDetails FuInvnumber={fuInvnumber} _dark={_dark} />
        null}
      </div>
    </>
  );
}
