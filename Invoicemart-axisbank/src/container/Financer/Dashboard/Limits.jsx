import { Typography } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import CustomSelect from "../../../components/Dashboard/DropDownCmp";
import DataGrid from "../../../components/DataGrid";
import { LimitsData } from "../../../mock/DashboardData";

const columns = [
  {
    field: "buyer",
    flex: 1,
    minWidth: 66,
    headerName: "Buyer",
  },
  {
    field: "limit",
    flex: 1,
    minWidth: 66,
    headerName: "Limit ava...",
  },
  {
    field: "percentage",
    flex: 1,
    minWidth: 66,
    headerName: "Percent...",
  },
  {
    field: "expiry",
    flex: 1,
    minWidth: 66,
    headerName: "Expiry",
  },
];

const useStyles = makeStyles({
  DspFlxEvnCls: {
    display: "flex",
    justifyContent: "space-between",
    paddingLeft: "20px",
    paddingRight: "10px",
    marginTop: "5px",
  },
});
const Repayment = (props) => {
  const classes = useStyles();
  const Limitddl = [
    { name: "By % used", value: "1" },
    { name: "By Limit Available", value: "2" },
    { name: "By Expiry", value: "3" },
  ];
  return (
    <div style={{ height: "315px" }}>
      <div className={classes.DspFlxEvnCls}>
        <Typography
          variant="h6"
          fontSize="16px"
          fontWeight="bold"
          fontFamily="lato"
        >
          {" "}
          Limits Expiry
        </Typography>
        <div>
          <CustomSelect
            style={{
              position: "relative",
              top: "-10px",
              fontWeight: "400",
              fontSize: "12px",
            }}
            data={Limitddl}
            width="133px"
          />
        </div>
      </div>
      <DataGrid
        style={{
          marginTop: "20px",
          fontSize: "14px",
          fontWeight: "400",
          width: "96%",
          marginLeft: "10px",
        }}
        rows={LimitsData}
        columns={columns}
        pageOpt={[5]}
        pagination={false}
        hideFooter={true}
        _dark={props._dark}
      />
    </div>
  );
};
export default Repayment;
