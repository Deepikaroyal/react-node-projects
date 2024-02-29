import React from "react";
import { Typography } from "@mui/material";
import PieChart from "../../../components/Dashboard/PieChart";
import CustomSelect from "../../../components/Dashboard/DropDownCmp";
import { makeStyles } from "@mui/styles";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

const useStyles = makeStyles({
  FormCls: {
    marginLeft: "60%",
  },
  DspFlxEvnCls: {
    display: "flex",
    justifyContent: "space-between",
    paddingLeft: "20px",
    paddingRight: "20px",
    marginTop: "5px",
  },
  DspFlxEvnTblCls: {
    display: "flex",
    justifyContent: "space-between",
    paddingLeft: "20px",
    paddingRight: "20px",
  },
  container: {
    marginLeft: "-40px",
    marginTop: "10px",
  },
  TblCelCls: {
    border: "1px solid #f1f1f1",
    padding: "5px",
    textAlign: "center",
    fontSize: "14px",
    fontFamily: "lato",
    fontWeight: "700",
  },
});

const Msme = () => {
  const classes = useStyles();
  const msmeTableData = [
    { name: "Micro", percent: "45%", value: "₹ 90.00", bgcolor: "#97144D" },
    { name: "Small", percent: "35%", value: "₹ 70.00", bgcolor: "#AC4371" },
    { name: "Medium", percent: "20%", value: "₹ 40.00", bgcolor: "#C17294" },
  ];
  const Msmeddl = [
    { name: "Past 14 days", value: "1" },
    { name: "Past 30 days", value: "2" },
    { name: "Current Quarter", value: "3" },
    { name: "Current Year", value: "120" },
  ];
  return (
    <div style={{ height: "250px" }}>
      <div className={classes.DspFlxEvnCls}>
        <Typography
          variant="h6"
          fontSize="16px"
          fontWeight="bold"
          fontFamily="lato"
        >
          MSME
        </Typography>
        <div>
          <CustomSelect
            style={{
              position: "relative",
              fontWeight: "700",
              fontSize: "12px",
            }}
            data={Msmeddl}
            width="125px"
          />
        </div>{" "}
      </div>
      <div className={classes.DspFlxEvnTblCls}>
        <PieChart />
        <div>
          {msmeTableData.map((c, i) => (
            <Table
              className={classes.container}
              style={{ width: "200px", borderRadius: "1" }}
              key={"msme" + i}
            >
              <TableRow
                style={{
                  borderTopLeftRadius: 10,
                  borderTopRightRadius: 10,
                  backgroundColor: `${c.bgcolor}`,
                }}
              >
                <TableCell
                  style={{
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    backgroundColor: `${c.bgcolor}`,
                    fontSize: "14px",
                    fontWeight: "700",
                    textAlign: "center",
                    padding: "5px",
                    color: "white",
                    fontFamily: "lato",
                  }}
                  colSpan={3}
                >
                  {c.name}
                </TableCell>
              </TableRow>
              <TableRow style={{ border: "1px solid #f1f1f1" }}>
                <TableCell className={classes.TblCelCls}>{c.percent}</TableCell>
                <TableCell className={classes.TblCelCls}>{c.value}</TableCell>
              </TableRow>
            </Table>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Msme;
