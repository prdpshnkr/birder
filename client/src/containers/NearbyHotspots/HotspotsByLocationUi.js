import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import SearchRounded from '@material-ui/icons/SearchRounded';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import HotspotsByLocation from './HotspotsByLocation'
// import HotspotsSideBarList from './HotspotsSideBarList'

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
    margin: theme.spacing(2, 4),
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
      <CssBaseline />
      <Grid item xs={12} sm={8} md={4} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          {/* <Avatar className={classes.avatar}>
            <SearchRounded />
          </Avatar> */}
          {/* <Typography component="h1" variant="h5">
            Search for Birding Hotspots
          </Typography> */}
          <form onSubmit={props.submit} className={classes.form} noValidate>
            <TextField onChange={props.enter}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="Search another place"
              name="username"
              autoComplete="username"
              autoFocus
            />
          </form>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Explore Current Location
          </Button>
          {/* <HotspotsSideBarList listItemClick={this.listItemClick} filterVenues={this.filterVenues} filteredVenues={this.state.filteredVenues} /> */}
        </div>
      </Grid>
      <Grid item xs={false} sm={4} md={8} className={classes.image}>
        <HotspotsByLocation />
      </Grid>
    </Grid>
  );
}
