
import firebase from 'firebase'
import React, { useRef, useState } from 'react'
import { Button } from 'react-bootstrap'
import { useAuthState } from 'react-firebase-hooks/auth'
import styled from 'styled-components'
import { auth, db } from '../firebase'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import './Config.css'
import { Send } from '@material-ui/icons'

const ChatInput = ({ ChannelId, ChannelName, ChatRef }) => {

   const [Message, setMessage] = useState()
   const [user] = useAuthState(auth)

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
   const INputCheck = (e, editor) => {

      const data = editor.getData()

      setMessage(data)

   }
   return (
      <>


         <TextAreateSection>
            <h6 className='text-light'>{`Enter Your Messages on  ${ChannelName ? ChannelName : ''}`} </h6>
            <form action="">
               <CKEditor Placeholder='Enter YOur Message' editor={ClassicEditor} onChange={INputCheck} />



               {/* <input
                  placeholder={`Enter Your Messages from  ${ChannelName ? ChannelName : ''}`} id={ChannelId}

                  required value={Message} onChange={ChangeIfHaveMessage} className='form-control' name="" />
                */}


               <Button variant='info' className='mt-1 pr-4 pl-4' type='submit' onClick={TheMessage}><Send></Send></Button>
            </form>
         </TextAreateSection>
      </>
   )
}

export default ChatInput
const TextAreateSection = styled.div`
   position:absolute;
   bottom: 5px;
   max-width: 80vw;
   width: 100%;
   margin-left:30px;
`