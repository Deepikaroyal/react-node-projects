import React from "react";
import { Stack, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { Button } from "@mui/material";
import AcceptIcon from "../../../../assets/SvgIcons/AcceptBtn.svg";
import AcceptDarkIcon from "../../../../assets/SvgIcons/Acceptdark.svg";

const AcceptLowestBid = (props) => {
  const _dark = props._dark ? props._dark : false;
  const useStyles = makeStyles({
    btnCls: {
      color: `${_dark ? "#ffffff" : "#97144D"} !important`,
      padding: "8px 10px 8px 10px",
      borderRadius: `4px !important`,
      textTransform: "uppercase !important",
      fontSize: "12px !important",
      fontFamily: "Lato",
      lineHeight: "18px",
      border: `1px solid ${_dark ? "#ffffff" : "#97144D"}`,
      marginRight: 15,
      fontWeight: 700,
      marginBottom: 10,
      marginTop: 10,
      width: "10%",
    },
    TypHdrCls: {
      color: `${_dark ? "#ffffff" : "#97144D"} !important`,
      marginLeft: "10px",
      marginRight: "15px",
    },
    stpCls: {
      cursor: "pointer",
      fontSize: "14px",
      fontFamily: "Lato",
      fontWeight: 400,
      lineHeight: "24px",
      width: "45%",
      paddingTop: 20,
      marginLeft: "10px",
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
    TblStyCls: {
      border: "1px solid #f1f1f1",
      padding: "10px",
      fontSize: "14px",
      fontFamily: "lato",
    },
  });
  const classes = useStyles();
  return (
    <div>
      <div style={{ display: "flex" }}>
        <strong className={classes.TypHdrCls}>Accept Bid</strong>
        <img
          src={_dark ? AcceptDarkIcon : AcceptIcon}
          height="21"
          alt="workflow"
        />
      </div>
      <Stack direction="row" paddingBottom="40px">
        <Typography className={classes.stpCls}>
          <strong> FUNumber </strong>
          <br />
          RFU250710023566
        </Typography>
        <Typography className={classes.stpCls}>
          <strong>Raised Date </strong>
          <br />
          10/08/2022
        </Typography>
        <Typography className={classes.stpCls}>
          <strong>FU Amount (₹) </strong>
          <br />
          50000.00
        </Typography>
        <Typography className={classes.stpCls}>
          <strong>Financing Requirements (%) </strong>
          <br />
          100.00
        </Typography>
      </Stack>
      <Stack spacing={2} direction="row" paddingBottom="40px">
        <Typography className={classes.stpCls}>
          <strong>Tenor (Days)</strong>
          <br />7
        </Typography>
        <Typography className={classes.stpCls}>
          <strong>Due Date </strong>
          <br />
          10/09/2022
        </Typography>
        <Typography className={classes.stpCls}>
          <strong>Exposure On </strong>
          <br />
          BUYER
        </Typography>
        <Typography className={classes.stpCls}>
          <strong>Sector / Industry </strong>
          <br />
          Extraction Of Crude Petroleum
        </Typography>
      </Stack>
      <Stack direction="row" spacing={2} paddingBottom="40px">
        <Typography className={classes.stpCls}>
          <strong> Buyer Name</strong>
          <br />
          1000001466 BUYER
        </Typography>
        <Typography className={classes.stpCls}>
          <strong>Seller Name </strong>
          <br />
          KGN LIMITED
        </Typography>
        <Typography className={classes.stpCls}></Typography>
        <Typography className={classes.stpCls}></Typography>
      </Stack>
      <hr style={{ borderTop: "dashed 1.5px", color: "grey" }} />

      <Stack direction="row" spacing={2} paddingBottom="40px">
        <Typography className={classes.stpCls}>
          <strong style={{ color: "#97144D" }}> Financier Name</strong>
          <strong>
            <br />
            1000001466 FINANCER{" "}
          </strong>
        </Typography>
        <Typography className={classes.stpCls}>
          <strong style={{ color: "#97144D" }}>ROI (%)</strong>
          <strong>
            {" "}
            <br />
            9.00
          </strong>
        </Typography>
        <Typography className={classes.stpCls}>
          {" "}
          <strong style={{ color: "#97144D" }}>Validity Period </strong>
          <strong>
            <br />
            10/09/2022
          </strong>
        </Typography>
        <Typography className={classes.stpCls}>
          {" "}
          <strong style={{ color: "#97144D" }}>Finance Offered(%) </strong>
          <br />
          <strong>10/09/2022 </strong>
        </Typography>
      </Stack>

      <Table className={classes.container} style={{ width: "50%" }}>
        <TableRow style={{ backgroundColor: "#97144D" }}>
          <TableCell
            style={{
              fontSize: "14px",
              fontWeight: "700",
              fontFamily: "lato",
              padding: "10px",
              color: "white",
              borderBottom: "none",
              marginLeft: "10px",
            }}
            colSpan={2}
          >
            AMOUNT BREAK-UP (In ₹){" "}
          </TableCell>
        </TableRow>
        <TableRow
          style={{ border: "1px solid #f1f1f1", background: "#ebecf0" }}
        >
          <TableCell className={classes.TblStyCls}>
            <strong>Total Financed Amount</strong>
          </TableCell>
          <TableCell
            className={classes.TblStyCls}
            style={{ textAlign: "right", color: "#97144d" }}
          >
            <strong>50000.00</strong>
          </TableCell>
        </TableRow>
        <TableRow style={{ border: "1px solid #f1f1f1" }}>
          <TableCell className={classes.TblStyCls}>Interest Charges</TableCell>
          <TableCell
            className={classes.TblStyCls}
            style={{ textAlign: "right" }}
          >
            73.95
          </TableCell>
        </TableRow>
        <TableRow
          style={{ border: "1px solid #f1f1f1", background: "#ebecf0" }}
        >
          <TableCell className={classes.TblStyCls}>TReDs Charges</TableCell>
          <TableCell
            className={classes.TblStyCls}
            style={{ textAlign: "right" }}
          >
            22.79
          </TableCell>
        </TableRow>
        <TableRow style={{ border: "1px solid #f1f1f1" }}>
          <TableCell className={classes.TblStyCls}>Net Amount</TableCell>
          <TableCell
            className={classes.TblStyCls}
            style={{ textAlign: "right" }}
          >
            96.76
          </TableCell>
        </TableRow>
      </Table>
      <div style={{ display: " flex", justifyContent: "flex-end" }}>
        <Button
          className={classes.btnCls}
          onClick={() => {
            props.handleClose();
          }}
        >
          Back
        </Button>
        <Button className={classes.btnCls}>Submit</Button>
      </div>
    </div>
  );
};

export default AcceptLowestBid;
