import * as React from "react";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";

const CustomButton = (props) => {
  const radius = props.radius ? props.radius : "5px";
  const lineHeight = props.lineHeight ? props.lineHeight : "24px";
  const width = props.width ? props.width : "90%";
  const useStyles = makeStyles({
    btnCls: {
      backgroundColor: "#97144D !important",
      color: "#FFFFFF !important",
      width: `${width} !important`,
      borderRadius: `${radius} !important`,
      textTransform: "none !important",
      fontSize: "18px !important",
      lineHeight: `${lineHeight} !important`,
      margin: "10px auto !important",
      fontFamily: "Lato !important",
      fontWeight: 700,
    },
  });
  const classes = useStyles();
  return (
    <Button className={classes.btnCls} {...props}>
      {props.text ? props.text : "Save"}
    </Button>
  );
};

export default CustomButton;
