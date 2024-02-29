import React, { useEffect } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { Grid, Typography } from "@mui/material";
import { getGenerateOTP } from "../../api";
import Otpinput from "./Otpinput";
import CancelPresentationOutlinedIcon from "@mui/icons-material/CancelPresentationOutlined";

const style = {
  position: "absolute",
  top: 60,
  left: "15%",
  width: "25%",
  height: "210px",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export default function OTPModal(props) {
  const _dark = props._dark ? props._dark : false;
  const open = props.open;

  const OtpModalClose = props.OtpModalClose;
  const _body = JSON.stringify({
    userId: sessionStorage.getItem("userId"),
    otpType: "TXN",
  });
  useEffect(() => {
    getGenerateOTP(_body);
  }, [_body]);

  const validateOTP = async (val) => {
    try {
      let body = JSON.stringify({
        userId: sessionStorage.getItem("userId"),
        otpType: "TXN",
        otpValue: val,
      });
      let Response = await axios.post(
        "http://10.24.184.7:8007/authapi/auth/validateotp",
        body,
        {
          headers: {
            "Content-Type": "application/json",
            logintype: "JWT",
          },
        }
      );
      return Response;
    } catch (error) {
      alert("Invalid/wrong OTP");
      return error;
    }
  };

  const PinValue = async (val) => {
    if (val.length === 6) {
      let res = await validateOTP(val);
      if (res && res.data === "OTP Validated.") {
        props.handleClose();
      }
    }
    return val;
  };

  return (
    <Modal open={open}>
      <Fade in={open}>
        <Box
          sx={style}
          style={{
            backgroundColor: _dark ? "#282828" : "#fff",
            textAlign: "right",
          }}
        >
          <CancelPresentationOutlinedIcon
            style={{
              marginTop: "-15px",
              justifyContent: "end",
            }}
            onClick={OtpModalClose}
          />
          <Box sx={{ flexGrow: 1 }}>
            <Grid sx={{ justifyContent: "center" }} container>
              <Grid
                sx={{
                  textAlign: "center",
                  justifyContent: "center",
                }}
              >
                <Typography>
                  Please enter the otp that has been sent to your registered
                  mobile number/email.
                  <Otpinput PinValue={PinValue} />
                  <button
                    style={{
                      marginTop: "5px",
                      fontSize: 14,
                      textDecoration: "none",
                      cursor: "pointer",
                      width: 100,
                    }}
                    onClick={() => {
                      getGenerateOTP(_body);
                    }}
                  >
                    Resend OTP
                  </button>
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
}
