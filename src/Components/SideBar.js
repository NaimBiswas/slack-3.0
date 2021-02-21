import { EditRounded } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const SideBar = () => {
   return (
      <>
         <LeftSideBar>

            <HeaderTop>
               <HeaderTopLeft>
                  <h5 className='text-white text-center pt-1 '>Hello world</h5>
                  <span><FiberManualRecordIcon style={{ color: 'green' }} fontSize='small'></FiberManualRecordIcon> Naim Biswas</span>
               </HeaderTopLeft>
               <HeaderTopRight>
                  <EditRounded></EditRounded>
               </HeaderTopRight>
            </HeaderTop>
            <hr style={{ background: 'rgb(75 75 75)' }} className='m-0' />
         </LeftSideBar>
      </>
   )
}

export default SideBar
const HeaderTop = styled.div`
display:flex;
justify-content:space-around;
`
const HeaderTopLeft = styled.div``
const HeaderTopRight = styled.div`
>.MuiSvgIcon-root{
    border: 1px solid #646464;
    font-size: 40px;
    border-radius: 5px;
    padding: 6px;
    margin-top: 9px;
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