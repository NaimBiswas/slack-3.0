import { InfoOutlined, StarBorderOutlined } from '@material-ui/icons'
import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { selectRoomId } from '../features/appSlice'
import { db } from '../firebase'
import ChatInput from './ChatInput'
import { useCollection, useDocument } from 'react-firebase-hooks/firestore'
const Chat = () => {
   const RoomId = useSelector(selectRoomId)
   const [roomDetails] = useDocument(
      RoomId && db.collection('rooms').doc(RoomId)
   )
   const [roomMessages] = useCollection(RoomId && db.collection("rooms").doc(RoomId).collection('messages').orderBy('timestamp', 'asc'))

   return (
      <>
         <ChatContainer>

            <Header>
               <HeaderLeft>
                  <h4>#Room-Name </h4>
                  <StarBorderOutlined></StarBorderOutlined>
               </HeaderLeft>
               <HeaderRight>
                  <p>
                     <InfoOutlined /> Details
                  </p>
               </HeaderRight>
            </Header>
            <h2 className='text-white'>Hello WOrld</h2>
            <ChatMessages>
               <ChatInput ChannelName={roomDetails?.data().name} ChannelId={RoomId}></ChatInput>
            </ChatMessages>

         </ChatContainer>
      </>
   )
}

export default Chat
const ChatMessages = styled.div` 
`
const Header = styled.div`
   color:#F2E2CE;
   display:flex;
   justify-content:space-between;
   padding:10px;
   border-bottom:1px solid #F2E2CE;
   width: 97%;
    margin: auto;
   
`
const HeaderLeft = styled.div`
   display:flex;
   align-items:center;
   
   >h4{
      text-transform:lowercase;
      font-size:18px;
      margin-right:10px;
   }
`
const HeaderRight = styled.div``
const ChatContainer = styled.div`
   margin-left:15%;
`
