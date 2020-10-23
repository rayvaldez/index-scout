import React from 'react';
import {
  Navbar,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';

function Navigation() {
  return (
    <div>
      <Navbar expand="md">
        <img src={`images/logo.png`} alt="Index Scout" width="100" height="90"/>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink href="/home">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/players">Players</NavLink>
          </NavItem>
        </Nav>
        <NavbarText>Scout your next player...</NavbarText>
      </Navbar>
    </div>
  );
}

export default Navigation;
