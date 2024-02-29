import React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Changepwd from "../ChangePassword";
import Changepin from "../ChangePin";

const style = {
  position: "absolute",
  top: 60,
  left: "10%",
  width: "80%",
  height: "80%",
  bgcolor: "background.paper",
  boxShadow: 24,
  overflowY: "scroll",
  overflowX: "hidden",
  p: 4,
};

export default function ChangeSecurityModal(props) {
  const _dark = props._dark ? props._dark : false;
  const open = props.open;
  const securityType = props.security;

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
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
          }}
        >
          {securityType === "pwd" ? (
            <Changepwd
              _dark={_dark}
              open={true}
              handleClose={props.handleClose}
            />
          ) : (
            <Changepin
              _dark={_dark}
              open={true}
              handleClose={props.handleClose}
            />
          )}
        </Box>
      </Fade>
    </Modal>
  );
}
