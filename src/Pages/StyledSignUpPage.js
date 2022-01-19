import styled from 'styled-components'
import ImgBg from '../images/pizza-3.jpg'
import { Link } from 'react-router-dom';


export const BgContainer = styled.div `
background: linear-gradient(to right,rgba(0,0,0,0.4),
   rgba(0,0,0,0.1)), url(${ImgBg});
height: 100vh;

background-position: center;
background-size: cover;
width: 100vw;


`

export const SignUpContainer = styled.div `
height: calc(100vh - 80px);
max-height: 100vh;


width: 100vw;
max-width:100vw;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;




`



export const SignUpTitle = styled.h1 `
 font-size: clamp(2.5rem, 10vw, 5rem);
  margin-bottom: 2rem;
  letter-spacing: 3px;
 
 
  display: flex;
justify-content: center;
  color: #fff;
  
box-shadow: 0 6px  #e9ba23 ;
  
`




export  function Input({type, placeholder})
{
  return <StyledInput type={type} placeholder={placeholder}/>
  
}
  
  const StyledInput = styled.input `
       border-radius: 1rem;
       width: 300px;
       padding: 0.5rem;
       background: rgba(254, 234, 218, 0.4);
       border: none;
      &::placeholder {
    color: black;
    font-weight: 500;
    font-size: 1.2rem;
  }
       outline: none;
       margin: 10px;
       font-decoration: none;
       font-weight: 500;
       box-decoration: ;
       color: black;
       font-size: clamp(0.5rem,1.2rem,2rem);
  `
  export const SignUpButton = styled.button `
      font-size: 1.4rem;
      border-radius: 50px;
      background: #e9ba23;
      text-decoration: none;
      font-weight: bold;
      color: black;
      padding: 0.5rem ;
      width: 100%;
      border: none;
      margin-top: 0.9rem;
      margin-bottom: 1rem;
      outline: none;
      transition; 0.2s ease-out;
      &:hover{
        background: white;
        color: red;
      }
@media screen and (max-width: 400px) {
      
}
  `
  
  export const SignUp = styled.div`
  color: #fff;
  position: absolute;
     display: flex;
width: calc(100vw - 160px);
     border-radius:50px;
     flex-direction: column;
     align-items: center;
background: rgba(255, 255, 255, 0.2);
backdrop-filter: blur(3px);
@media screen and (max-width: 400px) {
      width: 90%;
}
     

  `
  
 export const SignUpWith = styled.h5`
  cursor: pointor;
  letter-spacing: 0.2rem;
  margin-bottom: 1rem;
 `
 
 export const SignUpOptions = styled.div`
 display: flex;
 justify-content: space-between;
 width: 50px;
 
 margin-bottom: 2rem;
 `
 
export const ButtonLink = styled(Link)`
font-weight:bold;
  text-decoration: none;
  color: black;
  display: flex;
  justify-content: center;
  width: 50%;
  @media screen and (max-width: 400px){
    width: 40%;
  }
  
`

export const ExistingUser = styled.h4 `
    margin-bottom: 2rem;
`

export const LoginLink = styled(Link)`
    color: black;
    font-weight: bold;
    font-size: 1.rem
`