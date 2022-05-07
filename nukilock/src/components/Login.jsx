import * as React from 'react';
import logo from '../NukiLogo.png';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import '../App.css';


function login() {
  return (
    <div>
      <div className="App">
        <Paper square>
          <img src={logo} alt='logo' />
        </Paper>
        <br></br>
        <br></br>
        <TextField type="number"  variant="standard" />
        <br></br>
        <br></br>
        <Button style={{ height: '75px', width: '45%' }} variant="outlined" color="success" > Ok </Button>
      </div>
    </div>
  );
}
export default login;


