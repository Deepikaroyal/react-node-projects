import React from "react";
import Leftbar from "../components/Account/Leftbar";
import Navbar from "../components/Account/Navbar";
import Dashboard from "../container/Financer/Dashboard";
import Bids from "../container/Financer/Bids";
import FUunit from "../container/Financer/FactoryUnit";
import Reports from "../container/Financer/Reports";
import Settlement from "../container/Financer/Settlement";
import Entity from "../container/Financer/Entity";
import Administration from "../container/Financer/Administration";
import { Box, CssBaseline } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../api";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));
const FinanceRoutes = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [page, setPage] = React.useState("Bids");

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handlePage = (page) => {
    // console.log('page', page);
    setPage(page);
  };

  const logoutUserHandler = () => {
    dispatch(logoutUser());
    navigate("/login");
  };
  return (
    <>
      <CssBaseline />
      <Navbar
        isLogin={true}
        open={open}
        handleDrawerOpen={handleDrawerOpen}
        handleDrawerClose={handleDrawerClose}
        _toggleDark={props._toggleDark}
        logoutUserHandler={logoutUserHandler}
        handletoggle={props.handletoggle}
        _entity={props._entity}
        handleEntity={props.handleEntity}
        _role={props._role}
        handleRole={props.handleRole}
        handlePage={handlePage}
      />
      <Leftbar
        open={open}
        handleDrawerClose={handleDrawerClose}
        handlePage={handlePage}
        _toggleDark={props._toggleDark}
        page={page}
      />
      <Box component="main" sx={{ flexGrow: 1, p: 1.5, pt: 3 }}>
        <DrawerHeader />
        {page === "Dashboard" && <Dashboard _dark={props._toggleDark} />}
        {page === "Bids" && (
          <Bids
            _dark={props._toggleDark}
            _role={props._role}
            _entity={props._entity}
          />
        )}
        {page === "FU" && <FUunit _dark={props._toggleDark} />}
        {page === "Settlement" && <Settlement _dark={props._toggleDark} />}
        {page === "Reports" && <Reports _dark={props._toggleDark} />}
        {page === "Administration" && (
          <Administration _dark={props._toggleDark} />
        )}
        {page === "Entity" && <Entity _dark={props._toggleDark} />}
      </Box>
    </>
  );
};

export default FinanceRoutes;
