import React, { useRef, useState, useEffect } from 'react'
import Card from './Card'

const Foreground = () => {
    const ref = useRef(null);
    const [cards, setCards] = useState([]);
    const [task, setTask] = useState("");
    
    const [num, setnum] = useState("green")
    const [open, setopen] = useState(true)


    useEffect(() => {
        const savedCards = JSON.parse(localStorage.getItem("cards"));
        if (savedCards) {
            setCards(savedCards);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("cards", JSON.stringify(cards));
    }, [cards]);

    const addCard = () => {
        if (task.trim() === "") return;
        const newCard = {
            desc: task,
            filesize: ".9mb",
            close:open,
            tag: {
                isOpen: true,
                tagTitle: "Download Now..",
                tagColor: num
            },
        };
        setCards([...cards, newCard]);
        setTask("");
    };

    return (
        <>
            <div ref={ref} className='w-full h-full fixed z-[3] top-0 left-0 flex gap-5 flex-wrap p-5 overflow-scroll'>
                {cards.map((items, index) => (
                    <Card key={index} data={items} reference={ref}  />
                ))}
                <div className='flex flex-col items-center'>
                    <input
                        type="text"
                        value={task}
                        onChange={(e) => setTask(e.target.value)}
                        placeholder="Enter your task"
                        className='mb-5 p-2 border border-gray-300 rounded text-black'
                    />
                    <button onClick={addCard} className='w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center'>
                        +
                    </button>
                </div>
            </div>
        </>
    )
}

export default Foreground