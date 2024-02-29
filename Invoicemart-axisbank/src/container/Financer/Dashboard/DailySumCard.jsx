import React, { useState } from "react";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Stack } from "@mui/material";

const useStyles = makeStyles({
  DarkCls: {
    maxWidth: "100",
    marginTop: "5%",
    height: "90px",
    // backgroundColor: "#f1f1f1",
    display: "flex",
    justifyContent: "space-around",
    paddingRight: "50px",
  },
  BottomCls: {
    marginTop: "-2%",
    display: "flex",
    justifyContent: "space-around",
    // paddingLeft:'5px'
  },

  BtnCls: {
    border: "none",
    marginTop: "20px",
    backgroundColor: "transparent",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#f6f6f6",
      width: "110px",
      height: "66px",
      marginTop: "12px",
      border: "none",
      borderRadius: 8,
      boxShadow: "2px 2px 2px 2px #bebebe",
    },
  },
  TypCls: {
    fontSize: "12px",
    fontWeight: "normal",
    fontFamily: "lato",
    textAlign: "left",
  },
  HightLytBtnCls: {
    cursor: "pointer",
    backgroundColor: "#f6f6f6",
    width: "110px",
    height: "66px",
    border: "none",
    marginTop: "15px",
    borderRadius: 8,
    boxShadow: "2px 2px 2px 2px #bebebe",
    // '&:hover': {
    //     marginLeft:'-70px'
    // }
  },
  LeftHighLytBtnCls: {
    cursor: "pointer",
    backgroundColor: "#f6f6f6",
    width: "110px",
    height: "66px",
    border: "none",
    marginTop: "15px",
    borderRadius: 8,
    boxShadow: "2px 2px 2px 2px #bebebe",
    marginRight: "70px",
  },
  TypBolCls: {
    fontSize: "16px",
    fontWeight: "bold",
    fontFamily: "lato",
    textAlign: "left",
    marginTop: "5px",
  },
  TypBolBtmCls: {
    fontSize: "16px",
    fontWeight: "bold",
    fontFamily: "lato",
    textAlign: "left",
  },
});

const DailySummary = (props) => {
  const [isFstTxtShown, setIsFstTxtShown] = useState(false);
  const RowData = [
    { key: "Count of FU's", value: "40" },
    { key: "Avg. R.O.I", value: "6.75" },
    { key: "Bid win ratio", value: "75%" },
  ];
  const classes = useStyles();
  return (
    <div style={{ height: "200px" }}>
      <Typography
        variant="h6"
        fontSize="16px"
        fontWeight="bold"
        fontFamily="lato"
        paddingLeft="20px"
        marginTop="4px"
      >
        Daily Summary 28/Jul{" "}
      </Typography>
      <Stack className={classes.DarkCls} direction="row">
        <Stack direction="column">
          <div style={{ paddingLeft: "5px" }}>
            <button
              className={
                props.allBuTaggle ? classes.HightLytBtnCls : classes.BtnCls
              }
              onMouseEnter={() => setIsFstTxtShown(true)}
              onMouseLeave={() => setIsFstTxtShown(false)}
            >
              <Typography className={classes.TypBolCls}>₹ 3.35</Typography>
              <Typography className={classes.TypCls}>FU Amount</Typography>
            </button>
          </div>
          {isFstTxtShown && (
            <Typography
              fontSize="10px"
              fontFamily="lato"
              style={{ marginTop: "3px", marginLeft: "3px" }}
            >
              Sample text.
            </Typography>
          )}
        </Stack>
        <div style={{ marginLeft: "15px" }}>
          <button
            className={
              props.allBuTaggle ? classes.LeftHighLytBtnCls : classes.BtnCls
            }
          >
            <Typography className={classes.TypBolCls}>₹ 230.34</Typography>
            <Typography className={classes.TypCls}>Today's Revenue</Typography>
          </button>
        </div>
        <div></div>
      </Stack>
      <Stack direction="row" className={classes.BottomCls}>
        {RowData.map((c, index) => (
          <div style={{ paddingLeft: index === 0 ? "5px" : "0px" }}>
            <button
              className={
                props.allBuTaggle ? classes.HightLytBtnCls : classes.BtnCls
              }
            >
              <Typography className={classes.TypBolBtmCls}>
                {c.value}
              </Typography>
              <Typography className={classes.TypCls}>{c.key}</Typography>
            </button>
          </div>
        ))}
      </Stack>
    </div>
  );
};
export default DailySummary;
