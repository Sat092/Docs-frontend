import React, { useRef } from 'react'
import Card from './Card'

const Foreground = () => {
    const ref=useRef(null);
    const data=[
        {
            desc:"This is a card.",
            filesize:".9mb",
            close:true,
            tag:{
                isOpen:true,
                tagTitle:"Download Now..",
                tagColor:"green"
            },
        },
        {
            desc:"This is a card.",
            filesize:".9mb",
            close:true,
            tag:{
                isOpen:true,
                tagTitle:"Download Now..",
                tagColor:"blue"
            },
        },
        {
            desc:"This is a card.",
            filesize:".9mb",
            close:false,
            tag:{
                isOpen:true,
                tagTitle:"Download Now..",
                tagColor:"green"
            },
        },
        {
            desc:"This is a card.",
            filesize:".9mb",
            close:false,
            tag:{
                isOpen:true,
                tagTitle:"Download Now..",
                tagColor:"blue"
            },
        },
        {
            desc:"This is a card.",
            filesize:".9mb",
            close:false,
            tag:{
                isOpen:true,
                tagTitle:"Download Now..",
                tagColor:"blue"
            },
        },
        {
            desc:"This is a card.",
            filesize:".9mb",
            close:false,
            tag:{
                isOpen:true,
                tagTitle:"Download Now..",
                tagColor:"green"
            },
        },
    ]
  return (
    <>
    <div ref={ref} className='w-full h-full  fixed z-[3] top-0 left-0  flex gap-5 flex-wrap p-5'>
        
        {data.map((items,index)=>(
            <Card data={items} reference={ref}/>
        ))}
    </div>


    </>
  )
}

export default Foreground