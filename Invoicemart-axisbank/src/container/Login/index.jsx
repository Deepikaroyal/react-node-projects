import React, { useState, useEffect } from "react";
import Navbar from "../../components/Account/Navbar";
import CryptoJS from "crypto-js";
import {
  useTheme,
  Paper,
  Container,
  Grid,
  FormControlLabel,
  Checkbox,
  Link,
  Alert,
  Stack,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import FirmIcon from "../../assets/SvgIcons/firmIcon.svg";
import Heading from "../../components/Common/CustomHeading";
import TextInput from "../../components/Common/CustomTextInput";
import pinIcon from "../../assets/SvgIcons/pin.svg";
import otpIcon from "../../assets/SvgIcons/otp.svg";
import CustomButton from "../../components/Common/CustomButton";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getRSAServerKey, loginUser, getGenerateOTP } from "../../api";
import OtpText from "../../components/Common/Otpinput";
import PinText from "../../components/Common/Pininput";
import "./index.css";
import {
  EncryptAESKey,
  EncryptPayload,
  getRandomChar,
} from "../../utils/encrypt";
import { JWK } from "node-jose";
import { MakeRandomCharNum } from "../../utils/general";
import Captcha from "../../components/Captcha";

const Login = () => {
  const [username, setUsername] = useState("");
  const [usernameError, setusernameError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [pin, setPin] = useState("");
  const [pinError, setPinError] = useState("");
  const [ispin, setIspin] = useState(true);
  const [otp, setOtp] = useState("");
  const [otpError, setOtpError] = useState("");
  const [apierror, setapierror] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated, loading, entityType } = useSelector(
    (state) => state.auth
  );
  const [pubSerKey, SetPubSerKey] = useState(null);
  const [serverOTP, setServerOPT] = useState("");
  const [clientId, setClientId] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [isCaptch, setIsCaptcha] = useState(false);
  const [captchaError, setCaptchaError] = useState("");
  const [loggedInRole, setLoggedInRole] = useState("");

  useEffect(() => {
    if (isAuthenticated && entityType === "F") {
      navigate("/financer", { state: { name: "FIN", value: "FIN" } });
      setLoggedInRole("");
    } else if (isAuthenticated && entityType === "B") {
      navigate("/buyer", { state: { name: "BU", value: "BU" } });
      setLoggedInRole("");
    } else if (isAuthenticated && entityType === "S") {
      navigate("/seller", { state: { name: "SE", value: "SE" } });
      setLoggedInRole("");
    } else {
      const ClientId =
        MakeRandomCharNum(10) +
        "-" +
        MakeRandomCharNum(4) +
        "-" +
        MakeRandomCharNum(4) +
        "-" +
        MakeRandomCharNum(10);
      sessionStorage.setItem("browserId", ClientId);
      setClientId(ClientId);
    }
  }, [isAuthenticated, entityType, navigate]);

  useEffect(() => {
    const _getRSAServerKey = async () => {
      if (clientId) {
        let data = JSON.stringify({ clientId: clientId });
        let PublicServerKey = await getRSAServerKey(data);
        if (PublicServerKey) {
          SetPubSerKey(PublicServerKey.data);
          return PublicServerKey.data;
        }
      }
    };
    _getRSAServerKey();
  }, [clientId]);

  const _getRSAServerKey = async () => {
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
      minHeight: "100vh",
      [theme.breakpoints.down("xl")]: {
        minHeight: "60vh",
      },
      backgroundImage: `url(${FirmIcon})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "bottom",
      backgroundSize: "auto",
    },
    typograph: {
      color: "#97144D !important",
      fontSize: "16px !important",
      textDecoration: "none !important",
      position: "relative",
      fontFamily: "Lato",
      top: 6,
      left: "3%",
      [theme.breakpoints.down("sm")]: {
        left: "8%",
      },
      cursor: "pointer",
    },
    typographLink: {
      color: "#97144D !important",
      fontSize: "16px !important",
      textDecoration: "none !important",
      fontFamily: "Lato",
      fontWeight: 400,
      lineHeight: "19px",
    },
    formlabel: {
      color: "#404040",
      fontSize: "12px !important",
      fontFamily: "Lato !important",
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
  const LoginSubmit = async () => {
    const key_ = getRandomChar(32);
    const iv_ = getRandomChar(16);
    var key = CryptoJS.enc.Latin1.parse(key_);
    var iv = CryptoJS.enc.Latin1.parse(iv_);

    setusernameError("");
    setPasswordError("");
    setapierror("");
    setCaptchaError("");
    if (username === "") {
      setusernameError("Username required");
    } else if (password === "") {
      setPasswordError("Password required");
    } else if (ispin && (pin === "" || pin.length < 6)) {
      setPinError("Pin required");
    } else if (!ispin && (otp === "" || otp.length < 6)) {
      setOtpError("OTP required");
    } else if (!isCaptch) {
      setCaptchaError("Enter valid captcha");
    } else {
      sessionStorage.setItem("username", username);
      let data = JSON.stringify({
        username: username,
        password: password,
        otp: otp,
        pin: pin,
        loggedInRole: loggedInRole,
      });
      sessionStorage.setItem("userId", username);
      let encryptPayload = await EncryptPayload(data, key, iv);
      let pubKey = "";
      if (pubSerKey !== null && pubSerKey !== undefined) {
        pubKey = pubSerKey.requiredParams;
      } else {
        let keyRes = await _getRSAServerKey();
        pubKey = keyRes.requiredParams;
      }
      let _skey = await JWK.asKey(pubKey);
      let Enc_DEK = JSON.stringify({
        key: key_,
        iv: iv_,
      });
      let encryptDEK = await EncryptAESKey(Enc_DEK, _skey);
      const body = {
        clientId: clientId,
        encryptedDek: encryptDEK,
        encryptedData: encryptPayload.toString(),
      };
      dispatch(loginUser(body, setApiError, key, iv));
    }
  };
  const setApiError = (e) => {
    setapierror(e);
  };
  const onUsernameChange = (e) => {
    setUsername(e);
    if (e) {
      setusernameError("");
    }
  };
  const onPasswordChange = (e) => {
    setPassword(e);
    if (e) {
      setPasswordError("");
    }
  };
  const PinValue = (val) => {
    if (ispin) {
      setPin(val);
      setOtp("");
      if (val) {
        setPinError("");
      }
    } else {
      setOtp(val);
      setPin("");
      if (val) {
        setOtpError("");
      }
    }
  };
  const onIsPinOtp = async (_isPin) => {
    setIspin(_isPin);
    if (!_isPin) {
      let _body = JSON.stringify({
        userId: username,
        otpType: "LOGIN",
      });
      let otpResponse = await getGenerateOTP(_body);
      if (otpResponse) {
        setServerOPT(otpResponse.data);
        setOtpSent(true);
      }
    }
  };
  const onChangeCaptch = (str) => {
    if (str) {
      setIsCaptcha(true);
      setCaptchaError("");
    } else {
      setIsCaptcha(false);
      setCaptchaError("Invalid Captcha");
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
            paddingTop: theme.spacing(2),
            paddingBottom: theme.spacing(2),
          },
        }}
      >
        <Paper elevation={3}>
          <form>
            <Grid align="center">
              <Heading title="Login" />
              {apierror ? (
                <Stack sx={{ width: "100%", paddingBottom: 1 }} spacing={2}>
                  <Alert severity="error">{apierror}</Alert>
                </Stack>
              ) : (
                ""
              )}
              <TextInput
                label="Username"
                value={username}
                width="90%"
                placeholder="Username"
                size="small"
                onChange={(e) => {
                  onUsernameChange(e.target.value);
                }}
                error={!!usernameError}
                helperText={usernameError}
              />
              <TextInput
                value={password}
                width="90%"
                placeholder="Password"
                label="Password"
                size="small"
                onChange={(e) => {
                  onPasswordChange(e.target.value);
                }}
                type="password"
                error={!!passwordError}
                helperText={passwordError}
              />
              <Stack>
                <label
                  style={{
                    width: ispin ? "15%" : "16%",
                    fontSize: 14,
                    color: "#404040",
                    padding: "3px 0px",
                  }}
                >
                  {ispin ? "Pin" : "OTP"}
                </label>
              </Stack>
              <Grid container spacing={[theme.breakpoints.up("md")] ? 2 : 1}>
                <Grid item xs={8} md={8}>
                  {!ispin ? (
                    <OtpText PinValue={PinValue} />
                  ) : (
                    <PinText PinValue={PinValue} />
                  )}
                </Grid>
                <Grid item xs={4} md={4}>
                  <img
                    src={ispin ? pinIcon : otpIcon}
                    alt="pinicon"
                    //width="67%"
                    style={{
                      marginLeft: "2%",
                      marginTop: ispin ? "4%" : "0%",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      onIsPinOtp(!ispin);
                    }}
                  />
                  {ispin ? null : (
                    <Link
                      style={{
                        color: "#97144D",
                        fontSize: 14,
                        textDecoration: "none",
                        cursor: "pointer",
                        width: 110,
                      }}
                    >
                      Resend OTP
                    </Link>
                  )}
                </Grid>
              </Grid>
              {ispin && pinError ? (
                <label className="pin-error">{pinError}</label>
              ) : (
                ""
              )}
              {!ispin && otpError ? (
                <label className="pin-error">{otpError}</label>
              ) : (
                ""
              )}
              {otpSent ? <Alert severity="success">{serverOTP}</Alert> : ""}
              <Grid container spacing={1} style={{ marginTop: 10 }}>
                <Grid item xs={12} md={12}>
                  <Captcha onChange={onChangeCaptch} />
                </Grid>
              </Grid>
              {captchaError ? (
                <label className="pin-error">{captchaError}</label>
              ) : (
                ""
              )}
              <Grid container spacing={2}>
                <Grid item xs={6} md={6}>
                  <Link
                    // href="#"
                    onClick={() => {
                      navigate("/forgotpassword");
                    }}
                    variant="body2"
                    className={classes.typograph}
                  >
                    Forgot Password?
                  </Link>
                </Grid>
                <Grid item xs={6} md={6}>
                  <Link
                    // href="#"
                    onClick={() => {
                      navigate("/forgotpin");
                    }}
                    variant="body2"
                    className={classes.typograph}
                  >
                    Forgot Pin?
                  </Link>
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={6} md={6}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        value="Platform"
                        size="small"
                        className={classes.formlabel}
                      />
                    }
                    label="Platform User"
                    className={classes.formlabel}
                  />
                </Grid>
                <Grid item xs={6} md={6}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        value="remember"
                        size="small"
                        className={classes.formlabel}
                      />
                    }
                    label="Remember me"
                    className={classes.formlabel}
                  />
                </Grid>
              </Grid>
              <CustomButton
                text={loading ? "Signing you in, please wait..." : "Sign In"}
                onClick={LoginSubmit}
              />
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

export default Login;
