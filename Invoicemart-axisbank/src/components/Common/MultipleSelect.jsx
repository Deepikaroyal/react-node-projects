import React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

export default function Tags(props) {
  return (
    <Stack spacing={3} sx={{ width: 335 }}>
      <div style={{ marginTop: "10px" }}>
        <Autocomplete
          multiple
          id="tags-outlined"
          options={BuyerEntity}
          getOptionLabel={(option) => option.title}
          filterSelectedOptions
          renderInput={(params) => (
            <TextField {...params} size="small" label={props.label} />
          )}
        />
      </div>
    </Stack>
  );
}

const BuyerEntity = [
  { title: "Lorem Ipsum" },
  { title: "Lorem Ipsum" },
  { title: "Lorem Ipsum" },
];
