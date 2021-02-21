import { EditRounded } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const SideBar = () => {
   return (
      <>
         <LeftSideBar>

            <HeaderTop className='pl-1 pr-1'>
               <HeaderTopLeft className='pb-2'>
                  <h5 className='text-white text-center pt-2 '>Naim Biswas</h5>
                  <span><FiberManualRecordIcon style={{ color: 'green' }} fontSize='small'></FiberManualRecordIcon> Naim Biswas</span>
               </HeaderTopLeft>
               <HeaderTopRight>
                  <EditRounded></EditRounded>
               </HeaderTopRight>
            </HeaderTop>
         </LeftSideBar>
      </>
   )
}

export default SideBar
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