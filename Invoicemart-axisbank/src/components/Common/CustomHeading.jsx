import * as React from "react";
import { Typography, useTheme } from "@mui/material";
import { makeStyles } from "@mui/styles";

const CustomHeading = (props) => {
  const theme = useTheme();
  const useStyles = makeStyles({
    typography: {
      textAlign: "left",
      fontSize: "26px !important",
      fontWeight: "600 !important",
      paddingBottom: theme.spacing(2),
      fontFamily: "Lato",
      width: "90%",
    },
  });
  const classes = useStyles();
  return (
    <Typography component="h1" variant="h5" className={classes.typography}>
      {props.title}
    </Typography>
  );
};

export default CustomHeading;
