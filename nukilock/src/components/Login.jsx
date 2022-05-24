import React, { useEffect, useState } from "react";
import logo from '../NukiLogo.png';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import '../config';
const Swal = require('sweetalert2');


// TODO: maken van code dat de key vanuit de database haalt en deze in de localStorage opslaat...

const loginUrl = "http://10.198.112.19:1880/login";
const keyurl = "http://10.198.112.19:1880/key";


// Example POST method implementation:
async function postData(user, code) {
  var infoww = { email: user, key: code }
  // Default options are marked with *
  const response = await fetch(keyurl, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    headers: {
      'Content-Type': 'application/json',
      "Accept": '/',
      "Connection": "keep-alive"
    },
    body: JSON.stringify(infoww) // body data type must match "Content-Type" header
  }).catch(err => console.log(err));
  console.log(infoww);
  return response.json(); // parses JSON response into native JavaScript objects
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
  const response = await fetch(loginUrl, {
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
  return response.json(); // parses JSON response into native JavaScript objects
}

function checkLogin() {
  if (global.config.LoggedIn.bool.en) {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'You are logged in',
      showConfirmButton: false,
      timer: 1000
    })
  }
  else {
    Swal.fire({
      position: 'top-end',
      icon: 'warning',
      title: 'You are not logged in',
      showConfirmButton: false,
      timer: 1000
    });
  }
}

function Login() {
  const [emailInfo, setemailInfo] = useState('');
  const [codeInfo, setcodeInfo] = useState('');
  const navigate = useNavigate();
  useEffect(() => {
    function fetchCode() {
      checkLogin()
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
        <Button style={{ height: '75px', width: '45%' }} variant="outlined" color="success" onClick={() => postData(emailInfo, codeInfo).then(data => {
          console.log(data);
          if (data) {
            console.log("de var: ", global.config.LoggedIn.bool.en);
            global.config.LoggedIn.bool.en = true;
            console.log("de var: ", global.config.LoggedIn.bool.en);
            saveEmail(emailInfo);
            saveCode(codeInfo);
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Succes!',
              showConfirmButton: false,
              timer: 1000
            })
          }
          else {
            global.config.LoggedIn.bool.en = false;
            console.log("de var: ", global.config.LoggedIn.bool.en);
          }
        }).catch(err => console.log(err))} > Login </Button>
        <br></br>
        <br></br>
        <Button style={{ height: '75px', width: '45%' }} variant="outlined" color="success" onClick={() => navigate("/actions")} > Go to the controls</Button>
        <br></br>
        <br></br><br></br>
        <br></br>
        <Button style={{ height: '75px', width: '45%' }} variant="outlined" color="success" onClick={() => makePost(emailInfo).then(data => {
          if (data) {
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'E-mail has been sent',
              showConfirmButton: false,
              timer: 1000
            })
          } else {
            Swal.fire({
              icon: 'warning',
              title: 'Sorry, you don\'t have acces to this room, ask a teacher for more information',
              showConfirmButton: false,
            })
          }
        })} > Request code </Button>
      </div>
    </div>
  );
}

export default Login;


