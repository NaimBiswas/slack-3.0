import React from 'react'
import styled from 'styled-components'

const ChatInput = () => {
   return (
      <div>
         <TextAreateSection>
            <textarea style={{ maxWidth: '80vw' }} className='form-control' name="" id=""></textarea>
         </TextAreateSection>
      </div>
   )
}

export default ChatInput
const TextAreateSection = styled.div`
   position:absolute;
   bottom: 5%;
   max-width: 80vw;
   width: 100%;
   margin-left:30px;
`