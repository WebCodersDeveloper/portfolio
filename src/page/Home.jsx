import { useState, useEffect, useRef } from 'react';
import ScrollReveal from 'scrollreveal';
import styles from '../TypingAnimation.module.css';

export default function Home() {
  const [text, setText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const sectionRef = useRef(null);
  const sectionRef2 = useRef(null);
  const sectionRef3 = useRef(null);
  const sectionRef4 = useRef(null);
  const sectionRef5 = useRef(null);

  useEffect(() => {
    const textToType =
      "I help business grow by crafting amazing web experiences. If you’re looking for a developer that likes to get stuff done.";
    let currentIndex = 0;

    const typingInterval = setInterval(() => {
      if (currentIndex === textToType.length) {
        clearInterval(typingInterval);
        setIsTyping(false);
      } else {
        setText((prevText) => prevText + textToType[currentIndex]);
        currentIndex++;
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, []);

  useEffect(() => {
    if (!isTyping) {
      setText(
        // eslint-disable-next-line no-unused-vars
        (prevText) =>
          "I help business grow by crafting amazing web experiences. If you’re looking for a developer that likes to get stuff done."
      );
    }
  }, [isTyping]);

  useEffect(() => {
    ScrollReveal().reveal(sectionRef.current, {
      origin: 'top',
      distance: '20px',
      duration: 1000,
      delay: 300,
      easing: 'ease',
      reset: true,
    });
    ScrollReveal().reveal(sectionRef2.current, {
      origin: 'top',
      distance: '20px',
      duration: 1000,
      delay: 500,
      easing: 'ease',
      reset: true,
    });
    ScrollReveal().reveal(sectionRef3.current, {
      origin: 'top',
      distance: '20px',
      duration: 1000,
      delay: 700,
      easing: 'ease',
      reset: true,
    });
    ScrollReveal().reveal(sectionRef4.current, {
      origin: 'right',
      distance: '100px',
      duration: 1000,
      delay: 700,
      easing: 'ease',
      reset: true,
    });
    ScrollReveal().reveal(sectionRef5.current, {
      origin: 'top',
      distance: '100px',
      duration: 1000,
      delay: 400,
      easing: 'ease',
      reset: true,
    });
  }, []);

  return (
    <>
      <div className="w-full h-[85%] flex justify-center mt-4">
        <div className="w-[90%] h-full flex flex-col gap-10">
          <h1 ref={sectionRef5} className={`text-[#98FAEC] text-8xl pragraph font-semibold  w-full flex justify-center`}>
            Developer
          </h1>
          <div className="flex items-center justify-around">
            <div className="flex flex-col gap-8 h-full justify-around w-[75%] items-center">
              <span className="flex flex-col gap-5 w-[80%] paragraph">
                <p className="text-[#98FAEC] title">{'<h1>'}</p>
                <h4 ref={sectionRef} className="pl-8 text-white text-5xl font-semibold borde gap-3">Hey</h4>
                <h4 ref={sectionRef2} className="pl-8 text-white text-5xl font-semibold borde gap-3 flex">
                  I`m
                  <p className="text-[#12F7D6]">Ibrohim,</p>
                </h4>
                <h4 ref={sectionRef3} className="pl-8 text-white text-5xl font-semibold borde gap-3 flex">Front-End developer</h4>
                <p className="text-[#98FAEC] title">{'</h1>'}</p>
              </span>
              <span className="w-[80%] title">
                <p className="text-[#98FAEC]">{'<p>'}</p>
                <p className={`pl-8 text-white title flex justify-start ${isTyping ? styles.typingAnimation : ''}`}>
                  {text}
                </p>
                <p className="text-[#98FAEC]">{'</p>'}</p>
              </span>
            </div>
            <div ref={sectionRef4} className="w-[215px] h-[378px] rounded-full bg-[#1A1E23] p-1 flex flex-col items-center justify-center gap-10">
              <span className="w-[80%] flex items-center justify-between gap-5">
                <h2 className="text-[#12F7D6] text-6xl">4</h2>
                <p className={`text-white `}>Programming Language</p>
              </span>
              <span className="w-[80%] flex items-center justify-between gap-5">
                <h2 className="text-[#12F7D6] text-6xl">6</h2>
                <p className={`text-white `}>Development Tools</p>
              </span>
              <span className="w-[80%] flex items-center justify-between gap-5">
                <h2 className="text-[#12F7D6] text-6xl">8</h2>
                <p className={`text-white `}>Month of Experience</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
