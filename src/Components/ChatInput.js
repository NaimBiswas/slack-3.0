
import firebase from 'firebase'
import React, { useRef, useState } from 'react'
import { Button } from 'react-bootstrap'
import { useAuthState } from 'react-firebase-hooks/auth'
import styled from 'styled-components'
import { auth, db } from '../firebase'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import './Config.css'
import { EmojiEmotions, Send } from '@material-ui/icons'
import Picker from 'emoji-picker-react';

const ChatInput = ({ ChannelId, ChannelName, ChatRef }) => {

   const [Message, setMessage] = useState()
   const [user] = useAuthState(auth)
   const [chosenEmoji, setChosenEmoji] = useState()
   const [showDisplay, setshowDisplay] = useState(false)

   const onEmojiClick = (event, emojiObject) => {
      setChosenEmoji(emojiObject);

   };
   // const SetEmoji = () => {
   //    setshowDisplay(true)
   // }


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

         {/* data={` ${chosenEmoji ? chosenEmoji?.emoji?.map(emojis => emojis) : ''}`} */}
         <TextAreateSection>
            <h6 className='text-light'>{`Enter Your Messages on  ${ChannelName ? ChannelName : ''}`} </h6>
            <form style={{ position: 'relative' }} action="">
               <CKEditor data={` ${chosenEmoji ? chosenEmoji.emoji : ''}`} editor={ClassicEditor} onChange={INputCheck} />
               <div style={{ position: 'absolute', top: '0', right: '0' }} className=""><Button className="btn btn-info " onClick={() => setshowDisplay(preMode => !preMode)}><EmojiEmotions /></Button></div>
               <div style={{ position: 'absolute', bottom: "46px", right: '50px' }} className="emoji">
                  {
                     showDisplay ? <div>
                        <Picker native onEmojiClick={onEmojiClick}





                        />
                     </div> : ''
                  }
               </div>


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