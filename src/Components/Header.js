
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
               <input className='form-control' type="text" />
               <div className="">
                  <HeaderRightHelp />
               </div>
            </HeaderMiddle>
            <HeaderRight>
               <HeaderRightAvatar


               />



            </HeaderRight>
         </HeaderComponent>

      </Fragment>
   )
}

export default Header

const HeaderRightAvatar = styled(Avatar)`
`
const HeaderRightTime = styled(AccessTime)``
const HeaderRightHelp = styled(HelpIcon)``

const HeaderComponent = styled.div`
   background-color:red;
   color:white;
   justify-content: space-between;
   display: flex;
`
const HeaderLeft = styled.div``
const HeaderMiddle = styled.div`
display:flex;
justify-content: space-around
`
const HeaderRight = styled.span`

`
