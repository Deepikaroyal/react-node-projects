import React, { useState } from "react";
import { Typography } from "@mui/material";
import { UserData } from "../../../../mock/AdministrationData";
import DataGrid from "../../../../components/DataGrid";
import ButtonList from "./Buttons";
import { makeStyles } from "@mui/styles";
import ErrorBoundary from "../../../../errors";
import UserManagement from "./UserManagement";
import moment from "moment";
import ResetIcon from "../../../../assets/SvgIcons/reset-password.svg";
import ResetIconLight from "../../../../assets/SvgIcons/reset-password-light.svg";
import { Button } from "@mui/material";
import ChangePwd from "../../../../components/ChangePassword";

const UserCreation = (props) => {
  const _dark = props._dark ? props._dark : false;
  const [pageSize, setPageSize] = useState(10);
  const [open, setOpen] = useState(false);
  const [openResetPwd, setOpenResetPwd] = useState(false);
  const [userId, setUserId] = useState("");
  const [selectedRows, setSelectedRows] = useState([]);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleCloseResetPwd = () => setOpenResetPwd(false);

  const useStyles = makeStyles({
    stpCls: {
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
    btnCls: {
      color: `${_dark ? "#ffffff" : "#97144D"} !important`,
      padding: "4px 4px 4px 4px",
      borderRadius: `4px !important`,
      textTransform: "uppercase !important",
      fontSize: "11px !important",
      fontFamily: "Lato",
      lineHeight: "16px",
      border: `1px solid ${_dark ? "#ffffff" : "#97144D"}`,
      marginRight: 10,
      fontWeight: 700,
      marginBottom: 10,
      marginTop: 10,
    },
  });
  const classes = useStyles();
  const columns = [
    {
      field: "id",
      headerName: "User ID",
      align: "center",
      type: "number",
    },
    {
      field: "EmailID",
      headerName: "Email ID",
      align: "center",
    },
    {
      field: "MobileNumber",
      headerName: "Mobile No.",
      type: "number",
    },
    {
      field: "Active",
      headerName: "Active",
      align: "center",
      type: "singleSelect",
      valueOptions: ["Yes", "No"],
      renderCell: (params) => (
        <Typography
          className={classes.stpCls}
          style={{
            backgroundColor: params.value === "Yes" ? "#1FC24E" : "#FF2121",
          }}
        >
          {params.value}
        </Typography>
      ),
    },
    {
      field: "Status",
      headerName: "Status",
      align: "center",
      type: "singleSelect",
      valueOptions: ["Yes", "No"],
      renderCell: (params) => (
        <Typography
          className={classes.stpCls}
          style={{
            backgroundColor: params.value === "Yes" ? "#1FC24E" : "#FF2121",
          }}
        >
          {params.value}
        </Typography>
      ),
    },
    {
      field: "Expire",
      headerName: "Expiring On",
      align: "center",
      minWidth: 66,
      type: "date",
      renderCell: (params) => (
        <Typography variant="subtitle2" style={{ fontSize: 10 }}>
          {moment(new Date(params.value)).format("DD")}
          {"/"}
          {moment(new Date(params.value)).format("MMM")}
        </Typography>
      ),
    },
    {
      field: "",
      headerName: "",
      align: "center",
      backgroundColor: "#fff",
      minWidth: 200,
      renderCell: (params) => (
        <Button
          size="small"
          className={classes.btnCls}
          startIcon={
            <img
              src={_dark ? ResetIconLight : ResetIcon}
              height="16"
              alt="Reset"
            />
          }
          onClick={() => {
            openResetHandler(params);
          }}
        >
          Reset Password
        </Button>
      ),
    },
  ];
  const openResetHandler = (e) => {
    setUserId(e.id);
    setOpenResetPwd(true);
  };
  return (
    <>
      {!open && !openResetPwd && (
        <>
          <ErrorBoundary>
            <ButtonList
              _dark={_dark}
              handleOpen={handleOpen}
              selectedRows={selectedRows}
            />
            <div style={{ width: "100%", marginTop: "20px", color: "#404040" }}>
              <DataGrid
                rows={UserData}
                columns={columns}
                pageNum={pageSize}
                onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                pageOpt={[10, 25, 50]}
                chkselection={true}
                customtoolbar={true}
                _dark={props._dark}
                onSelectionModelChange={(ids) => {
                  const selectedIDs = new Set(ids);
                  const selectedRows = UserData.filter((row) =>
                    selectedIDs.has(row.id)
                  );
                  setSelectedRows(selectedRows);
                }}
              />
            </div>
          </ErrorBoundary>
        </>
      )}
      {open && (
        <UserManagement _dark={_dark} handleClose={handleClose} open={open} />
      )}
      {openResetPwd && (
        <ChangePwd
          _dark={_dark}
          handleClose={handleCloseResetPwd}
          open={openResetPwd}
          userId={userId}
        />
      )}
    </>
  );
};
export default UserCreation;
