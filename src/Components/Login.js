import React from 'react'
import styled from 'styled-components'

const Login = () => {
   return (
      <>
         <LogInPage>
            <h3>LogIn Page</h3>
         </LogInPage>
      </>
   )
}

export default Login
const LogInPage = styled.div`
   color: #ffff;
   min-height:100vh;
   display:flex;
   flex-direction:column;
   align-items:center;
   justify-content:center;
`
