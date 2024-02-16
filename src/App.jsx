// import React from 'react'
import { Link } from "react-router-dom";
import Router from "./Router/Router";
import './main.scss'

export default function App() {
  return (
    <div className="max-w-[1920px] h-screen bg-[#292F36] flex flex-col items-center my-0 mx-auto">
      <nav className="w-[95%] h-[15%] border-b-2 border-[#52545d] flex items-center justify-between">
        <span className="flex h-full items-center text-xl text-[#12F7D6]">
          {`<AI/>`}
          <h1 className="text-white">Ahmadjanov Ibrohim</h1>
        </span>
        <ul className={`text-white  flex gap-10`}>
          <Link to="/" className="link focus-within:text-[#12F7D6] border-b-2 border-transparent focus-within:border-[#12F7D6]">
            Home
          </Link>
          <Link to="/about" className="link focus-within:text-[#12F7D6] border-b-2 border-transparent focus-within:border-[#12F7D6]">
            About
          </Link>
          <Link to="/skills" className="link focus-within:text-[#12F7D6] border-b-2 border-transparent focus-within:border-[#12F7D6]">
            Skills
          </Link>
          <Link to="/projects" className="link focus-within:text-[#12F7D6] border-b-2 border-transparent focus-within:border-[#12F7D6]">
            My Projects
          </Link>
        </ul>
      </nav>
      <div className="w-full h-[85%] relative">
        <Router />
      </div>
    </div>
  );
}
