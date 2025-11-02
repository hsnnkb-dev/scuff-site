import { Routes, Route } from "react-router";

import Home from "./pages/Home";
import Article from "./pages/Article";
import Features from "./pages/Features";
import BuyStuff from "./pages/BuyStuff";
import Interviews from "./pages/Interviews";
import TipUs from "./pages/TipUs";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="features" element={<Features />} />
        <Route path="interviews" element={<Interviews />} />
        <Route path="articles/:articleName" element={<Article />} />
        <Route path="about" element={<About />} />
        <Route path="store" element={<BuyStuff />} />
        <Route path="patronage" element={<TipUs />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
