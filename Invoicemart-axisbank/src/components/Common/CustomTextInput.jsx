import * as React from "react";
import { TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";

const CustomTextInput = (props) => {
  const useStyles = makeStyles({
    textCss: {
      margin: "10px auto !important",
      width: props.width,
      borderColor: "#212121 !important",
      color: "#404040 !important",
      fontFamily: "Lato !important",
      fontSize: "13px !important",
      "& .Mui-focused": {
        color: "#212121",
      },
      "& .MuiFormHelperText-root.Mui-error": {
        color: "#d32f2f",
      },
      "& .MuiOutlinedInput-root": {
        "&.Mui-focused fieldset": {
          border: "#CBCBCB 1px solid",
        },
      },
    },
  });
  const classes = useStyles();
  return (
    <TextField
      className={classes.textCss}
      inputProps={{
        autoComplete: "new-password",
        form: {
          autocomplete: "off",
        },
      }}
      {...props}
    />
  );
};

export default CustomTextInput;
