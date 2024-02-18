import { useState, useEffect } from 'react';

export function WritingAnimation() {
  const [text, setText] = useState(''); 
  const fullText = 'Welcome to my projects section. Which of my projects would you like to see? I would ask you to write without mistakes:'

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;

      if(index > fullText.length) {
        clearInterval(interval); 
      }
    }, 100);

    return () => clearInterval(interval);
  }, [])

  return (
    <p className='w-full h-[15%] text-2xl font-semibold title text-[#12F7D6] textShadow'>{text}</p>
    
  )
}