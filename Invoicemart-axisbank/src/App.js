import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { BrowserRouter, Routes as Router, Route } from "react-router-dom";
import Login from "./container/Login";
import Adfslogin from "./container/Adfslogin";
import ForgotPwd from "./container/Forgotpassword";
import ForgotPin from "./container/Forgotpin";
import PrivateRoutes from "./components/Account/PrivateRoutes";
import PlatformPrivateRoute from "./components/Account/PlatformPrivateRoute";
// import BidsSummaryList from "./container/PlatformUser/Bids/BidsSummary";
import SellerRoutes from "./routes/sellerRoutes";
import BuyerRoutes from "./routes/buyerRoutes";
import FinanceRoutes from "./routes/financeRoutes";
import PlatformRoutes from "./routes/platformRoutes";
import PageError from "./container/404";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SiteTheme } from "./redux/actions";
import { useDispatch } from "react-redux";
import logout from "./services/logout";
import store from "./redux";

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "dark" && {
      background: {
        default: "#181818",
        paper: "#181818",
      },
    }),
    text: {
      ...(mode === "light"
        ? {
            primary: "#404040",
            secondary: "#404040",
          }
        : {
            primary: "#fff",
            secondary: "#fff",
          }),
    },
  },
});
function App() {
  const dispatch = useDispatch();
  const [_toggleDark, _settoggleDark] = useState(false);
  const [_entity, _setEntity] = useState("");
  const [_role, _setRole] = useState("");

  useEffect(() => {
    if (
      window.performance.getEntriesByType("navigation") &&
      window.performance.getEntriesByType("navigation")[0].type === "navigate"
    ) {
      store.dispatch(logout());
    }
  }, []);

  const handletoggle = (taggle) => {
    _settoggleDark(!taggle);
    dispatch(SiteTheme(!taggle));
    sessionStorage.setItem("theme", !taggle);
  };
  const handleEntity = (entity) => {
    //console.log(entity)
    _setEntity(entity);
  };
  const handleRole = (role) => {
    // console.log(role)
    _setRole(role);
  };
  return (
    <ThemeProvider
      theme={
        _toggleDark
          ? createTheme(getDesignTokens("dark"))
          : createTheme(getDesignTokens("light"))
      }
    >
      <Box
        sx={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "background.default",
          color: "text.primary",
        }}
      >
        <BrowserRouter>
          <Router>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Login />} />
            <Route path="/adfslogin" element={<Adfslogin />} />
            <Route path="/forgotpassword" element={<ForgotPwd />} />
            <Route path="/forgotpin" element={<ForgotPin />} />
            <Route path="/seller" element={<PrivateRoutes />}>
              <Route
                path="/seller"
                element={
                  <SellerRoutes
                    _toggleDark={_toggleDark}
                    handletoggle={handletoggle}
                    _entity={_entity}
                    handleEntity={handleEntity}
                    _role={_role}
                    handleRole={handleRole}
                  />
                }
              />
            </Route>
            <Route path="/financer" element={<PrivateRoutes />}>
              <Route
                path="/financer"
                element={
                  <FinanceRoutes
                    _toggleDark={_toggleDark}
                    handletoggle={handletoggle}
                    _entity={_entity}
                    handleEntity={handleEntity}
                    _role={_role}
                    handleRole={handleRole}
                  />
                }
              />
            </Route>
            <Route path="/buyer" element={<PrivateRoutes />}>
              <Route
                path="/buyer"
                element={
                  <BuyerRoutes
                    _toggleDark={_toggleDark}
                    handletoggle={handletoggle}
                    _entity={_entity}
                    handleEntity={handleEntity}
                    _role={_role}
                    handleRole={handleRole}
                  />
                }
              />
            </Route>
            <Route path="/platformUser" element={<PlatformPrivateRoute />}>
              <Route
                path="/platformUser"
                element={
                  <PlatformRoutes
                    _toggleDark={_toggleDark}
                    handletoggle={handletoggle}
                    _entity={_entity}
                    handleEntity={handleEntity}
                    _role={_role}
                    handleRole={handleRole}
                  />
                }
              />
            </Route>
            {/*  <Route path ='/platformUser' element={<BidsSummaryList/>}/> */}
            <Route path="/*" element={<PageError />} />
          </Router>
        </BrowserRouter>
        <ToastContainer
          position="bottom-left"
          autoClose="5000"
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </Box>
    </ThemeProvider>
  );
}

export default App;
