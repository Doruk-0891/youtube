import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
import Header from './Header'

const Body = () => {
  return (
    <>
      <Header />
      <div className='grid grid-cols-[auto,_1fr] h-[calc(100vh-75px)]'>
          <Sidebar />
          <Outlet />
      </div>
    </>
  )
}

export default Body