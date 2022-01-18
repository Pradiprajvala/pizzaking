import styled from 'styled-components'
import { Link } from 'react-router-dom';

export const Button = styled.button`
  font-size: 1.4rem;
  font-weight: bold;
  margin-top: 10px;
  padding: 0.8rem 3rem;
  border: none;
  border-radius: 50px;
  background: #e9ba23;
 
  transition; 0.2s ease-out;
  
  &:hover{
    background: #fff;
    transition; 0.2s ease-out;
    outline: 0px;
    cursor: pointor;
    color: red;
  }
`

export const LoginLink = styled(Link)`
  font-weight:bold;
  text-decoration: none;
  color: black;
  
 
`;
