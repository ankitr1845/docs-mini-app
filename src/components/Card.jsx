import React from 'react';
import { FaRegFileLines } from "react-icons/fa6";
import { FaDownload } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { motion } from "motion/react"

const Card = ({data, reference }) => {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale: 1.2}} dragElastic={0.2} className='relative w-60 h-72 flex-shrink-0 rounded-[45px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden z-10'>
        <FaRegFileLines />
        <p className='text-sm mt-5 font-regular leading-[2]'>{data.desc}</p>
        <div className='footer absolute bottom-0 w-full   left-0'>
            <div className='flex items-center justify-between px-8 py-3 mb-3'>
                <h5>{data.filesize}</h5>
                <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center'>
                    {data.close ? <IoCloseSharp /> : <FaDownload size= ".7em" color='white' />}
                </span>
            </div>
            {
                data.tag.isOpen && (
                    <div className={`tag w-full py-3 ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} flex items-center justify-center`}>
                        <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
            </div> 
            )} 
        </div>
    </motion.div>
  )
}

export default Card