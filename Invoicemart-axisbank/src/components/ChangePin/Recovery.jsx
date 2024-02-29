import React from "react";
import { FormControlLabel, FormHelperText, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { styled } from "@mui/material/styles";

const BpIcon = styled("span")(({ theme }) => ({
  borderRadius: "50%",
  width: 16,
  height: 16,
  boxShadow:
    theme.palette.mode === "dark"
      ? "0 0 0 1px rgb(16 22 26 / 40%)"
      : "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
  backgroundColor: theme.palette.mode === "dark" ? "#394b59" : "#f5f8fa",
  backgroundImage:
    theme.palette.mode === "dark"
      ? "linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))"
      : "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
  ".Mui-focusVisible &": {
    outline: "2px auto rgba(19,124,189,.6)",
    outlineOffset: 2,
  },
  "input:hover ~ &": {
    backgroundColor: theme.palette.mode === "dark" ? "#30404d" : "#ffffff",
  },
}));

const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: "#ffffff",
  borderColor: "#97144D",
  boxShadow: "inset 0 0 0 1px #97144D, inset 0 -1px 0 #97144D",
  "&:before": {
    display: "block",
    width: 16,
    height: 16,
    backgroundImage: "radial-gradient(#97144D,#97144D 40%,transparent 44%)",
    content: '""',
  },
  "input:hover ~ &": {
    backgroundColor: "#ffffff",
  },
});

// Inspired by blueprintjs
function BpRadio(props) {
  return (
    <Radio
      sx={{
        padding: "5px",
        paddingLeft: "9px",
        "&:hover": {
          bgcolor: "transparent",
        },
      }}
      disableRipple
      color="default"
      checkedIcon={<BpCheckedIcon />}
      icon={<BpIcon />}
      {...props}
    />
  );
}
const Step1 = (props) => {
  const useStyles = makeStyles({
    typographychk: {
      color: "#404040",
      fontSize: "14px !important",
      lineHeight: "14px",
      fontWeight: "400 !important",
      fontStyle: "normal !important",
      fontFamily: "Lato !important",
    },
    typography: {
      color: props.recoveryChkError ? "red" : "#404040 !important",
      fontSize: 14,
      lineHeight: "16px",
      fontWeight: 700,
      fontStyle: "normal",
      paddingBottom: 8,
      paddingTop: 5,
    },
  });
  const classes = useStyles();
  return (
    <>
      <FormControl
        component="fieldset"
        error={props.recoveryChkError ? true : false}
      >
        <FormLabel component="legend" className={classes.typography}>
          Choose your preferred mode of password recovery
        </FormLabel>
        <RadioGroup
          row
          aria-label="gender"
          name="controlled-radio-buttons-group"
          value={props.recoveryChk}
          onChange={props.handleChange}
          sx={{ paddingBottom: 1 }}
        >
          <FormControlLabel
            value="EM"
            control={<BpRadio size="small" />}
            label={
              <Typography className={classes.typographychk}>
                Email OTP & Mobile OTP
              </Typography>
            }
          />
          <FormControlLabel
            value="SM"
            control={<BpRadio size="small" />}
            label={
              <Typography className={classes.typographychk}>
                Security Question & Mobile OTP
              </Typography>
            }
          />
          <FormControlLabel
            value="SE"
            control={<BpRadio size="small" />}
            label={
              <Typography className={classes.typographychk}>
                Security Question & Email OTP
              </Typography>
            }
          />
        </RadioGroup>
        {props.recoveryChkError && (
          <FormHelperText>{props.recoveryChkError}</FormHelperText>
        )}
      </FormControl>
    </>
  );
};

export default Step1;
