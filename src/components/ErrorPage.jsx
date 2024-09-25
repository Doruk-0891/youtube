import React from 'react'
import {Link} from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className='w-screen overflow-hidden m-0 p-0 relative h-screen bg-gradient-to-bl from-red-700'>
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