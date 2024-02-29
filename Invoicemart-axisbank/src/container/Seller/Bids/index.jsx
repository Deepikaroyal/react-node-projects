/* eslint-disable */
import React, { useState, useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import { Grid, Tabs, Tab, Box, Typography } from "@mui/material";
import AcceptBidsList from "./AcceptBids";
// import BidSummary from './BiddingSummary';
// import { getRedisEntiyFetch } from '../../../api/entity'
import AuthorizeBidAccept from "./AuthorizeBidAccept";
import { makeStyles } from "@mui/styles";
import PropTypes from "prop-types";
import BiddingSummary from "./BiddingSummary";
import {
  getFuFetch,
  BuyBidAcceptedFUNum,
  getBidCountFetch,
  getBidFetch,
  MappedSellerInfo,
  getFuAdditionalDetail,
} from "../../../api/bids";
import {
  fetchStatusCode,
  CalculateDays,
  getCurrentDate,
  getFromToDate,
} from "../../../utils/general";
import { toast } from "react-toastify";
import CryptoJS from "crypto-js";
import {
  DecryptPayload,
  EncryptAESKey,
  EncryptPayload,
  getRandomChar,
} from "../../../utils/encrypt";
import { getRSAServerKey } from "../../../api";
import { JWK } from "node-jose";

export default function Bids(props) {
  const role = props._role ? props._role : "";
  const [value, setValue] = useState(1);
  const [page, SetPage] = useState("list");
  const [title, setTitle] = useState("FU Listing");
  const [Funumber, setFunumber] = useState();
  const [FuInvnumber, setFuInvnumber] = useState();
  const [fuResponse, setFuResponse] = useState([]);
  const [bidSummaryFuRes, setBidSummaryFuRes] = useState([]);
  const [apiResponse, setApiResponse] = useState([]);
  const [entityResponse, setEntityResponse] = useState([]);
  const [entityFuNumber, setEntityFuNumber] = useState([]);
  const [biddedFuNumber, setBiddedFuNumber] = useState([]);
  const [biddedFuFetch, setBiddedFuFetch] = useState([]);
  const [sellerId, setSellerId] = useState();
  const [isSet, setIsSet] = useState(true);
  const [biddedFu, setBiddedFu] = useState(false);

  let currentDate = getCurrentDate();
  let startDate = getFromToDate();
  const handleChange = (event, newValue) => {
    setValue(newValue);
    setSellerId(null);
    if (newValue === 1) {
      setTitle("FU Listing");
      SetPage("list");
    }
  };

  const ShowFuDetails = (Id) => {
    setFunumber(Id);
    setTitle(Id);
    SetPage("details");
  };

  const backFlow = () => {
    if (page === "invoice") {
      setTitle(Funumber);
      SetPage("details");
    } else {
      setTitle("Buyerwise FU");
      setFunumber("");
      SetPage("list");
    }
  };

  const TabsMenu = [
    {
      id: 1,
      name:
        role && Funumber
          ? "Accept FU Bid wise"
          : role === "BUYERMAK"
          ? "Accept Bids"
          : role === "BUYERCHK"
          ? "Authorize Bids Accept"
          : "",
    },
    { id: 2, name: "Bids Summary" },
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

  useEffect(() => {
    (async () => {
      await fetchEntityData();
      fetchData();
      fetchBidSummaryData();
      authBidData();
    })();
  }, []);
  const fetchEntityData = async () => {
    const key_ = getRandomChar(32);
    const iv_ = getRandomChar(16);
    var key = CryptoJS.enc.Latin1.parse(key_);
    var iv = CryptoJS.enc.Latin1.parse(iv_);
    let clientId = sessionStorage.getItem("browserId");
    let data = JSON.stringify({
      dateFrom: "2016-01-01 00:00:00.000",
      dateTo: "2031-12-12 00:00:00.000",
    });
    let encryptPayload = await EncryptPayload(data, key, iv);
    let tempData = JSON.stringify({ clientId: clientId });
    let keyRes = await getRSAServerKey(tempData);
    let pubKey = keyRes.data?.requiredParams;
    let _skey = await JWK.asKey(pubKey);
    let Enc_DEK = JSON.stringify({
      key: key_,
      iv: iv_,
    });
    let encryptDEK = await EncryptAESKey(Enc_DEK, _skey);
    let _body = JSON.stringify({
      clientId: clientId,
      encryptedData: encryptPayload.toString(),
      encryptedDek: encryptDEK,
    });
    let sellerMappedInfo = await MappedSellerInfo(_body);
    let decryptPayload = await DecryptPayload(
      sellerMappedInfo.data?.cipherText,
      key,
      iv
    );
    let jsonArray = decryptPayload.match(/^\[(.*?)\]/)[0];
    const arrayOfObjects = JSON.parse(jsonArray);
    setEntityResponse(arrayOfObjects);
    arrayOfObjects.map((item) => {
      entityFuNumber.push(item.sellerEntityId);
    });
    console.log(arrayOfObjects, "array");
  };
  const refreshApiData = async () => {
    await fetchEntityData();
    fetchData();
    fetchBidSummaryData();
  };
  const resetFilters = () => {
    setSellerId("");
  };
  const fetchBidSummaryData = async () => {
    let currentDate = getCurrentDate();
    let startDate = getFromToDate();
    let Response = await getFuFetch({
      dateFrom: startDate + " 00:00:00.000",
      dateTo: currentDate + " 00:00:00.000",
      fetchStrategy: 2,
      toFetchEntityIDs: entityFuNumber,
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
        container.Auth_Action = "PLACED"; /*not coming */
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
      // setFuResponse(furow)
      let fetchBidCountResponse = await fetchBidCount(furow, fuNumArray);
      // setFuResponse(fetchBidCountResponse)
      let fetchBidResponse = await fetchBidApi(
        fetchBidCountResponse,
        fuNumArray
      );
      // setFuResponse(fetchBidResponse)
      let fuAddtionalDetailResponse = await fuFetchAdditionalDetails(
        fetchBidResponse,
        fuNumArray
      );
      setBidSummaryFuRes(fuAddtionalDetailResponse);
      setIsSet(!isSet);
    }
  };
  const fetchData = async () => {
    let currentDate = getCurrentDate();
    let startDate = getFromToDate();
    let Response = await getFuFetch({
      dateFrom: startDate + " 00:00:00.000",
      dateTo: currentDate + " 00:00:00.000",
      fetchStrategy: 2,
      toFetchEntityIDs: entityFuNumber,
    });
    let fuNumArray = [];
    if (Response && Response.data && Response.data.length > 0) {
      const furow = Response.data.map((item) => {
        const container = {};
        fuNumArray.push(item.fuNumber);
        console.log("fuNumArray111", fuNumArray);
        container.id = item.fuNumber;
        // container.InvoiceCount = item.totalNoOfInvoices;
        container.Buyer = item.buyerName;
        // container.Seller = ''; /*not coming */
        // container.Udyam = ''; /*coming from entity */
        // container.FU_Created_Date = '';
        container.FU_Amount = item.batchAmount;
        // container.Buyer_Limit_Available = ''; /*not coming */
        // container.STP = 'Yes'; /*coming from entity */
        // container.Related_Party = 'No'; /*coming from entity */
        // container.MSME_Classfication = 'MICRO'; /*coming from entity */
        container.FU_Due_Date = item.fuDueDate;
        // container.Fu_Tenor = item.tenor;
        container.ResidualTenor = item.residualTenor;
        // container.Lowest_Bid = '';
        // container.BidCount = '';
        container.My_Bid = "";
        // container.Valid_For = '';
        // container.Earnings = (item.batchAmount * (item.interestRate / item.tenor)).toFixed(2);
        // container.CheckerLevel = item.nstepAuthorisedLevel ? item.nstepAuthorisedLevel : 'Not Applicable'; /*not coming */
        // container.Bid_Made_By = ''
        // container.checkedBy = ''
        // container.Won_Bid = 5; /*not coming */
        // container.FU_Status = item.statusCode ? fetchStatusCode(item.statusCode) : '';
        // container.My_Bid_Status = 'Won'; /*not coming */
        // container.buyerEntityId = item.buyerEntityId;
        container.data = item;
        container.bidFetchData = {};
        container.bidCountData = {};
        return container;
      });
      // setFuResponse(furow)
      let fuAddtionalDetailResponse = await fuFetchAdditionalDetails(
        furow,
        fuNumArray
      );
      // setFuResponse(fuAddtionalDetailResponse)
      let fetchBidCountResponse = await fetchBidCount(
        fuAddtionalDetailResponse,
        fuNumArray
      );
      setFuResponse(fetchBidCountResponse);
      // let fetchBidResponse = await fetchBidApi(furow, fuNumArray)
      // setFuResponse(fetchBidResponse)
      setIsSet(!isSet);
    }
    // }
  };
  const authBidData = async () => {
    let data1 = {
      bidAcceptedDateFrom: startDate,
      bidAcceptedDateTo: currentDate,
    };
    console.log("currentDate", data1);
    let Response = await BuyBidAcceptedFUNum(data1);
    console.log("authBidData", Response);
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
      console.log("BidCountApiRes", BidCountApiRes.data);
      updateRow.map((element) => {
        var foundIndex = BidCountApiRes.data.findIndex(
          (x) => x.fuNumber === element.id
        );
        if (foundIndex !== -1) {
          element.BidCount = BidCountApiRes.data[foundIndex].bidCount;
          element.bidId = BidCountApiRes.data[foundIndex].bidId;
          element.Lowest_Bid = BidCountApiRes.data[foundIndex].minBidRate;
          // element.bidCountData = BidCountApiRes.data[foundIndex];
          element.respLatestBidDttm =
            BidCountApiRes.data[foundIndex].respLatestBidDttm;
          element.financerEntityName =
            BidCountApiRes.data[foundIndex].financerEntityName;
          // element.validityPeriod =  BidCountApiRes.data[foundIndex].validityPeriod ? CalculateDays("2023-07-12") : '';

          element.validityPeriod = BidCountApiRes.data[foundIndex]
            .validityPeriod
            ? CalculateDays(BidCountApiRes.data[foundIndex].validityPeriod)
            : "";
          console.log(
            "element.BidCountApiRes.data[foundIndex].validityPeriod",
            element.validityPeriod
          );
        }
      });
    }
    return updateRow;
  };
  const fetchBidApi = async (furow, fuNumArray) => {
    let BidApiRes = await getBidFetch(JSON.stringify({ fus: fuNumArray }));
    let updateRow = furow;
    if (BidApiRes && BidApiRes.data && BidApiRes.data.length > 0) {
      console.log(" BidApiRes.data", BidApiRes.data);
      updateRow.map((element) => {
        var foundIndex = BidApiRes.data.findIndex(
          (x) => x.fuNumber === element.id
        );
        if (foundIndex !== -1) {
          element.bidStatus = BidApiRes.data[foundIndex].bidStatus;
          if (
            element.bidStatus === "ACCEPTED" ||
            element.bidStatus === "SETTLED"
          ) {
            element.Won_Bid = BidApiRes.data[foundIndex].interestRate;
          }
          console.log("element.bidStatus", element.bidStatus, element.Won_Bid);
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
          element.Seller = fuDetailRes.data[foundIndex].sellerName;
          element.Udyam = fuDetailRes.data[foundIndex].sellerUdyamRegNo;
        }
      });
    }
    return updateRow;
  };
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
            <Tab value={_menu.id} label={_menu.name} {...a11yProps(_menu.id)} />
          ))}
        </Tabs>
      </Box>
      <Grid className={classes.gridcss}>
        {value === 1 ? (
          <TabPanel value={value} index={1} dir={theme.direction}>
            {role === "BUYERMAK" ? (
              <AcceptBidsList
                _dark={props._dark}
                page={page}
                title={title}
                Funumber={Funumber}
                ShowFuDetails={ShowFuDetails}
                backFlow={backFlow}
                apiResponse={apiResponse}
                fuResponse={fuResponse}
                refreshApiData={refreshApiData}
                SellerEntityList={entityResponse}
              />
            ) : role === "BUYERCHK" ? (
              <AuthorizeBidAccept
                _dark={props._dark}
                page={page}
                title={title}
                Funumber={Funumber}
                ShowFuDetails={ShowFuDetails}
                backFlow={backFlow}
                apiResponse={apiResponse}
                fuResponse={fuResponse}
                refreshApiData={refreshApiData}
                SellerEntityList={entityResponse}
              />
            ) : null}
          </TabPanel>
        ) : (
          <TabPanel value={value} index={2} dir={theme.direction}>
            <BiddingSummary
              _dark={props._dark}
              apiResponse={apiResponse}
              fuResponse={bidSummaryFuRes}
              entityFuNumber={entityFuNumber}
              refreshApiData={refreshApiData}
              SellerEntityList={entityResponse}
              sellerId={sellerId}
            />
          </TabPanel>
        )}
      </Grid>
    </Grid>
  );
}
