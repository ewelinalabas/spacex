import React from 'react';
import { convertTimestamp } from './utils';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    objectFit: 'cover',
  },
};

const Launch = (props) => {
  const { data } = props
  const { classes } = props
  const date = convertTimestamp(data.launch_date_unix);
  const payload = data.rocket.second_stage.payloads[0];
  const url = "https://www.youtube.com/embed/" + data.links.youtube_id

  return(
    <Grid item xs={6}>
      <Card className={classes.card}>
        <CardActionArea>
        <CardMedia 
          component="iframe"
          className={classes.media}
          title={data.links.youtube_id} 
          src={url}
          height="315"
        />
        <CardContent>
          <Typography variant="h6">{data.mission_name}</Typography>
          <Typography>Date: {date}</Typography>
          <Typography>Rocket: {data.rocket.rocket_name}</Typography>
          <Typography>Site: {data.launch_site.site_name_long}</Typography>
          <Typography>Payload: {payload.payload_type}</Typography>
        </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

Launch.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Launch)