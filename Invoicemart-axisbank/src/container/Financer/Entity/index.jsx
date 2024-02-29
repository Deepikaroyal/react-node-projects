import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import { Grid, Tabs, Tab, Box, Typography } from "@mui/material";
import MyEntity from "./MyEntity";
import OtherEntities from "./OtherEntities";
import { makeStyles } from "@mui/styles";
import PropTypes from "prop-types";

export default function Entities(props) {
  const [value, setValue] = useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const TabsMenu = [
    { id: 1, name: "My Entity" },
    { id: 2, name: "other Entities" },
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
            <MyEntity _dark={props._dark} />
          </TabPanel>
        ) : (
          <TabPanel value={value} index={2} dir={theme.direction}>
            <OtherEntities _dark={props._dark} />
          </TabPanel>
        )}
      </Grid>
    </Grid>
  );
}
