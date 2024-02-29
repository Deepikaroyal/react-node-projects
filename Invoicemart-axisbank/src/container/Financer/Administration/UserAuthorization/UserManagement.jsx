import React from "react";
import Box from "@mui/material/Box";
import { Grid, Stack, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Button } from "@mui/material";
import {
  BusinessUnitData,
  NotificationData,
} from "../../../../mock/AdministrationData";
import DataGrid from "../../../../components/DataGrid";
import tickIcon from "../../../../assets/SvgIcons/Tick.svg";
import YesSwitch from "../../../../assets/SvgIcons/yes.svg";
import NoSwitch from "../../../../assets/SvgIcons/no.svg";
import NoGrant from "../../../../assets/SvgIcons/NoGrant.svg";

export default function UserManagement(props) {
  const _dark = props._dark ? props._dark : false;
  const [pageSize, setPageSize] = React.useState(5);

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
    },
    stpgridCls: {
      width: 35,
      paddingTop: "4px",
      paddingBottom: "4px",
      paddingLeft: "8px",
      paddingRight: "8px",
      borderRadius: 4,
      textAlign: "center",
      color: "#ffffff",
      fontSize: "10px",
      fontFamily: "Lato !important",
      textTransform: "uppercase !important",
    },
    gridcss: {
      borderRadius: 10,
      padding: 10,
      paddingBottom: 20,
      boxShadow: "0 6px 8px 0 rgba(0,0,0,0.2);",
      marginTop: 10,
      backgroundColor: props._dark ? "#282828" : "none",
    },
    stpCls: {
      cursor: "pointer",
      fontSize: "14px",
      fontFamily: "Lato",
      fontWeight: 400,
      lineHeight: "24px",
      textAlign: "left",
    },
    stpClsBold: {
      cursor: "pointer",
      fontSize: "14px",
      fontFamily: "Lato",
      lineHeight: "24px",
      textAlign: "right",
      fontWeight: 700,
    },
  });

  const columns = [
    {
      field: "id",
      headerName: "User ID",
      align: "center",
      type: "number",
      hide: true,
      minWidth: 120,
    },
    {
      field: "BusinessUnit",
      headerName: "Business Unit",
      minWidth: 120,
    },
    {
      field: "BidUnit",
      headerName: "Bid Unit",
      minWidth: 120,
    },
    {
      field: "AuthorizationLevel",
      headerName: "Authorization Level",
      align: "center",
      type: "singleSelect",
      valueOptions: ["Yes", "No"],
      minWidth: 160,
      renderCell: (params) => (
        <Typography
          className={classes.stpgridCls}
          style={{
            backgroundColor: params.value === "Yes" ? "#1FC24E" : "#FF2121",
          }}
        >
          {params.value}
        </Typography>
      ),
    },
  ];
  const columnsAccess = [
    {
      field: "id",
      headerName: "User ID",
      align: "center",
      type: "number",
      hide: true,
      minWidth: 120,
    },
    {
      field: "Menu",
      headerName: "Menu",
      align: "center",
      minWidth: 120,
    },
    {
      field: "Add",
      headerName: "Add",
      align: "center",
      type: "singleSelect",
      minWidth: 160,
      valueOptions: ["Yes", "No", "N (Grey)"],
      renderCell: (params) =>
        params.value === "Yes" ? (
          <img
            src={YesSwitch}
            alt="insurance"
            style={{ cursor: "pointer" }}
            onClick={(e) => {
              //onInsuranceCheck(e, params)
            }}
          />
        ) : params.value === "No" ? (
          <img
            src={NoGrant}
            alt="insurance"
            style={{ cursor: "pointer" }}
            onClick={(e) => {
              //onInsuranceCheck(e, params)
            }}
          />
        ) : (
          <img src={NoSwitch} alt="insurance" style={{ cursor: "pointer" }} />
        ),
    },
    {
      field: "Modify",
      headerName: "Modify",
      align: "center",
      type: "singleSelect",
      minWidth: 160,
      valueOptions: ["Yes", "No", "N (Grey)"],
      renderCell: (params) =>
        params.value === "Yes" ? (
          <img
            src={YesSwitch}
            alt="insurance"
            style={{ cursor: "pointer" }}
            onClick={(e) => {
              //onInsuranceCheck(e, params)
            }}
          />
        ) : params.value === "No" ? (
          <img
            src={NoGrant}
            alt="insurance"
            style={{ cursor: "pointer" }}
            onClick={(e) => {
              //onInsuranceCheck(e, params)
            }}
          />
        ) : (
          <img src={NoSwitch} alt="insurance" style={{ cursor: "pointer" }} />
        ),
    },
    {
      field: "View",
      headerName: "View",
      align: "center",
      type: "singleSelect",
      minWidth: 160,
      valueOptions: ["Yes", "No", "N (Grey)"],
      renderCell: (params) =>
        params.value === "Yes" ? (
          <img
            src={YesSwitch}
            alt="insurance"
            style={{ cursor: "pointer" }}
            onClick={(e) => {
              //onInsuranceCheck(e, params)
            }}
          />
        ) : params.value === "No" ? (
          <img
            src={NoGrant}
            alt="insurance"
            style={{ cursor: "pointer" }}
            onClick={(e) => {
              //onInsuranceCheck(e, params)
            }}
          />
        ) : (
          <img src={NoSwitch} alt="insurance" style={{ cursor: "pointer" }} />
        ),
    },
    {
      field: "AuthorizationLevel",
      headerName: "Authorize",
      align: "center",
      type: "singleSelect",
      minWidth: 160,
      valueOptions: ["Yes", "No", "N (Grey)"],
      renderCell: (params) =>
        params.value === "Yes" ? (
          <img
            src={YesSwitch}
            alt="insurance"
            style={{ cursor: "pointer" }}
            onClick={(e) => {
              //onInsuranceCheck(e, params)
            }}
          />
        ) : params.value === "No" ? (
          <img
            src={NoGrant}
            alt="insurance"
            style={{ cursor: "pointer" }}
            onClick={(e) => {
              //onInsuranceCheck(e, params)
            }}
          />
        ) : (
          <img src={NoSwitch} alt="insurance" style={{ cursor: "pointer" }} />
        ),
    },
  ];
  const columnsNotification = [
    {
      field: "id",
      headerName: "User ID",
      align: "center",
      type: "number",
      hide: true,
      minWidth: 120,
    },
    {
      field: "Event",
      headerName: "Event",
      align: "center",
      minWidth: 120,
    },
    {
      field: "Response",
      headerName: "Response",
      align: "center",
      minWidth: 120,
    },
    {
      field: "Menu",
      headerName: "Frequency",
      align: "center",
      minWidth: 120,
    },
    {
      field: "BidUnit",
      headerName: "Channel",
      align: "center",
      minWidth: 120,
    },
    {
      field: "AuthorizationLevel",
      headerName: "Enable",
      align: "center",
      type: "singleSelect",
      minWidth: 160,
      valueOptions: ["Yes", "No", "N (Grey)"],
      renderCell: (params) =>
        params.value === "Yes" ? (
          <img
            src={YesSwitch}
            alt="insurance"
            style={{ cursor: "pointer" }}
            onClick={(e) => {
              //onInsuranceCheck(e, params)
            }}
          />
        ) : params.value === "No" ? (
          <img
            src={NoGrant}
            alt="insurance"
            style={{ cursor: "pointer" }}
            onClick={(e) => {
              //onInsuranceCheck(e, params)
            }}
          />
        ) : (
          <img src={NoSwitch} alt="insurance" style={{ cursor: "pointer" }} />
        ),
    },
  ];
  const classes = useStyles();
  return (
    <Box style={{ backgroundColor: _dark ? "#282828" : "#fff" }}>
      <h3
        className="fu-listing"
        style={{ color: _dark ? "#ffffff" : "#404040" }}
      >
        User Details Management
      </h3>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={9} sx={{ paddingTop: "0px !important" }}>
            <Stack direction="row">
              <Button
                size="small"
                className={classes.btnCls}
                onClick={() => {
                  props.handleClose();
                }}
              >
                Back
              </Button>
              <Button
                size="small"
                className={classes.btnCls}
                onClick={() => {
                  props.handleClose();
                }}
              >
                Close
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ flexGrow: 1 }} className={classes.gridcss}>
        <Grid container>
          <Grid xs={3} className={classes.stpCls}>
            <strong>User ID : </strong>1919129{" "}
            <img src={tickIcon} height="13" alt="tick" />
          </Grid>
          <Grid xs={3} className={classes.stpCls}>
            <strong>Employee ID : </strong>1919129
          </Grid>
          <Grid xs={3} className={classes.stpCls}>
            <strong>Name : </strong>Tata Steel
          </Grid>
          <Grid xs={3} className={classes.stpCls}>
            <strong>Email ID : </strong>steel@gmail.com
          </Grid>
        </Grid>
        <Grid container>
          <Grid xs={3} className={classes.stpCls}>
            <strong>Mobile No. : </strong>9909999881
          </Grid>
          <Grid xs={3} className={classes.stpCls}>
            <strong>Expiry Date : </strong>09/May
          </Grid>
          <Grid xs={3} className={classes.stpCls}>
            <strong>Is Checker : </strong>Yes
          </Grid>
          <Grid xs={3} className={classes.stpCls}>
            <strong>Status : </strong>Active
          </Grid>
        </Grid>
      </Box>
      <h3
        className="fu-listing"
        style={{ color: _dark ? "#ffffff" : "#404040", fontSize: 14 }}
      >
        Business Unit
      </h3>
      <div style={{ width: "100%", marginTop: "20px", color: "#404040" }}>
        <DataGrid
          rows={BusinessUnitData}
          columns={columns}
          pageNum={pageSize}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          pageOpt={[10, 25, 50]}
          customtoolbar={false}
          chkselection={true}
          _dark={props._dark}
        />
      </div>
      <h3
        className="fu-listing"
        style={{ color: _dark ? "#ffffff" : "#404040", fontSize: 14 }}
      >
        Access Restrictions
      </h3>
      <div style={{ width: "100%", marginTop: "20px", color: "#404040" }}>
        <DataGrid
          rows={BusinessUnitData}
          columns={columnsAccess}
          pageNum={pageSize}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          pageOpt={[10, 25, 50]}
          customtoolbar={false}
          chkselection={true}
          _dark={props._dark}
        />
      </div>
      <h3
        className="fu-listing"
        style={{ color: _dark ? "#ffffff" : "#404040", fontSize: 14 }}
      >
        Notifications
      </h3>
      <div style={{ width: "100%", marginTop: "20px", color: "#404040" }}>
        <DataGrid
          rows={NotificationData}
          columns={columnsNotification}
          pageNum={pageSize}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          pageOpt={[10, 25, 50]}
          customtoolbar={false}
          chkselection={true}
          _dark={props._dark}
        />
      </div>
    </Box>
  );
}
