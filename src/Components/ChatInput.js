
import firebase from 'firebase'
import React, { useRef, useState } from 'react'
import { Button } from 'react-bootstrap'
import { useAuthState } from 'react-firebase-hooks/auth'
import styled from 'styled-components'
import { auth, db } from '../firebase'
const ChatInput = ({ ChannelId, ChannelName, ChatRef }) => {
   const [Message, setMessage] = useState()
   const [user] = useAuthState(auth)
   console.log(user);
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
            user: user?.displayName,
            userImage: user?.photoURL ? user?.photoURL : user?.displayName
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