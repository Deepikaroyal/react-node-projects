import "./index.css";
import React, { useState } from "react";
import Logo from "../../assets/SvgIcons/invoicemart.svg";
import AtredsLogo from "../../assets/SvgIcons/atreds.svg";
import MenuAxis from "../../assets/SvgIcons/MenuDark.svg";
import MenuIcon from "../../assets/SvgIcons/MenuIcon.svg";
import {
  Toolbar,
  Typography,
  Badge,
  Link,
  useTheme,
  TextField,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import MuiAppBar from "@mui/material/AppBar";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import SearchIcon from "@mui/icons-material/Search";
//import AccountCircle from '@mui/icons-material/AccountBox';
// import MoreIcon from "@mui/icons-material/MoreVert";
import Box from "@mui/material/Box";
// import NotificationsIcon from "../../assets/SvgIcons/notification.svg";
import LogoutIcon from "../../assets/SvgIcons/logout.svg";
import LightThemeIcon from "../../assets/SvgIcons/Light.svg";
import DarkThemeIcon from "../../assets/SvgIcons/Dark.svg";
import UserPic from "../../assets/SvgIcons/userpic.svg";
import CustomSelect from "../Common/customDropdown";
import ChangeSecurityModal from "./ChangeSecurityModal";
import Autocomplete from "@mui/material/Autocomplete";
import { fetchUserBuRole } from "../../api";
import { useLocation } from "react-router-dom";

const Navbar = (props) => {
  const location = useLocation();
  const menuItems = [
    { title: "Bids", path: "Bids" },
    { title: "Dashboard", path: "Dashboard" },
    { title: "Entity", path: "Entity" },
    { title: "Administration", path: "Administration" },
    { title: "Reports", path: "Reports" },
    { title: "Settlements", path: "Settlement" },
  ];
  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
  })(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      //marginLeft: drawerWidth,
      // width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
    backgroundColor: "#f9f9f9",
  }));
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const theme = useTheme();
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleMenuLogout = () => {
    props.handletoggle(true);
    props.logoutUserHandler();
  };
  const useStyles = makeStyles({
    logoCss: {
      position: "relative",
      top: props.isLogin ? 5 : 3,
    },
    typograph: {
      color: "#97144D !important",
      fontSize: "10px !important",
      textDecoration: "none !important",
      fontWeight: "700 !important",
      marginLeft: "8px",
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
    toggleicon: {
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
    select: {
      [theme.breakpoints.down("sm")]: {
        marginLeft: "20px",
      },
    },
    Logoicon: {
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
    BiglogoIcon: {
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
    DspflxCls: {
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
      [theme.breakpoints.down("md")]: {
        display: "none",
      },
      [theme.breakpoints.down("lg")]: {
        display: "none",
      },
    },
    // DspflxCls: {
    //   [theme.breakpoints.down("md")]: {
    //     display: 'none',
    //   },
    // },
    // DspflxCls: {
    //   [theme.breakpoints.down("lg")]: {
    //     display: 'none',
    //   },
    // },
    AppbarCls: {
      [theme.breakpoints.down("sm")]: {
        height: props.isLogin ? "120px" : "60px",
        width: "100%",
      },
    },
    DspFlxIconsCls: {
      [theme.breakpoints.down("sm")]: {
        marginTop: "-35px",
        marginLeft: "180px",
      },
    },
    MblLogoCls: {
      [theme.breakpoints.up("lg")]: {
        display: "none",
      },
    },
    MblBottomIconsCls: {
      [theme.breakpoints.up("lg")]: {
        display: "none",
      },
    },
    textFieldRoot: {
      // this has a specificity of (0,3,0) so might not work if you need to be more specific.
      "& .MuiOutlinedInput-root .MuiAutocomplete-input": {
        padding: "0.5px 8px 0.5px !important",
      },
    },
  });
  // const BUddl = [{ name: "BU", value: "BU" }];
  const classes = useStyles();
  const menuId = "primary-search-account-menu";

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton
          size="large"
          aria-label="theme"
          color="inherit"
          onClick={() => {
            props.handletoggle(props._toggleDark);
          }}
        >
          <Badge color="error">
            <img
              src={props._toggleDark ? DarkThemeIcon : LightThemeIcon}
              alt="theme"
              width="90"
              height="28"
            />
          </Badge>
        </IconButton>
      </MenuItem>
      <div>
        {/* <MenuItem>
          <IconButton
            size="large"
            aria-label="show 17 new notifications"
            color="inherit"
            disabled
          >
            <Badge color="error">
              <img src={NotificationsIcon} alt="notifications" width="40" />
            </Badge>
          </IconButton>
        </MenuItem> */}
        <MenuItem>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
          >
            <img src={UserPic} alt="profilepic" width="40" />
            {/* <AccountCircle sx={{ color: '#97144D', fontSize: 40, borderRadius: 10 }} /> */}
          </IconButton>
        </MenuItem>
        <MenuItem>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
            onClick={handleMenuLogout}
          >
            <img src={LogoutIcon} alt="logout" width="40" />
          </IconButton>
        </MenuItem>
      </div>
    </Menu>
  );
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [changeSecurityModal, setChangeSecurityModal] = useState(false);
  const [changeSecurity, setChangeSecurity] = useState("");
  const handleSecurity = (type) => {
    setChangeSecurityModal(true);
    setChangeSecurity(type);
  };
  const handleModalClose = () => setChangeSecurityModal(false);
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setinputValue] = React.useState("");
  const [isautoFocus, setIsautoFocus] = React.useState(false);
  const [roleData, setRoleData] = useState([]);
  const [buData, setBuData] = useState([]);
  console.log("~~~~", props._entity);
  const fetchRole = React.useCallback(async () => {
    let data = await fetchUserBuRole();
    if (data) {
      setRoleData([data.data]);
      props.handleRole(data.data?.userRole);
    }
    setBuData([location.state]);
    props.handleEntity(location.state?.value);
  }, [location.state, props]);

  React.useEffect(() => {
    if (props.isLogin) {
      fetchRole();
    }
  }, [fetchRole, props.isLogin]);

  const autoFilter = (newMember) => {
    setinputValue(newMember.title);
    setIsFocused(false);
    props.handlePage(newMember.path);
  };
  const ChangeStr = (e) => {
    if (e && e.target.value.length >= 2) {
      setIsFocused(true);
      setIsautoFocus(false);
    } else {
      setIsautoFocus(true);
    }
    setinputValue(e.target.value);
  };
  return (
    <AppBar sm={6} position="fixed" className={classes.AppbarCls}>
      <Toolbar sm={6}>
        {props.isLogin ? (
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={
              props.open ? props.handleDrawerClose : props.handleDrawerOpen
            }
            edge="start"
            sx={{
              marginRight: "15px",
              ...(props.open && { backgroundColor: "#fff" }),
            }}
          >
            <img src={props.open ? MenuIcon : MenuAxis} width="50" alt="menu" />
          </IconButton>
        ) : (
          ""
        )}
        <Typography variant="h6" noWrap component="div">
          <img src={Logo} alt="Invoicemart" height="54" />
          <img
            src={AtredsLogo}
            alt="logo"
            height="40"
            className={classes.MblLogoCls}
          />
        </Typography>
        {props.isLogin ? (
          <Box sx={{ flexGrow: 1 }}>
            <Autocomplete
              freeSolo
              inputValue={inputValue}
              onInputChange={(e) => ChangeStr(e)}
              onChange={(e, newMember) => autoFilter(newMember)}
              disableClearable
              options={menuItems}
              getOptionLabel={(option) => option.title}
              open={isFocused}
              id="open-on-focus"
              className={classes.textFieldRoot}
              renderInput={(params) => (
                <TextField
                  autoFocus={isautoFocus}
                  {...params}
                  placeholder="Search input"
                  InputProps={{
                    ...params.InputProps,
                    type: "search",
                    startAdornment: <SearchIcon />,
                  }}
                />
              )}
            />
          </Box>
        ) : (
          ""
        )}

        <Box sx={{ flexGrow: 1 }}>
          {props.isLogin ? (
            <Link href="#" variant="body2" className={classes.typograph}>
              FAQ
            </Link>
          ) : (
            ""
          )}
        </Box>

        <Box
          sm={6}
          className={classes.DspflxCls}
          sx={{
            display: { md: "flex", position: "relative", top: 7 },
          }}
        >
          {props.isLogin ? (
            <>
              <div sm={6} className={classes.toggleicon}>
                <IconButton
                  size="large"
                  aria-label="theme"
                  color="inherit"
                  onClick={() => {
                    props.handletoggle(props._toggleDark);
                  }}
                >
                  <img
                    src={props._toggleDark ? DarkThemeIcon : LightThemeIcon}
                    alt="theme"
                    width="90"
                  />
                </IconButton>
              </div>
              {/* <div sm={6} > */}
              <div className={classes.select}>
                <CustomSelect
                  style={{
                    position: "relative",
                    fontWeight: "700",
                    fontSize: "12px",
                  }}
                  data={roleData}
                  value={props._role}
                  label="ROLE"
                  width="50px"
                  onChange={(e) => props.handleRole(e)}
                />
              </div>
              <div className={classes.select}>
                <CustomSelect
                  style={{
                    position: "relative",
                    fontWeight: "700",
                    fontSize: "12px",
                  }}
                  data={buData}
                  value={props._entity}
                  label="ENTITY"
                  width="50px"
                  onChange={(e) => {
                    props.handleEntity(e);
                  }}
                />
              </div>
              <div sm={6} className={classes.DspFlxIconsCls}>
                {/* <IconButton
                  size="large"
                  aria-label="show 17 new notifications"
                  color="inherit"
                  disabled
                >
                  <Badge color="error">
                    <img src={NotificationsIcon} alt="notifications" width="40" />
                  </Badge>
                </IconButton> */}
                <IconButton
                  size="large"
                  // edge="end"
                  // id="basic-button"
                  aria-label="account of current user"
                  aria-controls={open ? "account-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  color="inherit"
                  onClick={handleClick}
                >
                  <img src={UserPic} alt="profilepic" width="40" />
                  {/* <AccountCircle sx={{ color: '#97144D', fontSize: 42, borderRadius: 10, margin: '-5px -5px 0px -10px' }} /> */}
                </IconButton>
                <IconButton
                  size="large"
                  edge="end"
                  aria-label="account of current user"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  onClick={handleMenuLogout}
                  color="inherit"
                >
                  <img src={LogoutIcon} alt="logout" width="40" />
                </IconButton>
                {/* </div> */}
              </div>{" "}
            </>
          ) : (
            ""
          )}
          <div className={classes.BiglogoIcon}>
            <img
              src={AtredsLogo}
              alt="logo"
              height="61"
              className={classes.logoCss}
            />
          </div>
        </Box>

        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          {props.isLogin ? (
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              {/* <MoreIcon sx={{ color: "black", fontSize: 30 }} /> */}
            </IconButton>
          ) : (
            ""
          )}
          {props.isLogin ? (
            <div sm={6} className={classes.Logoicon}>
              <img src={AtredsLogo} alt="logo" height="40" />
              {renderMobileMenu}
            </div>
          ) : (
            ""
          )}
        </Box>
        {/* </div> */}
      </Toolbar>
      {props.isLogin ? (
        <>
          <div className={classes.MblBottomIconsCls}>
            <CustomSelect
              className={classes.select}
              style={{
                position: "relative",
                fontWeight: "700",
                fontSize: "12px",
              }}
              data={buData}
              value={props._entity}
              label="ENTITY"
              width="50px"
              onChange={(e) => {
                props.handleEntity(e);
              }}
            />
            <div sm={6} className={classes.DspFlxIconsCls}>
              {/* <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
                disabled
              >
                <Badge color="error">
                  <img src={NotificationsIcon} alt="notifications" width="40" />
                </Badge>
              </IconButton> */}
              <IconButton
                size="large"
                // edge="end"
                // id="basic-button"
                aria-label="account of current user"
                aria-controls={open ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                color="inherit"
                onClick={handleClick}
              >
                <img src={UserPic} alt="profilepic" width="40" />
                {/* <AccountCircle sx={{ color: '#97144D', fontSize: 42, borderRadius: 10, margin: '-5px -5px 0px -10px' }} /> */}
              </IconButton>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleMenuLogout}
                color="inherit"
              >
                <img src={LogoutIcon} alt="logout" width="40" />
              </IconButton>
            </div>
          </div>
          <Menu
            anchorEl={anchorEl}
            elevation={0}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            // MenuListProps={{
            //   "aria-labelledby": "basic-button",
            // }}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: 6.2,
                right: "18% !important",
                left: "69% !important",
                display: "flex",
                position: "absolute",
                justifyContent: "end",

                "& .MuiAvatar-root": {
                  width: 32,
                  height: 32,
                },
                "&:before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: "0% ",
                  right: "10% ",
                  width: 10,
                  height: 10,
                  bgcolor: "background.paper",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            }}
            // anchorOrigin={{ horizontal: "right" , vertical: "top",}}
            // transformOrigin={{ horizontal: "right",  vertical: "bottom",}}
          >
            <MenuItem
              onClick={() => {
                handleSecurity("pwd");
              }}
            >
              Change Password
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleSecurity("pin");
              }}
            >
              Change Pin
            </MenuItem>
          </Menu>
        </>
      ) : (
        ""
      )}
      {changeSecurityModal && (
        <ChangeSecurityModal
          open={changeSecurityModal}
          security={changeSecurity}
          handleClose={handleModalClose}
          _dark={props._toggleDark}
        />
      )}
    </AppBar>
  );
};

export default Navbar;
