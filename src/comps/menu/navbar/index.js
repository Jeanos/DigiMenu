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
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import '../../../css/app.scss';

const stripePromise = loadStripe('pk_test_ZJebC7QzVpc7lE0soX5Lodvp00qAczwIVv');

const useStyles = makeStyles(theme =>({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },

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
}));



export default function MainHeader({MenuTitle}) {
  // eslint-disable-next-line no-use-before-define
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
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
      <AppBar className='greenDigimenu' position="static">
        <Toolbar>
        <IconButton onClick={toggleDrawer('left', true)} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
            Cactus Club Admin Panel
        </Typography>
        <Button onClick={handleClickOpen} variant="contained" color="primary">Go Premium *</Button>
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

    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Premium Plan</DialogTitle>
        <DialogContent>
          <DialogContentText>
            The premium plan gives you a piece of mind. Upload new menu items as many as you want.
            To subscribe fill out this form and proceed to the payment.
          </DialogContentText>

          {/* Stripe Elements Go here */}
          <Elements stripe={stripePromise}>
            <MyCheckoutForm />
          </Elements>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
MainHeader.defaultProps = {
  MenuTitle: "Today's Special",
}
