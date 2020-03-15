import React , {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import CheeseburgerMenu from 'cheeseburger-menu';
import SlidingMenu from '../../SlideMenu';


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




export default function MainHeader({MenuTitle}) {
  const [slide, setSlide] = useState(false); 
  const classes = useStyles();

  function action(){
    if (slide === false){
      console.log('true');
    }
  }
  

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
        <IconButton onClick={() => action()} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
          <Typography variant="h6" className={classes.title}>
            {MenuTitle}
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <SlidingMenu />
    </div>
  );

  
 
}
MainHeader.defaultProps = {
  MenuTitle: 'Defaut Title',
}
