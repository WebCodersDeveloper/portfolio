// import React from 'react'
import ScrollReveal from 'scrollreveal';
import { useEffect, useRef, useState } from "react";
import svg from "../assets/react.svg";
import Html from '../components/skills comp/Html';
import Css from '../components/skills comp/Css';
import Sass from './../components/skills comp/Sass';
import Js from './../components/skills comp/Js';
import Reacts from './../components/skills comp/Reacts';
import Redux from './../components/skills comp/Redux';
import Type from './../components/skills comp/Type';
export default function Skills() {



  const [htmlShow, setHtmlShow] = useState(false);
  const [cssShow, setCssShow] = useState(false);
  const [sassShow, setSassShow] = useState(false);
  const [jsShow, setJsShow] = useState(false);
  const [reactsShow, setReactsShow] = useState(false);
  const [reduxShow, setReduxShow] = useState(false);
  const [typeShow, setTypeShow] = useState(false);




    const sectionRef0 = useRef(null);
    const sectionRef1 = useRef(null);
    const sectionRef3 = useRef(null);
    const sectionRef4 = useRef(null);
    const sectionRef5 = useRef(null);
    const sectionRef6 = useRef(null);
    const sectionRef7 = useRef(null);
    const sectionRef8 = useRef(null);
    const sectionRef9 = useRef(null);
    const sectionRef10 = useRef(null);
    const sectionRef11 = useRef(null);
    const sectionRef12 = useRef(null);
    const sectionRef13 = useRef(null);
    const sectionRef14 = useRef(null);
    const sectionRef15 = useRef(null);
  

    
  
    useEffect(() => {
      ScrollReveal().reveal(sectionRef0.current, {
        origin: 'top',
        distance: '80px',
        duration: 1000,
        delay: 300,
        easing: 'ease',
        reset: true,
      });
      ScrollReveal().reveal(sectionRef1.current, {
        origin: 'top',
        distance: '80px',
        duration: 1000,
        delay: 500,
        easing: 'ease',
        reset: true,
      });
      ScrollReveal().reveal(sectionRef3.current, {
        origin: 'left',
        distance: '80px',
        duration: 1000,
        delay: 700,
        easing: 'ease',
        reset: true,
      });
      ScrollReveal().reveal(sectionRef4.current, {
        origin: 'left',
        distance: '80px',
        duration: 1000,
        delay: 700,
        easing: 'ease',
        reset: true,
      });
      ScrollReveal().reveal(sectionRef5.current, {
        origin: 'left',
        distance: '80px',
        duration: 1000,
        delay: 900,
        easing: 'ease',
        reset: true,
      });
      ScrollReveal().reveal(sectionRef6.current, {
        origin: 'left',
        distance: '80px',
        duration: 1000,
        delay: 1100,
        easing: 'ease',
        reset: true,
      });
      ScrollReveal().reveal(sectionRef7.current, {
        origin: 'left',
        distance: '80px',
        duration: 1000,
        delay: 1300,
        easing: 'ease',
        reset: true,
      });
      ScrollReveal().reveal(sectionRef8.current, {
        origin: 'left',
        distance: '80px',
        duration: 1000,
        delay: 1500,
        easing: 'ease',
        reset: true,
      });
      ScrollReveal().reveal(sectionRef9.current, {
        origin: 'left',
        distance: '80px',
        duration: 1000,
        delay: 1700,
        easing: 'ease',
        reset: true,
      });
      ScrollReveal().reveal(sectionRef10.current, {
        origin: 'left',
        distance: '80px',
        duration: 1000,
        delay: 1900,
        easing: 'ease',
        reset: true,
      });
      ScrollReveal().reveal(sectionRef11.current, {
        origin: 'left',
        distance: '80px',
        duration: 1000,
        delay: 2100,
        easing: 'ease',
        reset: true,
      });
      ScrollReveal().reveal(sectionRef12.current, {
        origin: 'left',
        distance: '80px',
        duration: 1000,
        delay: 2300,
        easing: 'ease',
        reset: true,
      });
      ScrollReveal().reveal(sectionRef13.current, {
        origin: 'left',
        distance: '80px',
        duration: 1000,
        delay: 2500,
        easing: 'ease',
        reset: true,
      });
      ScrollReveal().reveal(sectionRef14.current, {
        origin: 'left',
        distance: '80px',
        duration: 1000,
        delay: 2700,
        easing: 'ease',
        reset: true,
      });
      ScrollReveal().reveal(sectionRef15.current, {
        origin: 'left',
        distance: '80px',
        duration: 1000,
        delay: 2700,
        easing: 'ease',
        reset: true,
      });
    }, []);




  return (
    <>
      <div className="w-full h-full relative flex items-center justify-center overflow-hidden">
        <div className=" w-[90%] h-full py-2 gap-6 relative flex items-center flex-col overflow-y-scroll">
          <div className=" absolute  left-0 w-full h-full flex items-center justify-center opacity-[.5]">
            <img src={svg} alt="" className="fixed w-[36%] imgBox" />
          </div>
          <h2 ref={sectionRef0} className='w-full h-[15%] text-center text-6xl font-semibold title text-[#12F7D6] textShadow'>Skills</h2>
          <p ref={sectionRef1} className='w-full h-[15%] text-center text-3xl font-semibold title text-[#12F7D6] textShadow'>I am striving to never stop learning and improving</p>
          <div className="flex w-full items-center h-[25%] justify-center">
            <h2 ref={sectionRef3} onClick={() => setHtmlShow(!htmlShow)} className="cursor-pointer w-24 h-24 paragraph font-semibold  flex items-center justify-center logo rounded-full bg-[#E34C26]">HTML</h2>
            <span ref={sectionRef4} className="w-20 h-1 bg-css"></span>
            <h2 ref={sectionRef5} onClick={() => setCssShow(!cssShow)} className="cursor-pointer w-24 h-24 paragraph font-semibold  flex items-center justify-center logo rounded-full bg-[#2965f1]">CSS</h2>
            <span ref={sectionRef6} className="w-20 h-1 bg-sass"></span>
            <h2 ref={sectionRef7} onClick={() => setSassShow(!sassShow)} className="cursor-pointer w-24 h-24 paragraph font-semibold  flex items-center justify-center logo rounded-full bg-[#c69]">SASS</h2>
            <span ref={sectionRef8} className="w-20 h-1 bg-js"></span>
            <h2 ref={sectionRef9} onClick={() => setJsShow(!jsShow)} className="cursor-pointer w-24 h-24 paragraph font-semibold  flex items-center justify-center logo rounded-full bg-[#f0db4f]">Javascript</h2>
            <span ref={sectionRef10} className="w-20 h-1 bg-react"></span>
            <h2 ref={sectionRef11} onClick={() => setReactsShow(!reactsShow)} className="cursor-pointer w-24 h-24 paragraph font-semibold  flex items-center justify-center logo rounded-full bg-[#61dbfb]">React</h2>
            <span ref={sectionRef12} className="w-20 h-1 bg-redux"></span>
            <h2 ref={sectionRef13} onClick={() => setReduxShow(!reduxShow)} className="cursor-pointer w-24 h-24 paragraph font-semibold  flex items-center justify-center logo rounded-full bg-[#764abc]">Redux</h2>
            <span ref={sectionRef14} className="w-20 h-1 bg-type"></span>
            <h2 ref={sectionRef15} onClick={() => setTypeShow(!typeShow)} className="w-24 h-24 paragraph font-semibold  flex items-center justify-center logo rounded-full bg-[#007acc]">Typescript</h2>
          </div>
          <div className='flex flex-wrap justify-center gap-5 z-10 mt-12 w-[100%]'>
            {htmlShow && <Html />}
            {cssShow && <Css />}
            {sassShow && <Sass />}
            {jsShow && <Js />}
            {reactsShow && <Reacts />}
            {reduxShow && <Redux />}
            {typeShow && <Type />}
          </div>
        </div>
      </div>
    </>
  );
}
