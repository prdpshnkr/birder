import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Login from '../../containers/Authentication/Login/Login'

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              eBirder
          </Typography>


            {/* <Button color="inherit"><NavLink to={{
              pathname: '/users/register',
              hash: '#submit',
              search: '?quick-submit=true'
            }}>Register</NavLink></Button> */}


            {/* <Button color="inherit">Login</Button> */}
            {/* <Route path="/users/login" component={Login} /> */}

          </Toolbar>
        </AppBar>
      </div>
    </BrowserRouter>

  );
}