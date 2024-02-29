import React, { useState, useEffect } from "react";
import { Grid, Box, Stack, Alert } from "@mui/material";
import { makeStyles } from "@mui/styles";
import CustomButton from "../Common/CustomButton";
import BackButton from "../Common/BackButton";
import Step1 from "./Recovery";
import Step2 from "./OTP";
import Step3 from "./PinChange";
import { forgotPassword, getGenerateOTP, getRSAServerKey } from "../../api";
import {
  EncryptAESKey,
  EncryptPayload,
  getRandomChar,
} from "../../utils/encrypt";
import CryptoJS from "crypto-js";
import { JWK } from "node-jose";
import { toast } from "react-toastify";

const ChangePin = (props) => {
  const _dark = props._dark ? props._dark : false;
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [confirmpasswordError, setConfirmPasswordError] = useState("");
  const [security, setSecurity] = useState("");
  const [securityError, setSecurityError] = useState("");
  const [securityValue, setSecurityValue] = useState("");
  const [securityValueError, setSecurityValueError] = useState("");
  const [Motp, setMotp] = useState("");
  const [MotpError, setMotpError] = useState("");
  const [Eotp, setEotp] = useState("");
  const [EotpError, setEotpError] = useState("");
  const [recoveryChk, setrecoveryChk] = useState("");
  const [recoveryChkError, setrecoveryChkError] = useState("");
  const [otpSent, setotpSent] = useState(false);
  const [otpStatus, setOtpStatus] = useState("");
  const [pubSerKey, SetPubSerKey] = useState(null);
  const [apiError, setApiError] = useState("");
  const [isLinkEnabled, setIsLinkEnabled] = useState(false);

  useEffect(() => {
    _getRSAServerKey();
  }, []);

  const _getRSAServerKey = async () => {
    let clientId = sessionStorage.getItem("browserId");
    if (clientId) {
      let data = JSON.stringify({ clientId: clientId });
      let PublicServerKey = await getRSAServerKey(data);
      if (PublicServerKey) {
        SetPubSerKey(PublicServerKey.data);
        return PublicServerKey.data;
      }
    }
  };

  const useStyles = makeStyles({
    typographLink: {
      color: "#97144D !important",
      fontSize: "16px !important",
      textDecoration: "none !important",
      fontFamily: "Lato",
      fontWeight: 400,
      lineHeight: "19px",
    },
    linkdiv: {
      clear: "both",
      width: "100% !important",
      textAlign: "center",
      justifyContent: "center",
      height: "190px !important",
      paddingTop: "0px !important",
    },
  });
  const classes = useStyles();
  const handleSubmit = async () => {
    const key_ = getRandomChar(32);
    const iv_ = getRandomChar(16);
    var key = CryptoJS.enc.Latin1.parse(key_);
    var iv = CryptoJS.enc.Latin1.parse(iv_);
    setApiError("");
    if (recoveryChk === "") {
      setrecoveryChkError("Recovery Option Required");
    } else if (
      (recoveryChk === "SM" || recoveryChk === "SE") &&
      security === "" &&
      securityValue === ""
    ) {
      setSecurityValueError("Select Security Question");
      setSecurityError("Security answer required");
    } else if (
      (recoveryChk === "SE" || recoveryChk === "EM") &&
      (Eotp === "" || Eotp.length < 6)
    ) {
      setEotpError("Email OTP required");
    } else if (
      (recoveryChk === "SM" || recoveryChk === "EM") &&
      (Motp === "" || Motp.length < 6)
    ) {
      setMotpError("Mobile OTP required");
    } else if (password === "" || password.length < 6) {
      setPasswordError("New Pin required");
    } else if (confirmpassword === "" || confirmpassword.length < 6) {
      setConfirmPasswordError("Confirm pin required");
    } else if (confirmpassword !== password) {
      setConfirmPasswordError("New pin and Confirm pin not matched");
    } else {
      let data = JSON.stringify({
        password: "",
        pin: password,
        smsOtp: Motp,
        emailOtp: Eotp,
        userId: sessionStorage.getItem("username"),
        otpType:
          recoveryChk === "SM"
            ? "FORGOT-PWD-SMS"
            : recoveryChk === "SE"
            ? "FORGOT-PWD-EMAIL"
            : "FORGOT-PWD-PIN-EMAIL-SMS",
        actionType: "FORGOT PIN",
        secQuesId: securityValue ? securityValue.toString() : "",
        secQuesAns: security ? security : "",
      });
      let encryptPayload = await EncryptPayload(data, key, iv);
      let pubKey = "";
      if (pubKey !== null && pubSerKey !== undefined) {
        pubKey = pubSerKey.requiredParams;
      } else {
        let keyRes = await _getRSAServerKey();
        pubKey = keyRes.requiredParams;
      }
      let _skey = await JWK.asKey(pubKey);
      let Enc_DEK = JSON.stringify({ key: key_, iv: iv_ });
      let encryptDEK = await EncryptAESKey(Enc_DEK, _skey);
      let body = JSON.stringify({
        clientId: sessionStorage.getItem("browserId"),
        encryptedPasswordPin: encryptPayload.toString(),
        encryptedDek: encryptDEK,
      });
      let response = await forgotPassword(body);
      if (response.data) {
        toast.success(response.data);
        props.handleClose();
      } else {
        setApiError("Server Not Responding");
      }
    }
  };
  const onChange = async (e, type) => {
    if (type === "mobile") {
      setMotp(e);
      if (e) {
        setMotpError("");
      }
    } else if (type === "email") {
      setEotp(e);
      if (e) {
        setEotpError("");
      }
    } else if (type === "security") {
      setSecurity(e);
      if (e) {
        setSecurityError("");
      }
    } else if (type === "securityValue") {
      setSecurityValue(e);
      if (e) {
        setSecurityValueError("");
      }
    } else if (type === "pwd") {
      setPassword(e);
      if (e) {
        setPasswordError("");
      }
    } else if (type === "confirmpwd") {
      setConfirmPassword(e);
      if (e) {
        setConfirmPasswordError("");
      }
    } else if (type === "OTPSENT") {
      // setotpSent(true);
    } else {
      if (e) {
        setrecoveryChkError("");
      }
    }
  };
  const callApiforOTP = async () => {
    setotpSent(false);
    setApiError("");
    setIsLinkEnabled(false);
    let _body = JSON.stringify({
      userId: sessionStorage.getItem("username"),
      otpType:
        recoveryChk === "SM"
          ? "FORGOT-PWD-SMS"
          : recoveryChk === "SE"
          ? "FORGOT-PWD-EMAIL"
          : "FORGOT-PWD-PIN-EMAIL-SMS",
      // "otpType": "LOGIN"
    });
    let data = await getGenerateOTP(_body);
    if (data.data) {
      setOtpStatus(data.data);
      setotpSent(true);
      setTimeout(() => setIsLinkEnabled(true), 300000);
    } else {
      setApiError("INVALID OTP ERROR");
    }
  };
  const handleChange = async (event) => {
    setrecoveryChk(event.target.value);
    setrecoveryChkError("");
    if (event.target.value === "SM") {
      let _body = JSON.stringify({
        userId: sessionStorage.getItem("username"),
        otpType: "FORGOT-PWD-SMS",
        // "otpType": "LOGIN",
      });
      let OTPRequest = await getGenerateOTP(_body);
      if (OTPRequest.data) {
        setOtpStatus(OTPRequest.data);
        setotpSent(true);
        setTimeout(() => setIsLinkEnabled(true), 300000);
      } else {
        setApiError("OTP ERROR!!");
      }
    } else if (event.target.value === "SE") {
      let _body = JSON.stringify({
        userId: sessionStorage.getItem("username"),
        otpType: "FORGOT-PWD-EMAIL",
        // "otpType": "LOGIN",
      });
      let OTPRequest = await getGenerateOTP(_body);
      if (OTPRequest.data) {
        setOtpStatus(OTPRequest.data);
        setotpSent(true);
        setTimeout(() => setIsLinkEnabled(true), 300000);
      } else {
        setApiError("OTP ERROR!!");
      }
    } else {
      let _body = JSON.stringify({
        userId: sessionStorage.getItem("username"),
        otpType: "FORGOT-PWD-PIN-EMAIL-SMS",
        // "otpType": "LOGIN",
      });
      let OTPRequest = await getGenerateOTP(_body);
      if (OTPRequest.data) {
        setOtpStatus(OTPRequest.data);
        setotpSent(true);
        setTimeout(() => setIsLinkEnabled(true), 300000);
      } else {
        setApiError("OTP ERROR!!");
      }
    }
  };
  const pinValue = (val) => {
    onChange(val, "pwd");
  };
  const confirmPin = (val) => {
    onChange(val, "confirmpwd");
  };
  return (
    <Box
      style={{ backgroundColor: _dark ? "#282828" : "#fff", paddingLeft: 20 }}
    >
      <h3
        className="fu-listing"
        style={{ color: _dark ? "#ffffff" : "#404040" }}
      >
        Change Pin
      </h3>
      <Box sx={{ flexGrow: 1 }} className={classes.gridcss}>
        <form>
          <Grid>
            {apiError ? (
              <Stack sx={{ width: "100%", paddingBottom: 1 }} spacing={2}>
                <Alert severity="error">{apiError}</Alert>
              </Stack>
            ) : (
              ""
            )}
            <Step1
              onChange={onChange}
              recoveryChk={recoveryChk}
              recoveryChkError={recoveryChkError}
              handleChange={handleChange}
            />
            <Step2
              Motp={Motp}
              Eotp={Eotp}
              onChange={onChange}
              securityValue={securityValue}
              isLinkEnabled={isLinkEnabled}
              securityValueError={securityValueError}
              security={security}
              securityError={securityError}
              recoveryChk={recoveryChk}
              MotpError={MotpError}
              EotpError={EotpError}
              otpSent={otpSent}
              otpStatus={otpStatus}
              callApiforOTP={callApiforOTP}
            />
            {recoveryChk ? (
              <Step3
                password={password}
                passwordError={passwordError}
                confirmpassword={confirmpassword}
                confirmpasswordError={confirmpasswordError}
                pinValue={pinValue}
                confirmPin={confirmPin}
              />
            ) : (
              ""
            )}
            <Grid container spacing={2}>
              <Grid item xs={2}>
                <BackButton
                  sx={{ mt: "10px", float: "right" }}
                  width="95%"
                  fontSize="18px"
                  lineHeight="22px"
                  onClick={() => {
                    props.handleClose();
                  }}
                />
              </Grid>
              <Grid item xs={2}>
                <CustomButton
                  sx={{ float: "left" }}
                  text="Submit"
                  width="95%"
                  onClick={handleSubmit}
                />
              </Grid>
              <Grid item xs={6}></Grid>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Box>
  );
};

export default ChangePin;
