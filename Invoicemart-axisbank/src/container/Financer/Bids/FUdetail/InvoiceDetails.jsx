import React from "react";
import { Box, Grid, Typography, Stack } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const InvoiceDetails = (props) => {
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
    { SNO: 1, desc: "Samsung", qty: 2, price: 101001.1, Tprice: 2020202.2 },
  ];

  return (
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
          <Typography className={classes.psaCls} sx={{ textAlign: "left" }}>
            Register Address 1 Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud Bhivani -
            523305, Haryana
          </Typography>
          <Typography className={classes.psaCls} sx={{ textAlign: "left" }}>
            <span style={{ fontWeight: 700 }}>Email ID</span> : fa@asds.high
          </Typography>
        </Grid>
        <Grid sx={{ textAlign: "center", width: "100%" }}>
          <Typography className={classes.psaCls} sx={{ textAlign: "center" }}>
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
              <span style={{ fontWeight: 700 }}>Order No.</span> : POO98745
            </Typography>
          </Grid>
          <Grid
            item
            xs={6}
            sx={{ borderLeft: "solid 1px #CBCBCB", padding: "15px" }}
          >
            <Typography className={classes.psaCls}>
              <span style={{ fontWeight: 700 }}>Date</span> : 31/Jun{" "}
            </Typography>
            <Typography className={classes.psaCls}>
              <span style={{ fontWeight: 700 }}>Due on</span> : 31/Jun{" "}
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
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud Bangalore
            </Typography>
            <Typography className={classes.psaCls}>
              <span style={{ fontWeight: 700 }}>State</span> : Karnataka
            </Typography>
            <Typography className={classes.psaCls}>
              <span style={{ fontWeight: 700 }}>GSTIN</span> : J29KBUY1234E000
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
              <span style={{ fontWeight: 700 }}>Shipped to</span> : JKBuyer
              Invoice Report
            </Typography>
            <Typography className={classes.psaCls}>
              Register Address 1 Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              Chikkabulapur
            </Typography>
            <Typography className={classes.psaCls}>
              <span style={{ fontWeight: 700 }}>State</span> : Karnataka
            </Typography>
            <Typography className={classes.psaCls}>
              <span style={{ fontWeight: 700 }}>GSTIN</span> : J29KBUY1234E000
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
                  <TableCell className={classes.tableCls}>Quantity</TableCell>
                  <TableCell className={classes.tableCls}>Rate</TableCell>
                  <TableCell className={classes.tableCls}>Amount</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
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
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item xs={6}></Grid>
        <Grid item xs={6} sx={{ padding: "15px", textAlign: "right" }}>
          <Typography className={classes.psaCls}>
            <span style={{ fontWeight: 700 }}>Gross Amount</span> : Rs.
            6066195.4
          </Typography>
          <Typography className={classes.psaCls}>
            <span style={{ fontWeight: 700 }}>Deductions</span> : Rs. 1678
          </Typography>
          <Typography className={classes.psaCls}>
            <span style={{ fontWeight: 700 }}>Taxes</span> : Rs. 7490
          </Typography>
        </Grid>
        <Grid
          sx={{ padding: "15px", border: "solid 1px #CBCBCB", width: "100%" }}
        >
          <Typography className={classes.psaCls}>
            <span>
              <span style={{ fontWeight: 700 }}>Net Amount</span> :
            </span>{" "}
            Sixty Lakh, Sixty Six Thousand One Hundred and Ninety Five Rupees
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
                backgroundColor: props._dark ? "#181818" : "#F9F9F9",
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
          color: props._dark ? "#ffffff" : "#404040",
        }}
      >
        {"Custom fields"}
      </h3>
      <Stack spacing={3} direction="row">
        <Typography className={classes.psaCls} style={{ width: "32%" }}>
          <span style={{ fontWeight: 700 }}>Quality Check ID</span> : QC1234567
        </Typography>
        <Typography className={classes.psaCls} style={{ width: "32%" }}>
          <span style={{ fontWeight: 700 }}>Gate Entry Ticket</span> : QC1234567
        </Typography>
        <Typography className={classes.psaCls} style={{ width: "32%" }}>
          <span style={{ fontWeight: 700 }}>#3</span> : #3
        </Typography>
      </Stack>
    </Box>
  );
};
export default InvoiceDetails;
