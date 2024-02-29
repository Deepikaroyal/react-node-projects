import React from "react";
import { Stack } from "@mui/material";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import AreaChart from "../../../components/Dashboard/AreaChart";
import CustomSelect from "../../../components/Dashboard/DropDownCmp";

const useStyles = makeStyles({
  LblCls: {
    fontSize: "12px",
    fontWeight: "700",
    fontStyle: "normal",
    fontFamily: "lato",
    marginTop: "-10px",
  },
  FormControl: {
    height: "80px",
  },
  BottomCls: {
    marginTop: "-1%",
  },
  TypBolCls: {
    fontSize: "16px",
    fontWeight: "700",
    color: "black",
    fontFamily: "lato",
  },
  TypCls: {
    fontSize: "12px",
    fontWeight: "400",
    fontFamily: "lato",
    color: "black",
  },
  DspFlxEvnCls: {
    display: "flex",
    justifyContent: "space-between",
    paddingLeft: "20px",
    paddingRight: "20px",
    marginTop: "4px",
  },
});

const PerformanceCard = () => {
  const classes = useStyles();
  const performanaceddl = [
    { name: "Past 14 days", value: "14" },
    { name: "Past 30 days", value: "30" },
    { name: "Current Quarter", value: "90" },
    { name: "Current Year", value: "120" },
  ];
  const RowData = [
    { key: "FU Count", value: "40" },
    { key: "Avg. R.O.I", value: "6.75" },
    { key: "Revenue", value: "₹ 109.00" },
  ];
  return (
    <div style={{ height: "200px" }}>
      <div className={classes.DspFlxEvnCls}>
        <Typography
          variant="h6"
          fontSize="16px"
          fontWeight="bold"
          fontFamily="lato"
        >
          Performance Trend
        </Typography>
        <div>
          <CustomSelect
            style={{
              position: "relative",
              top: -10,
              fontWeight: "400",
              fontSize: "12px",
            }}
            data={performanaceddl}
            width="125px"
          />
        </div>
      </div>
      <div>
        <Stack direction="row">
          <div style={{ marginTop: "30px" }}>
            <Typography
              fontSize="12px"
              fontWeight="400"
              fontFamily="lato"
              color="black"
              paddingLeft="20px"
            >
              Throughput
            </Typography>
            <Typography className={classes.TypBolCls} paddingLeft="20px">
              ₹ 140.77
            </Typography>
            <Typography
              fontSize="12px"
              fontWeight="400"
              fontFamily="lato"
              paddingLeft="20px"
              color="red"
            >
              -3.7%
            </Typography>
          </div>
          <div style={{ marginLeft: "5%", marginTop: "25px", fontSize: "8px" }}>
            <AreaChart />
          </div>
        </Stack>
      </div>
      <Stack spacing={9} direction="row" className={classes.BottomCls}>
        {RowData.map((c, i) => (
          <div style={{ paddingLeft: i === 0 ? "20px" : "0px" }}>
            <Typography className={classes.TypBolCls}>{c.value}</Typography>
            <Typography className={classes.TypCls}>{c.key}</Typography>
          </div>
        ))}
      </Stack>
    </div>
  );
};
export default PerformanceCard;
