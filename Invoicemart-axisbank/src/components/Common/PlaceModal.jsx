import React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Astrid from "../../assets/SvgIcons/astrid.svg";

const style = {
  position: "absolute",
  top: 60,
  left: "15%",
  width: "70%",
  height: "70%",
  bgcolor: "background.paper",
  boxShadow: 24,
  overflowY: "scroll",
  overflowX: "hidden",
  p: 4,
};

export default function PlaceModal(props) {
  const _dark = props._dark ? props._dark : false;
  const open = props.open;

  const useStyles = makeStyles({
    psaCls: {
      fontSize: "14px",
      fontFamily: "Lato",
      fontWeight: 700,
      lineHeight: "30px",
      paddingTop: 10,
      paddingBottom: 10,
      textAlign: "center",
    },
  });
  const classes = useStyles();

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={props.open}
      onClose={props.handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <Box
          sx={style}
          style={{
            backgroundColor: _dark ? "#282828" : "#fff",
            textAlign: "center",
            justifyContent: "center",
          }}
        >
          <img src={Astrid} alt="Astrid" />
          <h3
            className="fu-listing"
            style={{
              color: _dark ? "#ffffff" : "#404040",
            }}
          >
            {props.placeBidRespo.astrid}
          </h3>
          <Box sx={{ flexGrow: 1 }}>
            <Grid sx={{ justifyContent: "center" }} container>
              <Grid
                sx={{
                  padding: "15px",
                  textAlign: "center",
                  justifyContent: "center",
                }}
              >
                <Typography className={classes.psaCls}>
                  Your Bids has been placed successfully!
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
}
