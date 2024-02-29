import React from "react";
import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import AcceptIcon from "../../../../assets/SvgIcons/AcceptBtn.svg";
import RejectIcon from "../../../../assets/SvgIcons/RejectBtn.svg";
import AcceptDarkIcon from "../../../../assets/SvgIcons/Acceptdark.svg";
import RejectDarkIcon from "../../../../assets/SvgIcons/Rejectdark.svg";

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
            src={_dark ? AcceptDarkIcon : AcceptIcon}
            height="17"
            alt="Accept"
          />
        }
      >
        ACCEPT
      </Button>
      <Button
        className={classes.btnCls}
        startIcon={
          <img
            src={_dark ? RejectDarkIcon : RejectIcon}
            height="17"
            alt="Reject"
          />
        }
      >
        REJECT
      </Button>
    </div>
  );
}
