import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';

const LaunchClock = () => {
  const [timer, setTimer] = useState(null)

  useEffect(() => {
    axios.get('https://api.spacexdata.com/v3/launches/next')
    .then(response => {
      const now = moment().unix()
      const upcomingLaunch = response.data.launch_date_unix
      setTimer(upcomingLaunch - now)
    })
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(timer - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timer]);

  return (
    <div>
      Next SpaceX launch in { timer && moment.duration(timer, 'seconds').humanize() }
    </div>
  )
}

export default LaunchClock;