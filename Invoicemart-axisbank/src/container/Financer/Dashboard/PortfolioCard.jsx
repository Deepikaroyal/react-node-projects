import { Typography } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import PortifolioTbl from "../../../components/Dashboard/PortfolioTbl";
import Barchart from "../../../components/Dashboard/Barchart";
import CustomSelect from "../../../components/Dashboard/DropDownCmp";

const useStyles = makeStyles({
  container: {
    marginTop: "10px",
  },

  DspFlxEvnCls: {
    display: "flex",
    justifyContent: "space-between",
    paddingLeft: "20px",
    paddingRight: "20px",
    marginTop: "5px",
  },
});
const Portfolio = () => {
  const Portfolioddl = [
    { name: "Top corporates", value: "1" },
    { name: "Favourite Buyers", value: "2" },
  ];

  const classes = useStyles();
  return (
    <div style={{ height: "250px", position: "relative" }}>
      <div className={classes.DspFlxEvnCls}>
        <Typography
          style={{
            variant: "h6",
            fontSize: "16px",
            fontWeight: "bold",
            fontFamily: "lato",
          }}
        >
          Portfolio
        </Typography>
        <div>
          <CustomSelect
            style={{
              position: "relative",
              fontWeight: "700",
              fontSize: "12px",
            }}
            data={Portfolioddl}
            width="150px"
          />
        </div>
      </div>
      <div className={classes.DspFlxEvnCls}>
        <Barchart />
        <PortifolioTbl />
      </div>
    </div>
  );
};
export default Portfolio;
