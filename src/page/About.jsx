// import React from 'react'
import { useEffect, useRef } from "react";
import ScrollReveal from 'scrollreveal';
import me from "../../public/me.jpg";
import { IoMdCodeDownload } from "react-icons/io";
import { LiaTelegram } from "react-icons/lia";
import {
  MdOutlineLocationOn,
  MdOutlineMailOutline,
  MdOutlineWorkHistory,
} from "react-icons/md";  
export default function About() {

  const sectionRefTop = useRef(null);
  const sectionRefBottom = useRef(null);
  const sectionRefLeft = useRef(null);


  useEffect(() => {
    ScrollReveal().reveal(sectionRefTop.current, {
      origin: 'top',
      distance: '50px',
      duration: 1000,
      delay: 300,
      easing: 'ease',
      reset: true,
    });
    ScrollReveal().reveal(sectionRefBottom.current, {
      origin: 'bottom',
      distance: '50px',
      duration: 1000,
      delay: 500,
      easing: 'ease',
      reset: true,
    });
    ScrollReveal().reveal(sectionRefLeft.current, {
      origin: 'left',
      distance: '80px',
      duration: 1200,
      delay: 700,
      easing: 'ease',
      reset: true,
    });
  }, []);
  return (
    <>
      <div className="relative flex w-full h-full items-center justify-around">
      <div ref={sectionRefLeft} className="w-[320px] bg-[#292F36] z-10 h-[450px] border-4 border-white rounded-br-[150px] rounded-tl-[150px] shadow-cardShadow flex flex-col items-center ml-14">
        <div className="flex flex-col w-full items-center justify-center gap-2 h-[45%]">
          <img
            src={me}
            className="rounded-full w-24 h-24 border-[#98FAEC] border-2"
            alt=""
          />
          <h3 className={`text-2xl  font-semibold text-white`}>Ibrohim</h3>
          <p className={` font-semibold text-white`}>- Front-End Developer -</p>
        </div>
        <div className="flex flex-col gap-3">
          <span className="flex items-center h-8 text-[white] px-2 gap-2">
            <MdOutlineMailOutline className="text-[#98FAEC]" />
            ahmedovibrohim868@gmail.com
          </span>
          <span className="flex items-center h-8 text-[white] px-2 gap-2">
            <MdOutlineLocationOn className="text-[#98FAEC]" />
            Tashkent
          </span>
          <span className="flex items-center h-8 text-[white] px-2 gap-2">
            <MdOutlineWorkHistory className="text-[#98FAEC]" />
            Full Time
          </span>
          <span className="flex items-center h-8 text-[white] px-2 gap-2">
            <LiaTelegram className="text-[#98FAEC]" />
            @akhmadjan_ov
          </span>
          <button className="bg-white flex items-center justify-center w-[70%] h-10 rounded-full gap-2">
            Download CV <IoMdCodeDownload className="text-2xl" />
          </button>
        </div>
      </div>
      <div className="w-[70%] h-[90%] z-10 flex flex-col justify-around items-end px-3">
        <h2 ref={sectionRefTop} className="w-[282px] rounded-tl-[40px] rounded-br-[40px] h-[84px] bg-[#2f373f] border-[3px] text-3xl paragraph text-white border-[#12F7D6] flex items-center justify-center">About Me</h2>
        <div ref={sectionRefBottom} className="w-[700px] h-[400px] bg-[#2f373f] rounded-xl px-4 flex flex-col gap-2 justify-around">
          <p className="text-[#98FAEC]">{'<p>'}</p>
          <h3 className="text-[#12F7D6] text-3xl title">Hello!</h3>
          <p className="text-white title font-medium text-sm tracking-wide">My name is Ibrohim and I specialize in web development that utilizes <span className="text-[#12F7D6]">HTML, CSS, JS, and REACT</span> etc.</p>
          <p className="text-white title font-medium text-sm tracking-wide">I am a highly motivated individual and eternal optimist dedicated to writing clear, concise, robust code that works. Striving to never stop learning and improving.</p>
          <p className="text-white title font-medium text-sm tracking-wide">When I am not coding, I am <span className="text-[#12F7D6]">writing blogs</span>, reading, or picking up some new hands-on art project like <span className="text-[#12F7D6]">photography</span>.</p>
          <p className="text-white title font-medium text-sm tracking-wide">I like to have my perspective and belief systems challenged so that I see the world through new eyes.</p>
          <p className="text-[#98FAEC]">{'</p>'}</p>
        </div>
      </div>
      </div>
      <div className="dataFlow"></div>
    </>
  );
}
