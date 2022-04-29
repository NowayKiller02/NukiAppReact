import React from "react";
import logo from './NukiLogo.png';
import './App.css'

function App() {
  return (
    <div className="App">
      <br></br>
      <img src= {logo} alt="Logo Vives Nukilock" id = "logo" width = "623" height = "194"></img>
      <br></br><br></br><br></br>
      <button class="button-31" role="button">LOCK</button>
      <br></br>
      <button class="button-31" role="button">UNLOCK</button>
    </div>
  );
}
export default App;
