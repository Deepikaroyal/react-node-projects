import React from "react";
import { Stack, Alert, Grid, Link } from "@mui/material";
import TextInput from "../../components/Common/CustomTextInput";
import OtpText from "../../components/Common/Otpinput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import "./index.css";
import { FormHelperText } from "@mui/material";
import { FormControl } from "@mui/material";
import { getSecurityQuestions } from "../../api/auth";

const Step2 = (props) => {
  const [securityQuestions, setSecurityQuestions] = React.useState([]);
  React.useEffect(() => {
    (async () => {
      let data = await getSecurityQuestions();
      let arrOfObjs = Object.entries(data.data?.securityQuestions).map(
        ([key, value]) => ({ key, value })
      );
      setSecurityQuestions(arrOfObjs);
    })();
  }, []);
  const EOtpValue = (val) => {
    props.onChange(val, "email");
  };
  const MOtpValue = (val) => {
    props.onChange(val, "mobile");
  };
  return (
    <div style={{ marginBottom: 8 }}>
      {props.recoveryChk === "SM" || props.recoveryChk === "SE" ? (
        <>
          <FormControl
            style={{ width: "90%" }}
            error={props.securityValueError}
          >
            <InputLabel>Security Questions</InputLabel>
            <Select
              label="Select Security Question"
              value={props.securityValue}
              onChange={(e) => {
                props.onChange(e.target.value, "securityValue");
              }}
              error={!!props.securityValueError}
              helperText={props.securityValueError}
            >
              {securityQuestions && securityQuestions.length > 0 ? (
                securityQuestions.map((item) => (
                  <MenuItem value={item.key}>{item.value}</MenuItem>
                ))
              ) : (
                <MenuItem disabled>No Data Available</MenuItem>
              )}
            </Select>
            {props.securityValueError && (
              <FormHelperText>{props.securityValueError}</FormHelperText>
            )}
          </FormControl>
          {props.securityValue && (
            <TextInput
              label="Security Answer"
              value={props.security}
              width="90%"
              placeholder="Security Answer"
              size="small"
              onChange={(e) => {
                props.onChange(e.target.value, "security");
              }}
              error={!!props.securityError}
              helperText={props.securityError}
            />
          )}
        </>
      ) : null}
      {props.recoveryChk === "SE" || props.recoveryChk === "EM" ? (
        <>
          <Stack>
            <label
              className="otp-label"
              style={{
                width: "28%",
                fontSize: 14,
                color: "#404040",
                padding: "3px 0px",
                marginBottom: 10,
              }}
            >
              Email OTP
            </label>
          </Stack>
          <Grid container spacing={2} sx={{ alignItems: "center" }}>
            <Grid item xs={3}>
              <OtpText PinValue={EOtpValue} />
            </Grid>
            <Grid item xs={3}>
              {props.isLinkEnabled && (
                <Link
                  style={{
                    color: "#97144D",
                    fontSize: 14,
                    textDecoration: "none",
                    cursor: "pointer",
                    width: 110,
                  }}
                  onClick={props.callApiforOTP}
                >
                  Resend OTP
                </Link>
              )}
            </Grid>
            <Grid item xs={6}></Grid>
          </Grid>
          {props.EotpError ? (
            <label className="pin-error">{props.EotpError}</label>
          ) : (
            ""
          )}
          {props.otpSent ? (
            <Alert severity="success"> Email {props.otpStatus}</Alert>
          ) : (
            ""
          )}
        </>
      ) : null}
      {props.recoveryChk === "SM" || props.recoveryChk === "EM" ? (
        <>
          <Stack>
            <label
              className="otp-label"
              style={{
                width: "30%",
                marginTop: 8,
              }}
            >
              Mobile OTP
            </label>
          </Stack>
          <Grid container spacing={2} sx={{ alignItems: "center" }}>
            <Grid item xs={3}>
              <OtpText PinValue={MOtpValue} />
            </Grid>
            <Grid item xs={3}>
              {props.isLinkEnabled && (
                <Link
                  style={{
                    color: "#97144D",
                    fontSize: 14,
                    textDecoration: "none",
                    cursor: "pointer",
                    width: 110,
                  }}
                  onClick={props.callApiforOTP}
                >
                  Resend OTP
                </Link>
              )}
            </Grid>
            <Grid item xs={6}></Grid>
          </Grid>
          {props.MotpError ? (
            <label className="pin-error">{props.MotpError}</label>
          ) : (
            ""
          )}
          {props.otpSent ? (
            <Alert severity="success"> Mobile {props.otpStatus}</Alert>
          ) : (
            ""
          )}
        </>
      ) : null}
    </div>
  );
};

export default Step2;
