import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export default function CheckboxLabels(props) {
  const [state, setState] = React.useState(props.checked);
  const _dark = props._dark ? props._dark : false;
  const size = props.size ? props.size : "normal";

  const handleChange = (event) => {
    props.handleChange(event.target.checked);
    setState(event.target.checked);
  };
  return (
    <FormGroup>
      <FormControlLabel
        control={
          <Checkbox
            checked={state}
            onChange={handleChange}
            name={props.name}
            size={size}
            sx={{
              "&.Mui-checked": {
                color: _dark ? "#FFFFFF !important" : "#97144D !important",
              },
            }}
          />
        }
        label={props.name}
      />
    </FormGroup>
  );
}
