import { InfoOutlined, StarBorderOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

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
            <TextAreateSection>
               <textarea style={{ maxWidth: '80vw' }} className='form-control' name="" id=""></textarea>
            </TextAreateSection>
         </ChatContainer>
      </>
   )
}

export default Chat
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
const TextAreateSection = styled.div`
   position:absolute;
   bottom: 5%;
   max-width: 80vw;
   width: 100%;
   margin-left:30px;
`