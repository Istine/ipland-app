import React from "react";
import { BrowserRouter as RouteMapper, Routes, Route } from "react-router-dom";
import App from "./App";
import About from "./pages/About";
import HowTo from "./pages/HowTo";
export default function Router() {
  return (
    <RouteMapper>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/how-to" exact element={<HowTo />} />
      </Routes>
    </RouteMapper>
  );
}
