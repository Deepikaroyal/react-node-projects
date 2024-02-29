/* eslint-disable */
import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { Stack } from "@mui/material";
import { makeStyles } from "@mui/styles";

export default function Bids(props) {
  const [menutab, setMenutab] = useState(5);
  const BootstrapButton = styled(Button)(({ ismenu }) => ({
    boxShadow: "none",
    textTransform: "none",
    fontSize: 14,
    padding: "8px 20px !important",
    //border: '1px solid #F9F9F9',
    borderRadius: 4,
    lineHeight: "20px",
    backgroundColor:
      ismenu !== menutab ? "#F9F9F9 !important" : "#97144D !important",
    color: ismenu !== menutab ? "#9D9D9D !important" : "#ffffff !important",
    border: "none",
    fontFamily: "Lato",
  }));
  const Tabs = [
    { id: 1, name: "List of Invoices" },
    { id: 2, name: "Create FU" },
    { id: 3, name: "Modify FU" },
    { id: 4, name: "Authorize FU" },
    { id: 5, name: "FU Listing" },
  ];
  const useStyles = makeStyles({
    gridcss: {
      borderRadius: 10,
      padding: 10,
      paddingBottom: 20,
      boxShadow: "0 6px 8px 0 rgba(0,0,0,0.2);",
      marginTop: 10,
    },
  });
  const classes = useStyles();
  return (
    <>
      <Stack spacing={2} direction="row">
        FU UNIT
      </Stack>
    </>
  );
}
