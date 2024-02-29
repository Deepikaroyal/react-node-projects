import React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { Grid, Typography, Stack } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import BackButton from "../../../../components/Common/BackButton";
import moment from "moment";
import { useState } from "react";
import { useEffect } from "react";
import { getInvoiceDetails } from "../../../../api/bids";

const style = {
  position: "absolute",
  top: 60,
  right: "0%",
  width: "65%",
  height: "90%",
  bgcolor: "background.paper",
  boxShadow: 24,
  overflowY: "scroll",
  overflowX: "hidden",
  p: 4,
};

export default function InoviceModal(props) {
  // console.log("Invoice Modal Props", props)
  const _dark = props._dark ? props._dark : false;
  const open = props.open;
  const invoiceDetails = props.data
    ? props.data.filter((item) => item.invNum === props.InvoiceId)
    : [];
  const invoiceNum = props.InvoiceId ? [props.InvoiceId] : [];
  // console.log("invoiceNum", invoiceNum, invoiceDetails[0])

  const useStyles = makeStyles({
    psaCls: {
      cursor: "pointer",
      fontSize: "18px",
      fontFamily: "Lato",
      fontWeight: 400,
      lineHeight: "21px",
      paddingTop: 10,
      paddingBottom: 10,
    },
    tableCls: {
      cursor: "pointer",
      fontSize: "18px",
      fontFamily: "Lato",
      fontWeight: 700,
      lineHeight: "21px",
      borderRight: "solid 1px #CBCBCB",
    },
  });
  const classes = useStyles();

  const rows = [
    {
      SNO: 1,
      desc: invoiceDetails[0].invLineItemOneDesc,
      qty: invoiceDetails[0].invLineItemOneQty,
      price: invoiceDetails[0].invLineItemOneRatePerUnit,
      Tprice: invoiceDetails[0].invLineItemOneAmt,
    },
    {
      SNO: 2,
      desc: invoiceDetails[0].invLineItemTwoDesc,
      qty: invoiceDetails[0].invLineItemTwoQty,
      price: invoiceDetails[0].invLineItemTwoRatePerUnit,
      Tprice: invoiceDetails[0].invLineItemTwoAmt,
    },
    {
      SNO: 3,
      desc: invoiceDetails[0].invLineItemThreeDesc,
      qty: invoiceDetails[0].invLineItemThreeQty,
      price: invoiceDetails[0].invLineItemThreeRatePerUnit,
      Tprice: invoiceDetails[0].invLineItemThreeAmt,
    },
    {
      SNO: 4,
      desc: invoiceDetails[0].invLineItemFourDesc,
      qty: invoiceDetails[0].invLineItemFourQty,
      price: invoiceDetails[0].invLineItemFourRatePerUnit,
      Tprice: invoiceDetails[0].invLineItemFourAmt,
    },
    {
      SNO: 5,
      desc: invoiceDetails[0].invLineItemFiveDesc,
      qty: invoiceDetails[0].invLineItemFiveQty,
      price: invoiceDetails[0].invLineItemFiveRatePerUnit,
      Tprice: invoiceDetails[0].invLineItemFiveAmt,
    },
  ];
  const _renderDate = (_date) => {
    return (
      moment(new Date(_date)).format("DD") +
      "/" +
      moment(new Date(_date)).format("MMM") +
      "/" +
      moment(new Date(_date)).format("yy")
    );
  };
  const _renderNetAmountInWords = (_netAmount) => {
    var a = [
      "",
      "One ",
      "Two ",
      "Three ",
      "Four ",
      "Five ",
      "Six ",
      "Seven ",
      "Eight ",
      "Nine ",
      "Ten ",
      "Eleven ",
      "Twelve ",
      "Thirteen ",
      "Fourteen ",
      "Fifteen ",
      "Sixteen ",
      "Seventeen ",
      "Eighteen ",
      "Nineteen ",
    ];
    var b = [
      "",
      "",
      "Twenty",
      "Thirty",
      "Fourty",
      "Fifty",
      "Sixty",
      "Seventy",
      "Eighty",
      "Ninety",
    ];
    if ((_netAmount = _netAmount.toString()).length > 9) return "Overflow";
    var n = ("000000000" + _netAmount)
      .substr(-9)
      .match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
    if (!n) return;
    var str = "";
    str +=
      n[1] != 0
        ? (a[Number(n[1])] || b[n[1][0]] + " " + a[n[1][1]]) + "Crore, "
        : "";
    str +=
      n[2] != 0
        ? (a[Number(n[2])] || b[n[2][0]] + " " + a[n[2][1]]) + "Lakh, "
        : "";
    str +=
      n[3] != 0
        ? (a[Number(n[3])] || b[n[3][0]] + " " + a[n[3][1]]) + "Thousand "
        : "";
    str +=
      n[4] != 0
        ? (a[Number(n[4])] || b[n[4][0]] + " " + a[n[4][1]]) + "Hundred "
        : "";
    str +=
      n[5] != 0
        ? (str != "" ? "and " : "") +
          (a[Number(n[5])] || b[n[5][0]] + " " + a[n[5][1]]) +
          "Rupees "
        : "";
    if (str.includes("Rupees ")) {
      return str;
    }
    return str + "Rupees ";
  };
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={props.handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <Box sx={style} style={{ backgroundColor: _dark ? "#282828" : "#fff" }}>
          <h3
            className="fu-listing"
            style={{
              borderBottom: "solid 1px #CBCBCB",
              color: _dark ? "#ffffff" : "#404040",
            }}
          >
            {"INV"} {props.InvoiceId}
          </h3>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container>
              <Grid
                sx={{
                  padding: "15px",
                  border: "solid 1px #CBCBCB",
                  textAlign: "center",
                }}
              >
                <Typography className={classes.psaCls}>PSASELLER</Typography>
                <Typography
                  className={classes.psaCls}
                  sx={{ textAlign: "left" }}
                >
                  Register Address 1 Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  Bhivani - 523305, Haryana
                </Typography>
                <Typography
                  className={classes.psaCls}
                  sx={{ textAlign: "left" }}
                >
                  <span style={{ fontWeight: 700 }}>Email ID</span> :
                  fa@asds.high
                </Typography>
              </Grid>
              <Grid sx={{ textAlign: "center", width: "100%" }}>
                <Typography
                  className={classes.psaCls}
                  sx={{ textAlign: "center" }}
                >
                  TAX INVOICE
                </Typography>
              </Grid>
              <Grid
                container
                item
                sx={{ border: "solid 1px #CBCBCB", padding: "15px" }}
              >
                <Grid item xs={6} sx={{ padding: "15px" }}>
                  <Typography className={classes.psaCls}>
                    <span style={{ fontWeight: 700 }}>Tax Inv No.</span> :
                    INV51777770008
                  </Typography>
                  <Typography className={classes.psaCls}>
                    <span style={{ fontWeight: 700 }}>Order No.</span> :
                    POO98745
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={6}
                  sx={{ borderLeft: "solid 1px #CBCBCB", padding: "15px" }}
                >
                  <Typography className={classes.psaCls}>
                    <span style={{ fontWeight: 700 }}>Date</span> :{" "}
                    {_renderDate(invoiceDetails[0].invDate)}{" "}
                  </Typography>
                  <Typography className={classes.psaCls}>
                    <span style={{ fontWeight: 700 }}>Due on</span> :{" "}
                    {_renderDate(invoiceDetails[0].invDueDate)}{" "}
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={6}
                  sx={{
                    borderTop: "solid 1px #CBCBCB",
                    borderBottom: "solid 1px #CBCBCB",
                    padding: "15px",
                  }}
                >
                  <Typography className={classes.psaCls}>
                    <span style={{ fontWeight: 700 }}>Billed to</span> : JKBuyer
                  </Typography>
                  <Typography className={classes.psaCls}>
                    jkbuyer communication address 1 Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud Bangalore
                  </Typography>
                  <Typography className={classes.psaCls}>
                    <span style={{ fontWeight: 700 }}>State</span> : Karnataka
                  </Typography>
                  <Typography className={classes.psaCls}>
                    <span style={{ fontWeight: 700 }}>GSTIN</span> :
                    J29KBUY1234E000
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={6}
                  sx={{
                    borderTop: "solid 1px #CBCBCB",
                    borderLeft: "solid 1px #CBCBCB",
                    borderBottom: "solid 1px #CBCBCB",
                    padding: "15px",
                  }}
                >
                  <Typography className={classes.psaCls}>
                    <span style={{ fontWeight: 700 }}>Shipped to</span> :
                    JKBuyer Invoice Report
                  </Typography>
                  <Typography className={classes.psaCls}>
                    Register Address 1 Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud Chikkabulapur
                  </Typography>
                  <Typography className={classes.psaCls}>
                    <span style={{ fontWeight: 700 }}>State</span> : Karnataka
                  </Typography>
                  <Typography className={classes.psaCls}>
                    <span style={{ fontWeight: 700 }}>GSTIN</span> :
                    J29KBUY1234E000
                  </Typography>
                </Grid>
                <TableContainer component={Grid}>
                  <Table sx={{ minWidth: 700 }} aria-label="spanning table">
                    <TableHead>
                      <TableRow>
                        <TableCell className={classes.tableCls}>SNO.</TableCell>
                        <TableCell className={classes.tableCls}>
                          Description of Goods
                        </TableCell>
                        <TableCell className={classes.tableCls}>
                          Quantity
                        </TableCell>
                        <TableCell className={classes.tableCls}>Rate</TableCell>
                        <TableCell className={classes.tableCls}>
                          Amount
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row) => {
                        if (
                          row.SNO &&
                          row.desc &&
                          row.qty &&
                          row.price &&
                          row.Tprice
                        ) {
                          return (
                            <TableRow key={row.SNO}>
                              <TableCell
                                className={classes.tableCls}
                                style={{ fontWeight: 400 }}
                              >
                                {row.SNO}
                              </TableCell>
                              <TableCell
                                className={classes.tableCls}
                                style={{ fontWeight: 400 }}
                              >
                                {row.desc}
                              </TableCell>
                              <TableCell
                                className={classes.tableCls}
                                style={{ fontWeight: 400 }}
                              >
                                {row.qty}
                              </TableCell>
                              <TableCell
                                className={classes.tableCls}
                                style={{ fontWeight: 400 }}
                              >
                                Rs. {row.price}
                              </TableCell>
                              <TableCell
                                className={classes.tableCls}
                                style={{ fontWeight: 400 }}
                              >
                                Rs. {row.Tprice}
                              </TableCell>
                            </TableRow>
                          );
                        }
                      })}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>
              <Grid item xs={6}></Grid>
              <Grid item xs={6} sx={{ padding: "15px", textAlign: "right" }}>
                <Typography className={classes.psaCls}>
                  <span style={{ fontWeight: 700 }}>Gross Amount</span> : Rs.
                  {invoiceDetails[0].invGrossAmount}
                </Typography>
                <Typography className={classes.psaCls}>
                  <span style={{ fontWeight: 700 }}>Deductions</span> : Rs. 1678
                </Typography>
                <Typography className={classes.psaCls}>
                  <span style={{ fontWeight: 700 }}>Taxes</span> : Rs. 7490
                </Typography>
              </Grid>
              <Grid
                sx={{
                  padding: "15px",
                  border: "solid 1px #CBCBCB",
                  width: "100%",
                }}
              >
                <Typography className={classes.psaCls}>
                  <span>
                    <span style={{ fontWeight: 700 }}>Net Amount</span> :
                  </span>{" "}
                  {_renderNetAmountInWords(invoiceDetails[0].invNetAmount)}
                </Typography>
              </Grid>
              <Grid
                sx={{
                  mt: 1,
                  padding: "11px",
                  paddingLeft: "0px",
                  border: "solid 1px #CBCBCB",
                  width: "100%",
                }}
              >
                <Typography className={classes.psaCls}>
                  <span
                    style={{
                      padding: "20px",
                      backgroundColor: _dark ? "#181818" : "#F9F9F9",
                      fontWeight: 700,
                    }}
                  >
                    Remarks:
                  </span>{" "}
                  This is remarks
                </Typography>
              </Grid>
            </Grid>
            <h3
              className="fu-listing"
              style={{
                borderBottom: "solid 1px #CBCBCB",
                color: _dark ? "#ffffff" : "#404040",
                backgroundColor: _dark ? "#181818" : "#F9F9F9",
                paddingTop: 15,
                paddingLeft: 10,
              }}
            >
              {"Custom fields"}
            </h3>
            <Stack spacing={2} direction="row">
              <Typography className={classes.psaCls} style={{ width: "50%" }}>
                <span style={{ fontWeight: 700 }}>Quality Check ID</span> :
                QC1234567
              </Typography>
              <Typography className={classes.psaCls} style={{ width: "50%" }}>
                <span style={{ fontWeight: 700 }}>Gate Entry Ticket</span> :
                QC1234567
              </Typography>
            </Stack>
            <Stack spacing={2} direction="row">
              <Typography className={classes.psaCls} style={{ width: "50%" }}>
                <span style={{ fontWeight: 700 }}>#3</span> : #3
              </Typography>
            </Stack>
            <div style={{ float: "left", padding: 15, paddingLeft: 0 }}>
              <BackButton
                sx={{ float: "right" }}
                width="50%"
                onClick={() => {
                  props.handleClose();
                }}
              />
            </div>
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
}
