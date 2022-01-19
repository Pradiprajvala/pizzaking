import React from 'react'
import { BgContainer, ExistingUser,LoginLink, ButtonLink,SignUpWith ,SignUpOptions, SignUp, SignUpContainer, SignUpTitle, Input, SignUpButton} from './StyledSignUpPage.js'
import { GlobalStyle} from '../globalStyles';
import {Nav,NavLink} from '../Components/Navbar/NavbarElements.js';
import {
  FaFacebookF,
  FaGoogle,
} from 'react-icons/fa';
import Footer from '../Components/Footer/index.js'

const SignUpPage = () => {
  return(
    <>
    <BgContainer> 
      <GlobalStyle />
       <Nav>
       <NavLink to="/" >PizzaKing</NavLink >
       </Nav>
      <SignUpContainer>

      <SignUp>
       <SignUpTitle>    PizzaKing
       </SignUpTitle>
      
       <Input type="text" placeholder="Full Name" />
       <Input type="digits" placeholder="Mobile Number +91" />
       <Input type="email" placeholder="Email" />
       <Input type="password" placeholder="Password" />
       <Input type="password" placeholder="Confirm Password" />
  
       <ButtonLink to="/signuppage">
      <SignUpButton>SignUp</SignUpButton>
      </ButtonLink >
       
       <SignUpWith>-------- Or SignUp With --------</SignUpWith>
       <SignUpOptions > 
      
       <FaFacebookF />
       
       
       <FaGoogle />
       
       
       </SignUpOptions>
       <ExistingUser>Existing User? <LoginLink to="/loginpage" > Login </LoginLink> </ExistingUser>
    
      </SignUp>
       </SignUpContainer>
    </BgContainer>
    <Footer />
    </>
    )
}

export default SignUpPage;