import { InfoOutlined, StarBorderOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import ChatInput from './ChatInput'

const Chat = () => {
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
            <ChatMessages>
               <ChatInput>

               </ChatInput>
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
