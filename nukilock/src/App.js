import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate, useNavigate, } from "react-router-dom";
import raw from './gitignore.txt';
import {
  Home,
  Actions,
  Login,
} from "./components";


function getUser() {
  fetch(raw)
    .then(r => r.text())
    .then(text => {
      if (text !== "") {
        console.log('text decoded:', text);
        return true;
      }
      else {
        console.log('Sorry je bent niet ingelogd');
        return false;
      }
    });
}



export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/actions" element={<Actions />} />
        <Route path='/redirect' element={ getUser ? (<Navigate to='/actions' />) : (<Navigate to='/login' />)} ></Route>
        <Route  />
      </Routes>
    </Router>
  );
}


