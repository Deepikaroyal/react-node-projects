import React from "react";
import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import AuthorizeBtn from "../../../../assets/SvgIcons/AuthorizeBtn.svg";
import RejectBtn from "../../../../assets/SvgIcons/RejectBtn.svg";
import RejectDarkIcon from "../../../../assets/SvgIcons/Rejectdark.svg";
import AuthorizeDarkIcon from "../../../../assets/SvgIcons/AuthorizeDark.svg";

export default function FUListButtons(props) {
  const _dark = props._dark ? props._dark : false;
  const useStyles = makeStyles({
    btnCls: {
      color: `${_dark ? "#ffffff" : "#97144D"} !important`,
      padding: "10px",
      borderRadius: `4px !important`,
      textTransform: "uppercase !important",
      fontSize: "12px !important",
      fontFamily: "Lato",
      lineHeight: "18px",
      border: `1px solid ${_dark ? "#ffffff" : "#97144D"}`,
      marginRight: 15,
      fontWeight: 700,
      marginBottom: 10,
    },
  });
  const classes = useStyles();
  return (
    <div>
      <Button
        className={classes.btnCls}
        startIcon={
          <img
            src={_dark ? AuthorizeDarkIcon : AuthorizeBtn}
            height="17"
            alt="workflow"
          />
        }
      >
        AUTHORIZE
      </Button>
      <Button
        className={classes.btnCls}
        startIcon={
          <img src={_dark ? RejectDarkIcon : RejectBtn} height="17" alt="Bid" />
        }
      >
        REJECT
      </Button>
    </div>
  );
}
