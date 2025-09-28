import { useState } from "react";
import { Routes, Route } from "react-router";

import Home from "./pages/Home";
import Features from "./pages/Features";
import BuyStuff from "./pages/BuyStuff";
import Interviews from "./pages/Interviews";
import TipUs from "./pages/TipUs";
import About from "./pages/About";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="features" element={<Features />} />
        <Route path="interviews" element={<Interviews />} />
        <Route path="about" element={<About />} />
        <Route path="store" element={<BuyStuff />} />
        <Route path="patronage" element={<TipUs />} />
      </Routes>
    </>
  );
}

export default App;
