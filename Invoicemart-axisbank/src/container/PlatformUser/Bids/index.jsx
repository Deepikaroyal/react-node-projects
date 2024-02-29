/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import { Grid, Tabs, Tab, Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import PropTypes from "prop-types";
import BidsSummaryList from "./BiddingSummary";
import { getPlatformFuFetch } from "../../../api/bids";
import {
  fetchStatusCode,
  getCurrentDate,
  getFromToDate,
} from "../../../utils/general";

export default function Bids(props) {
  const [value, setValue] = useState(1);
  const [bidSummaryFuRes, setBidSummaryFuRes] = useState([]);
  const [sellerId, setSellerId] = useState();
  const [isSet, setIsSet] = useState(true);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setSellerId(null);
  };

  const TabsMenu = [{ id: 1, name: "Bids Summary" }];

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
      // await fetchEntityData()
      // await fetchData()
      await fetchBidSummaryData();
      // await authBidData();
    })();
  }, []);

  const refreshApiData = async () => {
    // await fetchEntityData()
    //await fetchData()
    fetchBidSummaryData();
  };

  const fetchBidSummaryData = async () => {
    let currentDate = getCurrentDate();
    let startDate = getFromToDate();
    let Response = await getPlatformFuFetch({
      fuCreatedDtFrom: startDate + " 00:00:00.000",
      fuCreateDtTo: currentDate + " 00:00:00.000",
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
        container.FU_createdDate = item.createdDate;
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
        // container.Lowest_Bid = '';
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
      setBidSummaryFuRes(furow);
      // let fetchBidCountResponse = await fetchBidCount(furow, fuNumArray)
      // let fetchBidResponse = await fetchBidApi(fetchBidCountResponse, fuNumArray)
      // let fuAddtionalDetailResponse = await fuFetchAdditionalDetails(fetchBidResponse, fuNumArray)
      // setBidSummaryFuRes(fuAddtionalDetailResponse);
      setIsSet(!isSet);
    }
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
            <BidsSummaryList
              _dark={props._dark}
              fuResponse={bidSummaryFuRes}
              refreshApiData={refreshApiData}
              sellerId={sellerId}
            />
          </TabPanel>
        ) : (
          ""
        )}
      </Grid>
    </Grid>
  );
}
