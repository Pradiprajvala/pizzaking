import React from 'react'
import {SidebarContainer,Icon,CloseIcon,SidebarMenu,SidebarLink,SideBtnWrap,SidebarRoute} from './SidebarElements'
const Sidebar = ({isOpen, toggle}) => {
  return(
     <SidebarContainer isOpen={isOpen} >
       <Icon>
         <CloseIcon onClick={toggle} />
       </Icon>
       <SidebarMenu>
         <SidebarLink to="/">Pizzas</SidebarLink>
         <SidebarLink to="/">Desserts</SidebarLink>
         <SidebarLink to="/">Full Menu</SidebarLink>
       </SidebarMenu>
       <SideBtnWrap>
        <SidebarRoute to="/" > Order Now </SidebarRoute>
       </SideBtnWrap>
     </SidebarContainer>
    )
}

export default Sidebar;