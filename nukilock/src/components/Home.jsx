import * as React from 'react';
import logo from '../NukiLogo.png';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import '../App.css';
import { useNavigate } from 'react-router-dom';
const Swal = require('sweetalert2');


const Openurl = "http://10.198.112.30:1880/login";
const keyurl = "http://10.198.112.30:1880/key";

async function makePost() {
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
        body: '"test@hotmail.nl"'
    }).catch(err => console.log(err));
    return response.json(); // parses JSON response into native JavaScript objects
}




var infoww = {email:"ruben.saomez@student.vives.be",key:"ThisIsATest"}

// Example POST method implementation:
async function postData() {
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



export default function Login() {
    const navigate = useNavigate()

    return (
        <div className="App">
            <Paper square>
                <img src={logo} alt='logo' />
            </Paper>
            <br></br>
            <br></br>
            <Button style={{ height: '75px', width: '45%' }} variant="outlined" color="success" onClick={() => navigate("/login")} > Login</Button>
            <br></br>
            <br></br>
            <br></br>
            <Button style={{ height: '75px', width: '45%' }} variant="outlined" color="success" onClick={() => {
                makePost().then(data => {
                    console.log("antwoord van server: " + data); // JSON data parsed by `data.json()` call
                });
            }} > Send email to Node.Js</Button>

            <Button style={{ height: '75px', width: '45%' }} variant="outlined" color="success" onClick={() => {
                postData().then(data => {
                    console.log("antwoord van server: " + data); // JSON data parsed by `data.json()` call
                });
            }} > Ask for true or false</Button>
        </div>
    );
}
