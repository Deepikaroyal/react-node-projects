/* eslint-disable */
import React, { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import { Grid, Tabs, Tab, Box, Typography } from "@mui/material";
import FUListing from "./FUlisting";
import PlaceBidList from "./PlaceBids";
import BidsModifiedList from "./BidsModified";
import BidManage from "./BidsManagement";
import BidSummary from "./BidsSummary";
import { makeStyles } from "@mui/styles";
import PropTypes from "prop-types";
import {
  getFuFetch,
  getBidCountFetch,
  getBuyerFu,
  getBidFetch,
  getFuAdditionalDetail,
  getBuyerMappedToFin,
  getBiddedFuNumber,
  getFUFinBidModifyDetail,
} from "../../../api/bids";
// import { getRedisEntiyFetch } from '../../../api/entity'
import { toast } from "react-toastify";
import {
  fetchStatusCode,
  CalculateDays,
  getCurrentDate,
  getFromToDate,
} from "../../../utils/general";

export default function Bids(props) {
  const [value, setValue] = useState(2);
  const [page, SetPage] = useState("list");
  const [title, setTitle] = useState("FU Listing");
  const [Funumber, setFunumber] = useState();
  const [FuInvnumber, setFuInvnumber] = useState();
  const [fuResponse, setFuResponse] = useState([]);
  const [bidManageFuRes, setBidManageFuRes] = useState([]);
  const [bidModifyRes, setBidModifyRes] = useState([]);
  const [bidfuResponse, setBidfuResponse] = useState([]);
  const [apiResponse, setApiResponse] = useState([]);
  const [entityResponse, setEntityResponse] = useState([]);
  const [entityFuNumber, setEntityFuNumber] = useState([]);
  const [biddedFuNumber, setBiddedFuNumber] = useState([]);
  const [biddedFuFetch, setBiddedFuFetch] = useState([]);
  const [buyerId, setBuyerId] = useState();
  const [isSet, setIsSet] = useState(true);
  // const [biddedFu, setBiddedFu] = useState(false)

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setBuyerId(null);
    if (newValue === 1) {
      setTitle("FU Listing");
      SetPage("list");
    }
  };

  useEffect(() => {
    fetchBuyerMappedToFin();
    // fetchData()
    // fetchBidModifyData()
    fetchBidManagementData();
  }, []);

  const fetchBuyerMappedToFin = async () => {
    let entityData = await getBuyerMappedToFin();
    let entityArray = [];
    if (entityData && entityData.data && entityData.data.length > 0) {
      setEntityResponse(entityData.data);
      entityData.data.map((item) => {
        entityArray.push(item.buyerEntityId);
      });
      setEntityFuNumber(entityArray);
    }
    fetchBidModifyData(entityArray);
    fetchData(entityArray);
  };

  // const fetchEntityData = async () => {
  //     let entityData = await getRedisEntiyFetch(1, "B");
  //     if (entityData && entityData.data && entityData.data.length > 0) {
  //         setEntityResponse(entityData.data)
  //     }
  // }

  const refreshApiData = (childData) => {
    // console.log("1111", childData)
    if (childData.refresh === "placeBid") {
      //fetchBuyerMappedToFin()
      fetchData(entityFuNumber);
    }
    if (childData.refresh === "Bid Modify") {
      fetchBidModifyData(entityFuNumber);
    }
    if (childData.refresh === "Bid Mange") {
      fetchBidManagementData();
    }
  };

  const resetFilters = () => {
    setBuyerId("");
  };

  // For Bid Management and Bid Summary  screen :
  const fetchBidManagementData = async () => {
    let currentDate = getCurrentDate();
    let startDate = getFromToDate();
    let biddedResponse = await getBiddedFuNumber({
      //  "bidDateFrom": startDate,
      //  "bidDateTO": currentDate,
      bidDateFrom: "2022-01-01",
      bidDateTO: "2031-11-28",
    });
    if (
      biddedResponse &&
      biddedResponse.data &&
      biddedResponse.data.length > 0
    ) {
      biddedResponse.data.map((item) => {
        biddedFuNumber.push(item.fuNumber);
      });
      let Response = await getFuFetch({
        dateFrom: startDate + " 00:00:00.000",
        dateTo: currentDate + " 00:00:00.000",
        fetchStrategy: 2,
        fus: biddedFuNumber,
      });
      let fuNumArray = [];
      if (Response && Response.data && Response.data.length > 0) {
        const furow = Response.data.map((item) => {
          const container = {};
          fuNumArray.push(item.fuNumber);
          container.id = item.fuNumber;
          container.InvoiceCount = item.totalNoOfInvoices;
          container.Buyer = item.buyerName;
          container.Seller = ""; /*coming from fuadditional details */
          container.Udyam = ""; /*coming from fuadditional details */
          container.FU_Created_Date = "";
          container.FU_Amount = item.batchAmount;
          container.Buyer_Limit_Available = 0; /*not coming */
          container.Seller_Limit_Available = 0; /*not coming */
          container.STP = ""; /*coming from fuadditional details */
          container.Related_Party = ""; /*coming from fuadditional details */
          container.MSME_Classfication =
            ""; /*coming from fuadditional details */
          container.FU_Due_Date = item.fuDueDate;
          container.Fu_Tenor = item.tenor; /*not coming */
          container.Auth_Action = ""; /*not coming */
          container.ResidualTenor = item.residualTenor;
          container.Lowest_Bid = "";
          container.BidCount = "";
          container.My_Bid = "";
          container.Valid_For = "";
          container.Earnings = (
            item.batchAmount *
            (item.residualTenor / 365) *
            item.interestRate
          ).toFixed(2);
          // container.Earnings = (item.batchAmount * (item.interestRate / item.tenor)).toFixed(2);
          container.CheckerLevel = item.nstepAuthorisedLevel
            ? item.nstepAuthorisedLevel
            : "Not Applicable"; /*not coming */
          container.Bid_Made_By = "";
          container.checkedBy = "";
          container.Won_Bid = 5; /*not coming */
          container.FU_Status = item.statusCode
            ? fetchStatusCode(item.statusCode)
            : "";
          container.My_Bid_Status = "Won"; /*not coming */
          container.buyerEntityId = item.buyerEntityId;
          container.data = item;
          container.bidFetchData = {};
          container.bidCountData = {};
          return container;
        });

        setBidManageFuRes(furow);
        // for Bid Summary:
        setBidfuResponse(furow);
        let fetchBidCountResponse = await fetchBidCount(furow, fuNumArray);
        setBidManageFuRes(fetchBidCountResponse);
        let fetchBidResponse = await fetchBidApi(furow, fuNumArray);
        setBidManageFuRes(fetchBidResponse);
        let fuAddtionalDetailResponse = await fuFetchAdditionalDetails(
          furow,
          fuNumArray
        );
        setBidManageFuRes(fuAddtionalDetailResponse);
        //for Bid Summary:
        setBidfuResponse(fuAddtionalDetailResponse);
      }
    }
  };

  //for Bid cancel/modify screen:
  const fetchBidModifyData = async (entityArray) => {
    let currentDate = getCurrentDate();
    let startDate = getFromToDate();
    // console.log("@inside modify", entityArray)
    let BidModifyResponse = await getFUFinBidModifyDetail({
      dateFrom: startDate + " 00:00:00.000",
      dateTo: currentDate + " 00:00:00.000",
      buyerEntityId: entityArray,
    });

    if (
      BidModifyResponse &&
      BidModifyResponse.data &&
      BidModifyResponse.data.length > 0
    ) {
      let fuArray = [];
      BidModifyResponse.data.map((item) => {
        fuArray.push(item.fuNumber);
      });

      let currentDate = getCurrentDate();
      let startDate = getFromToDate();
      let Response = await getFuFetch({
        dateFrom: startDate + " 00:00:00.000",
        dateTo: currentDate + " 00:00:00.000",
        fetchStrategy: 2,
        fus: fuArray,
      });
      let fuNumArray = [];
      if (Response && Response.data && Response.data.length > 0) {
        const furow = Response.data.map((item) => {
          const container = {};
          fuNumArray.push(item.fuNumber);
          container.id = item.fuNumber;
          container.InvoiceCount = item.totalNoOfInvoices;
          container.Buyer = item.buyerName;
          container.Seller = ""; /*coming from fuadditional details */
          container.Udyam = ""; /*coming from fuadditional details */
          container.FU_Created_Date = "";
          container.FU_Amount = item.batchAmount;
          container.Buyer_Limit_Available = 0; /*not coming */
          container.Seller_Limit_Available = 0; /*not coming */
          container.STP = ""; /*coming from fuadditional details */
          container.Related_Party = ""; /*coming from fuadditional details */
          container.MSME_Classfication =
            ""; /*coming from fuadditional details */
          container.FU_Due_Date = item.fuDueDate;
          container.bidId = "";
          container.Fu_Tenor = item.tenor; /*not coming */
          container.ResidualTenor = item.residualTenor;
          container.Lowest_Bid = "";
          container.BidCount = "";
          container.My_Bid = "";
          container.Valid_For = "";
          container.Earnings = (
            item.batchAmount *
            (item.residualTenor / 365) *
            item.interestRate
          ).toFixed(2);
          // container.Earnings = (item.batchAmount * (item.interestRate / item.tenor)).toFixed(2);
          container.CheckerLevel = item.nstepAuthorisedLevel
            ? item.nstepAuthorisedLevel
            : "Not Applicable"; /*not coming */
          container.Bid_Made_By = "";
          container.checkedBy = "";
          container.Won_Bid = 5; /*not coming */
          container.FU_Status = item.statusCode
            ? fetchStatusCode(item.statusCode)
            : "";
          container.My_Bid_Status = "Won"; /*not coming */
          container.buyerEntityId = item.buyerEntityId;
          container.data = item;
          container.bidFetchData = {};
          container.bidCountData = {};
          return container;
        });

        //console.log("furow", furow);
        setBidModifyRes(furow);
        let fetchBidCountResponse = await fetchBidCount(furow, fuNumArray);
        setBidModifyRes(fetchBidCountResponse);
        let fetchBidResponse = await fetchBidApi(furow, fuNumArray);
        setBidModifyRes(fetchBidResponse);
        let fuAddtionalDetailResponse = await fuFetchAdditionalDetails(
          furow,
          fuNumArray
        );
        setBidModifyRes(fuAddtionalDetailResponse);
      }
    }
  };

  const fetchData = async (entityArray) => {
    // let fuResponse = await getBuyerFu({
    //     "fetchStrategy": 0
    // });

    //if (fuResponse && fuResponse.data && fuResponse.data.length > 0) {
    // setApiResponse(fuResponse.data);
    let currentDate = getCurrentDate();
    let startDate = getFromToDate();
    let Response = await getFuFetch({
      dateFrom: startDate + " 00:00:00.000",
      dateTo: currentDate + " 00:00:00.000",
      fetchStrategy: 2,
      toFetchEntityIDs: entityArray,
    });
    let fuNumArray = [];
    if (Response && Response.data && Response.data.length > 0) {
      const furow = Response.data.map((item) => {
        const container = {};
        fuNumArray.push(item.fuNumber);
        container.id = item.fuNumber;
        container.InvoiceCount = item.totalNoOfInvoices;
        container.Buyer = item.buyerName;
        container.Seller = ""; /*coming from fuadditional details */
        container.Udyam = ""; /*coming from fuadditional details */
        container.FU_Created_Date = "";
        container.FU_Amount = item.batchAmount;
        container.Buyer_Limit_Available = 0; /*not coming */
        container.Seller_Limit_Available = 0; /*not coming */
        container.STP = ""; /*coming from fuadditional details */
        container.Related_Party = ""; /*coming from fuadditional details */
        container.MSME_Classfication = ""; /*coming from fuadditional details */
        container.FU_Due_Date = item.fuDueDate;
        container.Fu_Tenor = item.tenor; /*not coming */
        container.ResidualTenor = item.residualTenor;
        container.Lowest_Bid = "";
        container.BidCount = "";
        container.My_Bid = "";
        container.Valid_For = "";
        container.Earnings = (
          item.batchAmount *
          (item.residualTenor / 365) *
          item.interestRate
        ).toFixed(2);
        // container.Earnings = (item.batchAmount * (item.interestRate / item.tenor)).toFixed(2);
        container.CheckerLevel = item.nstepAuthorisedLevel
          ? item.nstepAuthorisedLevel
          : "Not Applicable"; /*not coming */
        container.Bid_Made_By = "";
        container.checkedBy = "";
        container.Won_Bid = 5; /*not coming */
        container.FU_Status = item.statusCode
          ? fetchStatusCode(item.statusCode)
          : "";
        container.My_Bid_Status = "Won"; /*not coming */
        container.buyerEntityId = item.buyerEntityId;
        container.data = item;
        container.bidFetchData = {};
        container.bidCountData = {};
        return container;
      });
      setFuResponse(furow);
      let fetchBidCountResponse = await fetchBidCount(furow, fuNumArray);
      setFuResponse(fetchBidCountResponse);
      let fetchBidResponse = await fetchBidApi(furow, fuNumArray);
      setFuResponse(fetchBidResponse);
      let fuAddtionalDetailResponse = await fuFetchAdditionalDetails(
        furow,
        fuNumArray
      );
      setFuResponse(fuAddtionalDetailResponse);
      setIsSet(!isSet);
    }
  };
  const fetchBidCount = async (furow, fuNumArray) => {
    let BidCountApiRes = await getBidCountFetch(
      JSON.stringify({ fus: fuNumArray })
    );
    let updateRow = furow;
    if (
      BidCountApiRes &&
      BidCountApiRes.data &&
      BidCountApiRes.data.length > 0
    ) {
      updateRow.map((element) => {
        var foundIndex = BidCountApiRes.data.findIndex(
          (x) => x.fuNumber === element.id
        );
        if (foundIndex !== -1) {
          element.BidCount = BidCountApiRes.data[foundIndex].bidCount;
          element.Lowest_Bid = BidCountApiRes.data[foundIndex].minBidRate;
          element.Integration =
            BidCountApiRes.data[foundIndex].buyerIntegrationFlag;
        }
      });
    }
    return updateRow;
  };

  const fetchBidApi = async (furow, fuNumArray) => {
    let BidApiRes = await getBidFetch(JSON.stringify({ fus: fuNumArray }));
    let updateRow = furow;
    if (BidApiRes && BidApiRes.data && BidApiRes.data.length > 0) {
      updateRow.map((element) => {
        var foundIndex = BidApiRes.data.findIndex(
          (x) => x.fuNumber === element.id
        );
        if (foundIndex !== -1) {
          element.checkedBy = BidApiRes.data[foundIndex].checkedBy;
          if (Number.isInteger(BidApiRes.data[foundIndex].interestRate)) {
            element.My_Bid = BidApiRes.data[foundIndex].interestRate + ".00";
          } else {
            element.My_Bid = BidApiRes.data[foundIndex].interestRate;
          }
          element.Bid_Made_By = BidApiRes.data[foundIndex].madeBy;
          element.FU_Created_Date = BidApiRes.data[foundIndex].madeDateTime;
          element.bidId = BidApiRes.data[foundIndex].bidId;
          element.Valid_For = BidApiRes.data[foundIndex].validityPeriod
            ? CalculateDays(BidApiRes.data[foundIndex].validityPeriod)
            : "";
          if (BidApiRes.data[foundIndex].status === "ACTIVE") {
            element.Auth_Action = BidApiRes.data[foundIndex].bidStatus;
          }
          element.bidFetchData = BidApiRes.data[foundIndex];
        }
      });
    }
    return updateRow;
  };

  const fuFetchAdditionalDetails = async (furow, fuNumArray) => {
    let fuDetailRes = await getFuAdditionalDetail(
      JSON.stringify({ fus: fuNumArray })
    );
    let updateRow = furow;
    if (fuDetailRes && fuDetailRes.data && fuDetailRes.data.length > 0) {
      // console.log("$$$", fuDetailRes)
      updateRow.map((element) => {
        var foundIndex = fuDetailRes.data.findIndex(
          (x) => x.fuNumber === element.id
        );
        if (foundIndex !== -1) {
          element.Related_Party =
            fuDetailRes.data[foundIndex].sellerRelatedPartyToBuyer;
          element.MSME_Classfication =
            fuDetailRes.data[foundIndex].sellerMSMEStatus;
          element.STP = fuDetailRes.data[foundIndex].sellerRelatedPartyToBuyer;
          element.Seller = fuDetailRes.data[foundIndex].sellerName;
          element.Udyam = fuDetailRes.data[foundIndex].buyerUdyamRegNo;
        }
      });
    }
    return updateRow;
  };

  const ShowFuDetails = (Id) => {
    setFunumber(Id);
    setTitle("FU " + Id);
    SetPage("details");
  };
  const ShowInvoiceDetails = (Id) => {
    setTitle("INV " + Id);
    setFuInvnumber(Id);
    SetPage("invoice");
  };
  const handlePlaceBid = (Id, fuCount) => {
    if (fuCount > 0) {
      setBuyerId(Id);
      setValue(2);
    } else {
      toast.error("FU count should be greater than zero!");
    }
  };
  const backFlow = () => {
    if (page === "invoice") {
      setTitle("FU " + Funumber);
      SetPage("details");
    } else {
      setTitle("Buyerwise FU");
      SetPage("list");
    }
  };

  const TabsMenu = [
    { id: 1, name: "Buyerwise FU" },
    { id: 2, name: "Place Bids" },
    { id: 3, name: "Bids - Modify/Cancel " },
    { id: 4, name: "Bids Management" },
    { id: 5, name: "Bids Summary" },
  ];
  const useStyles = makeStyles({
    gridcss: {
      borderRadius: 10,
      padding: 10,
      paddingBottom: 20,
      boxShadow: "0 6px 8px 0 rgba(0,0,0,0.2);",
      marginTop: 10,
      backgroundColor: props._dark ? "#282828" : "none",
    },
  });
  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  function a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      "aria-controls": `full-width-tabpanel-${index}`,
    };
  }
  const classes = useStyles();
  const theme = useTheme();
  return (
    <Grid>
      <Box sx={{ width: "100%" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          aria-label="secondary tabs example"
          TabIndicatorProps={{
            style: { background: "#97144D", color: "#97144D" },
          }}
          sx={{
            ".MuiTab-root": {
              fontSize: "14px",
              fontFamily: "Lato",
              lineHeight: "19px",
              color: props._dark ? "#ffffff" : "#9D9D9D",
              fontWeight: 400,
              "&.Mui-selected": {
                color: "#97144D",
              },
            },
          }}
        >
          {TabsMenu.map((_menu) => (
            <Tab
              value={_menu.id}
              label={_menu.name}
              {...a11yProps(_menu.id)}
              disabled={_menu.id === 1}
            />
          ))}
        </Tabs>
      </Box>
      <Grid className={classes.gridcss}>
        {value === 1 ? (
          <TabPanel value={value} index={1} dir={theme.direction}>
            <FUListing
              page={page}
              title={title}
              Funumber={Funumber}
              FuInvnumber={FuInvnumber}
              ShowFuDetails={ShowFuDetails}
              ShowInvoiceDetails={ShowInvoiceDetails}
              backFlow={backFlow}
              _dark={props._dark}
              apiResponse={apiResponse}
              fuResponse={fuResponse}
              handlePlaceBid={handlePlaceBid}
              refreshApiData={refreshApiData}
              setValue={setValue}
              BuyerEntityList={entityResponse}
            />
          </TabPanel>
        ) : value === 2 ? (
          <TabPanel value={value} index={2} dir={theme.direction}>
            <PlaceBidList
              _dark={props._dark}
              fuResponse={fuResponse}
              refreshApiData={refreshApiData}
              buyerId={buyerId}
              resetFilters={resetFilters}
              BuyerEntityList={entityResponse}
              entityFuNumber={entityFuNumber}
            />
          </TabPanel>
        ) : value === 3 ? (
          <TabPanel value={value} index={3} dir={theme.direction}>
            <BidsModifiedList
              _dark={props._dark}
              refreshApiData={refreshApiData}
              buyerId={buyerId}
              resetFilters={resetFilters}
              BuyerEntityList={entityResponse}
              entityFuNumber={entityFuNumber}
              bidModifyRes={bidModifyRes}
            />
          </TabPanel>
        ) : value === 4 ? (
          <TabPanel value={value} index={4} dir={theme.direction}>
            <BidManage
              _dark={props._dark}
              refreshApiData={refreshApiData}
              BuyerEntityList={entityResponse}
              entityFuNumber={entityFuNumber}
              bidManageFuRes={bidManageFuRes}
            />
          </TabPanel>
        ) : (
          <TabPanel value={value} index={5} dir={theme.direction}>
            {/* <BidSummary _dark={props._dark} apiResponse={apiResponse} fuResponse={fuResponse} */}
            <BidSummary
              _dark={props._dark}
              apiResponse={apiResponse}
              bidfuResponse={bidfuResponse}
              refreshApiData={refreshApiData}
              BuyerEntityList={entityResponse}
              biddedFuNumber={biddedFuNumber}
            />
          </TabPanel>
        )}
      </Grid>
    </Grid>
  );
}
