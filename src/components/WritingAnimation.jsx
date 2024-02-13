import { useState, useEffect } from 'react';

export function WritingAnimation() {
  const [text, setText] = useState(''); 
  const fullText = 'This text will be animated!';

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
    <p className=''>{text}</p>
  )
}