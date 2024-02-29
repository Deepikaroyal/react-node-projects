import React from "react";
import { Typography } from "@mui/material";
import { UserData } from "../../../../mock/AdministrationData";
import DataGrid from "../../../../components/DataGrid";
import ButtonList from "./Buttons";
import { makeStyles } from "@mui/styles";
import ErrorBoundary from "../../../../errors";
import UserManagement from "./UserManagement";
import moment from "moment";

const UserAuthorization = (props) => {
  const _dark = props._dark ? props._dark : false;
  const [pageSize, setPageSize] = React.useState(10);
  const [open, setOpen] = React.useState(false);
  const [selectedRows, setSelectedRows] = React.useState([]);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
  ];
  return (
    <>
      {!open && (
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
    </>
  );
};
export default UserAuthorization;
