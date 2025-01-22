import React from 'react'
import { motion } from "framer-motion";

const Card = ({data,reference}) => {
  return (
    <motion.div drag dragConstraints={reference} dragElastic={2} className=' py-6 px-5 relative w-52 h-60 rounded-[35px] bg-zinc-600 text-white overflow-hidden'>
        <p className='mb-2'> 📄</p>
     <p className='text-sm leading-tight  font-semibold mt-6'>{data.desc}</p>

     <div className='flex justify-between items-center gap-28 mt-3 mb-3 absolute bottom-5'>
        <h5 className='z-[5] font-semibold text-xs inline-block mr-4 mb-3 text-red-300'>{data.filesize}</h5>

        <span className='bg-zinc-400 rounded-[50%] w-7 h-7 pl-[6px] pb-[4px] mb-[14px] flex items-center justify-center '>

          {data.close ? (<p className='z-[5] font-semibold text-xs   mr-2 '>💬</p>) :(<p className='z-[5] font-semibold text-xs   mr-2 '>📥</p>)}

          </span>
        </div>
        {data.tag.isOpen && (
            <div className={`  <div className='footer absolute bottom-0 ${data.tag.tagColor=="blue" ? "bg-blue-400":"bg-green-600"} w-full  left-0 py-2 px-8 text-white flex justify-center items-center`}>
            <h3 className='text-[12px] font-semibold'>{data.tag.tagTitle}</h3>
     </div>
        )}
     <div>
        
     </div>
    </motion.div>
  )
}

export default Card