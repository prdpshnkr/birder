import React from 'react';
import { SocialIcon } from 'react-social-icons';

import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import CopyRight from '@material-ui/icons/Copyright';
import IconButton from '@material-ui/core/IconButton';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles({
  root: {
    width: '100%',
    flexGrow: 1,
    alignItems: 'center',
    height: '7vh',
    margin: 0,
  },

});

export default function LabelBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState('recents');

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
      <Box p={1}>
        <IconButton edge="start" color="inherit" aria-label="Menu">
          <SocialIcon className={classes.icons} url="https://www.facebook.com/prdpshnkr" />
        </IconButton>
        <IconButton edge="start" color="inherit" aria-label="Menu">
          <SocialIcon url="https://www.instagram.com/prdpshnkr" />
        </IconButton>        <IconButton edge="start" color="inherit" aria-label="Menu">
          <SocialIcon url="https://twitter.com/Pradeepmvit" />
        </IconButton>
      </Box>
      <BottomNavigationAction label="CopyRight" value="recents" icon={<CopyRight />} />
    </BottomNavigation>
  );
}