import React from 'react';
import { convertTimestamp } from './utils';

export const Launch = ({data}) => {
  const date = convertTimestamp(data.launch_date_unix)
  const payload = data.rocket.second_stage.payloads[0]
  return(
    <li>
      <img src={data.links.flickr_images} alt="Rocket" height="42" width="42"></img>
      <span>
        <p>Mission: {data.mission_name}</p>
        <p>Date: {date}</p>
        <p>Rocket: {data.rocket.rocket_name}</p>
        <p>Site: {data.launch_site.site_name_long}</p>
        <p>Payload: {payload.payload_type}</p>
        <a href={data.links.video_link} target="_blank">Watch the launch</a>
      </span>
    </li>
  )
}