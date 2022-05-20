import React, { useEffect } from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate, useNavigate } from "react-router-dom";
import {
  Home,
  Actions,
  Login,
} from "./components";



export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/actions" element={<Actions />} />
        <Route />
      </Routes>
    </Router>
  );
}


