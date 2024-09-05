import React from 'react'
import { CgProfile } from "react-icons/cg";

const LiveChatMessage = ({chatDetails}) => {
    const {name, message} = chatDetails;
  return (
    <div className='py-2 flex items-center gap-2 flex-wrap'>
        <CgProfile size={24} />
        <h5 className='font-bold'>{name}</h5>
        <p>{message}</p>
    </div>
  )
}

export default LiveChatMessage