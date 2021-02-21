
import React, { Fragment } from 'react'
import styled from 'styled-components'
import { Avatar } from '@material-ui/core'
import { AccessTime, Copyright } from '@material-ui/icons'
import HelpIcon from '@material-ui/icons/Help';
import SearchIcon from '@material-ui/icons/Search';

const Header = () => {
   return (
      <Fragment>
         <HeaderComponent className='pt-2 pb-2'>
            <HeaderLeft>

            </HeaderLeft>
            <HeaderMiddle>
               <div className="">
                  <HeaderRightTime />
               </div>
               <HeaderMiddleSearch>
                  <HEaderSearchIcon className='mr-2' />
                  <HeaderMiddleInput placeholder='Search Naim Biswas' />
               </HeaderMiddleSearch>
               <div className="">
                  <HeaderRightHelp />
               </div>
            </HeaderMiddle>
            <HeaderRight>
               <HeaderRightAvatar


               />
            </HeaderRight>
         </HeaderComponent>
         <HeaderBOttonBorder></HeaderBOttonBorder>

      </Fragment>
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
     min-width: 60vw;
`
const HEaderSearchIcon = styled(SearchIcon)``
const HeaderRightAvatar = styled(Avatar)`
margin-right:30px;
:hover{
   opacity:50%;
   cursor: pointer;
}
`
const HeaderRightTime = styled(AccessTime)`
margin-right:23px;
margin-top:8px;
`
const HeaderRightHelp = styled(HelpIcon)`
margin-left:23px;
margin-top:8px;
`
const HeaderBOttonBorder = styled.hr`
margin: 0;
background:red;
`

const HeaderComponent = styled.div`
   background-color:#0F1A1E;
   color:white;
   justify-content: space-between;
   display: flex;
`
const HeaderLeft = styled.div``
const HeaderMiddle = styled.div`
display:flex;
justify-content: space-around;
`
const HeaderMiddleInput = styled.input`
    background: #181717;
  
   border:none;
    color:#F2E2CE;
    
    :focus{
       outline:none;
    }
`

const HeaderRight = styled.span`

`
