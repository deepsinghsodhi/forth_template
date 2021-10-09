import React from 'react'
import '../css/Nb.css'
import call from '../images/call.png'
import msg from '../images/msg.png'
import location from '../images/location.png'
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';
export default function Nb() {
    return (
        <div>
             
             <Navbar color="inverse" light expand="md" className="header_nav">
                    <NavbarBrand href="/">
                            <img src={call} alt="..................." style={{marginLeft: '8.063rem'}}/>
                    </NavbarBrand>
                    <NavbarBrand href="/" style={{color: 'white',}}>           1800-419-8902 &nbsp;   | </NavbarBrand>

                    <NavbarBrand href="/">
                        <img src={msg} alt="..................."/>
                    </NavbarBrand>
                    
                    <NavbarBrand href="/" style={{color: 'white',marginRight: '3rem'}}>    info@speedlabs.in         </NavbarBrand>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/" style={{color: 'white'}}> <img src={location} alt="..................."/> Address: 9015 Sunset Boulevard United Kingdom </NavLink>
                            </NavItem>
                            
                        </Nav>
                    
                </Navbar>
           
        
        </div>
    )
}
