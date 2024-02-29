import React from "react";
import { Stack, Grid } from "@mui/material";
import OtpText from "../../components/Common/Otpinput";
import "./index.css";

const Step3 = (props) => {
  return (
    <>
      <Stack>
        <label
          className="otp-label"
          style={{
            width: "30%",
            marginTop: 8,
          }}
        >
          New Pin
        </label>
      </Stack>
      <Grid container spacing={2} sx={{ alignItems: "center" }}>
        <Grid item xs={3}>
          <OtpText PinValue={props.pinValue} />
        </Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={6}></Grid>
      </Grid>
      {props.passwordError ? (
        <label className="pin-error">{props.passwordError}</label>
      ) : (
        ""
      )}
      <Stack>
        <label
          className="otp-label"
          style={{
            width: "30%",
            marginTop: 8,
          }}
        >
          Confirm Pin
        </label>
      </Stack>
      <Grid container spacing={2} sx={{ alignItems: "center" }}>
        <Grid item xs={3}>
          <OtpText PinValue={props.confirmPin} />
        </Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={6}></Grid>
      </Grid>
      {props.confirmpasswordError ? (
        <label className="pin-error">{props.confirmpasswordError}</label>
      ) : (
        ""
      )}
    </>
  );
};

export default Step3;
