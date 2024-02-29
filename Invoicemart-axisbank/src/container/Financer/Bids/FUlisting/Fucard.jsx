import * as React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { makeStyles } from "@mui/styles";
import TakeBid from "../../../../assets/SvgIcons/FU/takebid.svg";
import TakeBidLight from "../../../../assets/SvgIcons/FU/takebidlight.svg";
import { Card } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  //padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Fucard(fuProps) {
  const _dark = fuProps._dark ? fuProps._dark : false;
  const useStyles = makeStyles({
    btnCls: {
      color: `${_dark ? "#ffffff" : "#97144D"} !important`,
      padding: "5px",
      borderRadius: `4px !important`,
      textTransform: "uppercase !important",
      fontSize: "12px !important",
      fontFamily: "Lato",
      lineHeight: "12px",
      border: `1px solid ${_dark ? "#ffffff" : "#97144D"}`,
      fontWeight: 700,
      marginBottom: 10,
    },
  });
  const classes = useStyles();

  const currencyFormatter = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  });
  return (
    <>
      <Grid item xs={4} key={fuProps.id}>
        <Card style={{ border: "1px solid #CBCBCB" }}>
          <Item>
            <Stack
              direction="row"
              spacing={2}
              sx={{ backgroundColor: "#F1F1F1", padding: 1, minHeight: 60 }}
            >
              <Typography
                sx={{ fontSize: 13, width: "55%", textAlign: "left" }}
                color="text.secondary"
                gutterBottom
              >
                <b>Buyer Name</b> : {fuProps.buyerName}
              </Typography>
              <Typography
                sx={{ fontSize: 13, width: "45%", textAlign: "left" }}
                color="text.secondary"
                gutterBottom
              >
                <b>FU&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b>{" "}
                :{" "}
                <span style={{ color: "#97144D" }}>{fuProps.totalFuCount}</span>
              </Typography>
            </Stack>
            <Stack direction="row" spacing={2} sx={{ padding: 1 }}>
              <Typography
                sx={{ fontSize: 13, width: "55%", textAlign: "left" }}
                color="text.secondary"
                gutterBottom
              >
                <b>
                  Bids&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </b>{" "}
                : {fuProps.totalBidCount}
              </Typography>
              <Typography
                sx={{ fontSize: 13, width: "45%", textAlign: "left" }}
                color="text.secondary"
                gutterBottom
              >
                <b>Amount</b> :{" "}
                {currencyFormatter
                  .format(Number(fuProps.totalFuAmount))
                  .slice(0, -3)}
              </Typography>
            </Stack>
            <Stack direction="row" spacing={2} sx={{ padding: 1 }}>
              <Typography
                sx={{ fontSize: 13, width: "55%", textAlign: "left" }}
                color="text.secondary"
                gutterBottom
              >
                <b>Avg Tenor&nbsp;&nbsp;&nbsp;</b> : {fuProps.tenor}
              </Typography>
              <Typography
                sx={{ fontSize: 13, width: "45%", textAlign: "left" }}
                color="text.secondary"
                gutterBottom
              >
                <b>Micro&nbsp;&nbsp;&nbsp;&nbsp;</b> :{" "}
                {currencyFormatter
                  .format(Number(fuProps.totalFuAmountForMicroSeller))
                  .slice(0, -3)}
              </Typography>
            </Stack>
            <Stack direction="row" spacing={2} sx={{ padding: 1 }}>
              <Typography
                sx={{ fontSize: 13, width: "55%", textAlign: "left" }}
                color="text.secondary"
                gutterBottom
              >
                <b>Ask Rate&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b> :{" "}
                {fuProps.interestRate + "%"}
              </Typography>
              <Typography
                sx={{ fontSize: 13, width: "45%", textAlign: "left" }}
                color="text.secondary"
                gutterBottom
              >
                <b>Small&nbsp;&nbsp;&nbsp;&nbsp;</b> :{" "}
                {currencyFormatter
                  .format(Number(fuProps.totalFuAmountForSmallSeller))
                  .slice(0, -3)}
              </Typography>
            </Stack>
            <Stack direction="row" spacing={2} sx={{ padding: 1 }}>
              <Button
                className={classes.btnCls}
                style={{ width: "55%" }}
                startIcon={
                  <img
                    src={_dark ? TakeBidLight : TakeBid}
                    height="15"
                    alt="Bid"
                  />
                }
                onClick={() => {
                  fuProps.handlePlaceBid(
                    fuProps.buyerEntityId,
                    fuProps.totalFuCount
                  );
                }}
              >
                Place Bids
              </Button>
              <Typography
                sx={{ fontSize: 13, width: "45%", textAlign: "left" }}
                color="text.secondary"
                gutterBottom
              >
                <b>Medium</b> :{" "}
                {currencyFormatter
                  .format(Number(fuProps.totalFuAmountForMediumSeller))
                  .slice(0, -3)}
              </Typography>
            </Stack>
          </Item>
        </Card>
      </Grid>
    </>
  );
}
