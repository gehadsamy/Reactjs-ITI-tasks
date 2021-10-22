import React, { useState } from "react";
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBDropdownItem,
  MDBDropdownLink,
} from "mdb-react-ui-kit";
// import { Link } from "react-router-dom";

function NavBar() {
  return (
    <MDBNavbar expand="lg" light bgColor="light" className="m-2 p-4" >
      <MDBContainer fluid  >
        <MDBNavbarToggler
          type="button"
          data-target="#navbarCenteredExample"
          aria-controls="navbarCenteredExample"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>

        <MDBCollapse
          navbar
          center
          id="navbarCenteredExample" 
        >
          <MDBNavbarNav fullWidth={false} className="mb-2 mb-lg-0" style = {{background : '#20232a !important'}}>
            <MDBNavbarItem>
              <MDBNavbarLink aria-current="page" href="/">Home</MDBNavbarLink>
            </MDBNavbarItem>
       

            <MDBNavbarItem>
              <MDBNavbarLink href="/Counter">Counter</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href="/products">E-commerce</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href="/todo">Todo-list</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href="/Registration">Registration</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href="/Login">Login</MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}

export default NavBar;
