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
import CustomButton from "../../components/Common/CustomButton";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getRSAServerKey, loginPlatformUser } from "../../api";
import "./index.css";
import {
  EncryptAESKey,
  EncryptPayload,
  getRandomChar,
} from "../../utils/encrypt";
import { JWK } from "node-jose";
import { MakeRandomCharNum } from "../../utils/general";
import Captcha from "../../components/Captcha";
const AdfsLogin = () => {
  const [username, setUsername] = useState("");
  const [usernameError, setusernameError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [apierror, setapierror] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated, loading, entityType } = useSelector(
    (state) => state.auth
  );
  const [pubSerKey, SetPubSerKey] = useState(null);
  const [clientId, setClientId] = useState("");
  const [isCaptch, setIsCaptcha] = useState(false);
  const [captchaError, setCaptchaError] = useState("");
  const [loggedInRole, setLoggedInRole] = useState("");

  useEffect(() => {
    if (isAuthenticated && entityType === "P") {
      navigate("/platformUser", { state: { name: "P", value: "P" } });
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
    } else if (!isCaptch) {
      setCaptchaError("Enter valid captcha");
    } else {
      sessionStorage.setItem("username", username);
      let data = JSON.stringify({
        username: username,
        password: password,
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
      dispatch(loginPlatformUser(body, setApiError, key, iv));
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
export default AdfsLogin;
