import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import HotspotsSideBarList from './HotspotsSideBarList'
import HotspotsByLocation from './HotspotsByLocation'

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

export default function HotspotsByLocationUi(props) {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={12} sm={8} md={4} component={Paper} elevation={6} square>
        <HotspotsSideBarList />
      </Grid>
      <Grid item xs={false} sm={4} md={8} className={classes.image}>
        <HotspotsByLocation />
      </Grid>
    </Grid>
  );
}
