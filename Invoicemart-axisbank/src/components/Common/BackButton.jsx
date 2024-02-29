import * as React from "react";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";

const BackButton = (props) => {
  const radius = props.radius ? props.radius : "5px";
  const width = props.width ? props.width : "100%";
  const fontSize = props.fontSize ? props.fontSize : "14px";
  const lineHeight = props.lineHeight ? props.lineHeight : "18px";
  const useStyles = makeStyles({
    btnCls: {
      backgroundColor: "#ffffff !important",
      color: "#97144D !important",
      borderRadius: `${radius} !important`,
      textTransform: "none !important",
      fontSize: `${fontSize} !important`,
      lineHeight: `${lineHeight} !important`,
      fontFamily: "Lato",
      fontWeight: 700,
      border: "1px solid #97144D",
      width: `${width} !important`,
    },
  });
  const classes = useStyles();
  return (
    <Button className={classes.btnCls} {...props}>
      {props.text ? props.text : "Back"}
    </Button>
  );
};

export default BackButton;
