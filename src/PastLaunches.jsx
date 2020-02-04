import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PastLaunch from './PastLaunch';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles'
import { GridList } from '@material-ui/core';

const styles = {
  root: {
    flexGrow: 1
  }
};

const PastLaunches = (props) => {
  const { classes } = props
  const [pastLaunches, setPastLaunches] = useState([])
  const [checked, setChecked] = useState(false);

  useEffect(() => {
      axios.get('https://api.spacexdata.com/v3/launches/past?limit=10&order=desc')
      .then(response => {
        setPastLaunches(response.data)
      })
  }, [])

  const handleChange = () => {
    setChecked(prev => !prev);
  };

  return (
    <div>
      <GridList cellHeight={345}>
        {pastLaunches.map(el => (
          <PastLaunch data={el} key={el.flight_number}/>
      ))}
      </GridList>
    </div>
  )
};

PastLaunches.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PastLaunches)