import React from "react";
import { Stack, Grid, Typography } from "@mui/material";
import Tree from "../../../../components/Treeview";
import { makeStyles } from "@mui/styles";
import DataGrid from "../../../../components/DataGrid";
import { BankDetailsData } from "../../../../mock/EntitiesData";
import { KycDetails } from "../../../../mock/EntitiesData";
import CustomSelect from "../../../../components/Dashboard/DropDownCmp";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

const BankTblData = [
  { name: "MORE DETAILS", value: "1" },
  { name: "Lorem Ipsum", value: "2" },
  { name: "Lorem Ipsum", value: "3" },
];
const columns = [
  {
    field: "bankname",
    flex: 1,
    minWidth: 66,
    headerName: "Bank Name",
  },
  {
    field: "accountno",
    flex: 1,
    minWidth: 66,
    headerName: "Account No.",
  },
  {
    field: "accountype",
    flex: 1,
    minWidth: 66,
    headerName: "Account Type",
  },
  {
    field: "ifsc",
    flex: 1,
    minWidth: 66,
    headerName: "IFSC Code",
  },
  {
    field: "accountpurpose",
    flex: 1,
    minWidth: 66,
    headerName: "Account Purpose",
  },
  {
    field: "",
    flex: 1,
    minWidth: 66,
    headerName: "",
    renderCell: (params) => (
      <CustomSelect
        style={{
          position: "relative",
          fontWeight: "700",
          fontSize: "12px",
          color: "#97144d",
          border: "none",
          fontFamily: "lato",
        }}
        data={BankTblData}
        width="200px"
      />
    ),
  },
];

const columns1 = [
  {
    field: "srno",
    flex: 1,
    minWidth: 66,
    headerName: "Sr No.",
  },
  {
    field: "category",
    flex: 1,
    minWidth: 66,
    headerName: "Category",
  },
  {
    field: "type",
    flex: 1,
    minWidth: 66,
    headerName: "Type",
  },
  {
    field: "doc",
    flex: 1,
    minWidth: 66,
    headerName: "Document",
  },
  {
    field: "action",
    flex: 1,
    minWidth: 66,
    headerName: "Action",
  },
];

const MyEntity = (props) => {
  const _dark = props._dark ? props._dark : false;
  const useStyles = makeStyles({
    TblStyCls: {
      fontFamily: "lato",
      fontWeight: "400",
      fontSize: "14px",
      textAlign: "center",
      borderBottom: "1px solid #cbcbcb",
    },
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
    RectCls: {
      paddingTop: "25px",
      border: "1px solid #cbcbcb",
      width: "30%",
      height: "120px",
      borderRadius: "10px",
    },
    TypCls: {
      fontFamily: "lato",
      fontWeight: "400",
      fontSize: "14px",
      marginTop: "-5px",
      marginLeft: "30px",
      lineHeight: "24px",
    },
    BtnCls: {
      color: "#97144d",
      fontSize: "14px",
      fontWeight: "700",
      fontFamily: "lato",
      textTransform: "capitalize",
      border: "1px solid #97144d",
      width: "102px",
      height: "40px",
      marginTop: "20px",
      marginLeft: "20px",
    },
  });
  const classes = useStyles();
  // function createData(year, annualturnover, networth, auditedbls) {
  //     return { year, annualturnover, networth, auditedbls };
  // }
  const rows = ["a", "c", "v", "b", "n"];
  const [pageSize, setPageSize] = React.useState(5);
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
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={100} sx={{ paddingTop: "10px !important" }}>
          <Tree
            label="My Profile"
            _dark={_dark}
            component={
              <>
                <Stack spacing={2} direction="row" paddingBottom="40px">
                  {_renderInput("Registered Name", "Buyer India Ltd")}
                  {_renderInput("Entity ID", "1000000862")}
                  {_renderInput("Constitution", "Trust")}
                </Stack>
                <Stack spacing={2} direction="row" paddingBottom="40px">
                  {_renderInput("Date of Incorporation", "28/JUN/2021")}
                  {_renderInput(
                    "Industry",
                    "170 Manufacture of paper and paper products "
                  )}
                  {_renderInput("No of users of Entity", "2")}
                </Stack>
                <Stack spacing={2} direction="row" paddingBottom="40px">
                  {_renderInput("Nature of Business", "Lorem Ipsum")}
                  {_renderInput("Nature of Activity", "Lorem Ipsum")}
                  {_renderInput("Mobile No", "9765265367")}
                </Stack>
                <Stack direction="row" paddingBottom="40px">
                  {_renderInput("Email ID", "lorem@ipsum.com")}
                  {_renderInput("", "")}
                  {_renderInput("", "")}
                </Stack>
              </>
            }
          />
          <Tree
            label="General Details"
            _dark={_dark}
            component={
              <>
                <Stack
                  spacing={2}
                  direction="row"
                  paddingTop="20px"
                  paddingBottom="20px"
                >
                  {_renderInput("Group Name", "Lorem Ipsum")}
                  {_renderInput("Created on", "28/JUL/2021")}
                </Stack>
                <Stack spacing={2} direction="row" paddingBottom="40px">
                  {_renderInput("Name of auditing Entity", "Lorem Ipsum")}
                  {_renderInput("Auditors Registration No.", "54644654646")}
                </Stack>
              </>
            }
          />
          <Tree
            label="Addresses"
            _dark={_dark}
            component={
              <>
                <Stack spacing={2} direction="row">
                  {_renderInput("Registered Office")}
                  {_renderInput("Registered Office")}
                  {_renderInput("Communication Address")}
                </Stack>
                <Stack spacing={6} direction="row" marginTop="25px">
                  <div className={classes.RectCls}>
                    <Typography className={classes.TypCls}>
                      55/34 Lorem ipsum building, First floor, <br />
                      Lorem ipsum, Dolor sit amet,
                      <br />
                      E.R road,Mumbai 400029
                    </Typography>
                  </div>
                  <div className={classes.RectCls}>
                    <Typography className={classes.TypCls}>
                      55/34 Lorem ipsum building, First floor, <br />
                      Lorem ipsum, Dolor sit amet,
                      <br />
                      E.R road,Mumbai 400029
                    </Typography>
                  </div>
                  <div className={classes.RectCls}>
                    <Typography className={classes.TypCls}>
                      55/34 Lorem ipsum building, First floor, <br />
                      Lorem ipsum, Dolor sit amet,
                      <br />
                      E.R road,Mumbai 400029
                    </Typography>
                  </div>
                </Stack>
              </>
            }
          />
          <Tree
            label="Registration Details"
            _dark={_dark}
            component={
              <>
                <Stack spacing={2} direction="row" paddingTop="30px">
                  {_renderInput("Government  Identification")}
                  {_renderInput("")}
                  {/* {_renderInput('')}                                                               */}
                </Stack>
                <Stack
                  spacing={2}
                  direction="row"
                  paddingTop="20px"
                  paddingBottom="40px"
                >
                  {_renderInput("CIN", "L348Y23KK")}
                  {_renderInput("TAN", "93482311FEF")}
                  {_renderInput("Entity PAN", "384798ODF22")}
                  {_renderInput("GSTIN", "839247938434")}
                </Stack>
              </>
            }
          />
          <Tree
            label="Financials & Credit Rating"
            _dark={_dark}
            component={
              <>
                <h4>Financial Details</h4>
                <Stack direction="row" spacing={30}>
                  <div>
                    <TableContainer component={Paper} style={{ width: "135%" }}>
                      <Table aria-label="simple table">
                        <TableBody style={{ borderTop: "1px solid #cbcbcb" }}>
                          {rows.map((row) => (
                            <TableRow>
                              <TableCell
                                component="th"
                                scope="row"
                                className={classes.TblStyCls}
                              >
                                Year&nbsp;&nbsp;&nbsp;<b>2016 - 17</b>
                              </TableCell>
                              <TableCell
                                align="left"
                                className={classes.TblStyCls}
                              >
                                Annual Turnover&nbsp;&nbsp;&nbsp;<b>₹ 1.00</b>
                              </TableCell>
                              <TableCell
                                align="left"
                                className={classes.TblStyCls}
                              >
                                Net Worth&nbsp;&nbsp;&nbsp;<b>₹ 1.00</b>
                              </TableCell>
                              <TableCell
                                align="left"
                                style={{
                                  fontWeight: "700",
                                  fontSize: "14px",
                                  cursor: "pointer",
                                  color: "#97144d",
                                  fontFamily: "lato",
                                  textDecoration: "underline",
                                }}
                              >
                                Audited Balance Sheet
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </div>
                  <div>
                    <Typography className={classes.TypCls} paddingBottom="20px">
                      <b>
                        Total Fund Based Working Capital Limit
                        <br />
                        &nbsp;&nbsp;&nbsp;(In crores)&nbsp;&nbsp;&nbsp;:
                      </b>
                      &nbsp;&nbsp;&nbsp;₹ 1.00
                    </Typography>
                    <Typography className={classes.TypCls} paddingBottom="20px">
                      <b>Purchase Projection&nbsp;&nbsp;&nbsp;:</b>
                      &nbsp;&nbsp;&nbsp;₹ 1.00
                    </Typography>
                    <Typography className={classes.TypCls} paddingBottom="20px">
                      <b>Sales Projection (In crores)&nbsp;&nbsp;&nbsp;:</b>
                      &nbsp;&nbsp;&nbsp;₹ 1.00
                    </Typography>
                  </div>
                </Stack>

                <hr style={{ marginTop: "40px", backgroundColor: "#cbcbcb" }} />
                <h4>Bank Details</h4>
                <DataGrid
                  style={{
                    marginTop: "20px",
                    fontSize: "14px",
                    fontWeight: "400",
                  }}
                  rows={BankDetailsData}
                  columns={columns}
                  pageNum={pageSize}
                  onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                  pageOpt={[10, 25, 50]}
                  _dark={props._dark}
                />
              </>
            }
          />
          <Tree
            label="Key Officials"
            _dark={_dark}
            component={
              <>
                <Stack spacing={2} direction="row" paddingTop="30px">
                  {_renderInput("Official 1")}
                  {_renderInput("Official 2")}
                  {/* {_renderInput('')}                                                               */}
                </Stack>
                <Stack
                  spacing={2}
                  direction="row"
                  paddingTop="20px"
                  paddingBottom="40px"
                >
                  <Table>
                    <TableRow style={{ borderRadius: 10 }}>
                      <TableCell
                        style={{
                          border: "1px solid #cdcdcd",
                          borderRadius: 10,
                        }}
                      >
                        <Stack spacing={1} direction="row">
                          {_renderInput("Name", "MS")}
                        </Stack>
                        <Stack spacing={1} direction="row">
                          {_renderInput("Designation", "TRUSTEE")}
                        </Stack>
                        <Stack spacing={1} direction="row">
                          {_renderInput("Email ID", "ms@text.com")}
                        </Stack>
                        <Stack spacing={1} direction="row">
                          {_renderInput("Mobile No.", "9726872676")}
                        </Stack>
                        <Stack spacing={1} direction="row">
                          {_renderInput("Gender", "Male")}
                        </Stack>
                        <Stack spacing={1} direction="row">
                          {_renderInput("Date of Birth", "20/02/1961")}
                        </Stack>
                        <Stack spacing={1} direction="row">
                          {_renderInput("Telephone", "022128545677")}
                        </Stack>
                      </TableCell>
                      <TableCell style={{ border: "1px solid #cdcdcd" }}>
                        <Stack spacing={1} direction="row">
                          {_renderInput("Authorized Signatory", "Yes")}
                        </Stack>
                        <Stack spacing={1} direction="row">
                          {_renderInput("DIN", "-")}
                        </Stack>
                        <Stack spacing={1} direction="row">
                          {_renderInput("PAN", "BXERM023")}
                        </Stack>
                        <Stack spacing={1} direction="row">
                          {_renderInput("Benificial Owner", "No")}
                        </Stack>
                        <Stack spacing={1} direction="row">
                          {_renderInput("Address", "")}
                        </Stack>
                        <Stack spacing={1} direction="row">
                          <Typography
                            className={classes.TypCls}
                            style={{ marginLeft: "0px", marginTop: "2px" }}
                          >
                            55/23 Lorem Ipsum building, First floor
                            <br /> Lorem Ipsum, Dolor sit amet, E.R road, Mumbai
                            <br /> 400029
                          </Typography>
                        </Stack>
                        <Stack spacing={1} direction="row">
                          {_renderInput("")}
                        </Stack>
                      </TableCell>
                    </TableRow>
                  </Table>
                  <Table>
                    <TableRow>
                      <TableCell
                        style={{ border: "1px solid #cdcdcd", borderRadius: 8 }}
                      >
                        <Stack spacing={1} direction="row">
                          {_renderInput("Name", "MS")}
                        </Stack>
                        <Stack spacing={1} direction="row">
                          {_renderInput("Designation", "TRUSTEE")}
                        </Stack>
                        <Stack spacing={1} direction="row">
                          {_renderInput("Email ID", "ms@text.com")}
                        </Stack>
                        <Stack spacing={1} direction="row">
                          {_renderInput("Mobile No.", "9726872676")}
                        </Stack>
                        <Stack spacing={1} direction="row">
                          {_renderInput("Gender", "Male")}
                        </Stack>
                        <Stack spacing={1} direction="row">
                          {_renderInput("Date  of Birth", "20/02/1961")}
                        </Stack>
                        <Stack spacing={1} direction="row">
                          {_renderInput("Telephone", "022128545677")}
                        </Stack>
                      </TableCell>
                      <TableCell style={{ border: "1px solid #cdcdcd" }}>
                        <Stack spacing={1} direction="row">
                          {_renderInput("Authorized Signatory", "Yes")}
                        </Stack>
                        <Stack spacing={1} direction="row">
                          {_renderInput("DIN", "-")}
                        </Stack>
                        <Stack spacing={1} direction="row">
                          {_renderInput("PAN", "BXERM023")}
                        </Stack>
                        <Stack spacing={1} direction="row">
                          {_renderInput("Benificial Owner", "No")}
                        </Stack>
                        <Stack spacing={1} direction="row">
                          {_renderInput("Address", "")}
                        </Stack>
                        <Stack spacing={1} direction="row">
                          <Typography
                            className={classes.TypCls}
                            style={{ marginLeft: "0px", marginTop: "2px" }}
                          >
                            55/23 Lorem Ipsum building, First floor
                            <br /> Lorem Ipsum, Dolor sit amet, E.R road, Mumbai
                            <br /> 400029
                          </Typography>
                        </Stack>
                        <Stack spacing={1} direction="row">
                          {_renderInput("")}
                        </Stack>
                      </TableCell>
                    </TableRow>
                  </Table>
                </Stack>
              </>
            }
          />
          <Tree
            label="Administrators"
            _dark={_dark}
            component={
              <>
                <Stack spacing={2} direction="row" paddingTop="30px">
                  {_renderInput("Administrator 1")}
                  {_renderInput("Administrator 2")}
                  {/* {_renderInput('')}                                                               */}
                </Stack>
                <Stack spacing={2} direction="row" paddingTop="20px">
                  <Table
                    style={{
                      overflow: "scroll",
                      height: "25px",
                      width: "200px",
                    }}
                  >
                    <TableRow>
                      <TableCell
                        style={{
                          border: "1px solid #cdcdcd",
                          borderRadius: 10,
                        }}
                      >
                        <Stack spacing={1} direction="row">
                          {_renderInput("Name of User", "MS")}
                        </Stack>
                        <Stack spacing={1} direction="row">
                          {_renderInput("Gender", "Male")}
                        </Stack>
                        <Stack spacing={1} direction="row">
                          {_renderInput("Email ID", "ms@text.com")}
                        </Stack>
                      </TableCell>
                      <TableCell style={{ border: "1px solid #cdcdcd" }}>
                        <Stack spacing={1} direction="row">
                          {_renderInput("Date of Birth", "20/02/1961")}
                        </Stack>
                        <Stack spacing={1} direction="row">
                          {_renderInput("Mobile No", "9737236234")}
                        </Stack>
                        <Stack spacing={1} direction="row">
                          {_renderInput("User ID", "392736723")}
                        </Stack>
                      </TableCell>
                    </TableRow>
                  </Table>
                  <Table>
                    <TableRow>
                      <TableCell
                        style={{
                          border: "1px solid #cdcdcd",
                          borderRadius: 10,
                        }}
                      >
                        <Stack spacing={1} direction="row">
                          {_renderInput("Name", "MS")}
                        </Stack>
                        <Stack spacing={1} direction="row">
                          {_renderInput("Designation", "TRUSTEE")}
                        </Stack>
                        <Stack spacing={1} direction="row">
                          {_renderInput("Email ID", "ms@text.com")}
                        </Stack>
                      </TableCell>
                      <TableCell style={{ border: "1px solid #cdcdcd" }}>
                        <Stack spacing={1} direction="row">
                          {_renderInput("Authorized Signatory", "Yes")}
                        </Stack>
                        <Stack spacing={1} direction="row">
                          {_renderInput("DIN", "-")}
                        </Stack>
                        <Stack spacing={1} direction="row">
                          {_renderInput("PAN", "BXERM023")}
                        </Stack>
                      </TableCell>
                    </TableRow>
                  </Table>
                </Stack>
              </>
            }
          />
          <Tree
            label="KYC Documents"
            _dark={_dark}
            component={
              <>
                <DataGrid
                  style={{
                    marginTop: "20px",
                    fontSize: "14px",
                    fontWeight: "400",
                  }}
                  rows={KycDetails}
                  columns={columns1}
                  pageNum={pageSize}
                  onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                  pageOpt={[10, 25, 50]}
                  _dark={props._dark}
                />
              </>
            }
          />
          <Button className={classes.BtnCls}>Back</Button>
        </Grid>
      </Grid>
    </>
  );
};
export default MyEntity;
