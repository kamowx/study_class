import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/home";
import Attendance from "./screens/attendance";
import History from "./screens/history";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
