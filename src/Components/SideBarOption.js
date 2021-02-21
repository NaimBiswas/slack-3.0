import React from 'react'
import styled from 'styled-components'
import VisibilityIcon from '@material-ui/icons/Visibility';

const SideBarOption = ({ Icon, Title, addChannelOption }) => {
   const addChannel = () => {
      alert()
   }
   const selectChannel = () => {

   }
   return (
      <>
         <SideBarContainer onClick={addChannelOption ? addChannel : selectChannel} className=''>
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
   background:#0b1214;
}
`
