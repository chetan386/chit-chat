import React from 'react'
import { useParams } from 'react-router'
import {Loader} from 'rsuite';
import Messages from '../../components/chat-window/messages'
import ChatTop from '../../components/chat-window/top'
import ChatBottom from '../../components/chat-window/bottom'
import {useRooms} from '../../context/rooms.context';
import { CurrentRoomProvider } from '../../context/current-room.context';

function Chat() {

const {chatId} =useParams();

const rooms = useRooms();

if(!rooms){
  return <Loader center vertical size="md" content="Loading" speed ="slow" />
}

const currentRoom = rooms.find(room => room.id === chatId);

if(!currentRoom){
  return <h6 className='text-center mt-page'>Chat {chatId} not found </h6>
}

const {name,descriprtion} = currentRoom;

const currentRoomData = {
   name,descriprtion
}

  return (
    <CurrentRoomProvider data={currentRoomData}>

    <div className='chat-top'>
      <ChatTop />
    </div>

    <div className ='chat-middle'>
      <Messages />
    </div>

    <div className='chat-bottom'>
      <ChatBottom />
    </div>

    </CurrentRoomProvider>
  )
}

export default Chat