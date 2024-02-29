import React from "react";
import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Refresh from "../../../../assets/SvgIcons/FU/refresh.svg";
import RefreshLight from "../../../../assets/SvgIcons/FU/refreshlight.svg";
import Reset from "../../../../assets/SvgIcons/FU/reset.svg";
import ResetLight from "../../../../assets/SvgIcons/FU/resetlight.svg";
import load from "../../../../assets/SvgIcons/FU/load.svg";
import loadLight from "../../../../assets/SvgIcons/FU/loadlight.svg";
import save from "../../../../assets/SvgIcons/FU/save.svg";
import saveLight from "../../../../assets/SvgIcons/FU/savelight.svg";
// import InsureFU from "../../../../assets/SvgIcons/FU/InsureFU.svg";
// import InsureFUlight from "../../../../assets/SvgIcons/FU/InsureFUlight.svg";
import { useTheme } from "@mui/material";

export default function BidListButtons(props) {
  const _dark = props._dark ? props._dark : false;
  const theme = useTheme();
  const useStyles = makeStyles({
    btnCls: {
      color: `${_dark ? "#ffffff" : "#97144D"} !important`,
      padding: "10px",
      borderRadius: `4px !important`,
      textTransform: "uppercase !important",
      fontSize: "12px !important",
      [theme.breakpoints.down("sm")]: {
        fontSize: "0px !important",
        paddingRight: 0,
      },
      fontFamily: "Lato",
      lineHeight: "18px",
      border: `1px solid ${_dark ? "#ffffff" : "#97144D"}`,
      marginRight: 15,
      fontWeight: 700,
      marginBottom: 10,
    },
    imgCls: {
      height: 17,
      [theme.breakpoints.down("sm")]: {
        height: 20,
      },
    },
  });
  const classes = useStyles();

  return (
    <div>
      {/* <Button
        className={classes.btnCls}
        startIcon={
          <img src={_dark ? InsureFUlight : InsureFU} className={classes.imgCls} alt="Bid" />
        }
      >
        Insure FUS
      </Button> */}
      <Button
        className={classes.btnCls}
        startIcon={
          <img
            src={_dark ? ResetLight : Reset}
            className={classes.imgCls}
            alt="Reset"
          />
        }
        onClick={() => {
          props.resetFilter();
        }}
      >
        Reset Filters
      </Button>
      <Button
        className={classes.btnCls}
        startIcon={
          <img
            src={_dark ? RefreshLight : Refresh}
            className={classes.imgCls}
            alt="Refresh"
          />
        }
        onClick={() => {
          props.refreshData();
        }}
      >
        Refresh Data
      </Button>
      <Button
        className={classes.btnCls}
        startIcon={
          <img
            src={_dark ? saveLight : save}
            className={classes.imgCls}
            alt="save"
          />
        }
      >
        Save My View
      </Button>
      <Button
        className={classes.btnCls}
        startIcon={
          <img
            src={_dark ? loadLight : load}
            className={classes.imgCls}
            alt="load"
          />
        }
      >
        Load My View
      </Button>
    </div>
  );
}
