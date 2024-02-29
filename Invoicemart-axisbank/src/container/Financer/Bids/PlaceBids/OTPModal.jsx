import React, { useState, useEffect } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { getGenerateOTP } from "../../../../api";
import Otpinput from "../../../../components/Common/Pininput";

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
    // console.log('otpResponse', otpResponse)
  }, []);
  // (function () {
  //   let _body = JSON.stringify({
  //     "userId": sessionStorage.getItem("userId"),
  //     "otpType": "TXN"
  //   });
  //   let otpResponse = getGenerateOTP(_body)
  //   console.log('otpResponse', otpResponse)
  // })();

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
      // console.log('Validate OTP Response', Response);

      return Response;
    } catch (error) {
      alert("Invalid/wrong OTP");
      return error;
    }
  };

  const PinValue = async (val) => {
    if (val.length === 6) {
      let res = await validateOTP(val);
      // console.log("mobile validation response", res);
      if (res && res.data === "OTP Validated.") {
        props.handleClose();
      }
      // console.log("Pinvalue Response", res)
    }
    // console.log("Pinvalue Val", val);
    return val;
  };

  return (
    <Modal open={open}>
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
                  {/* <button style={{
                    height: "30px",
                    marginTop: "10px"
                  }} onClick={props.handleClose}>Submit</button> */}
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
}
