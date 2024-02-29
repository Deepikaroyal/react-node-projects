import React, { useState, useEffect } from "react";
import Navbar from "../../components/Account/Navbar";
import {
  useTheme,
  Paper,
  Container,
  Grid,
  Link,
  Stack,
  Alert,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import FirmIcon from "../../assets/SvgIcons/firmIcon.svg";
import Heading from "../../components/Common/CustomHeading";
import CustomButton from "../../components/Common/CustomButton";
import BackButton from "../../components/Common/BackButton";
import { useNavigate } from "react-router-dom";
import Step1 from "./Recovery";
import Step2 from "./OTP";
import Step3 from "./PwdChange";
import { forgotPassword, getGenerateOTP, getRSAServerKey } from "../../api";
import {
  EncryptAESKey,
  EncryptPayload,
  getRandomChar,
} from "../../utils/encrypt";
import CryptoJS from "crypto-js";
import { JWK } from "node-jose";
import { toast } from "react-toastify";

const Forgotpassword = () => {
  const [username, setUsername] = useState("");
  const [usernameError, setusernameError] = useState("");
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
  const navigate = useNavigate();

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

  const theme = useTheme();
  const useStyles = makeStyles({
    container: {
      backgroundColor: "#EAD0DB !important",
      paddingTop: theme.spacing(10),
      minHeight: "130vh",
      backgroundImage: `url(${FirmIcon})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "bottom",
      backgroundSize: "contain",
    },
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
  const forgotSubmit = async () => {
    const key_ = getRandomChar(32);
    const iv_ = getRandomChar(16);
    var key = CryptoJS.enc.Latin1.parse(key_);
    var iv = CryptoJS.enc.Latin1.parse(iv_);
    setusernameError("");
    setApiError("");
    if (username === "") {
      setusernameError("Username required");
    } else if (recoveryChk === "") {
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
    } else if (password === "") {
      setPasswordError("Password required");
    } else if (confirmpassword === "") {
      setConfirmPasswordError("Confirm password required");
    } else if (confirmpassword !== password) {
      setConfirmPasswordError("Password and Confirm password not matched");
    } else {
      let data = JSON.stringify({
        password: password,
        pin: "",
        smsOtp: Motp,
        emailOtp: Eotp,
        userId: username,
        otpType:
          recoveryChk === "SM"
            ? "FORGOT-PWD-SMS"
            : recoveryChk === "SE"
            ? "FORGOT-PWD-EMAIL"
            : "FORGOT-PWD-PIN-EMAIL-SMS",
        actionType: "FORGOT PWD",
        secQuesId: securityValue ? securityValue.toString() : "",
        secQuesAns: security ? security : "",
      });
      let encryptPayload = await EncryptPayload(data, key, iv);
      let pubKey = "";
      if (pubSerKey !== null && pubSerKey !== undefined) {
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
      window.scrollTo(0, 0);
      let response = await forgotPassword(body);
      if (response.data) {
        toast.success(response.data);
        setTimeout(() => {
          navigate("/login");
        }, 2000);
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
      // let _body = JSON.stringify({
      //     "userId": username,
      //     "otpType": recoveryChk === "SM" ? "FORGOT-PWD-SMS" : recoveryChk === "SE" ? "FORGOT-PWD-EMAIL" : "FORGOT-PWD-PIN-EMAIL-SMS",
      //     // "otpType": "LOGIN",
      // });
      // let OTPRequest = await getGenerateOTP(_body)
      // if (OTPRequest.data) {
      //     setOtpStatus(OTPRequest.data)
      //     setotpSent(true)
      // } else {
      //     setApiError("OTP ERROR!!")
      // }
    } else {
      setUsername(e);
      if (e) {
        setusernameError("");
        setrecoveryChkError("");
      }
    }
  };
  const callApiforOTP = async () => {
    setotpSent(false);
    setApiError("");
    setIsLinkEnabled(false);
    let _body = JSON.stringify({
      userId: username,
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
    if (username === "") {
      setusernameError("Username required");
      setrecoveryChkError("Enter Username to select Recovery Options");
    } else {
      setrecoveryChk(event.target.value);
      setrecoveryChkError("");
      if (event.target.value === "SM") {
        let _body = JSON.stringify({
          userId: username,
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
          userId: username,
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
          userId: username,
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
    }
  };
  return (
    <>
      <Navbar isLogin={false} />
      <Container
        component="main"
        maxWidth={[theme.breakpoints.up("sm")] ? "xl" : "xs"}
        className={classes.container}
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: "10px auto",
            borderRadius: 4,
            width: 400,
            //height: 'auto !important',
            //height: pageStep !== 1 ? pageStep === 3 ? 290 : (recoveryChk === 'SM' || recoveryChk === 'SE') ? 330 : 310 : 350,
            paddingTop: theme.spacing(2),
            paddingBottom: theme.spacing(2),
          },
        }}
      >
        <Paper elevation={3}>
          <form>
            <Grid align="center">
              <Heading title="Forgot Password" />
              {apiError ? (
                <Stack sx={{ width: "100%", paddingBottom: 1 }} spacing={2}>
                  <Alert severity="error">{apiError}</Alert>
                </Stack>
              ) : (
                ""
              )}
              <Step1
                username={username}
                usernameError={usernameError}
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
                  onChange={onChange}
                />
              ) : (
                ""
              )}
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <BackButton
                    sx={{ mt: "10px", float: "right" }}
                    width="90%"
                    fontSize="18px"
                    lineHeight="22px"
                    onClick={() => {
                      navigate("/login");
                    }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <CustomButton
                    sx={{ float: "left" }}
                    text="Submit"
                    width="90%"
                    onClick={forgotSubmit}
                  />
                </Grid>
              </Grid>
            </Grid>
          </form>
        </Paper>
        <div className={classes.linkdiv}>
          <Grid container spacing={2}>
            <Grid
              item
              xs={6}
              sx={{ textAlign: "right", paddingTop: "0px !important" }}
            >
              <Link
                href="#"
                onClick={() => {}}
                variant="body2"
                className={classes.typographLink}
              >
                Terms of use&nbsp;&nbsp;&nbsp;&nbsp;|
              </Link>
            </Grid>
            <Grid
              item
              xs={6}
              sx={{ textAlign: "left", paddingTop: "0px !important" }}
            >
              <Link
                href="#"
                onClick={() => {}}
                variant="body2"
                className={classes.typographLink}
              >
                Privacy Policy
              </Link>
            </Grid>
          </Grid>
        </div>
      </Container>
    </>
  );
};

export default Forgotpassword;
