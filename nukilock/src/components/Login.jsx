import React, { useEffect, useState } from "react";
import logo from '../NukiLogo.png';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import '../config';


// TODO: maken van code dat de key vanuit de database haalt en deze in de localStorage opslaat...

const Openurl = "http://10.198.112.19:1880/login";
const keyurl = "http://10.198.112.19:1880/key";




function Submit() {
  console.log("nog geen functie");
}

function saveEmail(email) {
  localStorage.setItem("email", email);
}

function saveCode(code) {
  localStorage.setItem("nukiKey", code);
}

async function makePost(email) {
  // Example POST method implementation:
  // Default options are marked with *
  const response = await fetch(Openurl, {
    method: 'POST',
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'text/plain',
      "Accept": '/',
      "Connection": "keep-alive"
    },
    body: '"' + email + '"'
  }).catch(err => console.log(err));
  console.log(response.json())
}

function Login() {
  const [emailInfo, setemailInfo] = useState('');
  const [codeInfo, setcodeInfo] = useState('');
  const navigate = useNavigate()

  useEffect(() => {
    function fetchCode() {
      if (localStorage.getItem("nukiKey") === "" || localStorage.getItem("nukiKey") === null) {
        console.log("code not found");
      }
      else {
        var code = localStorage.getItem("nukiKey");
        setcodeInfo(code);
      }
      if (localStorage.getItem("email") === "" || localStorage.getItem("email") === null) {
        console.log("email not found");
      }
      else {
        var email = localStorage.getItem("email");
        setemailInfo(email);
      }
    }
    fetchCode()
  }, [])
  return (
    <div>
      <div className="App">
        <Paper onClick={() => navigate("/")} square>
          <img src={logo} alt='logo' />
        </Paper>
        <br></br>
        <br></br>
        <TextField required value={emailInfo} onChange={(e) => setemailInfo(e.target.value)} id="standard-required" label="E-mail" variant="standard" />
        <br></br>
        <TextField required value={codeInfo} onChange={(e) => setcodeInfo(e.target.value)} type="password" label="Password" variant="standard" />
        <br></br>
        <br></br>
        <Button style={{ height: '75px', width: '45%' }} variant="outlined" color="success" onClick={Submit} > Login </Button>
        <br></br>
        <br></br>
        <Button style={{ height: '75px', width: '45%' }} variant="outlined" color="success" onClick={() => makePost(emailInfo)} > Request code </Button>
      </div>
    </div>
  );

}

export default Login;


