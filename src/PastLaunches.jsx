import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PastLaunch from './PastLaunch';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles = {
  root: {
    flexGrow: 1
  }
};

const PastLaunches = (props) => {
  const { classes } = props
  const [pastLaunches, setPastLaunches] = useState([])

  useEffect(() => {
      axios.get('https://api.spacexdata.com/v3/launches/past?limit=10&order=desc')
      .then(response => {
        setPastLaunches(response.data)
      })
  }, [])

  return (
    <div className={classes.root}>
      <Grid container
        direction="row"
        justify="center"
        alignItems="stretch"
      >
        {pastLaunches.map(el => (
          <PastLaunch data={el} key={el.flight_number}/>
        ))}
      </Grid>
    </div>
  )
};

PastLaunches.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PastLaunches)