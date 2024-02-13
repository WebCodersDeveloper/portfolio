// import React from "react";
import { Route, Routes } from "react-router";
import Home from "../page/Home";
import About from "../page/About";
import Skills from "../page/Skills";

export default function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
    </>
  );
}
