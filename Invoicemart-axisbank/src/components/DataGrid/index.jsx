import React from "react";
import {
  DataGridPro,
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarExport,
  GridToolbarDensitySelector,
  LicenseInfo,
} from "@mui/x-data-grid-pro";
import { makeStyles } from "@mui/styles";

//  LicenseInfo.setLicenseKey(
//    '9937b8d842d4471e3d76237b8590859fTz02MDI4NSxFPTE3MDg1MTIyNjMzNTMsUz1wcm8sTE09c3Vic2NyaXB0aW9uLEtWPTI=',
//  );
LicenseInfo.setLicenseKey(
  "4c17d8c796f0d9e27f38c8b6a87145fbT1JERVI6MzU1MDgsRVhQSVJZPTE2NzMxOTU0MTYwMDAsS0VZVkVSU0lPTj0x"
);

const GridPro = (props) => {
  const _dark = props._dark ? props._dark : false;
  const chkselection = props.chkselection ? props.chkselection : false;
  const customtoolbar = props.customtoolbar ? props.customtoolbar : false;
  const useStyles = makeStyles({
    dataGrid: {
      borderColor: _dark ? "#ffffff" : "#E2E2E2",
      borderRadius: 10,
      color: _dark ? "#ffffff !important" : "#404040 !important",
      outline: _dark ? "#ffffff" : "#404040",
      fontFamily: "Lato !important",
      fontSize: 10,
      "&.css-f1qaus-MuiDataGrid-root .MuiDataGrid-columnSeparator": {
        color: _dark ? "#ffffff" : "#CBCBCB",
      },
      "&.MuiDataGrid-root .MuiDataGrid-cell": {
        borderBottom: _dark
          ? "1px solid #FFFFFF !important"
          : "1px solid #CBCBCB !important",
      },
      "&.MuiDataGrid-root .MuiDataGrid-columnHeaders": {
        borderBottom: _dark
          ? "1px solid #FFFFFF !important"
          : "1px solid #CBCBCB !important",
        textTransform: "uppercase",
      },
      "&.MuiDataGrid-root .MuiDataGrid-columnHeaderTitle": {
        fontSize: 11,
        fontWeight: 700,
      },
      "&.MuiDataGrid-root .MuiCheckbox-root": {
        color: _dark ? "#FFFFFF !important" : "#CBCBCB !important",
        "&.Mui-checked": {
          color: _dark ? "#FFFFFF !important" : "#97144D !important",
          "& .MuiSvgIcon-root:after": {
            //backgroundColor: "white"
          },
        },
      },
      "&.MuiDataGrid-root .MuiSwitch-root": {
        padding: 7,
        width: "45px",
        height: "30px",
        "& .MuiSwitch-thumb": {
          color: "white",
          position: "relative",
          top: "3.5px",
          right: "-2px",
          width: "14px",
          height: "14px",
        },
        "& .MuiSwitch-switchBase.Mui-checked": {
          color: "green !important",
        },
      },
      "&.MuiDataGrid-root .MuiDataGrid-panel .MuiButton-root": {
        color: _dark ? "#FFFFFF !important" : "#CBCBCB !important",
      },
      "&.MuiDataGrid-filterForm": {
        color: _dark ? "#FFFFFF !important" : "#CBCBCB !important",
      },
    },
  });
  const classes = useStyles();
  return (
    <DataGridPro
      keepNonExistentRowsSelected
      disableSelectionOnClick
      rows={props.rows}
      density="compact"
      columns={props.columns}
      pageSize={props.pageNum}
      pagination
      rowsPerPageOptions={props.pageOpt}
      onPageSizeChange={props.onPageSizeChange}
      components={{
        Toolbar: () => {
          return customtoolbar ? (
            <GridToolbarContainer>
              <GridToolbarColumnsButton
                style={{ color: _dark ? "#ffffff" : "#404040" }}
              />
              <GridToolbarFilterButton
                style={{ color: _dark ? "#ffffff" : "#404040" }}
              />
              <GridToolbarDensitySelector
                style={{ color: _dark ? "#ffffff" : "#404040" }}
              />
              <GridToolbarExport
                style={{ color: _dark ? "#ffffff" : "#404040" }}
              />
            </GridToolbarContainer>
          ) : (
            ""
          );
        },
      }}
      checkboxSelection={chkselection}
      autoHeight
      disableExtendRowFullWidth={false}
      className={classes.dataGrid}
      {...props}
    />
  );
};

export default GridPro;
