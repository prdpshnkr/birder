import React from 'react'
import { Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    height: '65%',
  }
}))

export default function Footer() {
  const classes = useStyles();
  return(
    < Paper className={classes.root}>
  Right Pane
  </Paper >
  ) 
}