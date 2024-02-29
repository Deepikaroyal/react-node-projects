import React from "react";
import { Stack, Grid, Typography } from "@mui/material";
import Tree from "../../../../components/Treeview";
import InvoiceGrid from "./InvoiceItems";
import FUWorkFlow from "./FUWorkflow";
import { makeStyles } from "@mui/styles";
//import { BuyerData, SellerData, CommercialData } from '../../../../mock/FUdetails'

const Fudetails = (props) => {
  // console.log(props);
  const _dark = props._dark ? props._dark : false;
  const useStyles = makeStyles({
    stpCls: {
      cursor: "pointer",
      fontSize: "14px",
      fontFamily: "Lato",
      fontWeight: 400,
      lineHeight: "24px",
      width: "45%",
      paddingTop: 10,
    },
    stpClsBold: {
      cursor: "pointer",
      fontSize: "14px",
      fontFamily: "Lato",
      lineHeight: "24px",
      width: "45%",
      paddingTop: 10,
      fontWeight: 700,
    },
    stpCls2: {
      cursor: "pointer",
      fontSize: "14px",
      fontFamily: "Lato",
      fontWeight: 400,
      lineHeight: "24px",
      width: "10%",
      paddingTop: 10,
    },
  });
  const classes = useStyles();
  const _renderInput = (name, value) => (
    <>
      <Typography variant="body2" className={classes.stpClsBold}>
        {name}
      </Typography>
      <Typography className={classes.stpCls2} variant="body2">
        {name ? ":" : ""}
      </Typography>
      <Typography className={classes.stpCls} variant="body2">
        {value}
      </Typography>
    </>
  );
  return (
    <>
      <Grid container spacing={2}>
        <Grid
          item
          xs={9}
          sx={{
            paddingTop: "0px !important",
            borderRight: "solid 1px #CBCBCB",
          }}
        >
          <Tree
            label="Buyer"
            _dark={_dark}
            component={
              <>
                <Stack spacing={2} direction="row">
                  {_renderInput("Associated Company", "Tata Steel")}
                  {_renderInput("Authorised By", "Honda")}
                </Stack>
                <Stack spacing={2} direction="row">
                  {_renderInput("Authorised Date", "28/JUN/2021")}
                  {_renderInput("Auto Authorisation", "Tata Steel")}
                </Stack>
                <Stack spacing={2} direction="row">
                  {_renderInput("Business Type", "Tata Steel")}
                  {_renderInput("Buyer Authorised Date", "28/JUN/2021")}
                </Stack>
                <Stack spacing={2} direction="row">
                  {_renderInput("Buyer Authoriser", "Tata Steel")}
                  {_renderInput("Buyer Entity ID", "8283848586")}
                </Stack>
                <Stack spacing={2} direction="row">
                  {_renderInput("Buyer BU ID", "8282828282")}
                  {_renderInput("Create Date", "28/JUN/2021")}
                </Stack>
                <Stack spacing={2} direction="row">
                  {_renderInput("Buyer GST No.", "TAT123DS2")}
                  {_renderInput("Create By", "Tata Steel")}
                </Stack>
              </>
            }
          />
          <Tree
            label="Seller"
            _dark={_dark}
            component={
              <>
                <Stack spacing={2} direction="row">
                  {_renderInput("Seller BU ID", "TAT123DS2")}
                  {_renderInput("Seller Entity ID", "Tata Steel")}
                </Stack>
                <Stack spacing={2} direction="row">
                  {_renderInput("Seller GST No.", "TAT123DS2")}
                  {_renderInput("Status Code", "Tata Steel")}
                </Stack>
                <Stack spacing={2} direction="row">
                  {_renderInput("Supplier Authorised Date", "28/JUN/2021")}
                  {_renderInput("Supplier Authorisor", "Tata Steel")}
                </Stack>
              </>
            }
          />
          <Tree
            label="Commercial"
            _dark={_dark}
            component={
              <>
                <Stack spacing={2} direction="row">
                  {_renderInput("Disbursed Amount", "1000")}
                  {_renderInput("Disbursed Date", "28/JUN/2021")}
                </Stack>
                <Stack spacing={2} direction="row">
                  {_renderInput("FU Date", "28/JUN/2021")}
                  {_renderInput("FU Due Date", "28/JUN/2021")}
                </Stack>
                <Stack spacing={2} direction="row">
                  {_renderInput("FU No.", "TAT123DS2")}
                  {_renderInput("FU Outstanding Amount", "2000")}
                </Stack>
                <Stack spacing={2} direction="row">
                  {_renderInput("Goods Type", "TAT123DS2")}
                  {_renderInput("Tenor", "Tata Steel")}
                </Stack>
                <Stack spacing={2} direction="row">
                  {_renderInput("Total N0. of Invoices", "TAT123DS2")}
                  {_renderInput("", "")}
                </Stack>
              </>
            }
          />
          <Tree
            label="Custom Fields"
            _dark={_dark}
            component={
              <>
                <Stack spacing={2} direction="row">
                  {_renderInput("ERP Cross Ref No", "232432422")}
                  {_renderInput("#2", "")}
                </Stack>
                <Stack spacing={2} direction="row">
                  {_renderInput("#3", "")}
                  {_renderInput("#4", "")}
                </Stack>
                <Stack spacing={2} direction="row">
                  {_renderInput("#5", "")}
                  {_renderInput("", "")}
                </Stack>
              </>
            }
          />
          <Tree
            label="Invoices"
            _dark={_dark}
            component={
              <>
                <InvoiceGrid
                  backFlow={props.backFlow}
                  _dark={_dark}
                  ShowInvoiceDetails={props.ShowInvoiceDetails}
                />
              </>
            }
          />
        </Grid>
        <Grid xs={3}>
          <FUWorkFlow backFlow={props.backFlow} _dark={_dark} />
        </Grid>
      </Grid>
    </>
  );
};
export default Fudetails;
