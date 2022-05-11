import React, { useEffect, useState } from "react";
import logo from '../NukiLogo.png';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import '../App.css';
import raw from '../gitignore.txt';
import { getThemeProps } from "@mui/system";

var value;




export default function Login() {
  function getKey() {
    fetch(raw)
      .then(r => r.text())
      .then(text => {
        if (text !== "") {
          console.log('text decoded:', text);
          const value = text;
          return value;
        }
        else {
          console.log('Sorry je bent niet ingelogd');
        }
      })
  }
  return (
    <div>
      <div className="App">
        <Paper square>
          <img src={logo} alt='logo' />
        </Paper>
        <br></br>
        <br></br>
        <TextField value={getKey()} type="number" variant="standard" />
        <br></br>
        <br></br>
        <Button style={{ height: '75px', width: '45%' }} variant="outlined" color="success" > Ok </Button>
      </div>
    </div>
  );

}


