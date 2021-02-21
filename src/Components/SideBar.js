import { Add, Apps, Drafts, EditRounded, ExpandLess, ExpandMore, FileCopy, InsertCommentTwoTone, PeopleAlt } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import SideBarOption from './SideBarOption';
import InboxIcon from '@material-ui/icons/Inbox';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import { db } from '../firebase';

import { useCollection } from 'react-firebase-hooks/firestore';
import firebase from 'firebase';

const SideBar = () => {
   const [Channels, loading, error] = useCollection(
      firebase.firestore().collection('rooms'))


   return (
      <>
         <LeftSideBar>

            <HeaderTop className='pl-1 pr-1'>
               <HeaderTopLeft className='pb-2'>
                  <h5 className='text-white text-center pt-2 '>Naim Biswas</h5>
                  <span><FiberManualRecordIcon style={{ color: '#28a745' }} fontSize='small'></FiberManualRecordIcon> Naim Biswas</span>
               </HeaderTopLeft>
               <HeaderTopRight>
                  <EditRounded></EditRounded>
               </HeaderTopRight>
            </HeaderTop>
            <SideBaroption className='pl-2 pr-1 mt-3'>
               <SideBarOption Icon={InsertCommentTwoTone} Title='Threads' />
               <SideBarOption Icon={InboxIcon} Title='Mention & Reactions' />
               <SideBarOption Icon={Drafts} Title='Save Items' />
               <SideBarOption Icon={BookmarkBorderIcon} Title='Channel Browser' />
               <SideBarOption Icon={PeopleAlt} Title='People & User Groups' />
               <SideBarOption Icon={FileCopy} Title='File Browse' />
               <SideBarOption Icon={ExpandLess} Title='Show less' />
               <hr style={{ margin: '0', borderTop: '1px solid #333333', marginRight: '-4px' }} />
               <SideBarOption Icon={ExpandMore} Title='Channel' />
               <hr style={{ margin: '0', borderTop: '1px solid #333333', marginRight: '-4px' }} />

               <SideBarOption addChannelOption Icon={Add} Title='Add Channel' />
               {
                  Channels?.docs.map((doc) => (
                     <SideBarOption key={doc.id} id={doc.id} Title={doc.data().name} />

                  ))
               }
            </SideBaroption>
         </LeftSideBar>
      </>
   )
}

export default SideBar
const SideBaroption = styled.div`
    overflow-y: scroll;
   
    max-height: 80vh;
    ::-webkit-scrollbar{
       width:5px;
    }
    ::-webkit-scrollbar-thumb{
    background-image: linear-gradient(to top, #09203f 0%, #537895 100%);
    }
    ::-webkit-scrollbar-track{
       background:none;
    }
`
const HeaderTop = styled.div`
display:flex;
justify-content:space-around;
align-items:center;
border-bottom: 1px solid #333333;
`
const HeaderTopLeft = styled.div`
>h5{
    font-size: 15px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom:0;
}
>span{
    color: #F2E2CE;
    font-size: 14px;
    margin-left: 9px;
    font-weight: 400;
}
`
const HeaderTopRight = styled.div`
>.MuiSvgIcon-root{
    border: 1px solid #646464;
    font-size: 40px;
    border-radius: 5px;
    padding: 6px;
   
    color: #F2E2CE;
    cursor: pointer;
    :hover{
       opacity:.8;
    }
}
`
const LeftSideBar = styled.div`
min-height:100vh;
background-color:#0F1A1E;
max-width:14vw;
`