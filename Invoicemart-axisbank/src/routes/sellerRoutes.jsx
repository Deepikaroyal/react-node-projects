import React from "react";
import Leftbar from "../components/Account/Leftbar";
import Navbar from "../components/Account/Navbar";
import Dashboard from "../container/Seller/Dashboard";
import Factoryunit from "../container/Seller/FactoringUnit";
import Bids from "../container/Seller/Bids";
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
const SellerRoutes = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [page, setPage] = React.useState("Home");

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handlePage = (page) => {
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
        handlePage={handlePage}
        _entity={props._entity}
        handleEntity={props.handleEntity}
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
        {page === "Factory" ? (
          <Factoryunit />
        ) : page === "Bids" ? (
          <Bids />
        ) : (
          <Dashboard />
        )}
      </Box>
    </>
  );
};

export default SellerRoutes;
