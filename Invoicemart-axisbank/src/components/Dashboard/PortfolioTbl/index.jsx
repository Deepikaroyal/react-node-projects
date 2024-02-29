import React from "react";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  container: {
    marginRight: "95px",
    marginTop: "10px",
  },
  TblStyCls: {
    border: "1px solid #f1f1f1",
    padding: "5px",
    textAlign: "center",
    fontSize: "14px",
    fontWeight: "700",
    fontFamily: "lato",
  },
  DspFlxEvnCls: {
    display: "flex",
    justifyContent: "space-between",
  },
});

const SmallTable = () => {
  const classes = useStyles();
  const Table1Data = [
    {
      bgcolor: "#97144D",
      name: "Tata Steel",
      value: "80",
      days: "68 days",
      price: "₹ 5.6",
      txtColor: "#fff",
    },
    {
      bgcolor: "#C17294",
      name: "BHEL",
      value: "60",
      days: "112 days",
      price: "₹ 6.4",
      txtColor: "#fff",
    },
    {
      bgcolor: "#EAD0DB",
      name: "Raymond",
      value: "40",
      days: "52 days",
      price: "₹ 4.4",
      txtColor: "#404040",
    },
  ];
  const Table1Data2 = [
    {
      bgcolor: "#ac4371",
      name: "Sail",
      value: "70",
      days: "60 days",
      price: "₹ 9.6",
      txtColor: "#fff",
    },
    {
      bgcolor: "#E0B9CA",
      name: "NTPC",
      value: "50",
      days: "32 days",
      price: "₹ 8.2",
      txtColor: "#404040",
    },
    {
      bgcolor: "#E2E2E2",
      name: "Other",
      value: "260",
      days: "98 days",
      price: "₹ 8.5",
      txtColor: "#404040",
    },
  ];
  return (
    <div>
      <div className={classes.DspFlxEvnCls}>
        <div>
          {Table1Data.map((c, i) => (
            <Table
              className={classes.container}
              style={{ width: "100%" }}
              key={"portfolio1" + i}
            >
              <TableRow
                style={{
                  backgroundColor: `${c.bgcolor}`,
                  borderTopLeftRadius: 10,
                  borderTopRightRadius: 10,
                }}
              >
                <TableCell
                  style={{
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    textAlign: "center",
                    fontSize: "14px",
                    fontWeight: "700",
                    fontFamily: "lato",
                    padding: "5px",
                    borderBottom: "none",
                    color: `${c.txtColor}`,
                  }}
                  colSpan={3}
                >
                  {c.name}
                </TableCell>
              </TableRow>
              <TableRow style={{ border: "1px solid #f1f1f1" }}>
                <TableCell className={classes.TblStyCls}>{c.value}</TableCell>
                <TableCell className={classes.TblStyCls}>{c.days}</TableCell>
                <TableCell className={classes.TblStyCls}>{c.price}</TableCell>
              </TableRow>
            </Table>
          ))}
        </div>
        <div style={{ marginLeft: "10px" }}>
          {Table1Data2.map((c, i) => (
            <Table
              className={classes.container}
              style={{ width: "100%" }}
              key={"portfolio2" + i}
            >
              <TableRow
                style={{
                  backgroundColor: `${c.bgcolor}`,
                  borderTopLeftRadius: 10,
                  borderTopRightRadius: 10,
                }}
              >
                <TableCell
                  style={{
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    textAlign: "center",
                    fontSize: "14px",
                    fontWeight: "700",
                    fontFamily: "lato",
                    padding: "5px",
                    borderBottom: "none",
                    color: `${c.txtColor}`,
                  }}
                  colSpan={3}
                >
                  {c.name}
                </TableCell>
              </TableRow>
              <TableRow style={{ border: "1px solid #f1f1f1" }}>
                <TableCell className={classes.TblStyCls}>{c.value}</TableCell>
                <TableCell className={classes.TblStyCls}>{c.days}</TableCell>
                <TableCell className={classes.TblStyCls}>{c.price}</TableCell>
              </TableRow>
            </Table>
          ))}
        </div>
      </div>
    </div>
  );
};
export default SmallTable;
