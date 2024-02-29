import { Typography } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import CustomSelect from "../../../components/Dashboard/DropDownCmp";
import DataGrid from "../../../components/DataGrid";
import { QuickActionData } from "../../../mock/DashboardData";
import Button from "@mui/material/Button";
import BidIcon from "../../../assets/Icons/bidicon.png";

const useStyles = makeStyles({
  DspFlxEvnCls: {
    display: "flex",
    justifyContent: "space-between",
    paddingLeft: "20px",
    paddingRight: "5px",
    marginTop: "4px",
  },
  BtnCls: {
    color: "#971448",
    width: "70%",
    height: "30px",
    backgroundColor: "transparent",
    border: "1px solid #971448",
    borderRadius: 8,
    paddingTop: "6px",
    display: "flex",
    justifyContent: "space-around",
    fontSize: "14px",
    fontWeight: "700",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#f5e8ed",
    },
  },
});

const QuickAction = (props) => {
  const classes = useStyles();

  const columns = [
    {
      field: "placebid",
      flex: 1,
      minWidth: 66,
      headerName: "Place Bid",
      renderCell: (params) => (
        <Button className={classes.BtnCls}>
          <img src={BidIcon} alt="bidicon" width="23%" color="#97144d" />
          BID
        </Button>
      ),
    },
    {
      field: "buyer",
      flex: 1,
      minWidth: 66,
      headerName: "Buyer",
    },
    {
      field: "countfu",
      flex: 1,
      minWidth: 66,
      headerName: "Count of FU",
    },
    {
      field: "totalfu",
      flex: 1,
      minWidth: 66,
      headerName: "Total FU Amount",
    },
  ];

  const QuickActionddl = [
    { name: "Highest Value", value: "1" },
    { name: "Top Buyers", value: "2" },
    { name: "My Favourite Buyers", value: "3" },
  ];

  return (
    <div style={{ height: "350px" }}>
      <div className={classes.DspFlxEvnCls}>
        <Typography
          variant="h6"
          fontSize="16px"
          fontWeight="700"
          fontFamily="lato"
        >
          Quick Action
        </Typography>
        <div>
          <CustomSelect
            style={{
              position: "relative",
              top: -10,
              fontWeight: "400",
              fontSize: "12px",
            }}
            data={QuickActionddl}
            width="150px"
          />
        </div>
      </div>

      <DataGrid
        style={{
          marginTop: "30px",
          fontSize: "14px",
          fontWeight: "400",
          width: "97%",
          marginLeft: "10px",
        }}
        rows={QuickActionData}
        columns={columns}
        pageNum={5}
        _dark={props._dark}
        chkselection={false}
        customtoolbar={false}
        pagination={false}
        hideFooter={true}
      />
    </div>
  );
};
export default QuickAction;
