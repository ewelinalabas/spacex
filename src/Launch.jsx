import React from 'react';
import { convertTimestamp } from './utils';

export const Launch = ({data}) => {
  const date = convertTimestamp(data.launch_date_unix);
  const payload = data.rocket.second_stage.payloads[0];
  const url = "https://www.youtube.com/embed/" + data.links.youtube_id

  return(
    <li>
      <iframe title={data.links.youtube_id} src={url} width="420" height="315">Watch the launch</iframe>
      <span>
        <p>Mission: {data.mission_name}</p>
        <p>Date: {date}</p>
        <p>Rocket: {data.rocket.rocket_name}</p>
        <p>Site: {data.launch_site.site_name_long}</p>
        <p>Payload: {payload.payload_type}</p>
      </span>
    </li>
  );
};