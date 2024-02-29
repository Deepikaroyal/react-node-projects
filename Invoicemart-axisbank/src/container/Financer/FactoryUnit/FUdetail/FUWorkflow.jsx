import React from "react";
import { Typography, Grid, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import BackButton from "../../../../components/Common/BackButton";
import CommonButton from "../../../../components/Common/ButtonCommon";
//import Timeline from '../../../../components/Timeline'
import { WorkFlowTimeline } from "../../../../mock/InvoiceData";
import Stepper from "../../../../components/Stepper";

export default function Fuworkflow(props) {
  const _dark = props._dark ? props._dark : false;
  const useStyles = makeStyles({
    "@global": {
      "*::-webkit-scrollbar": {
        width: "0.4em",
        height: "0.5em",
      },
      "*::-webkit-scrollbar-track": {
        "-webkit-box-shadow": "inset 0 0 6px rgba(0, 0, 0, 0.3)",
      },
      "*::-webkit-scrollbar-thumb": {
        backgroundColor: "darkgrey",
        outline: "1px solid slategrey",
      },
    },
    typocss: {
      color: `${_dark ? "#ffffff" : "#404040"} !important`,
      fontSize: "14px !important",
      fontFamily: "Lato",
      lineHeight: "16px",
      fontWeight: 700,
    },
  });
  const WorkFlowButtons = [
    {
      name: "Seller",
      background: "#97144D",
      bdrColor: "#97144D",
      color: "#ffffff",
    },
    {
      name: "Buyer",
      background: "#AC4371",
      bdrColor: "#AC4371",
      color: "#ffffff",
    },
    {
      name: "Bidding",
      background: "#C17294",
      bdrColor: "#C17294",
      color: "#ffffff",
    },
    {
      name: "Obligation",
      background: "#E0B9CA",
      bdrColor: "#E0B9CA",
      color: "#ffffff",
    },
  ];
  const classes = useStyles();
  return (
    <Grid container spacing={2} sx={{ mt: 1 }}>
      <Grid item xs={3}>
        <Typography className={classes.typocss}>Approval Workflow</Typography>
        <Box pt={3}>
          {WorkFlowButtons.map((e) => (
            <CommonButton
              text={e.name}
              variant="contained"
              size="small"
              radius="10px"
              font="12px"
              bg={e.background}
              colorCode={e.color}
              bdrColor={e.bdrColor}
            />
          ))}
          <BackButton sx={{ mt: 2 }} width="30%" onClick={props.backFlow} />
        </Box>
      </Grid>
      <Grid container xs={9}>
        {/* <Timeline data={WorkFlowTimeline}/> */}
        <Stepper data={WorkFlowTimeline} _dark={_dark} />
      </Grid>
    </Grid>
  );
}
