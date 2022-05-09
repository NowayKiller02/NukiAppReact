import React, { useEffect } from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate, useNavigate } from "react-router-dom";
import raw from './gitignore.txt';
import {
  Home,
  Actions,
  Login,
} from "./components";


 var logged = false;

getUser();


async function getUser() {

  await fetch(raw)
    .then(r => r.text())
    .then(text => {
      if (text !== "") {
        console.log('text decoded:', text);
        logged = true;
        return logged
      }
      else {
        console.log('Sorry je bent niet ingelogd');
        logged = false;
        return logged
      }
    });
    return logged
}



export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/actions" element={<Actions />} />
        <Route path='/redirect' element={ logged ? (<Navigate to='/actions' />) : (<Navigate to='/login' />)} ></Route>
        <Route />
      </Routes>
    </Router>
  );
}


