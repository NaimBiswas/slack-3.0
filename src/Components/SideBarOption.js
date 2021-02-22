import React from 'react'
import styled from 'styled-components'
import VisibilityIcon from '@material-ui/icons/Visibility';
import { db } from '../firebase';
import firebase from 'firebase/app';
import { useDispatch, useSelector } from 'react-redux';
import { enterRoom, selectRoomId } from '../features/appSlice';
import './Test.css'

const SideBarOption = ({ Icon, Title, addChannelOption, id }) => {
   const dispatch = useDispatch()
   const roomId = useSelector(selectRoomId)
   const addChannel = () => {
      const ChannelName = prompt("Enter the Channel Name")
      if (ChannelName) {
         db.collection('rooms').add({
            name: ChannelName
         })
      }
   }
   const selectChannel = () => {
      if (id) {
         dispatch(enterRoom({
            roomId: id
         }))
      }
   }
   return (
      <>
         <SideBarContainer onClick={addChannelOption ? addChannel : selectChannel} className={id === roomId ? 'active' : 'testIdName'}>
            <span>{Icon && <Icon style={{ color: '#F5FCDC' }} className='mr-2' fontSize='small' />}</span>
            <p>
               {
                  Icon ? Title : <div className=""> <VisibilityIcon style={{ color: '#F5FCDC' }} className='mr-2' fontSize='small' /> {Title}</div>
               }
            </p>
         </SideBarContainer>
      </>
   )
}

export default SideBarOption
const SideBarContainer = styled.div`
.active{
   background:gray;
}
display:flex;
cursor: pointer;
>p{
   color: #F2E2CE;
   font-size:14px;
   padding-top:13px;
   padding-bottom:13px;
   margin-bottom: 0;
}
>span{
   padding-top:13px;
   padding-bottom:13px;
   padding-left:10px;
}

:hover{
   background:#1e8faf;
}
`
