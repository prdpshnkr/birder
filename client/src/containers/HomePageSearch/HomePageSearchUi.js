import React from 'react';
import { BrowserRouter, Link, Switch, Route, NavLink, Redirect } from 'react-router-dom';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import SearchRounded from '@material-ui/icons/SearchRounded';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import Geolocation from './Geolocation'
import ReverseGeoCode from './ReverseGeoCode'
import CurrentLocation from './CurrentLocation'
import MapContainer from './MapContainer'
import DisplayCurentLocationDetails from './DisplayCurentLocationDetails'
import HotspotsByLocationUi from '../NearbyHotspots/HotspotsByLocationUi'

const useStyles = makeStyles(theme => ({
  root: {
    height: '86vh',
  },
  image: {
    backgroundImage: 'url(https://live.staticflickr.com/858/28966598677_9daa8a5b3c_o_d.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  }
}));

export default function SignInSide(props) {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <Geolocation />
      <ReverseGeoCode />
      <CssBaseline />
      <Grid item xs={12} sm={8} md={4} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <SearchRounded />
          </Avatar>
          <Typography component="h1" variant="h5">
            Search for Birding Hotspots
          </Typography>
          <form onSubmit={props.submit} className={classes.form} noValidate>
            <TextField onChange={props.enter}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="Search a place for nearby hotspots"
              name="username"
              autoComplete="username"
              autoFocus
            />
            <CurrentLocation />
          </form>
          <DisplayCurentLocationDetails />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          ><Link to="/hotspots">Explore Current Location</Link></Button>
        </div>
      </Grid>
      <Grid item xs={false} sm={4} md={8} className={classes.image}>
        <MapContainer />
      </Grid>
      <Switch>
        <Route path="/hotspots" component={HotspotsByLocationUi} />
      </Switch>
    </Grid>
  );
}