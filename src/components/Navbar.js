import React, { useState } from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBNavbarNav,
 
    MDBNavbarLink,
  
    MDBCollapse
  } from 'mdb-react-ui-kit';


function Navbar(){

    const [showNavSecond, setShowNavSecond] = useState(false);
    return(

<MDBNavbar expand='lg' className='navbar'>
      <MDBContainer fluid>
        <MDBNavbarBrand className='logo' href='#'>BERVELY HILLS</MDBNavbarBrand>
        <MDBNavbarToggler
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowNavSecond(!showNavSecond)}
        >
          =
        </MDBNavbarToggler>
        <MDBCollapse navbar show={showNavSecond}>
          <MDBNavbarNav >
            <MDBNavbarLink active aria-current='page' href='#'>
              HOME
            </MDBNavbarLink>
            <MDBNavbarLink  href='#'>BUY</MDBNavbarLink>
            <MDBNavbarLink href='#'>SELL</MDBNavbarLink>
            <MDBNavbarLink href='#'>NEIGBORHOODS</MDBNavbarLink>
            <MDBNavbarLink href='#'>ABOUT</MDBNavbarLink>
            <MDBNavbarLink href='#'>CONTACT US</MDBNavbarLink>
            <MDBNavbarLink href='#'>REGISTER</MDBNavbarLink>
            <MDBNavbarLink href='#'>SIGN IN</MDBNavbarLink>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
    )
}

export default Navbar;