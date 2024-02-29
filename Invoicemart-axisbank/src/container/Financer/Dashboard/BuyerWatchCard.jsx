import { Typography } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import AreaChart from "../../../components/Dashboard/PerformAreaChart";
import CustomSelect from "../../../components/Dashboard/DropDownCmp";

const useStyles = makeStyles({
  RectCls: {
    width: "220%",
    height: "75px",
    backgroundColor: "#f1f1f1",
    // border:'2px solid #f1f1f1',
    marginTop: "15px",
    borderRadius: "10px",
    cursor: "pointer",
    "&:hover": {
      boxShadow: "2px 2px 2px 2px #bebebe",
    },
  },
  RectTypBolCls: {
    fontSize: "14px",
    textAlign: "center",
    paddingTop: "5px",
    Family: "lato",
    fontWeight: "700",
  },
  RectTypCls: {
    fontSize: "10px",
    textAlign: "center",
    paddingTop: "5px",
    Family: "lato",
    fontWeight: "400",
  },

  DspFlxEvnCls: {
    display: "flex",
    justifyContent: "space-between",
    paddingLeft: "20px",
    paddingRight: "130px",
  },
  DspFlxSecEvnCls: {
    display: "flex",
    justifyContent: "space-between",
    position: "relative",
    paddingLeft: "25px",
    paddingRight: "30px",
  },
});

const Buyerwatch = () => {
  const classes = useStyles();
  const TopCorpddl = [
    { name: "Top 3 corporates", value: "1" },
    { name: "Favourite Buyers", value: "2" },
  ];
  const Pastddl = [
    { name: "Past 14 days", value: "1" },
    { name: "Past 30 days", value: "2" },
    { name: "Current Quarter", value: "3" },
    { name: "Current Year", value: "120" },
  ];
  const BuyerWatchRow = [
    { key: "Tata Motors", price: "₹ 116.44", value: "ROI: 5.6 | 68 days" },
    { key: "Jindal Steel", price: "₹ 108.00", value: "ROI: 8.8 | 90 days" },
    { key: "Tata Motors", price: "₹ 102.00", value: "ROI: 4.7 | 45 days" },
  ];

  return (
    <div style={{ height: "350px" }}>
      <Typography
        style={{
          paddingLeft: "25px",
          variant: "h6",
          fontSize: "16px",
          fontWeight: "bold",
          fontFamily: "lato",
        }}
      >
        Buyer Watch
      </Typography>
      <div className={classes.DspFlxEvnCls}>
        <CustomSelect
          style={{ position: "relative", fontWeight: "900", fontSize: "12px" }}
          data={TopCorpddl}
          width="200px"
        />
        <CustomSelect
          style={{ position: "relative", fontWeight: "400", fontSize: "12px" }}
          data={Pastddl}
          width="125px"
        />
      </div>
      <div className={classes.DspFlxSecEvnCls}>
        <div>
          {BuyerWatchRow.map((c, i) => (
            <div className={classes.RectCls}>
              <Typography variant="h5" className={classes.RectTypBolCls}>
                {c.key} <br />
                {c.price}
              </Typography>
              <Typography className={classes.RectTypCls}>{c.value}</Typography>
            </div>
          ))}
        </div>
        <div style={{ marginLeft: "30px", fontSize: "8px" }}>
          <AreaChart fill="url(#colorUv)" />
          <AreaChart fill="#ac4371" />
          <AreaChart fill="#C17294" />
          {/* <LigColAreaChart />
                    <ColAreaChart /> */}
        </div>
      </div>
    </div>
  );
};
export default Buyerwatch;
