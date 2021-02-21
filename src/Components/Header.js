
import React, { Fragment } from 'react'
import styled from 'styled-components'

const Header = () => {
   return (
      <Fragment>
         <HeaderComponent>
            <h2> Header Components 😁</h2>
         </HeaderComponent>

      </Fragment>
   )
}

export default Header

const HeaderComponent = styled.div`
   background-color:red;
   color:white;
`
