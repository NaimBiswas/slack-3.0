import React from 'react'
import styled from 'styled-components'

const Login = () => {
   return (
      <>
         <LogInPage>
            <LogInPageDiv>
               <Logo>
                  <img src="https://cdn.freebiesupply.com/logos/large/2x/slack-logo-icon.png" alt="" />
               </Logo>
            </LogInPageDiv>
         </LogInPage>
      </>
   )
}

export default Login
const LogInPageDiv = styled.div``
const Logo = styled.div`
>img{


}
`
const LogInPage = styled.div`
   color: #ffff;
   min-height:100vh;
   display:flex;
   flex-direction:column;
   align-items:center;
   justify-content:center;
`
