import React, { Component, Fragment } from 'react';
import { BrowserRouter, Link, Switch, Route, NavLink, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import _ from 'lodash'

import Register from '../../containers/Authentication/Register/Register'
import Login from '../../containers/Authentication/Login/Login'
import Account from '../../containers/Authentication/Account/Account'
import Logout from '../../containers/Authentication/Logout/Logout'
import Profile from '../users/Profile'
import Home from '../../Home';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Box from '@material-ui/core/Box';
import Hotspots from '../../Hotspots';

class Header extends Component {
  render() {
    return (
      <Fragment>
        <BrowserRouter>
          {_.isEmpty(this.props.user) ? (
            <div>
              <Box height='7vh' display="flex" bgcolor="background.paper">
                <AppBar display="flex" p={1} position="static" color="default">
                  <Toolbar>
                    <Box p={1} flexGrow={1}>
                      <Typography variant="h6">
                        <NavLink to="/home">eBirder</NavLink>
                      </Typography>
                    </Box>
                    <ButtonGroup variant="contained" color="inherit" aria-label="Full-width contained primary button group">
                      <Button variant="contained" color="inherit"><Link to="/users/register">Register</Link></Button>
                      <Button variant="contained" color="inherit"><Link to="/users/login">Login</Link></Button>
                    </ButtonGroup>
                  </Toolbar>
                </AppBar>

              </Box>
            </div>
          ) : (
              <Box display="flex" bgcolor="background.paper">
                <AppBar display="flex" p={1} position="static" color="default">
                  <Toolbar>
                    <Box p={1} flexGrow={1}>
                      <Typography variant="h6" >
                        <NavLink to="/home">eBirder</NavLink>
                      </Typography>
                    </Box>
                    <ButtonGroup variant="contained" color="inherit" aria-label="Full-width contained primary button group">
                      <Button variant="contained" color="inherit"><Link to="/users/account">Account</Link></Button>
                      <Button variant="contained" color="inherit"><Link to="/users/profile">Profile</Link></Button>
                      <Button variant="contained" color="inherit"><Link to="/users/logout">Logout</Link></Button>
                    </ButtonGroup>
                  </Toolbar>
                </AppBar>
              </Box>
            )}
          <Switch>
            <>
              <Route path="/users/register" component={Register} />
              <Route path="/users/login" component={Login} />
              <Route path="/users/account" component={Account} />
              <Route path="/users/logout" component={Logout} />
              <Route path="/users/profile" component={Profile} />
              <Route path="/home" component={Home} />
              <Route path="/" exact render={() => <Redirect to="/home" />} />
              <Route path="/hotspots" component={Hotspots} />
            </>
          </Switch>
        </BrowserRouter>

      </Fragment >
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    isAuthenticated: true
  }
}

export default connect(mapStateToProps)(Header)