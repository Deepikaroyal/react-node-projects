import React, { useState } from "react";
import BuToggleIcon from "../../../assets/SvgIcons/BU.svg";
import AllToggleIcon from "../../../assets/SvgIcons/ALL.svg";
import Card from "../../../components/Dashboard/Card";
import { Typography, Grid } from "@mui/material";
import DailySumCard from "./DailySumCard";
import SettlementSumCard from "../../Financer/Dashboard/SettlementsumCard";
import PerformanceCard from "../../Financer/Dashboard/PerformanceCard";
import QuickActionCard from "../../Financer/Dashboard/QuickAction";
import BuyerWatchCard from "./BuyerWatchCard";
import PortfolioCard from "../../Financer/Dashboard/PortfolioCard";
import MsmeCard from "../../Financer/Dashboard/MsmeCard";
import RepaymentCard from "../../Financer/Dashboard/RepaymentsCard";
import LimitCard from "../../Financer/Dashboard/Limits";
import Opportunity from "../../Financer/Dashboard/OpportunityCard";
import LostBid from "../../Financer/Dashboard/LostBidCard";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  HdrBolCls: {
    fontSize: "22px",
    fontWeight: "700",
    fontFamily: "lato",
  },
  HdrLefCls: {
    fontSize: "14px",
    fontWeight: "400",
    fontFamily: "lato",
    marginLeft: "7px",
    marginTop: "5px",
  },
  HdrRigCls: {
    fontSize: "14px",
    fontWeight: "400",
    fontFamily: "lato",
    color: "#7b7b7b",
  },
  DspFlxEvnCls: {
    display: "flex",
    paddingLeft: "5px",
    paddingRight: "20px",
  },
  DspFlxHdrEvnCls: {
    display: "flex",
    justifyContent: "space-between",
    paddingRight: "20px",
  },
});

const Index = (props) => {
  const classes = useStyles();
  const [allBuTaggle, setAllBuTaggle] = useState(false);
  const handleAllBu = () => {
    // console.log(allBuTaggle);
    setAllBuTaggle(!allBuTaggle);
  };

  return (
    <Grid>
      <Box sx={{ width: "100%" }}>
        <div className={classes.DspFlxHdrEvnCls}>
          <div className={classes.DspFlxEvnCls}>
            <Typography className={classes.HdrBolCls} variant="h4">
              Hi Yash
            </Typography>
            <Typography variant="p" className={classes.HdrLefCls}>
              {" "}
              Entity : State Bank Of India, Role : Maker, Last Login: 28/07/2021
              6:05 pm
            </Typography>
          </div>
          <img
            src={allBuTaggle ? AllToggleIcon : BuToggleIcon}
            style={{ cursor: "pointer", zIndex: 200 }}
            alt="theme"
            width="90"
            height="28"
            onClick={() => {
              handleAllBu();
            }}
          />
          <Typography className={classes.HdrRigCls}>
            *All amount figures are in crores
          </Typography>
        </div>
        <Grid container spacing={4}>
          <Grid item width="32.5%">
            <Card component={<DailySumCard allBuTaggle={allBuTaggle} />} />
          </Grid>
          <Grid item width="32.5%">
            <Card component={<SettlementSumCard allBuTaggle={allBuTaggle} />} />
          </Grid>
          <Grid item width="35%">
            <Card component={<PerformanceCard />} />
          </Grid>
          <Grid item width="53%" marginTop="-30px">
            <Card component={<QuickActionCard />} />
          </Grid>
          <Grid item width="47%" marginTop="-30px">
            <Card component={<BuyerWatchCard />} />
          </Grid>
          <Grid item width="60%" marginTop="-30px">
            <Card component={<PortfolioCard />} />
          </Grid>
          <Grid item width="38%" marginTop="-30px">
            <Card component={<MsmeCard />} />
          </Grid>
          <Grid item width="25%" marginTop="-30px">
            <Card component={<RepaymentCard />} />
          </Grid>
          <Grid item width="38%" marginTop="-30px">
            <Card component={<LimitCard />} />
          </Grid>
          <Grid item width="37%" marginTop="-30px">
            <Card component={<Opportunity />} />
          </Grid>
          <Grid item width="37%" marginTop="-235px" marginLeft="auto">
            <Card component={<LostBid />} />
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
};
export default Index;
