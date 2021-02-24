import { Message } from '@material-ui/icons'
import firebase from 'firebase'
import React, { useRef, useState } from 'react'
import { Button } from 'react-bootstrap'
import styled from 'styled-components'
import { db } from '../firebase'
const ChatInput = ({ ChannelId, ChannelName, ChatRef }) => {
   const [Message, setMessage] = useState()

   const ChangeIfHaveMessage = (e) => {
      if (e.target.value !== null) {
         setMessage(e.target.value)
      } else {
         alert("Enter Some Think on message filed")
      }
   }
   const TheMessage = e => {
      e.preventDefault()
      if (!ChannelId) {
         return false
      }
      if (Message) {
         db.collection('rooms').doc(ChannelId).collection('messages').add({
            message: Message,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            user: 'Naim Biswas',
            userImage: 'data:image/jpeg;base64,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'
         })
      } else {
         alert("Enter Something on message filed and try again")
      }
      ChatRef?.current?.scrollIntoView({
         behavior: "smooth",
      })
      setMessage('')

   }
   return (
      <div>
         <TextAreateSection>
            <form action="">
               <input required value={Message} onChange={ChangeIfHaveMessage} style={{ maxWidth: '80vw' }} className='form-control' name="" id={ChannelId} placeholder={`Enter Your Messages from  ${ChannelName ? ChannelName : ''}`}></input>
               <Button hidden type='submit' onClick={TheMessage}></Button>
            </form>
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