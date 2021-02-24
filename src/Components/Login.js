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
const LogInPageDiv = styled.div`
    background: #000;
    padding: 40px;
    box-shadow: 1px 1px 10px 4px #525252;
    border-radius: 5px;
`
const Logo = styled.div`
>img{
height:110px;
width:auto;
object-fit:contain;

}
`
const LogInPage = styled.div`
   color: #ffff;
   min-height:100vh;
   display:flex;
   flex-direction:column;
   align-items:center;
   justify-content:center;
   background: #0d0d0de0;
`
