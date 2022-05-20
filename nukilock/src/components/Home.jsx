import * as React from 'react';
import logo from '../NukiLogo.png';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import '../config';

export default function Login() {
    const navigate = useNavigate()
    return (
        <div className="App">
            <Paper square>
                <img src={logo} alt='logo' />
            </Paper>
            <br></br>
            <br></br>
            <Button style={{ height: '75px', width: '45%' }} variant="outlined" color="success" onClick={() => navigate("/login")} > Go to login page</Button>
            <br></br>
            <br></br>
            <p>Developped by: </p>
            <p>Yuran Loones, Liem Nuygens and Ruben Salomez</p>
            <br></br>
            <p>Remember to close the door after you leave </p>
            <p> the interactions are monitored</p>
        </div>
    );
}
