import React from 'react'
import styled from 'styled-components'

const SideBar = () => {
   return (
      <>
         <LeftSideBar>

            <h3 className='text-white'>Hello world</h3>
            <hr style={{ background: 'rgb(75 75 75)' }} className='m-0' />
         </LeftSideBar>
      </>
   )
}

export default SideBar
const LeftSideBar = styled.div`
min-height:91vh;
background-color:#0F1A1E;
max-width:14vw;
`