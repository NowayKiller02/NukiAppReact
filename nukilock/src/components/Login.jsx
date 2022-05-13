import React, { useEffect, useState } from "react";
import logo from '../NukiLogo.png';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import '../App.css';


// TODO: maken van code dat de key vanuit de database haalt en deze in de localStorage opslaat...

function Login() {
  const [fetchInfo, setFetchInfo] = useState('');

  useEffect(() => {

    if(localStorage.getItem("nukiKey") === "" || localStorage.getItem("nukiKey") === null){
      console.log('We kunnen de code niet inladen vanuit vorige ingegeven codes, is dit de eerste keer?');
    }
    else{
      var code = localStorage.getItem("nukiKey");
      setFetchInfo(code);
    }
  })

  return (
    <div>
      <div className="App">
        <Paper square>
          <img src={logo} alt='logo' />
        </Paper>
        <br></br>
        <br></br>
        <TextField value={fetchInfo} type="number" variant="standard" />
        <br></br>
        <br></br>
        <Button style={{ height: '75px', width: '45%' }} variant="outlined" color="success" > Ok </Button>
      </div>
    </div>
  );

}

export default Login;


