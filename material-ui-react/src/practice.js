import React, { useState } from 'react';
import { Button, Typography,Stack,IconButton,Box,
    TextField,MenuItem,FormControlLabel,Switch,Card,CardContent,CardActions, } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
function Practice() {
    const[countries,setCountries] = useState([])
    const handlechange=(e)=>{
        const value = e.target.value
  setCountries(typeof value === 'string' ? value.split(","):value)
    }
    const [checked ,setChecked] = useState(false)
    //switch handlechange:
    const handleChangeTwo =(e)=>{
   setChecked(e.target.checked)
    }
  return (
    <div>
        {/* understanding typography */}
        <Typography variant="h1">
         h1 heading
        </Typography>
        <Typography variant="h3">
         h3 heading
        </Typography>
        <Typography variant="h6">
         h6 heading
        </Typography>
        <Typography variant='subtitle1'>
         sub title 1
        </Typography>
        <Typography variant="body1">
         body1 partkluhkyjfbvnhjy
        </Typography>
       {/* understanding button */}
       
       <Stack spacing={2} direction='row'>
       <Button variant='text'>Text</Button>
       <Button variant='contained' disableElevation>contained</Button>
       <Button variant='outlined' disableRipple>outlined</Button>
       </Stack>
       <Stack display='block' spacing={2} direction='row'>
       <Button  variant='contained' size='medium'>
        medium
       </Button>
       <IconButton aria-label='send' color='success' size='small'>
         <SendIcon/>
       </IconButton>
       </Stack>
       <Box width='250px'>
       <TextField label='select country'
        select 
        value={countries} 
        onChange={handlechange}
        fullWidth
        SelectProps={{
            multiple:true
        }}
        >
       <MenuItem value='IN'>India</MenuItem>
       <MenuItem value='US'>USA</MenuItem>
       </TextField>
       </Box>
       {/* understanding switch  */}
       <Box>
        <FormControlLabel
         label='Dark mode' 
         control={<Switch checked={checked}
         onChange={handleChangeTwo}
         size="medium"
         color='success'/>}/>
       </Box>
       <Card>
          <CardContent>
            <Typography gutterBottom varient='h5' component='div'>
             Reacthxbhkjchcsxdcfvghjksdfghjkd
             asdfghjkl;'
             dfghjkl;'sdfghjkldfghj'asdfghjkl
            </Typography>
          </CardContent>
          <CardActions>
            <Button size='small'>Share</Button>
          </CardActions>
         </Card>
    </div>
  )
}

export default Practice