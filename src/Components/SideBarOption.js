import React from 'react'
import styled from 'styled-components'

const SideBarOption = ({ Icon, Title }) => {

   return (
      <>
         <SideBarContainer className=''>
            <span>{Icon && <Icon style={{ color: '#F2E2CE' }} className='mr-2' fontSize='small' />}</span> <p>{Title}</p>

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
