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
            <Tab component={NavLink} to={"/"} label="Home"/>
            <Tab component={NavLink} to={"pastlaunches"} label="Past launches"/>
            <Tab component={NavLink} to={"upcominglaunches"} label="Upcoming launches"/>
          </Tabs>
      </AppBar>
      </div>
  )
}

export default NavBar;
