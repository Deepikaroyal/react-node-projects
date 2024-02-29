import React, { useEffect } from "react";
import Backdrop from "@mui/material/Backdrop";
import axios from "axios";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { Grid, Typography } from "@mui/material";
import { getGenerateOTP } from "../../api";
import Otpinput from "./Otpinput";
import { All_URLS } from "../../constants";
const style = {
  position: "absolute",
  top: 60,
  left: "15%",
  width: "25%",
  height: "150px",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export default function OTPModal(props) {
  const _dark = props._dark ? props._dark : false;
  const open = props.open;
  useEffect(() => {
    let _body = JSON.stringify({
      userId: sessionStorage.getItem("userId"),
      otpType: "TXN",
    });
    let otpResponse = getGenerateOTP(_body);
    console.log(
      "🚀 ~ file: OTPModalFin.jsx:31 ~ useEffect ~ otpResponse:",
      otpResponse
    );
  }, []);

  const validateOTP = async (val) => {
    try {
      let body = JSON.stringify({
        userId: sessionStorage.getItem("userId"),
        otpType: "TXN",
        otpValue: val,
      });
      let Response = await axios.post(All_URLS.VALIDATE_OTP, body, {
        headers: {
          "Content-Type": "application/json",
          logintype: "JWT",
        },
      });
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
    <Modal
      open={open}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <Box
          sx={style}
          style={{
            backgroundColor: _dark ? "#282828" : "#fff",
            textAlign: "center",
            justifyContent: "center",
          }}
        >
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
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
}
