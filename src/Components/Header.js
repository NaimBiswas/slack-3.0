
import React, { Fragment } from 'react'
import styled from 'styled-components'
import { Avatar } from '@material-ui/core'
import { AccessTime, Copyright } from '@material-ui/icons'
import HelpIcon from '@material-ui/icons/Help';

const Header = () => {
   return (
      <Fragment>
         <HeaderComponent>
            <HeaderLeft>

            </HeaderLeft>
            <HeaderMiddle>
               <div className="">
                  <HeaderRightTime />
               </div>
               <HeaderMiddleInput placeholder='Search' className='pl-4' />
               {/* <input size='90' className='form-control' type="text" /> */}
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
    border: 1px solid #3d3d3d;
    border-radius: 999px;
    color:#F2E2CE;
    
    :focus{
       outline:none;
    }
`

const HeaderRight = styled.span`

`
