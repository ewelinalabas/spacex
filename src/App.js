import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Launch } from './Launch';

export const App = () => {
  const [pastLaunches, setPastLaunches] = useState([])

  useEffect(() => {
      axios.get('https://api.spacexdata.com/v3/launches/past?limit=10&order=desc')
      .then(response => {
        setPastLaunches(response.data)
      })
  }, [])

  return (
    <div>
      <h3>Past launches</h3>
      <ul>
        {pastLaunches.map(el => (
          <Launch data={el} key={el.flight_number}/>
        ))}
      </ul>
    </div>
  )
  
}