/* eslint-disable */
import React, { useEffect, useState } from "react";
import { Typography, Grid, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import CommonButton from "../../../../components/Common/ButtonCommon";
import Timeline from "../../../../components/Timeline";
import { WorkFlowTimeline } from "../../../../mock/InvoiceData";
import moment from "moment";
import { getFuWorkflowHistory } from "../../../../api/bids";
import { Oval } from "react-loader-spinner";

export default function Fuworkflow(props) {
  // console.log("PROPs", props)
  const _dark = props._dark ? props._dark : false;
  const fuNumber = props.fus ? [props.fus] : [];
  const [fuWorkflowHistory, setFuWorkflowHistory] = useState([]);
  const [loader, setLoader] = useState(false);
  // console.log(fuNumber, "fuNumber")
  useEffect(() => {
    fetchWorkflowHistory();
  }, []);
  const fetchWorkflowHistory = async () => {
    setLoader(true);
    let body = {
      fus: fuNumber,
    };
    let data = await getFuWorkflowHistory(body);
    if (data) {
      setLoader(false);
      setFuWorkflowHistory(data.data);
    }
  };
  const useStyles = makeStyles({
    "@global": {
      "*::-webkit-scrollbar": {
        width: "0.4em",
        height: "0.5em",
      },
      "*::-webkit-scrollbar-track": {
        "-webkit-box-shadow": "inset 0 0 6px rgba(0, 0, 0, 0.3)",
      },
      "*::-webkit-scrollbar-thumb": {
        backgroundColor: "darkgrey",
        outline: "1px solid slategrey",
      },
    },
    typocss: {
      color: `${_dark ? "#ffffff" : "#404040"} !important`,
      fontSize: "14px !important",
      fontFamily: "Lato",
      lineHeight: "16px",
      fontWeight: 700,
    },
    barcss: {
      color: `${_dark ? "#ffffff" : "#404040"} !important`,
      fontSize: "18px !important",
      fontFamily: "Lato",
      lineHeight: "16px",
      fontWeight: 700,
    },
    loadCss: {
      marginLeft: "5rem",
      marginTop: "1rem",
    },
  });
  const WorkFlowButtons = [
    {
      name: "Seller",
      background: "#97144D",
      bdrColor: "#97144D",
      color: "#ffffff",
    },
    {
      name: "Buyer",
      background: "#AC4371",
      bdrColor: "#AC4371",
      color: "#ffffff",
    },
    {
      name: "Bidding",
      background: "#C17294",
      bdrColor: "#C17294",
      color: "#ffffff",
    },
    {
      name: "Obligation",
      background: "#E0B9CA",
      bdrColor: "#E0B9CA",
      color: "#ffffff",
    },
  ];
  const WorkFlowTimelineData = [
    { name: "Seller", date: "", background: "#AC4371", fontweight: "bold" },
    {
      name: "FU Created",
      date: props.fuData.data.createdDate,
      background: "#AC4371",
      fontweight: "normal",
    },
    {
      name: "Seller Authorised",
      date: "2021-06-14 15:56:00",
      background: "#AC4371",
      fontweight: "normal",
    },
    { name: "Buyer", date: "", background: "#AC4371", fontweight: "bold" },
    {
      name: "Maker",
      date: "2021-06-16 15:56:00",
      background: "#AC4371",
      fontweight: "normal",
    },
    {
      name: "Checker 1",
      date: "2021-06-22 15:56:00",
      background: "#AC4371",
      fontweight: "normal",
    },
    {
      name: "Checker 2",
      date: "2021-06-22 15:56:00",
      background: "#AC4371",
      fontweight: "normal",
    },
    { name: "Bidding", date: "", background: "#AC4371", fontweight: "bold" },
    {
      name: "SBI Bid Placed",
      date: "2021-06-14 15:56:00",
      background: "#AC4371",
      fontweight: "normal",
    },
    {
      name: "Bid Placed Authorised",
      date: "2021-07-14 15:56:00",
      background: "#AC4371",
      fontweight: "normal",
    },
    {
      name: "Seller Bid Accepted",
      date: "2021-07-14 15:56:00",
      background: "#AC4371",
      fontweight: "normal",
    },
    {
      name: "Seller Bid Authorised",
      date: "2021-07-14 15:56:00",
      background: "#AC4371",
      fontweight: "normal",
    },
    { name: "Obligation", date: "", background: "#CBCBCB", fontweight: "bold" },
    {
      name: "Disbursement",
      date: props.fuData.data.disbursedDate,
      background: "#CBCBCB",
      fontweight: "normal",
    },
    {
      name: "Repayment",
      date: props.fuData.data.fuDueDate,
      background: "#CBCBCB",
      fontweight: "normal",
    },
  ];
  const classes = useStyles();
  return (
    <Grid>
      <Grid
        sx={{
          padding: "12.7px",
          backgroundColor: _dark ? "#181818" : "#f9f9f9",
          borderBottom: "solid 1px #CBCBCB",
        }}
      >
        <Typography className={classes.barcss}>FU Workflow History</Typography>
      </Grid>
      <Grid item sx={{ p: 2 }}>
        <Typography className={classes.typocss}>Approval Workflow</Typography>
        <Box pt={3}>
          {WorkFlowButtons.map((e) => (
            <CommonButton
              text={e.name}
              variant="contained"
              size="small"
              radius="10px"
              font="12px"
              bg={e.background}
              colorCode={e.color}
              bdrColor={e.bdrColor}
            />
          ))}
        </Box>
        {loader ? (
          <Oval
            color="#97144d"
            secondaryColor="#c4c4c4"
            height={50}
            width={50}
            wrapperClass={classes.loadCss}
          />
        ) : (
          <Timeline
            data={fuWorkflowHistory ? fuWorkflowHistory : WorkFlowTimeline}
            _dark={_dark}
            fuData={props.fuData}
          />
        )}
      </Grid>
    </Grid>
  );
}
