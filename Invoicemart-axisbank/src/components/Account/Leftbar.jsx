import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import MuiDrawer from "@mui/material/Drawer";
import { styled } from "@mui/material/styles";
import { Menus } from "../../mock/menu";

//console.log('Menus',Menus)
const Leftbar = (props) => {
  const drawerWidth = 200;
  const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
    top: 61,
    backgroundColor: props._toggleDark ? "#282828" : "#E2E2E2",
  });

  const closedMixin = (theme) => ({
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up("sm")]: {
      width: `calc(${theme.spacing(9)} + 1px)`,
    },
    top: 61,
    backgroundColor: props._toggleDark ? "#282828" : "#E2E2E2",
  });

  const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open",
  })(({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    backgroundColor: "pink",
    paddingTop: theme.spacing(10),
    ...(open && {
      ...openedMixin(theme),
      "& .MuiDrawer-paper": openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      "& .MuiDrawer-paper": closedMixin(theme),
    }),
  }));
  return (
    <Drawer
      variant="permanent"
      open={props.open}
      style={{ position: "relative", top: 62 }}
    >
      <Divider />
      <List>
        {Menus.map((e, index) => (
          <ListItem
            button
            key={e.name}
            onClick={() => {
              props.handlePage(e.page);
            }}
          >
            <ListItemIcon>
              <img
                src={
                  props.page === e.page
                    ? e.Icon1
                    : props._toggleDark
                    ? e.IconDark
                    : e.Icon
                }
                alt={e.name}
                width="50"
                height="50"
              />
            </ListItemIcon>
            <ListItemText
              primary={e.name}
              primaryTypographyProps={{
                style: {
                  whiteSpace: "normal",
                  fontSize: 14,
                  fontFamily: "Lato",
                  fontWeight: 700,
                  color: props._toggleDark ? "#ffffff" : "#404040",
                  lineHeight: "14px",
                },
              }}
            />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Leftbar;
