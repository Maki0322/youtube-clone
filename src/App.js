import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Search from "./pages/Search";
import Top from "./pages/Top"
import Watch from "./pages/Watch";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Top/>} />
        <Route path="/search" element={<Search/>} />
        <Route path="/watch" element={<Watch/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
