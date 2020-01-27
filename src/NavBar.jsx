import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

export const NavBar = () => {
  return(
      <div>
      <AppBar position="static">
          <Tabs>
            <Tab label="Home"/>
            <Tab label="Past launches"/>
            <Tab label="Upcoming launches"/>
          </Tabs>
      </AppBar>
      </div>
  )
}

export default NavBar;