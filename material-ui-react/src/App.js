import logo from './logo.svg';
import './App.css';
import {ButtonGroup,FormControlLabel, Button,
Checkbox,TextField,Paper, Grid,AppBar,Toolbar,IconButton} from '@mui/material';
import { Delete,Save } from '@mui/icons-material';
import { useState } from 'react';
import {makeStyles,ThemeProvider} from '@mui/styles';
import {Typography} from '@mui/material';
import {Container} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const useStyle = makeStyles({
  root:{
    background: 'linear-gradient(45deg ,#FE6888, #FF8E53)',
    border: '0 !important',
    borderRadius: '25px !important',
    marginBottom:'15px !important',
    color: 'white !important',
    padding: '0 38px'
  }
})

function ButtonStyled(){
  const classes = useStyle();
  // console.log("***",classes.root)
  return <Button className={classes.root}>Test Styled Button</Button>
}

function CheckboxExample(){
  const [checked,setChecked] = useState(true)
  return(  
      <FormControlLabel
      control={<Checkbox 
      checked={checked}
      icon={<Delete/>}
      checkedIcon={<Save/>}
      onChange={(e)=>setChecked(e.target.checked)}
      inputProps={{
        'arial-label': 'secondary checkbox'
      }}
      />}
      label="Testing Checkbox"
      />
      
  )
}

function App() {
  return (
    <Paper sx={{ padding: '32px'}}>
    <Container maxWidth='sm'>
    <div className="App">
      <header className="App-header">
        <AppBar color='secondary'>
          <Toolbar>
           <IconButton>
            <MenuIcon/>
           </IconButton>
           <Typography variant='h6'>
           MUI Themeing
           </Typography>
           <Button  
           style={{
            color:'white'
           }}>
            Login
           </Button>
          </Toolbar>       
        </AppBar>
        <Typography variant ="h2" component='div'>
          Welcome to MUI
        </Typography>
        <Typography variant ="h3">
          Learn to use  MUI
        </Typography>
      <ButtonStyled/>
      <Grid container spacing={4} justifyContent='center'>
      <Grid item xs={3} sm={6}>
        <Paper style={{height: 75, width:'100%',}}/>
      </Grid>
      <Grid item xs={3} sm={6}>
        <Paper style={{height: 75, width:'100%',}}/>
      </Grid>
      <Grid item xs={3} sm={6}>
        <Paper style={{height: 75, width:'100%',}}/>
      </Grid>
      </Grid>
      <TextField
      variant='filled'
      color='secondary'
      type='email'
      label= 'Email'
      placeholder='royald4040@gmail.com'
      />
      <CheckboxExample/>
      <ButtonGroup  variant="contained"  size="large" >
      <Button 
      startIcon={< Save/>}
      
      //  style={{
      //   fontSize: 24
      //  }}
       color="primary">
      Save
      </Button>
      
      <Button 
      startIcon={< Delete/>}
       color="secondary">
       Discard
      </Button>
      
      </ButtonGroup>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
    </Container>
    </Paper>
  );
}

export default App;
