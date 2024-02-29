import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { makeStyles } from "@mui/styles";

export default function SelectComponent(props) {
  const useStyles = makeStyles({
    labelCls: {
      //color: "#000",
      "&.Mui-focused": {
        //color: "#000",
      },
    },
    selectCls: {
      "&.MuiOutlinedInput-root": {
        borderColor: "red",
      },
    },
  });
  const classes = useStyles();
  return (
    <FormControl sx={{ mt: 1, width: props.width ? props.width : "100%" }}>
      <InputLabel
        sx={{ top: props.value ? 0 : -6 }}
        className={classes.labelCls}
      >
        {props.label}
      </InputLabel>
      <Select label={props.label} {...props} className={classes.selectCls}>
        {props.data.map((e, index) => (
          <MenuItem value={e.value} key={index}>
            {e.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
