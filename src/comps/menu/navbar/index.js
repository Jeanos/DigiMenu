import React , {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SlidingMenu from '../../SlideMenu';
import Drawer from '@material-ui/core/Drawer';
import { endianness } from 'os';
import '../../../css/app.scss';


const useStyles = makeStyles({
  list: {
    width: 250,
  },
  rightSide:{
    display:'flex',
    alignItems: 'flex-end',
  },
  fullList: {
    width: 'auto',
  },
});


export default function MainHeader({MenuTitle}) {
  // eslint-disable-next-line no-use-before-define
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  
  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <SlidingMenu />
    </div>
    );

    const fullList = side => (
      <div
        className={classes.fullList}
        role="presentation"
        onClick={toggleDrawer(side, false)}
        onKeyDown={toggleDrawer(side, false)}
      >
        <SlidingMenu />
    </div>
    );

  

  return (
    <div>
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
        <IconButton onClick={toggleDrawer('left', true)} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        </Toolbar>
      </AppBar>
      <div> 
        <Typography variant="h6" className={classes.title, 'menuTitle'}>
            {MenuTitle}
        </Typography>
      </div>
    </div>

    <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
    {sideList('left')}
    </Drawer>
    </div>
  );
}
MainHeader.defaultProps = {
  MenuTitle: "Today's Special",
}
