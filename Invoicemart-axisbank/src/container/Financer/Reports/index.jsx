import React, { useState } from "react";
import Button from "@mui/material/Button";
import { Typography, Grid, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import DataGrid from "../../../components/DataGrid";
import { ReportData } from "../../../mock/ReportData";
import Fuoutstanding from "./FuOutStandingCard";
import AccountStatementCard from "./AccountStatement";
import FuDiscounted from "./FuDiscounted";
import FuSettlement from "./FuSettlement";
import TransactionAdvice from "./TransactionAdvice";
import LimitUtilization from "./LimitUtilization";
import Bids from "./Bids";
import DueDate from "./DueDateOutstanding";
import RealTimeObligation from "./RelaTimeObli";
import BuyerWiseLimit from "./BuyerWiseLimit";
import ReconcileUser from "./ReconcileUser";
import ReconcileBuyer from "./ReconcileBuyer";

const columns = [
  {
    field: "Report",
    flex: 1,
    minWidth: 66,
    headerName: "Report Name",
  },
  {
    field: "Request",
    flex: 1,
    minWidth: 66,
    headerName: "Requested on",
  },
  {
    field: "Status",
    flex: 1,
    minWidth: 66,
    headerName: "Status",
  },
  {
    field: "File",
    flex: 1,
    minWidth: 66,
    headerName: "File Type",
  },
  {
    field: "Download",
    flex: 1,
    minWidth: 66,
    headerName: "Download Link",
    renderCell: (params) => (
      <Typography
        style={{
          color: "#97144d",
          fontSize: "14px",
          textDecoration: "underline",
        }}
      >
        Lorem Ipsum dolor sit amet,consectur adipiscing elit , sed do
      </Typography>
    ),
  },
];

export default function Report(props) {
  const _dark = props._dark ? props._dark : false;
  // console.log("reporsts", _dark);
  const [value, setValue] = useState(1);
  const [pageSize, setPageSize] = React.useState(5);

  const ReportMenuBtnName = [
    { id: 1, name: "Account Statement" },
    { id: 2, name: "FU Outstanding" },
    { id: 3, name: "FU Discounted" },
    { id: 4, name: "FU Settlement" },
    { id: 5, name: "Transaction Advice" },
    { id: 6, name: "Limit Utilization" },
    { id: 7, name: "Bids" },
  ];
  const ReportMenuBtmBtnName = [
    { id: 8, name: "Due date for outstanding FU" },
    { id: 9, name: "Real Time Obligation" },
    { id: 10, name: "Buyerwise Limit Utilization" },
    { id: 11, name: "Reconcile User configuration" },
    { id: 12, name: "Reconcile Buyer configuration" },
  ];

  const useStyles = makeStyles({
    TypHdrCls: {
      fontFamily: "lato",
      fontSize: "18px",
      fontWeight: "700",
      marginTop: "10px",
      paddingLeft: "10px",
    },
    BtnCls: {
      width: "13%",
      height: "40px",
      fontSize: "14px",
      fontWeight: "700",
      fontFamily: "lato",
      borderRadius: "6px",
      marginTop: "20px",
      marginRight: "10px",
      textTransform: "capitalize",
    },
    BtmBtnCls: {
      border: `1px solid ${_dark ? "#ffffff" : "#97144D"}`,
      width: "18.55%",
      height: "40px",
      fontSize: "14px",
      fontWeight: "700",
      fontFamily: "lato",
      borderRadius: "6px",
      marginRight: "10px",
      marginTop: "10px",
      textTransform: "capitalize",
      display: "inlineBlock",
    },

    DivBtnCls: {
      marginTop: "20px",
    },
    TblCls: {
      marginTop: "20px",
    },
  });
  const classes = useStyles();
  function ReportBtnClk(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  const ListRender = (id) => {
    setValue(id);
  };

  return (
    <div>
      <Typography className={classes.TypHdrCls}> Report Generation</Typography>
      {ReportMenuBtnName.map((_menu) => (
        <Button
          onClick={() => {
            ListRender(_menu.id);
          }}
          className={classes.BtnCls}
          style={{
            background:
              value === _menu.id ? "#97144d" : _dark ? "#181818" : "#ffffff",
            color: value === _menu.id ? "#fff" : _dark ? "#fff" : "#97144d",
            border: `1px solid ${
              value === _menu.id ? "#97144d" : _dark ? "#ffffff" : "#97144D"
            }`,
          }}
        >
          {_menu.name}
        </Button>
      ))}
      {ReportMenuBtmBtnName.map((_menu) => (
        <Button
          onClick={() => {
            ListRender(_menu.id);
          }}
          className={classes.BtmBtnCls}
          style={{
            background:
              value === _menu.id ? "#97144d" : _dark ? "#181818" : "#ffffff",
            color: value === _menu.id ? "#fff" : _dark ? "#fff" : "#97144d",
            border: `1px solid ${
              value === _menu.id ? "#97144d" : _dark ? "#ffffff" : "#97144D"
            }`,
          }}
        >
          {_menu.name}
        </Button>
      ))}
      <Grid>
        {value === 1 ? (
          <ReportBtnClk value={value} index={1}>
            <AccountStatementCard _dark={_dark} />
          </ReportBtnClk>
        ) : value === 2 ? (
          <ReportBtnClk value={value} index={2}>
            <Fuoutstanding _dark={_dark} />
          </ReportBtnClk>
        ) : value === 3 ? (
          <ReportBtnClk value={value} index={3}>
            <FuDiscounted _dark={_dark} />
          </ReportBtnClk>
        ) : value === 4 ? (
          <ReportBtnClk value={value} index={4}>
            <FuSettlement _dark={_dark} />
          </ReportBtnClk>
        ) : value === 5 ? (
          <ReportBtnClk value={value} index={5}>
            <TransactionAdvice _dark={_dark} />
          </ReportBtnClk>
        ) : value === 6 ? (
          <ReportBtnClk value={value} index={6}>
            <LimitUtilization _dark={_dark} />
          </ReportBtnClk>
        ) : value === 7 ? (
          <ReportBtnClk value={value} index={7}>
            <Bids _dark={_dark} />
          </ReportBtnClk>
        ) : value === 8 ? (
          <ReportBtnClk value={value} index={8}>
            <DueDate _dark={_dark} />
          </ReportBtnClk>
        ) : value === 9 ? (
          <ReportBtnClk value={value} index={9}>
            <RealTimeObligation _dark={_dark} />
          </ReportBtnClk>
        ) : value === 10 ? (
          <ReportBtnClk value={value} index={10}>
            <BuyerWiseLimit _dark={_dark} />
          </ReportBtnClk>
        ) : value === 11 ? (
          <ReportBtnClk value={value} index={11}>
            <ReconcileUser _dark={_dark} />
          </ReportBtnClk>
        ) : (
          <ReportBtnClk value={value} index={12}>
            <ReconcileBuyer _dark={_dark} />
          </ReportBtnClk>
        )}
      </Grid>
      <Card style={{ marginTop: "40px", boxShadow: "0 3px 5px #bebebe" }}>
        <CardContent>
          <DataGrid
            style={{ marginTop: "20px", fontSize: "14px", fontWeight: "400" }}
            rows={ReportData}
            columns={columns}
            pageNum={pageSize}
            onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
            pageOpt={[10, 25, 50]}
            _dark={props._dark}
          />
        </CardContent>
      </Card>
    </div>
  );
}
