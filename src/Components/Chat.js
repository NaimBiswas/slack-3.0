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
            <ShowMessages>
               {
                  roomMessages?.docs.map((doc) => {
                     const { message, timestamp, user, userImage } = doc.data();
                     return (
                        <>
                           <MessageBody>
                              <img className='img-thumbnail' src={userImage} alt="" />
                              <MessageRightSide className="">
                                 <h4 className=''>
                                    {user} <span>{new Date(timestamp?.toDate()).toLocaleString()}</span>
                                 </h4>
                                 <p className=''>{message}</p>
                              </MessageRightSide>

                           </MessageBody>
                        </>
                     )
                  })
               }
            </ShowMessages>

            <ChatMessages>
               <ChatInput ChannelName={roomDetails?.data().name} ChannelId={RoomId}></ChatInput>
            </ChatMessages>

         </ChatContainer >
      </>
   )
}

export default Chat
const MessageRightSide = styled.div`
>h4{
     color: #4ef95b;
    font-weight: 500;
    letter-spacing: 1.3px;
    margin: 0;
        font-size: 20px;
}
   >h4 >span{
     color: #9e9e9e;
    font-size: 16px;
    font-weight: 600;
   }
   >p{
   margin: 0;
    font-size: 16px;
    color: #f2e2ce;
    text-align: justify;
    width: 100%;
    
   }
`
const MessageBody = styled.div`
    display: flex;
    align-items: center;
    padding: 17px;
    border-bottom: 1px solid #f2e2ce63;
    width: 97%;
  
    margin-left: 16px;
    padding: 17px 0;
    >img{
       height: 60px;
    width: auto;
    margin-right: 15px;
    margin-left: 10px;
    
    }

`
const ShowMessages = styled.div` 
`
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
