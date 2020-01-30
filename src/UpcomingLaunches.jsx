import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import UpcomingLaunch from './UpcomingLaunch';

const styles = {
  root: {
    flexGrow: 1
  }
};

const UpcomingLaunches = (props) => {
  const { classes } = props
  const [upcomingLaunches, setUpcomingLaunches] = useState([])

  useEffect(() => {
    axios.get('https://api.spacexdata.com/v3/launches/upcoming?limit=10&order=asc')
    .then(response => {
      setUpcomingLaunches(response.data)
    })
  }, [])

  return (
    <div className={classes.root}>
      <Grid container
        direction="row"
        justify="center"
        alignItems="stretch"
      >
        {upcomingLaunches.map(el => (
          <UpcomingLaunch data={el} key={el.flight_number}/>
        ))}
      </Grid>
    </div>
  )
}

UpcomingLaunches.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(UpcomingLaunches);