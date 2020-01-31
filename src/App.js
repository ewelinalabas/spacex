import React from 'react';
import Background from './spacex.jpg';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { Card, CardMedia, Button } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

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
 }
}

const App = (props) => {
  const { classes } = props
  return (
    <Card className={classes.imgbox}>
      <CardMedia 
        className={classes.img} 
        alt="'SpaceX Starman' by Florian R. is licensed under CC BY-NC-ND 4.0" >
           <Button className={classes.overlay} component={NavLink} to={"pastlaunches"}>See past launches</Button>
      </CardMedia>
    </Card>
  )
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(App);