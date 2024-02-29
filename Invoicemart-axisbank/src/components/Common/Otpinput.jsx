import React, { useState } from "react";
import "./commonStyles.css";
import { useTheme } from "@mui/material";
import { makeStyles } from "@mui/styles";

const Otpinput = (props) => {
  const theme = useTheme();
  const [otp1, setOtp1] = useState("");
  const [otp2, setOtp2] = useState("");
  const [otp3, setOtp3] = useState("");
  const [otp4, setOtp4] = useState("");
  const [otp5, setOtp5] = useState("");
  const [otp6, setOtp6] = useState("");

  const inputfocus = (elmnt) => {
    if (elmnt.key === "Delete" || elmnt.key === "Backspace") {
      const next = elmnt.target.tabIndex - 1;
      if (next > -1) {
        elmnt.target.form.elements[next].focus();
      }
    } else {
      const next = elmnt.target.tabIndex;
      if (next < 5) {
        elmnt.target.form.elements[
          elmnt.target.value.length > 0 ? next + 1 : next
        ].focus();
      }
    }
    props.PinValue(otp1 + otp2 + otp3 + otp4 + otp5 + otp6);
  };
  const useStyles = makeStyles({
    otpinput: {
      width: "2em",
      height: "40px",
      borderRadius: "6px",
      border: "1px solid #CBCBCB",
      marginRight: "8px",
      textAlign: "center",
      fontFamily: "Lato",
      fontWeight: 400,
      fontSize: "1rem",
      lineHeight: "1.4375em",
      [theme.breakpoints.down("md")]: {
        width: "1.6em",
      },
    },
  });
  const classes = useStyles();
  const onChange = (fn, e) => {
    const re = /^[0-9\b]+$/;
    if (e.target.value === "" || re.test(e.target.value)) {
      fn(e.target.value);
    }
  };
  return (
    <form>
      <div className="otpContainer">
        <input
          autoComplete="off"
          name="otp1"
          value={otp1}
          onChange={(e) => onChange(setOtp1, e)}
          tabIndex="0"
          maxLength="1"
          onKeyUp={(e) => inputfocus(e)}
          className={classes.otpinput}
        />
        <input
          autoComplete="off"
          name="otp2"
          value={otp2}
          onChange={(e) => onChange(setOtp2, e)}
          tabIndex="1"
          maxLength="1"
          onKeyUp={(e) => inputfocus(e)}
          className={classes.otpinput}
        />
        <input
          autoComplete="off"
          name="otp3"
          value={otp3}
          onChange={(e) => onChange(setOtp3, e)}
          tabIndex="2"
          maxLength="1"
          onKeyUp={(e) => inputfocus(e)}
          className={classes.otpinput}
        />
        <input
          autoComplete="off"
          name="otp4"
          value={otp4}
          onChange={(e) => onChange(setOtp4, e)}
          tabIndex="3"
          maxLength="1"
          onKeyUp={(e) => inputfocus(e)}
          className={classes.otpinput}
        />
        <input
          autoComplete="off"
          name="otp5"
          value={otp5}
          onChange={(e) => onChange(setOtp5, e)}
          tabIndex="4"
          maxLength="1"
          onKeyUp={(e) => inputfocus(e)}
          className={classes.otpinput}
        />
        <input
          autoComplete="off"
          name="otp6"
          value={otp6}
          onChange={(e) => onChange(setOtp6, e)}
          tabIndex="5"
          maxLength="1"
          onKeyUp={(e) => inputfocus(e)}
          className={classes.otpinput}
        />
      </div>
    </form>
  );
};

export default Otpinput;
