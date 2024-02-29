import React from "react";
import { Box } from "@mui/system";
import { Button, TextField, Typography } from "@mui/material";


export default function Form() {
 
  return (
    <div>
      <form>
        <Box
          bgcolor='white'
          display="flex"
          flexDirection={"column"}
          maxWidth={400}
          alignItems="center"
          justifyContent={"center"}
          margin="auto"
          marginTop={5}
          padding={3}
          borderRadius={5}
          boxShadow={"5px 5px 10px #ccc"}
          border-radius={'20px'}
          sx={{
            ":hover": {
              boxShadow: "10px 10 px 20px #ccc",
            },
          }}
        >
          <Typography variant="h2" padding={3} textAlign='center'>Login</Typography>
          <TextField margin={'normal'} type={"text"} variant="outlined" placeholder="User Name"/>
          <TextField margin={'normal'} type={"password"} variant="outlined" placeholder="Password"/>
          <TextField margin={'normal'}  variant="outlined"/>
          <Button sx={{marginTop:3,borderRadius:3}} variant="contained" color="warning">Login</Button>
        </Box>
      </form>
    </div>
  );
}
