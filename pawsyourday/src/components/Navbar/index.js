import React from 'react';
import {
  Nav,
  NavLink,
  NavMenu,
} from './NavbarElements';
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to='/landing' activeStyle>
            Home
          </NavLink>
          <NavLink to='/exercise' activeStyle>
            Get Exercise
          </NavLink>
          <NavLink to='/alarm' activeStyle>
            Your Daily Alarm Clock
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;
