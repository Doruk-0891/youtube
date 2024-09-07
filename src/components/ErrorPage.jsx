import React from 'react'
import {Link} from "react-router-dom";
import { FaCircle } from "react-icons/fa";

const ErrorPage = () => {
  return (
    <div className='w-screen overflow-hidden m-0 p-0 relative h-screen bg-gradient-to-bl from-red-700'>
        {/* w */}
        {/* <FaCircle className='absolute text-red-700 text-[200px] md:text-[400px]  bottom-[10vw] right-[-5vw] -z-10' />
        <FaCircle className='absolute text-red-700 text-[100px] top-[5vw] left-[-1vw] -z-10' /> */}
        <section className='overflow-hidden flex flex-col justify-center items-center h-full'>
            <h2 className='text-[50px] md:text-[100px] font-extrabold uppercase tracking-wider leading-relaxed'>Something</h2>
            <h2 className='text-[50px] md:text-[100px] font-extrabold uppercase tracking-wider leading-relaxed'>Went</h2>
            <h2 className='text-[50px] md:text-[100px] font-extrabold uppercase tracking-wider leading-relaxed'>Wrong</h2>
            <Link to='/'>
                <button className='font-bold text-2xl px-5 py-2 rounded-lg '>Back to Home</button>
            </Link>
        </section>
    </div>
  )
}

export default ErrorPage