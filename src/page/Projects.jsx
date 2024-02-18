    import { useState, useEffect } from 'react';
    import { WritingAnimation } from '../components/WritingAnimation';

    import Delever from '../../public/Delever.png'
    import ProjectBillz from '../../public/ProjectBillz.png'
    import Weather from '../../public/Weather.png'
    import Taraqqiyot from '../../public/Taraqqiyot.png'



    export default function Projects() {
    const [inputVisible, setInputVisible] = useState(false);
    const [inputValue, setInputValue] = useState('');

    const [deleverShow, setDeleverShow] = useState(false);
    const [projectShow, setProjectShow] = useState(false);
    const [weatherShow, setWeatherShow] = useState(false);
    const [taraqqiyotShow, setTaraqqiyotShow] = useState(false);


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
            setText('You should search for these words: ProjectBillz, Delever, Weather Beta, Taraqqiyot. These are my projects')
        }
        else if(inputValue === 'ProjectBillz'){
            setText(`here is ${inputValue}`)
            setProjectShow(true)
            setDeleverShow(false)
            setWeatherShow(false)
            setTaraqqiyotShow(false)
        }
        else if(inputValue === 'Delever'){
            setText(`here is ${inputValue}`)
            setProjectShow(false)
            setDeleverShow(true)
            setWeatherShow(false)
            setTaraqqiyotShow(false)
        }
        else if(inputValue === 'Weather Beta'){
            setText(`here is ${inputValue}`)
            setProjectShow(false)
            setDeleverShow(false)
            setWeatherShow(true)
            setTaraqqiyotShow(false)
        }
        else if(inputValue === 'Taraqqiyot'){
            setText(`here is ${inputValue}`)
            setProjectShow(false)
            setDeleverShow(false)
            setWeatherShow(false)
            setTaraqqiyotShow(true)
        }
        else{
            setText(`${inputValue}: is not a git command. If you don't know just write "help"  `);
        }
        setInputValue('')
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
                    className="h-8 w-[730px] bg-transparent px-1 py-1 absolute outline-none top-[41%] left-[17%] text-xl font-semibold title text-[#12F7D6] textShadow2" 
                />
                </form>
            )}
            </div>
            <p className='text-2xl font-semibold title text-[#12F7D6] textShadow'>{text}</p>
            <div>
                {deleverShow && <div><img src={Delever} alt="Not Found" className='w-96'/></div>}
                {projectShow && <div><img src={ProjectBillz} alt="Not Found" className='w-96'/></div>}
                {taraqqiyotShow && <div><img src={Taraqqiyot} alt="Not Found" className='w-96'/></div>}
                {weatherShow && <div><img src={Weather} alt="Not Found" className='w-96'/></div>}
            </div>
        </div>
        </div>
    );
    }
    
    
    