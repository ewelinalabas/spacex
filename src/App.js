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
    color: 'black',
    backgroundColor: 'white'
  }
}

const App = (props) => {
  const { classes } = props
  return (
    <Paper className={classes.imgbox}>
      <CardContent component={LaunchClock} />
      <Card
        className={classes.img} 
        alt="'SpaceX Starman' by Florian R. is licensed under CC BY-NC-ND 4.0" >
      </Card>
      <Button className={classes.overlay} component={NavLink} to={"pastlaunches"}>See past launches</Button>
    </Paper>
  )
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(App);