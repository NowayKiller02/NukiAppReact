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


