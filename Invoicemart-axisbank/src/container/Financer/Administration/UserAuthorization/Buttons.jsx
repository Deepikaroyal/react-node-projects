import React from "react";
import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Authorize from "../../../../assets/SvgIcons/FU/AuthorizeBid.svg";
import AuthorizeLight from "../../../../assets/SvgIcons/FU/AuthorizeBidlight.svg";
import Viewuser from "../../../../assets/SvgIcons/Admin/Viewusersetup.svg";
import ViewuserLight from "../../../../assets/SvgIcons/Admin/Viewusersetup-1.svg";
import Refresh from "../../../../assets/SvgIcons/FU/refresh.svg";
import RefreshLight from "../../../../assets/SvgIcons/FU/refreshlight.svg";
import Reset from "../../../../assets/SvgIcons/FU/reset.svg";
import ResetLight from "../../../../assets/SvgIcons/FU/resetlight.svg";
import load from "../../../../assets/SvgIcons/FU/load.svg";
import loadLight from "../../../../assets/SvgIcons/FU/loadlight.svg";
import save from "../../../../assets/SvgIcons/FU/save.svg";
import saveLight from "../../../../assets/SvgIcons/FU/savelight.svg";

export default function ButtonList(props) {
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
            src={_dark ? AuthorizeLight : Authorize}
            height="17"
            alt="workflow"
          />
        }
        onClick={() => {
          props.handleOpen();
        }}
      >
        Authorize
      </Button>
      <Button
        className={classes.btnCls}
        startIcon={
          <img src={_dark ? ViewuserLight : Viewuser} height="17" alt="Bid" />
        }
      >
        View User Setup
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
