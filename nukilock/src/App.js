import * as React from 'react';
import logo from './NukiLogo.png';
import Button from '@mui/material/Button';
import './App.css';
import 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap';
import 'https://fonts.googleapis.com/icon?family=Material+Icons';



function App() {
  return (
    <div className="App">
      <br></br>
      <img src= {logo} alt="Logo Vives Nukilock" id = "logo" width = "623" height = "194"></img>
      <br></br><br></br><br></br>
      <Button variant="contained">Lock</Button>;
      <br></br>
      <Button variant="contained">Unlock</Button>;
    </div>
  );
}
export default App;
