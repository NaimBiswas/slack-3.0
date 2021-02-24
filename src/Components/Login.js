import { Button } from 'react-bootstrap'
import React from 'react'
import styled from 'styled-components'
import { auth, provider } from '../firebase'

const Login = () => {
   const signIn = (e) => {
      e.preventDefault();
      auth.signInWithPopup(provider).catch(error => alert(error.message))
   }
   return (
      <>
         <LogInPage>
            <LogInPageDiv>
               <Logo>
                  <img src="https://cdn.freebiesupply.com/logos/large/2x/slack-logo-icon.png" alt="" />
               </Logo>
               <h2 className='text-light'>Sign In To The NB Community</h2>
               <p>www.slack-v3.web.app</p>
               <Button onClick={signIn} variant='info' className=''>Sign in with Google</Button>
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
    >button:focus{
          outline: 0;
    box-shadow: -3px 3px 0px 0px rgb(58 176 195 / 50%);
        font-size: 16px;
    }
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
