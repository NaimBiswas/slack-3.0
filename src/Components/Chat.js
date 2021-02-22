import React from 'react'
import styled from 'styled-components'

const Chat = () => {
   return (
      <>
         <ChatContainer>
            <h2 className="text-white">Hello World</h2>
            <TextAreateSection>
               <textarea style={{ maxWidth: '80vw' }} className='form-control' name="" id=""></textarea>
            </TextAreateSection>
         </ChatContainer>
      </>
   )
}

export default Chat
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