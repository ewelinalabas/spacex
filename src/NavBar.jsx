import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return(
      <div>
      <AppBar position="static">
          <Tabs>
            <NavLink to="/"><Tab label="Home"/></NavLink>
            <NavLink to="/pastlaunches"><Tab label="Past launches"/></NavLink>
            <NavLink to="/upcominglaunches"><Tab label="Upcoming launches"/></NavLink>
          </Tabs>
      </AppBar>
      </div>
  )
}

export default NavBar;