import { Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import axios from "axios";
import React, { useState } from "react";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
    </Routes>
  );
};

export default App;
