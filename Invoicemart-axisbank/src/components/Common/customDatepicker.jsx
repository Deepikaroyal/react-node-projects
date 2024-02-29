import * as React from "react";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";

export default function CustomDatePicker(props) {
  const width = props.width ? props.width : "330px";

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div style={{ marginTop: "10px" }}>
        <DatePicker
          label="From Date*"
          style={{ fontSize: 13 }}
          renderInput={(params) => (
            <TextField
              {...params}
              size="small"
              style={{ width: width, fontSize: 13 }}
            />
          )}
          {...props}
        />
      </div>
    </LocalizationProvider>
  );
}
