import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import { Grid, Tabs, Tab, Box, Typography } from "@mui/material";
import EarlySettlement from "./EarlySettlement";
import EarlySettlementAuthorization from "./EarlySettlementAuthorization";
import OfflineSettlement from "./OfflineSettlement";
import OfflineSettlementAuthorization from "./OfflineSettlementAuthorization";
import DueDateExtension from "./DueDateExtension";
import DueDateExtensionAuthorization from "./DueDateExtensionAuthorization";
import { makeStyles } from "@mui/styles";
import PropTypes from "prop-types";

export default function Bids(props) {
  const [value, setValue] = useState(1);
  const [page, SetPage] = useState("list");
  const [title, setTitle] = useState("FU Listing");
  const [Funumber, setFunumber] = useState();
  const [FuInvnumber, setFuInvnumber] = useState();

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (newValue === 1) {
      setTitle("FU Listing");
      SetPage("list");
    }
  };

  const ShowFuDetails = (Id) => {
    setFunumber(Id);
    setTitle("FU " + Id);
    SetPage("details");
  };
  const ShowInvoiceDetails = (Id) => {
    setTitle("INV " + Id);
    setFuInvnumber(Id);
    SetPage("invoice");
  };
  const backFlow = () => {
    if (page === "invoice") {
      setTitle("FU " + Funumber);
      SetPage("details");
    } else {
      setTitle("FU Listing");
      SetPage("list");
    }
  };
  // console.log(value)
  const TabsMenu = [
    { id: 1, name: "Early Settlement" },
    { id: 2, name: "Early Settlement Authorization" },
    { id: 3, name: "Offline Settlement" },
    { id: 4, name: "Offline Settlement Authorization" },
    { id: 5, name: "Due Date Extension" },
    { id: 6, name: "DueDate Extension Authorization" },
  ];
  const useStyles = makeStyles({
    gridcss: {
      borderRadius: 10,
      padding: 10,
      paddingBottom: 20,
      boxShadow: "0 6px 8px 0 rgba(0,0,0,0.2);",
      marginTop: 10,
      backgroundColor: props._dark ? "#282828" : "none",
    },
  });
  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  function a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      "aria-controls": `full-width-tabpanel-${index}`,
    };
  }

  const classes = useStyles();
  const theme = useTheme();
  return (
    <Grid>
      <Box sx={{ width: "100%" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          aria-label="secondary tabs example"
          TabIndicatorProps={{
            style: { background: "#97144D", color: "#97144D" },
          }}
          sx={{
            ".MuiTab-root": {
              fontSize: "14px",
              fontFamily: "Lato",
              lineHeight: "19px",
              color: props._dark ? "#ffffff" : "#9D9D9D",
              fontWeight: 400,
              textTransform: "capitalize",
              "&.Mui-selected": {
                color: "#97144D",
              },
            },
          }}
        >
          {TabsMenu.map((_menu) => (
            <Tab value={_menu.id} label={_menu.name} {...a11yProps(_menu.id)} />
          ))}
        </Tabs>
      </Box>
      <Grid className={classes.gridcss}>
        {value === 1 ? (
          <TabPanel value={value} index={1} dir={theme.direction}>
            <EarlySettlement
              page={page}
              title={title}
              Funumber={Funumber}
              FuInvnumber={FuInvnumber}
              ShowFuDetails={ShowFuDetails}
              ShowInvoiceDetails={ShowInvoiceDetails}
              backFlow={backFlow}
              _dark={props._dark}
            />
          </TabPanel>
        ) : value === 2 ? (
          <TabPanel value={value} index={2} dir={theme.direction}>
            <EarlySettlementAuthorization _dark={props._dark} />
          </TabPanel>
        ) : value === 3 ? (
          <TabPanel value={value} index={3} dir={theme.direction}>
            <OfflineSettlement _dark={props._dark} />
          </TabPanel>
        ) : value === 4 ? (
          <TabPanel value={value} index={4} dir={theme.direction}>
            <OfflineSettlementAuthorization _dark={props._dark} />
          </TabPanel>
        ) : value === 5 ? (
          <TabPanel value={value} index={5} dir={theme.direction}>
            <DueDateExtension _dark={props._dark} />
          </TabPanel>
        ) : (
          <TabPanel value={value} index={6} dir={theme.direction}>
            <DueDateExtensionAuthorization _dark={props._dark} />
          </TabPanel>
        )}
      </Grid>
    </Grid>
  );
}
