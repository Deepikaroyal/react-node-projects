import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Grid, Stack, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Checker from "../../../../assets/SvgIcons/Admin/inheritcheckeraccess.svg";
import CheckerLight from "../../../../assets/SvgIcons/Admin/inheritcheckeraccess-1.svg";
import Maker from "../../../../assets/SvgIcons/Admin/Inheritmakeraccess.svg";
import MakerLight from "../../../../assets/SvgIcons/Admin/Inheritmakeraccess-1.svg";
import Reset from "../../../../assets/SvgIcons/FU/reset.svg";
import ResetLight from "../../../../assets/SvgIcons/FU/resetlight.svg";
import TextInput from "../../../../components/Common/CustomTextInput";
import { Button } from "@mui/material";
import save from "../../../../assets/SvgIcons/FU/save.svg";
import saveLight from "../../../../assets/SvgIcons/FU/savelight.svg";
import {
  BusinessUnitData,
  NotificationData,
} from "../../../../mock/AdministrationData";
import DataGrid from "../../../../components/DataGrid";
import tickIcon from "../../../../assets/SvgIcons/Tick.svg";
import InputAdornment from "@mui/material/InputAdornment";
import CustomDatePicker from "../../../../components/Common/customDatepicker";
import YesSwitch from "../../../../assets/SvgIcons/yes.svg";
import NoSwitch from "../../../../assets/SvgIcons/no.svg";
import NoGrant from "../../../../assets/SvgIcons/NoGrant.svg";
import ResetIcon from "../../../../assets/SvgIcons/reset-password.svg";
import ResetIconLight from "../../../../assets/SvgIcons/reset-password-light.svg";
import CustomcheckBox from "../../../../components/Common/CustomCheckbox";

export default function UserManagement(props) {
  const _dark = props._dark ? props._dark : false;
  const [pageSize, setPageSize] = useState(5);
  const [userId, setUserId] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [employeeId, setEmployeeId] = useState("");
  const [mobile, setMobile] = useState("");
  const [recordstatus, setRecordstatus] = useState("");
  const [isChecker, setIsChecker] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

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
      marginRight: 10,
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
      field: "LinkToUser",
      headerName: "Link to User",
      align: "center",
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
  const handleCheckerChange = (val) => {
    setIsChecker(val);
  };
  const handleAdminChange = (val) => {
    setIsAdmin(val);
  };
  const classes = useStyles();
  return (
    <Box style={{ backgroundColor: _dark ? "#282828" : "#fff" }}>
      <h3
        className="fu-listing"
        style={{ color: _dark ? "#ffffff" : "#404040" }}
      >
        Create / Modify User
      </h3>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sx={{ paddingTop: "0px !important" }}>
            <Stack direction="row">
              <Button
                size="small"
                className={classes.btnCls}
                startIcon={
                  <img src={_dark ? saveLight : save} height="17" alt="save" />
                }
              >
                Save
              </Button>
              <Button
                size="small"
                className={classes.btnCls}
                startIcon={
                  <img
                    src={_dark ? ResetLight : Reset}
                    height="17"
                    alt="Reset"
                  />
                }
              >
                Reset
              </Button>
              <Button
                size="small"
                className={classes.btnCls}
                startIcon={
                  <img
                    src={_dark ? MakerLight : Maker}
                    height="17"
                    alt="Reset"
                  />
                }
              >
                INHERIT MAKER ACCESS
              </Button>
              <Button
                size="small"
                className={classes.btnCls}
                startIcon={
                  <img
                    src={_dark ? CheckerLight : Checker}
                    height="17"
                    alt="Reset"
                  />
                }
              >
                INHERIT CHECKER ACCESS
              </Button>
              <Button
                size="small"
                className={classes.btnCls}
                startIcon={
                  <img
                    src={_dark ? ResetIconLight : ResetIcon}
                    height="17"
                    alt="Reset"
                  />
                }
              >
                Reset Password
              </Button>
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
        <Grid container spacing={2}>
          <Grid item xs={9} sx={{ paddingTop: "5px !important" }}>
            <Stack direction="row" spacing={4}>
              <TextInput
                label="User ID"
                value={userId}
                width="80%"
                placeholder="User ID***"
                onChange={(e) => {
                  setUserId(e.target.value);
                }}
                size="small"
                style={{ paddingRight: "10px" }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <img src={tickIcon} height="17" alt="tick" />
                    </InputAdornment>
                  ),
                }}
              />
              <TextInput
                label="Employee ID"
                value={employeeId}
                width="80%"
                placeholder="Employee ID"
                onChange={(e) => {
                  setEmployeeId(e.target.value);
                }}
                size="small"
                style={{ paddingRight: "10px" }}
              />
              <TextInput
                label="Name"
                value={name}
                width="80%"
                placeholder="Name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                size="small"
              />
            </Stack>
            <Stack direction="row" spacing={4}>
              <Grid container spacing={1}>
                <Grid item xs={4}>
                  <TextInput
                    label="Email ID"
                    value={email}
                    width="99%"
                    placeholder="Email ID"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    size="small"
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextInput
                    label="Mobile No."
                    type="number"
                    value={mobile}
                    width="99%"
                    placeholder="Mobile No."
                    onChange={(e) => {
                      setMobile(e.target.value);
                    }}
                    size="small"
                  />
                </Grid>
                <Grid item xs={4}>
                  <CustomDatePicker label="Expiry Date" width="100%" />
                </Grid>
              </Grid>
            </Stack>
            <Stack direction="row" spacing={4}>
              <Grid container spacing={1}>
                <Grid
                  item
                  xs={4}
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <Grid container spacing={1}>
                    <Grid item xs={6}>
                      <CustomcheckBox
                        name="Is Checker"
                        handleChange={handleCheckerChange}
                        checked={isChecker}
                        _dark={_dark}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <CustomcheckBox
                        name="Is Admin"
                        handleChange={handleAdminChange}
                        checked={isAdmin}
                        _dark={_dark}
                      />
                    </Grid>
                  </Grid>

                  {/* <TextInput label="Is Checker" value={recordstatus} width="99%"
                                        placeholder="Is Checker" onChange={(e) => { setRecordstatus(e.target.value) }}
                                        size="small" /> */}
                </Grid>
                <Grid item xs={4}>
                  <TextInput
                    label="Status"
                    value={recordstatus}
                    width="99%"
                    placeholder="Status"
                    onChange={(e) => {
                      setRecordstatus(e.target.value);
                    }}
                    size="small"
                  />
                </Grid>
                <Grid item xs={4}></Grid>
              </Grid>
            </Stack>
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
