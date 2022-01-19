import React from 'react'
import { BgContainer ,ButtonLink,LoginWith ,LoginOptions, Login, LoginContainer, LoginTitle, Input, LoginButton} from './StyledLoginPage.js'
import { GlobalStyle} from '../globalStyles';
import {Nav,NavLink} from '../Components/Navbar/NavbarElements.js';
import {
  FaFacebookF,
  FaGoogle,
} from 'react-icons/fa';
import Footer from '../Components/Footer/index.js'

const LoginPage = () => {
  return(
    <>
    <BgContainer> 
      <GlobalStyle />
       <Nav>
       <NavLink to="/" >PizzaKing</NavLink >
       </Nav>
      <LoginContainer>

      <Login>
       <LoginTitle>      Welcome Back
       </LoginTitle>
      
       <Input type="text" placeholder="Email" />
       <Input type="password" placeholder="Password" />
  
       <ButtonLink to="/loginpage">
      <LoginButton>Login</LoginButton>
      </ButtonLink >
       
       <LoginWith>-------- Or Login With --------</LoginWith>
       <LoginOptions > 
      
       <FaFacebookF />
       
       
       <FaGoogle />
       
       
       </LoginOptions>
    
      </Login>
       </LoginContainer>
    </BgContainer>
    <Footer />
    </>
    )
}

export default LoginPage;