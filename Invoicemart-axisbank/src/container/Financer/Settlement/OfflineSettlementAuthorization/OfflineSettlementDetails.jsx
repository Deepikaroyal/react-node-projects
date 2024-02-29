import React from "react";
import Box from "@mui/material/Box";
import { Grid, Stack } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Button } from "@mui/material";
import DatePicker from "../../../../components/Common/customDatepicker";
import TextInput from "../../../../components/Common/CustomTextInput";

export default function BuyerModal(props) {
  const _dark = props._dark ? props._dark : false;
  const [graceperiod, setGraceperiod] = React.useState("");

  const useStyles = makeStyles({
    btnCls: {
      color: `${_dark ? "#ffffff" : "#97144D"} !important`,
      padding: "8px 35px 8px 35px",
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
  });
  const classes = useStyles();
  return (
    <Box style={{ backgroundColor: _dark ? "#282828" : "#fff" }}>
      <h3
        className="fu-listing"
        style={{ color: _dark ? "#ffffff" : "#404040" }}
      >
        {"Off line Settlement Details"}
      </h3>
      <Box sx={{ flexGrow: 1, minHeight: 100 }} className={classes.gridcss}>
        <Grid container style={{ paddingTop: "10px", marginLeft: "20px" }}>
          <Grid xs={3} className={classes.stpCls}>
            <strong>FU Number : </strong>FU19191294890
          </Grid>
          <Grid xs={3} className={classes.stpCls}>
            <strong>FU Amount : </strong>₹ 4890
          </Grid>
          <Grid xs={3} className={classes.stpCls}>
            <strong>Due Date : </strong>03/AUG
          </Grid>
        </Grid>
        <Grid
          container
          style={{
            paddingTop: "30px",
            paddingBottom: "20px",
            marginLeft: "20px",
          }}
        >
          <Grid xs={3} className={classes.stpCls}>
            <strong>Financier Name : </strong>Lorem Ipsum
          </Grid>
          <Grid xs={3} className={classes.stpCls}>
            <strong>Buyer Name : </strong>Lorem Ipsum
          </Grid>
          <Grid xs={3} className={classes.stpCls}>
            <strong>Seller Name : </strong>Lorem Ipsum
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ flexGrow: 1 }} className={classes.gridcss}>
        <Stack direction="row" spacing={-10} marginLeft="20px">
          <DatePicker label="Off line Settlement Date*" />
          <TextInput
            label="Remarks"
            type="text"
            value={graceperiod}
            width="27.5%"
            placeholder="Remarks*"
            onChange={(e) => {
              setGraceperiod(e.target.value);
            }}
            size="small"
            style={{ paddingRight: "10px" }}
          />
        </Stack>
        <Grid container spacing={2}>
          <Grid
            item
            xs={9}
            sx={{ paddingTop: "50px !important", marginLeft: "20px" }}
          >
            <Stack direction="row">
              <Button size="small" className={classes.btnCls}>
                Save
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
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
