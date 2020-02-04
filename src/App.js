import React from 'react';
import Background from './spacex.jpg';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { Card, Button, Paper, CardContent } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import LaunchClock from './LaunchClock';

const styles = {
  imgbox: {
    height: '100%',
    position: 'relative'
  },
  img: {
    backgroundImage: `url(${Background})`,
    width: '100%',
    height: '100vh',
    margin: 'auto'
  },
  overlay: {
    position: 'absolute',
    bottom: '30%',
    left: '25%',
    color: 'black',
    backgroundColor: 'white'
 },
  overlay2: {
    position: 'absolute',
    bottom: '40%',
    left: '25%',
  }
}

const App = (props) => {
  const { classes } = props
  return (
    <Paper className={classes.imgbox}>
      <Card
        className={classes.img} 
        alt="'SpaceX Starman' by Florian R. is licensed under CC BY-NC-ND 4.0" >
          <CardContent className={classes.overlay2}>
            <LaunchClock />
          </CardContent>
          <Button className={classes.overlay} component={NavLink} to={"pastlaunches"}>See past launches</Button>
      </Card>
    </Paper>
  )
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(App);