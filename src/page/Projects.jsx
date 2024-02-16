    import { useState, useEffect } from 'react';
    import { WritingAnimation } from '../components/WritingAnimation';

    export default function Projects() {
    const [inputVisible, setInputVisible] = useState(false);
    const [inputValue, setInputValue] = useState('');
        const [text, setText] = useState('');
    useEffect(() => {
        const timeout = setTimeout(() => {
        setInputVisible(true);
        }, 15000);
        return () => clearTimeout(timeout);
    }, []);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue === 'help') {
            setText('ProjectBillz, Bootcamp, Weather Beta, Taraqqiyot')
        }
        else if(inputValue === 'ProjectBillz'){
            setText(`here is ${inputValue}`)
        }
        else if(inputValue === 'Bootcamp'){
            setText(`here is ${inputValue}`)
        }
        else if(inputValue === 'Weather Beta'){
            setText(`here is ${inputValue}`)
        }
        else if(inputValue === 'Taraqqiyot'){
            setText(`here is ${inputValue}`)
        }
        else{
            setText(`No such code exists: ${inputValue}`);
        }
    };

    return (
        <div className="w-full h-full flex flex-col items-center justify-center">
        <div className="w-[95%] h-[95%]">
            <div className="p-1 flex relative w-full h-[15%]">
            <WritingAnimation />
            
            {inputVisible && (
                <form onSubmit={handleSubmit}>
                <input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    type="text" 
                    placeholder="type here..." 
                    className="h-8 w-[730px] bg-transparent px-1 py-1 absolute outline-none top-[49%] left-[50%] text-2xl font-semibold title text-[#12F7D6] textShadow2" 
                />
                </form>
            )}
            </div>
            <p className='text-white text-3xl'>{text}</p>
        </div>
        </div>
    );
    }