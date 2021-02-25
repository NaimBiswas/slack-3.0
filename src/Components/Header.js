
import React, { Fragment, useState } from 'react'
import styled from 'styled-components'
import { Avatar } from '@material-ui/core'
import { AccessTime, Brightness1, Brightness3, Copyright, WbSunny } from '@material-ui/icons'
import HelpIcon from '@material-ui/icons/Help';
import SearchIcon from '@material-ui/icons/Search';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';
import './Light.css'
const Header = ({ Dark, setDark }) => {
   const [user,] = useAuthState(auth)
   return (
      <Fragment>
         <HeaderComponent className={`pt-2 pb-2 ${Dark ? '' : 'LightHeader'}`}>
            <HeaderLeft>

            </HeaderLeft>
            <HeaderMiddle>
               <div className="">
                  <HeaderRightTime titleAccess='History' />
               </div>
               <HeaderMiddleSearch className={Dark ? '' : 'LightHeaderSearch'}>
                  <HEaderSearchIcon className='mr-2' />
                  <HeaderMiddleInput className={Dark ? '' : 'LightHeaderSearch'} placeholder='Search Naim Biswas' />
               </HeaderMiddleSearch>
               <div className="">
                  <HeaderRightHelp titleAccess='Help' />
               </div>
            </HeaderMiddle>
            <HeaderRight className=''>
               <HeaderRightAvatar
                  src={user?.photoURL}
                  alt={user?.displayNAME}
                  onClick={() => auth.signOut()}
                  title="Sign Out"
               />

            </HeaderRight>
            <div style={{ cursor: 'pointer' }} className="">
               {
                  Dark ? <WbSunny className='mt-2' onClick={() => setDark(false)}></WbSunny> : <Brightness3 onClick={() => setDark(true)} className='mt-2'></Brightness3>
               }
            </div>

         </HeaderComponent>
         <HeaderBOttonBorder></HeaderBOttonBorder>

      </Fragment >
   )
}

export default Header

const HeaderMiddleSearch = styled.div`
   
    background: #181717;
    border: 1px solid #3d3d3d;
    border-radius: 999px;
    color: #F2E2CE;
    padding-top: 7px;
    padding-left: 10px;
     padding-right: 25px;
   
`
const HEaderSearchIcon = styled(SearchIcon)``
const HeaderRightAvatar = styled(Avatar)`

:hover{
   opacity:50%;
   cursor: pointer;
}
`
const HeaderRightTime = styled(AccessTime)`
margin-right:23px;
margin-top:8px;
cursor: pointer;
:hover{
   opacity:.9;
}
`
const HeaderRightHelp = styled(HelpIcon)`
margin-left:23px;
margin-top:8px;
cursor: pointer;
:hover{
   opacity:.9;
}
`
const HeaderBOttonBorder = styled.hr`
margin: 0;
background-color: rgb(75 75 75);
`

const HeaderComponent = styled.div`
   background-color:#0F1A1E;
   color:white;
   justify-content: space-around;
   display: flex;
   
`
const HeaderLeft = styled.div``
const HeaderMiddle = styled.div`
display:flex;
justify-content: space-around;
margin-right:-50px;
margin-left: 10%;
`
const HeaderMiddleInput = styled.input`
    background: #181717;
    min-width: 58vw;
   border:none;
    color:#F2E2CE;
    
    :focus{
       outline:none;
    }
`

const HeaderRight = styled.span`

`
