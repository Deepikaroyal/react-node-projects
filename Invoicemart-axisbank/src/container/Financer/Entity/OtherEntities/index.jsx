import React from "react";
import MyEntity from "../MyEntity/index";
import Box from "@mui/material/Box";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/material/styles";
import { alpha, InputBase } from "@mui/material";

const OtherEntity = () => {
  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    width: "100% !important",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100% !important",
      [theme.breakpoints.down("md")]: {
        width: "20ch",
      },
    },
  }));

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    color: "#393939",
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 2,
    width: "100%",
    //border: '#00000026 solid 1px',
    boxShadow: "0px 1px 12px 2px #00000026",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(0),
      // width: 'auto',
      width: "100%",
      borderRadius: 5,
    },
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    //opacity: 0.3
  }));

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
      </Box>
      <div style={{ marginTop: "40px" }}>
        <MyEntity />
      </div>
    </div>
  );
};
export default OtherEntity;
