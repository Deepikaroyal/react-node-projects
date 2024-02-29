/* eslint-disable no-unused-vars */
import React from "react";
import { Stack, Button, useTheme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export default function FUStatusListButtons(props) {
  // const _dark = props._dark ? props._dark : false
  // const theme = useTheme();
  const useStyles = makeStyles({
    whitecrt: {
      backgroundColor: "white",
    },
    lightbluecreate: {
      backgroundColor: "lightblue",
    },
    bluecreate: {
      backgroundColor: "#33B8FF",
    },
    blcreate: {
      backgroundColor: "#33FFE3",
    },
    grcreate: {
      backgroundColor: "#4CFF33",
    },
    drkgrcreate: {
      backgroundColor: "#33FF7A",
    },
    purcreate: {
      backgroundColor: "#EDC0E7",
      color: "#C325AE",
      borderColor: "#C325AE",
    },
    drkpurcreate: {
      backgroundColor: "#D8A2E6",
      color: "#BA26DF",
      borderColor: "#BA26DF",
    },
    yellcreate: {
      backgroundColor: "#F2ED99",
      color: "#F2E411 ",
      borderColor: "#F2E411 ",
    },
  });
  const classes = useStyles();
  return (
    <fieldset
      style={{
        borderRadius: "15px",
        display: "flex",
        alignItems: "center",
        padding: "25px",
        width: "fit-content",
        marginBottom: "20px",
      }}
    >
      <legend>FU Status</legend>
      <Stack spacing={2} direction="row" whiteSpace="nowrap">
        <Button
          variant={
            props.activeButtons.includes("PENDING-DISB")
              ? "contained"
              : "outlined"
          }
          className={
            props.activeButtons.includes("PENDING-DISB")
              ? classes.lightbluecreate
              : classes.whitecrt
          }
          onClick={() => props.handleButtonClick("PENDING-DISB")}
        >
          PENDING-DISB
        </Button>
        <Button
          variant={
            props.activeButtons.includes("DISBURSED") ? "contained" : "outlined"
          }
          className={
            props.activeButtons.includes("DISBURSED")
              ? classes.bluecreate
              : classes.whitecrt
          }
          onClick={() => props.handleButtonClick("DISBURSED")}
        >
          DISBURSED
        </Button>
        <Button
          variant={
            props.activeButtons.includes("DISB-FAILED")
              ? "contained"
              : "outlined"
          }
          className={
            props.activeButtons.includes("DISB-FAILED")
              ? classes.blcreate
              : classes.whitecrt
          }
          onClick={() => props.handleButtonClick("DISB-FAILED")}
        >
          DISB-FAILED
        </Button>
        <Button
          variant={
            props.activeButtons.includes("REPAID") ? "contained" : "outlined"
          }
          className={
            props.activeButtons.includes("REPAID")
              ? classes.grcreate
              : classes.whitecrt
          }
          onClick={() => props.handleButtonClick("REPAID")}
        >
          REPAID
        </Button>
        <Button
          variant={
            props.activeButtons.includes("REPAYMENT-FAILED")
              ? "contained"
              : "outlined"
          }
          className={
            props.activeButtons.includes("REPAYMENT-FAILED")
              ? classes.drkgrcreate
              : classes.whitecrt
          }
          onClick={() => props.handleButtonClick("REPAYMENT-FAILED")}
        >
          REPAYMENT-FAILED
        </Button>
        <Button
          variant={
            props.activeButtons.includes("OVERDUE") ? "contained" : "outlined"
          }
          className={
            props.activeButtons.includes("OVERDUE")
              ? classes.purcreate
              : classes.whitecrt
          }
          onClick={() => props.handleButtonClick("OVERDUE")}
        >
          OVERDUE
        </Button>
        <Button
          variant={
            props.activeButtons.includes("SETTLED-OUTSIDE")
              ? "contained"
              : "outlined"
          }
          className={
            props.activeButtons.includes("SETTLED-OUTSIDE")
              ? classes.drkpurcreate
              : classes.whitecrt
          }
          onClick={() => props.handleButtonClick("SETTLED-OUTSIDE")}
        >
          SETTLED-OUTSIDE
        </Button>
        <Button
          variant={
            props.activeButtons.includes("Authorisation")
              ? "contained"
              : "outlined"
          }
          className={
            props.activeButtons.includes("Authorisation")
              ? classes.yellcreate
              : classes.whitecrt
          }
          onClick={() => props.handleButtonClick("Authorisation")}
        >
          OTHERS
        </Button>
      </Stack>
    </fieldset>
  );
}
