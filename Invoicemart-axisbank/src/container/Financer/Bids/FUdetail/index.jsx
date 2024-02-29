/* eslint-disable */
import React, { useEffect } from "react";
import { Stack, Grid, Typography } from "@mui/material";
import Tree from "../../../../components/Treeview";
import InvoiceGrid from "./InvoiceItems";
import FUWorkFlow from "./FUWorkflow";
import { makeStyles } from "@mui/styles";
import moment from "moment";
import { getFuAdditionalDetail, getFuInvoiceFetch } from "../../../../api/bids";
import { useState } from "react";

const Fudetails = (props) => {
  // console.log('Fu details', props)
  const _dark = props._dark ? props._dark : false;
  const fuData = props.fuData ? props.fuData[0] : null;
  const fus = props.fuNumber ? [props.fuNumber] : [];
  const [invoiceData, setInvoiceDate] = useState([]);

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
  useEffect(() => {
    fetchAdditionalDetails();
    fetchInvoiceData();
  }, []);
  const fetchAdditionalDetails = async () => {
    let body = {
      fus: fus,
    };
    let data = await getFuAdditionalDetail(body);
    console.log("Additional Details", data);
  };
  const fetchInvoiceData = async () => {
    let body = {
      fus: fus,
      fetchStrategy: 1,
    };
    let data = await getFuInvoiceFetch(body);
    if (data) {
      setInvoiceDate(data);
    }
  };
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
  const _renderDate = (_date) => {
    return (
      moment(new Date(_date)).format("DD") +
      "/" +
      moment(new Date(_date)).format("MMM") +
      "/" +
      moment(new Date(_date)).format("yy")
    );
  };

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
                  {_renderInput(
                    "Associated Company",
                    fuData ? fuData.data.associatedCompany : ""
                  )}
                  {_renderInput(
                    "Authorised By",
                    fuData ? fuData.data.buyerAuthorisor : ""
                  )}
                </Stack>
                <Stack spacing={2} direction="row">
                  {_renderInput(
                    "Authorised Date",
                    fuData ? _renderDate(fuData.data.buyerAuthorisedDate) : "-"
                  )}
                  {_renderInput("Auto Authorisation", "-")}
                </Stack>
                <Stack spacing={2} direction="row">
                  {_renderInput(
                    "Business Type",
                    fuData ? fuData.data.businessType : ""
                  )}
                  {_renderInput(
                    "Buyer Authorised Date",
                    fuData
                      ? moment(
                          new Date(fuData.data.buyerAuthorisedDate)
                        ).format("DD") +
                          "/" +
                          moment(
                            new Date(fuData.data.buyerAuthorisedDate)
                          ).format("MMM") +
                          "/" +
                          moment(
                            new Date(fuData.data.buyerAuthorisedDate)
                          ).format("yy")
                      : "-"
                  )}
                </Stack>
                <Stack spacing={2} direction="row">
                  {_renderInput(
                    "Buyer Authoriser",
                    fuData ? fuData.data.buyerAuthorisor : ""
                  )}
                  {_renderInput(
                    "Buyer Entity ID",
                    fuData ? fuData.data.buyerEntityId : ""
                  )}
                </Stack>
                <Stack spacing={2} direction="row">
                  {_renderInput(
                    "Buyer BU ID",
                    fuData ? fuData.data.buyerBuId : ""
                  )}
                  {_renderInput(
                    "Create Date",
                    fuData
                      ? moment(new Date(fuData.data.createdDate)).format("DD") +
                          "/" +
                          moment(new Date(fuData.data.createdDate)).format(
                            "MMM"
                          ) +
                          "/" +
                          moment(new Date(fuData.data.createdDate)).format("yy")
                      : ""
                  )}
                </Stack>
                <Stack spacing={2} direction="row">
                  {_renderInput(
                    "Buyer GST No.",
                    fuData ? fuData.data.byrGstNo : ""
                  )}
                  {_renderInput(
                    "Create By",
                    fuData ? fuData.data.createdBy : ""
                  )}
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
                  {_renderInput(
                    "Seller BU ID",
                    fuData ? fuData.data.sellerBuId : ""
                  )}
                  {_renderInput(
                    "Seller Entity ID",
                    fuData ? fuData.data.sellerEntityId : ""
                  )}
                </Stack>
                <Stack spacing={2} direction="row">
                  {_renderInput(
                    "Seller GST No.",
                    fuData ? fuData.data.slrGstNo : ""
                  )}
                  {_renderInput("Status Code", "Tata Steel")}
                </Stack>
                <Stack spacing={2} direction="row">
                  {_renderInput(
                    "Supplier Authorised Date",
                    fuData
                      ? moment(
                          new Date(fuData.data.supplierAuthorisedDate)
                        ).format("DD") +
                          "/" +
                          moment(
                            new Date(fuData.data.supplierAuthorisedDate)
                          ).format("MMM") +
                          "/" +
                          moment(
                            new Date(fuData.data.supplierAuthorisedDate)
                          ).format("yy")
                      : ""
                  )}
                  {_renderInput(
                    "Supplier Authorisor",
                    fuData ? fuData.data.supplierAuthorisor : ""
                  )}
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
                  {_renderInput(
                    "Disbursed Amount",
                    fuData ? fuData.data.disbursedAmount : ""
                  )}
                  {_renderInput(
                    "Disbursed Date",
                    fuData
                      ? moment(new Date(fuData.data.disbursedDate)).format(
                          "DD"
                        ) +
                          "/" +
                          moment(new Date(fuData.data.disbursedDate)).format(
                            "MMM"
                          ) +
                          "/" +
                          moment(new Date(fuData.data.disbursedDate)).format(
                            "yy"
                          )
                      : ""
                  )}
                </Stack>
                <Stack spacing={2} direction="row">
                  {_renderInput(
                    "FU Date",
                    fuData
                      ? moment(new Date(fuData.data.disbursedDate)).format(
                          "DD"
                        ) +
                          "/" +
                          moment(new Date(fuData.data.fuDate)).format("MMM") +
                          "/" +
                          moment(new Date(fuData.data.fuDate)).format("yy")
                      : ""
                  )}
                  {_renderInput(
                    "FU Due Date",
                    fuData
                      ? moment(new Date(fuData.data.fuDueDate)).format("DD") +
                          "/" +
                          moment(new Date(fuData.data.fuDueDate)).format(
                            "MMM"
                          ) +
                          "/" +
                          moment(new Date(fuData.data.fuDueDate)).format("yy")
                      : ""
                  )}
                </Stack>
                <Stack spacing={2} direction="row">
                  {_renderInput("FU No.", fuData ? fuData.data.fuNumber : "")}
                  {_renderInput(
                    "FU Outstanding Amount",
                    fuData ? fuData.data.fuOutstandingAmt : ""
                  )}
                </Stack>
                <Stack spacing={2} direction="row">
                  {_renderInput("Goods Type", "TAT123DS2")}
                  {_renderInput("Tenor", fuData ? fuData.data.tenor : "")}
                </Stack>
                <Stack spacing={2} direction="row">
                  {_renderInput(
                    "Total N0. of Invoices",
                    fuData ? fuData.data.totalNoOfInvoices : ""
                  )}
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
                  {_renderInput(
                    "ERP Cross Ref No",
                    fuData ? fuData.data.realisedRefNo : ""
                  )}
                  {_renderInput("#1", fuData ? fuData.data.customField1 : "")}
                </Stack>
                <Stack spacing={2} direction="row">
                  {_renderInput("#2", fuData ? fuData.data.customField2 : "")}
                  {_renderInput("#3", fuData ? fuData.data.customField3 : "")}
                </Stack>
                <Stack spacing={2} direction="row">
                  {_renderInput("#4", fuData ? fuData.data.customField4 : "")}
                  {_renderInput("#5", fuData ? fuData.data.customField5 : "")}
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
                  invoiceData={invoiceData}
                  fus={fus}
                />
              </>
            }
          />
        </Grid>
        <Grid xs={3}>
          <FUWorkFlow
            backFlow={props.backFlow}
            _dark={_dark}
            fuData={fuData}
            fus={props.fuNumber}
          />
        </Grid>
      </Grid>
    </>
  );
};
export default Fudetails;
