import * as React from "react";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";

const BackCommonButton = (props) => {
  const radius = props.radius ? props.radius : "5px";
  const width = props.width ? props.width : "100%";
  const colorCode = props.colorCode ? props.colorCode : "#97144D";
  const bg = props.bg ? props.bg : "#ffffff";
  const font = props.font ? props.font : "14px";
  const lH = props.lH ? props.lH : "18px";
  const bdrColor = props.bdrColor ? props.bdrColor : "#97144D";
  const useStyles = makeStyles({
    btnCls: {
      backgroundColor: `${bg} !important`,
      color: `${colorCode} !important`,
      borderRadius: `${radius} !important`,
      textTransform: "none !important",
      fontSize: `${font} !important`,
      lineHeight: lH,
      fontFamily: "Lato",
      fontWeight: 700,
      border: `1px solid ${bdrColor}`,
      width: `${width} !important`,
      marginBottom: 5,
      textAlign: "left",
      justifyContent: "left",
    },
  });
  const classes = useStyles();
  return (
    <Button className={classes.btnCls} {...props}>
      {props.text ? props.text : "Save"}
    </Button>
  );
};

export default BackCommonButton;
