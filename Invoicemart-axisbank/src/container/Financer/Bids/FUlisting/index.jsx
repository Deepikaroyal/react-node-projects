/* eslint-disable */
import React, { useEffect, useState } from "react";
import { Box, Stack, Grid } from "@mui/material";
import Fudetails from "../FUdetail/index";
import InvoiceDetails from "../FUdetail/InvoiceDetails";
import BackButton from "../../../../components/Common/BackButton";
import FUButtonList from "./FUListButtons";
import { makeStyles } from "@mui/styles";
import moment from "moment";
import Fucard from "./Fucard";
import CustomDatePicker from "../../../../components/Common/customDatepicker";
import AutoCompleteInput from "../../../../components/Common/AutoCompleteInput";
import InfiniteScroll from "react-infinite-scroll-component";
import { Oval } from "react-loader-spinner";
import { toast } from "react-toastify";
import { getBuyerFu } from "../../../../api/bids";

const FUList = (props) => {
  const _dark = props._dark ? props._dark : false;
  const [pageNum, setpageNum] = useState(1);
  const [apiResponse, setApiResponse] = useState([]);
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  const [buyerEntityIds, setBuyerEntityIds] = useState([]);

  const useStyles = makeStyles({
    stpCls: {
      width: 35,
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
    typocls: {
      fontFamily: "Lato !important",
      cursor: "pointer",
      fontSize: 10,
    },
    loadCss: {
      left: "50%",
      position: "fixed",
    },
  });
  const classes = useStyles();

  const resetFilter = () => {
    setApiResponse(props.apiResponse ? props.apiResponse : []);
    setpageNum(pageNum + 1);
    setBuyerEntityIds([]);
    setToDate(null);
    setFromDate(null);
  };

  const refreshData = () => {
    props.refreshApiData();
  };
  useEffect(() => {
    setApiResponse(props.apiResponse ? props.apiResponse : []);
    setpageNum(pageNum + 1);
  }, []);
  const fetchMoreData = () => {
    // setTimeout(() => {
    //   let _fudata = FUData;
    //   setApiResponse(apiResponse.concat(_fudata.slice((pageNum - 1) * pageSize, pageNum * pageSize)));
    //   setpageNum(pageNum + 1);
    // }, 2000);
  };
  const fetchData = async () => {
    let buyerArray = [];
    let buBody = null;
    if (buyerEntityIds.length > 0) {
      for (var i = 0; i < buyerEntityIds.length; i++) {
        buyerArray.push(buyerEntityIds[i].buyerEntityId.toString());
      }
    }
    if (fromDate && toDate) {
      fromdate = moment(fromDate).format("yyyy-MM-DD") + " 00:00:00.000";
      todate = moment(toDate).format("yyyy-MM-DD") + " 00:00:00.000";
    }
    if (buyerArray.length > 0) {
      buBody = {
        fetchStrategy: 0,
        finEntityId: buyerArray[0],
      };
    } else {
      buBody = {
        fetchStrategy: 0,
      };
    }
    let fuResponse = await getBuyerFu(buBody);
    if (fuResponse && fuResponse.data && fuResponse.data.length > 0) {
      setApiResponse(fuResponse.data);
    }
  };
  const onAutoChange = async (Newdata) => {
    setBuyerEntityIds(Newdata);
    fetchData();
  };
  const dateChange = async (_date, _e) => {
    if (_e === "t") {
      if (fromDate) {
        if (fromDate <= _date) {
          setToDate(_date);
          fetchData();
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
    <Box>
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
          <FUButtonList
            _dark={_dark}
            resetFilter={resetFilter}
            refreshData={refreshData}
            setValue={props.setValue}
          />
          <div style={{ width: "100%", marginTop: "20px", color: "#404040" }}>
            {apiResponse.length === 0 ? (
              <Oval
                color="#97144d"
                secondaryColor="#c4c4c4"
                height={50}
                width={50}
                wrapperClass={classes.loadCss}
              />
            ) : null}
            <InfiniteScroll
              dataLength={apiResponse.length > 0 ? apiResponse.length : 10}
              next={() => fetchMoreData()}
              hasMore
              loader
            >
              <Box sx={{ flexGrow: 1, padding: 1 }}>
                <Grid container spacing={3}>
                  {apiResponse.length > 0
                    ? apiResponse.map((fuProps) => (
                        <Fucard
                          {...fuProps}
                          handlePlaceBid={props.handlePlaceBid}
                        />
                      ))
                    : ""}
                </Grid>
              </Box>
            </InfiniteScroll>
          </div>
        </>
      ) : props.page === "details" ? (
        <Fudetails
          Funumber={props.Funumber}
          backFlow={props.backFlow}
          _dark={_dark}
          ShowInvoiceDetails={props.ShowInvoiceDetails}
        />
      ) : (
        <InvoiceDetails FuInvnumber={props.FuInvnumber} _dark={_dark} />
      )}
    </Box>
  );
};
export default FUList;
// const mapStateToProps = (state) => ({
//   siteTheme: state.auth.siteTheme,
// })

// export default connect(mapStateToProps, null)(FUList);
