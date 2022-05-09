import * as React from 'react';
import logo from '../NukiLogo.png';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import '../App.css';
import { useNavigate } from 'react-router-dom';




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
        </div>
    );
}
