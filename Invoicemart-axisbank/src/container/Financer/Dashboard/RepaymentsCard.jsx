import { Typography } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import CustomSelect from "../../../components/Dashboard/DropDownCmp";
import DataGrid from "../../../components/DataGrid";
import { RepaymentData } from "../../../mock/DashboardData";

const columns = [
  {
    field: "buyer",
    flex: 1,
    minWidth: 66,
    headerName: "Buyer",
  },
  {
    field: "amount",
    flex: 1,
    minWidth: 66,
    headerName: "Amount",
  },
  {
    field: "date",
    flex: 1,
    minWidth: 66,
    headerName: "Date",
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
  const Repaymentddl = [
    { name: "By Date", value: "1" },
    { name: "By Amount", value: "2" },
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
          Top Repayments
        </Typography>
        <div>
          <CustomSelect
            style={{
              position: "relative",
              top: "-10px",
              fontWeight: "400",
              fontSize: "12px",
            }}
            data={Repaymentddl}
            width="100px"
          />
        </div>
      </div>
      <DataGrid
        style={{
          marginTop: "20px",
          fontSize: "14px",
          fontWeight: "400",
          width: "94%",
          marginLeft: "10px",
        }}
        rows={RepaymentData}
        columns={columns}
        // pageNum={pageSize}
        // onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        pageOpt={[5]}
        pagination={false}
        hideFooter={true}
        _dark={props._dark}
      />
    </div>
  );
};
export default Repayment;
