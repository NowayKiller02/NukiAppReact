import * as React from 'react';
import logo from '../NukiLogo.png';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import '../App.css';


const token = "bdeb6ae900e63ad6e8c13afa19fa2ce4b053838c7d1efd91cddc209b95b6acec74740b2c3602946e";

const Openurl = "https://api.nuki.io/smartlock/645574324/action/unlock";
const Closeurl = "https://api.nuki.io/smartlock/645574324/action/lock";

//TODO: maken van functie dat controleert of die code ( localstorgage) wel klopt met de code van in de database
// als dit niet zo is zouden de knoppen ofwel niks doen
// of je wordt automatisch van deze pagina gesmeten
// Ik zou het alle2 doen voor de veiligheid


function OpenLock() {
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
};


function CloseLock() {
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

};


function login() {
  return (
      <div className="App">
        <Paper square>
          <img src={logo} alt='logo' />
        </Paper>
        <br></br>
        <br></br>
        <Button onClick={CloseLock} style={{ height: '75px', width: '45%' }} variant="outlined" color="success">Lock</Button>
        <Button onClick={OpenLock} style={{ height: '75px', width: '45%' }} variant="outlined" color="error">Unlock</Button>
      </div>
  );
}
export default login;


