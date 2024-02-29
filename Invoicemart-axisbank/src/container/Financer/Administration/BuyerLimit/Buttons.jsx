import React from "react";
import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import BuyerConfig from "../../../../assets/SvgIcons/Admin/BuyerConfig.svg";
import BuyerConfigLight from "../../../../assets/SvgIcons/Admin/BuyerConfiglight.svg";
import Setlimits from "../../../../assets/SvgIcons/Admin/setlimits.svg";
import SetlimitsLight from "../../../../assets/SvgIcons/Admin/setlimitslight.svg";
import Refresh from "../../../../assets/SvgIcons/FU/refresh.svg";
import RefreshLight from "../../../../assets/SvgIcons/FU/refreshlight.svg";
import Reset from "../../../../assets/SvgIcons/FU/reset.svg";
import ResetLight from "../../../../assets/SvgIcons/FU/resetlight.svg";
import load from "../../../../assets/SvgIcons/FU/load.svg";
import loadLight from "../../../../assets/SvgIcons/FU/loadlight.svg";
import save from "../../../../assets/SvgIcons/FU/save.svg";
import saveLight from "../../../../assets/SvgIcons/FU/savelight.svg";

export default function BuyerLimitButtons(props) {
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
            src={_dark ? BuyerConfigLight : BuyerConfig}
            height="17"
            alt="BuyerConfig"
          />
        }
        onClick={() => {
          props.handleOpen();
        }}
      >
        Buyer Configuration
      </Button>
      <Button
        className={classes.btnCls}
        startIcon={
          <img src={_dark ? SetlimitsLight : Setlimits} height="17" alt="Bid" />
        }
      >
        Set Limits
      </Button>
      <Button
        className={classes.btnCls}
        startIcon={
          <img src={_dark ? ResetLight : Reset} height="17" alt="Reset" />
        }
      >
        Reset Filters
      </Button>
      <Button
        className={classes.btnCls}
        startIcon={
          <img src={_dark ? RefreshLight : Refresh} height="17" alt="Refresh" />
        }
      >
        Refresh Data
      </Button>
      <Button
        className={classes.btnCls}
        startIcon={
          <img src={_dark ? saveLight : save} height="17" alt="save" />
        }
      >
        Save My View
      </Button>
      <Button
        className={classes.btnCls}
        startIcon={
          <img src={_dark ? loadLight : load} height="17" alt="load" />
        }
      >
        Load My View
      </Button>
    </div>
  );
}
