import { useState } from "react";
import "./App.css";

import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./auth/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Routes>
    </>
  );
}

export default App;
