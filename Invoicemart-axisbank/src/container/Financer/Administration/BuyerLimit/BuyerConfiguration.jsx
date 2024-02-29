import React from "react";
import Box from "@mui/material/Box";
import { Grid, Typography, Stack } from "@mui/material";
import { makeStyles } from "@mui/styles";
import save from "../../../../assets/SvgIcons/save-config.svg";
import saveLight from "../../../../assets/SvgIcons/save-config-light.svg";
import Reset from "../../../../assets/SvgIcons/FU/reset.svg";
import ResetLight from "../../../../assets/SvgIcons/FU/resetlight.svg";
import TextInput from "../../../../components/Common/CustomTextInput";
import { Button } from "@mui/material";
import Select from "../../../../components/Common/Select";

export default function BuyerModal(props) {
  const _dark = props._dark ? props._dark : false;
  const [repayment, setRepayment] = React.useState(null);
  const [dispursement, setDispursement] = React.useState(null);
  const [graceperiod, setGraceperiod] = React.useState("");
  const [overdue, setOverdue] = React.useState("");
  const [loannum, setLoannum] = React.useState("");
  const [recordstatus, setRecordstatus] = React.useState("");

  const handleRepayChange = (event) => {
    setRepayment(event.target.value);
  };
  const handleDispurseChange = (event) => {
    setDispursement(event.target.value);
  };

  const useStyles = makeStyles({
    btnCls: {
      color: `${_dark ? "#ffffff" : "#97144D"} !important`,
      padding: "8px 10px 8px 10px",
      borderRadius: `4px !important`,
      textTransform: "uppercase !important",
      fontSize: "12px !important",
      fontFamily: "Lato",
      lineHeight: "18px",
      border: `1px solid ${_dark ? "#ffffff" : "#97144D"}`,
      marginRight: 15,
      fontWeight: 700,
      marginBottom: 10,
      marginTop: 10,
    },
    gridcss: {
      borderRadius: 10,
      padding: 10,
      paddingBottom: 20,
      boxShadow: "0 6px 8px 0 rgba(0,0,0,0.2);",
      marginTop: 10,
      backgroundColor: props._dark ? "#282828" : "none",
    },
    stpCls: {
      cursor: "pointer",
      fontSize: "14px",
      fontFamily: "Lato",
      fontWeight: 400,
      lineHeight: "24px",
      textAlign: "left",
    },
    stpClsBold: {
      cursor: "pointer",
      fontSize: "14px",
      fontFamily: "Lato",
      lineHeight: "24px",
      textAlign: "right",
      fontWeight: 700,
    },
  });
  const classes = useStyles();

  const _renderInput = (name, value) => (
    <>
      <Typography variant="body2" className={classes.stpClsBold}>
        {name}
        {name ? " :" : ""}
      </Typography>
      <Typography className={classes.stpCls} variant="body2">
        {value}
      </Typography>
    </>
  );
  const AmountDDL = [
    { name: "20000", value: "1" },
    { name: "50000", value: "2" },
  ];
  return (
    <Box style={{ backgroundColor: _dark ? "#282828" : "#fff" }}>
      <h3
        className="fu-listing"
        style={{ color: _dark ? "#ffffff" : "#404040" }}
      >
        {"Buyer Configuration"}
      </h3>
      <Box sx={{ flexGrow: 1 }} className={classes.gridcss}>
        <Grid container spacing={2}>
          <Grid item xs={9} sx={{ paddingTop: "0px !important" }}>
            <Stack spacing={4} direction="row" style={{ alignItems: "center" }}>
              {_renderInput("Buyer ID", "BU123456789")}
              {_renderInput("Buyer Name", "Tata Steel")}
            </Stack>
            <Stack direction="row">
              <Button
                size="small"
                className={classes.btnCls}
                startIcon={
                  <img src={_dark ? saveLight : save} height="17" alt="save" />
                }
              >
                Save Configuration
              </Button>
              <Button
                size="small"
                className={classes.btnCls}
                startIcon={
                  <img
                    src={_dark ? ResetLight : Reset}
                    height="17"
                    alt="Reset"
                  />
                }
              >
                Reset Values
              </Button>
              <Button
                size="small"
                className={classes.btnCls}
                onClick={() => {
                  props.handleClose();
                }}
              >
                Back
              </Button>
              <Button
                size="small"
                className={classes.btnCls}
                onClick={() => {
                  props.handleClose();
                }}
              >
                Close
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ flexGrow: 1, minHeight: 250 }} className={classes.gridcss}>
        <Grid container spacing={2}>
          <Grid item xs={9} sx={{ paddingTop: "5px !important" }}>
            <Stack direction="row" spacing={4}>
              <TextInput
                label="Grace Period"
                type="number"
                value={graceperiod}
                width="80%"
                placeholder="Grace Period"
                onChange={(e) => {
                  setGraceperiod(e.target.value);
                }}
                size="small"
                style={{ paddingRight: "10px" }}
              />
              <TextInput
                label="Overdue Interest Rate"
                type="number"
                value={overdue}
                width="80%"
                placeholder="Overdue Interest Rate"
                onChange={(e) => {
                  setOverdue(e.target.value);
                }}
                size="small"
                style={{ paddingRight: "10px" }}
              />
              <TextInput
                label="Bill Purchase/Loan Account No."
                value={loannum}
                width="80%"
                placeholder="Bill Purchase/Loan Account No."
                onChange={(e) => {
                  setLoannum(e.target.value);
                }}
                size="small"
              />
            </Stack>
            <Stack direction="row" spacing={4}>
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <TextInput
                    label="Record Status"
                    value={recordstatus}
                    width="100%"
                    placeholder="Record Status"
                    onChange={(e) => {
                      setRecordstatus(e.target.value);
                    }}
                    size="small"
                  />
                </Grid>
                <Grid item xs={4}>
                  <Select
                    value={dispursement}
                    label="Disbursement Account"
                    onChange={handleDispurseChange}
                    size="small"
                    data={AmountDDL}
                  />
                </Grid>
                <Grid item xs={4}>
                  <Select
                    value={repayment}
                    label="Repayment Account"
                    onChange={handleRepayChange}
                    size="small"
                    data={AmountDDL}
                  />
                </Grid>
              </Grid>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
