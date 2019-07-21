// import React, { Component } from 'react'

// class HotspotsSideBarList extends Component {
//   constructor(props) {
//     super(props)
//   }

//   componentDidMount() {

//   }

//   render() {
//     return (
//       <div id="sidebar">
//         <input placeholder="Filtered COntent" value={this.props.query} onChange={(e) => { this.props.filterVenues(e.target.value) }} />
//         <br />
//         <br />
//         {
//           this.props.filteredVenues && this.props.filteredVenues.length > 0 && this.props.filteredVenues.map((hotspot, index) => (
//             <div key={index} className="venue-item" onClick={() => { this.props.listItemClick(hotspot) }} >
//               {hotspot.locName}
//             </div>
//           ))
//         }
//       </div>
//     )
//   }
// }

// export default HotspotsSideBarList

import React from 'react';
import Divider from '@material-ui/core/Divider';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { withStyles, makeStyles } from '@material-ui/core/styles';

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

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
    margin: theme.spacing(2, 2),
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

export default function HotspotsSideBarList(props) {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid id="sidebar" item xs={12} sm={8} md={3} component={Paper} elevation={6} square>
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
          {/* <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Explore Current Location
          </Button> */}
          <Divider />
          <div>
            {/* <input value={props.query} onChange={(e) => { props.filterVenues(e.target.value) }} /> */}
            <TextField onChange={props.enter}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="Filter Hotspots"
              name="search"
              autoComplete="query"
              autoFocus
              value={props.query}
              onChange={(e) => { props.filterVenues(e.target.value) }}
            />
            <br />
            <br />
            <Table>
              <TableHead>
                <TableRow>
                  {/* <TableCell>Hotspots</TableCell> */}
                  <StyledTableCell>List of Hotspots Nearby</StyledTableCell>
                </TableRow>
              </TableHead>
              {
                props.filteredVenues && props.filteredVenues.length > 0 && props.filteredVenues.map((hotspot, index) => (
                  <TableRow><StyledTableCell key={index} className="venue-item" onClick={() => { props.listItemClick(hotspot) }} >
                    {hotspot.locName}
                  </StyledTableCell></TableRow>
                ))
              }
            </Table>
          </div>
        </div>
      </Grid>
      {/* <Grid item xs={false} sm={4} md={9} className={classes.image}>
        <div id="map">

        </div>
        <HotspotsByLocation />
      </Grid> */}
    </Grid>
  );
}
