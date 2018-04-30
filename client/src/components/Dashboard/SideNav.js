import React from 'react';
import SideNav, { Nav, NavIcon, NavText } from 'react-sidenav';
import SvgIcon from 'react-icons-kit';
 
import { ic_aspect_ratio } from 'react-icons-kit/md/ic_aspect_ratio';
import { ic_business } from 'react-icons-kit/md/ic_business';
 
 
//specify the base color/background of the parent container if needed 
const MySideNav = () => (
    <div style={{background: '#f2f2f2', color: '#111111', width: 220, marginTop:0 , marginLeft: -100}}> 
        <SideNav highlightColor='#222222' highlightBgColor='#FFF' defaultSelected='sales' pullLeft>   
        		<Nav id='dashboar'>
                   
                
            </Nav>    
            <Nav id='dashoard'>
                <NavIcon><SvgIcon size={20} icon={ic_aspect_ratio}/></NavIcon>    
                <NavText> Dashboard </NavText>
            </Nav>
            <Nav id='sales'>
                <NavIcon><SvgIcon size={20} icon={ic_business}/></NavIcon>
                <NavText> Sales </NavText>
            </Nav>
            <Nav id='My Books'>
                <NavIcon><SvgIcon size={20} icon={ic_business}/></NavIcon>
                <NavText> MyBooks </NavText>
            </Nav>
            <Nav id='Authors'>
                <NavIcon><SvgIcon size={20} icon={ic_business}/></NavIcon>
                <NavText> Authors </NavText>
            </Nav>
            <Nav id='something else'>
                <NavIcon><SvgIcon size={20} icon={ic_business}/></NavIcon>
                <NavText> Something Else </NavText>
            </Nav>
            <Nav id='and something else '>
                <NavIcon><SvgIcon size={20} icon={ic_business}/></NavIcon>
                <NavText> And Something Else </NavText>
            </Nav>
            <Nav id='dashboard'>
                   
                
            </Nav>    
            <Nav id='dashboard'>
                   
                
            </Nav>    
            <Nav id='dashboard'>
                   
                
            </Nav>    
            <Nav id='dashboard'>
                   
                
            </Nav>    
            <Nav id='dashboard'>
                   
                
            </Nav>    
            <Nav id='dashboard'>
                   
                
            </Nav>    
            <Nav id='dashboard'>
                   
                
            </Nav>    

        </SideNav>
    </div>
)
 
 export default MySideNav;