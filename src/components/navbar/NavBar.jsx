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
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
// import EcommercePage from '../shop/EcommercePage';

import { MemoryRouter, Route, Link, useRouteMatch } from 'react-router-dom';
import {Switch } from "react-router-dom";

function NavBar () {
  const routeMatch = useRouteMatch(['/products', '/Counter', '/Todo', '/Login', '/Registration','/']);
  const currentTab = routeMatch?.path;

  return (
    <>
      <div style={{'display': 'flex', 'justifyContent':'center', 'margin': '1rem'}}>
        <Tabs value={currentTab} style={{'width': 'fit-content'}} >
          <Tab label="Ecommerce Page" href="/products" value="/products" to="/products"  component={Link}/>
          <Tab label="Gehad protofolio" href="/" value="/" to="/" component={Link} />
          <Tab label="Simple Counter" value="/Counter" to="/Counter" href="/Counter" component={Link}/>
          <Tab label="Todo list" value="/Todo" to="/Todo" href="/Todo" component={Link}/>
          <Tab label="Login" value="/Login" to="/Login" href="/Login" component={Link}/>
          <Tab label="Registration" value="/Registration" to="/Registration" href="/Registration" component={Link}/>
        </Tabs>
      </div>

     <MemoryRouter initialEntries={['/products']} initialIndex={1}>
       <Box sx={{ width: '100%' }}>
         <Route>
           {({ location }) => (
             <Typography variant="body2" sx={{ pb: 2 }} color="text.secondary">
             </Typography>
           )}
         </Route>
       </Box>
     </MemoryRouter>
    </>
  );
}

export default NavBar;
