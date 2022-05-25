import * as React from 'react';
import logo from '../NukiLogo.png';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { useNavigate } from 'react-router-dom';
import '../App.css';
const Swal = require('sweetalert2');


const token = "bdeb6ae900e63ad6e8c13afa19fa2ce4b053838c7d1efd91cddc209b95b6acec74740b2c3602946e";

const Openurl = "https://api.nuki.io/smartlock/645574324/action/unlock";
const logUrl = "http://nukipi.local:1880/log";
const Closeurl = "https://api.nuki.io/smartlock/645574324/action/lock";

//TODO: maken van functie dat controleert of die code ( localstorgage) wel klopt met de code van in de database
// als dit niet zo is zouden de knoppen ofwel niks doen
// of je wordt automatisch van deze pagina gesmeten
// Ik zou het alle2 doen voor de veiligheid


function OpenLock(email) {
  if (global.config.LoggedIn.bool.en) {
    logThings(email, 1);
    console.log("Opening Lock");
    fetch(Openurl, {
      method: 'post',
      headers: new Headers({
        'Authorization': `Bearer ${token}`,
        // 'Content-Type': 'application/x-www-form-urlencoded'
      })
    }).then(res => {
      console.log(`statusCode: ${res.status}`)
      console.log(res)
    })
      .catch(error => {
        console.error(error)
      });
  }
  else {
    Swal.fire({
      position: 'top-end',
      icon: 'warning',
      title: 'You\'re not logged in',
      showConfirmButton: false,
      timer: 1000
    })
  }
};


function CloseLock(email) {
  console.log("Logged In: ", global.config.LoggedIn.bool.en)
  logThings(email, 0);
  if (global.config.LoggedIn.bool.en) {
    console.log("Closing Lock");
    fetch(Closeurl, {
      method: 'post',
      headers: new Headers({
        'Authorization': `Bearer ${token}`,
        // 'Content-Type': 'application/x-www-form-urlencoded'
      }),
    }).then(res => {
      console.log(`statusCode: ${res.status}`)
      console.log(res)
    })
      .catch(error => {
        console.error(error)
      });
  }
  else {
    Swal.fire({
      position: 'top-end',
      icon: 'warning',
      title: 'You\'re not logged in',
      showConfirmButton: false,
      timer: 1000
    })
  }
};

async function logThings(user, action) {
  var jsonString = { "email": user, "open_or_close": action }
  // Example POST method implementation:
  // Default options are marked with *
  const response = fetch(logUrl, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    headers: {
      'Content-Type': 'application/json',
      "Accept": '/',
      "Connection": "keep-alive"
    },
    body: JSON.stringify(jsonString)
  }).catch(err => console.log(err));
  console.log(jsonString);
}



function Login() {
  const navigate = useNavigate()
  return (
    <div className="App">
      <Paper onClick={() => navigate("/login")} square>
        <img src={logo} alt='logo' />
      </Paper>
      <br></br>
      <br></br>
      <Button onClick={() => CloseLock(localStorage.getItem("email"))} style={{ height: '75px', width: '45%' }} variant="outlined" color="success">Lock</Button>
      <Button onClick={() => OpenLock(localStorage.getItem("email"))} style={{ height: '75px', width: '45%' }} variant="outlined" color="error">Unlock</Button>
    </div>
  );
}
export default Login;


