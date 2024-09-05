import React, { useEffect } from 'react'
import LiveChatMessage from './LiveChatMessage'
import { generateRandomNames, getRandomSentence } from '../utils/helper';
import { useDispatch, useSelector } from 'react-redux';
import { addLiveMessages } from '../utils/liveMessageSlice';
import {v4 as uuidv4} from 'uuid';


const LiveChat = () => {
    const dispatch = useDispatch();
    const chatMessages = useSelector(store => store.liveChat.liveChats);

    useEffect(() => {
        
        const timer = setInterval(() => {
            dispatch(addLiveMessages({
                name: generateRandomNames(),
                message: getRandomSentence()
            }));
        }, 2000);

        return () => {
            clearInterval(timer);
        }
    }, []);

  return (
    <div className='border border-black rounded-lg h-[500px] p-2 overflow-y-scroll flex flex-col-reverse'>
        {
        chatMessages.length > 0 && chatMessages.map(singleChat =>  <LiveChatMessage chatDetails={singleChat} key={uuidv4()} />)
        }

    </div>
  )
}

export default LiveChat