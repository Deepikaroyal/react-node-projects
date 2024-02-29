import React from "react";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Stack } from "@mui/material";

const useStyles = makeStyles({
  DarkCls: {
    maxWidth: "100",
    padding: "0",
    marginTop: "5%",
    height: "90px",
    backgroundColor: "#f1f1f1",
    display: "flex",
    justifyContent: "space-around",
  },
  BottomCls: {
    marginTop: "-2%",
    display: "flex",
    justifyContent: "space-around",
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
    marginLeft: "-7px",
  },
  HightLytBtmBtnCls: {
    cursor: "pointer",
    backgroundColor: "#f6f6f6",
    width: "110px",
    height: "66px",
    border: "none",
    marginTop: "15px",
    borderRadius: 8,
    boxShadow: "2px 2px 2px 2px #bebebe",
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
  BtmBtnCls: {
    border: "none",
    marginTop: "20px",
    backgroundColor: "transparent",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#f6f6f6",
      width: "110px",
      height: "66px",
      border: "none",
      marginLeft: "5px",
      borderRadius: 8,
      boxShadow: "2px 2px 2px 2px #bebebe",
    },
  },
  TypBolCls: {
    fontSize: "16px",
    fontWeight: "bold",
    fontFamily: "lato",
    textAlign: "left",
  },
  TypNorCls: {
    fontSize: "12px",
    fontWeight: "normal",
    fontFamily: "lato",
    textAlign: "left",
  },
});

const SettlementCard = (props) => {
  const classes = useStyles();
  const RowData = [
    { key: "Disbursements Done", value: "₹ 18.05" },
    { key: "Disbursements Due", value: "₹ 3.25" },
    { key: "Disbursements Failed", value: "₹ 45.09" },
  ];
  const PayRowData = [
    { key: "Repayments Received", value: "₹ 3.25" },
    { key: "Repayments Due", value: "₹ 230.34" },
    { key: "Repayments Failed", value: "₹ 89.87" },
  ];
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
        Settlement Summary 28/Jul{" "}
      </Typography>
      <Stack className={classes.DarkCls} direction="row">
        {RowData.map((c, i) => (
          <div style={{ marginLeft: i === 0 ? "7px" : "0px" }}>
            <button
              className={
                props.allBuTaggle ? classes.HightLytBtnCls : classes.BtnCls
              }
            >
              <Typography className={classes.TypBolCls}>{c.value}</Typography>
              <Typography className={classes.TypNorCls}>{c.key}</Typography>
            </button>
          </div>
        ))}
      </Stack>
      <Stack direction="row" className={classes.BottomCls}>
        {PayRowData.map((c, i) => (
          <div style={{ marginLeft: i === 0 ? "7px" : "0px" }}>
            <button
              className={
                props.allBuTaggle
                  ? classes.HightLytBtmBtnCls
                  : classes.BtmBtnCls
              }
            >
              <Typography className={classes.TypBolCls}>{c.value}</Typography>
              <Typography className={classes.TypNorCls}>{c.key}</Typography>
            </button>
          </div>
        ))}
      </Stack>
    </div>
  );
};
export default SettlementCard;
