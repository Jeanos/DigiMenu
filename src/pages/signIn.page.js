import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import SignIn from '../comps/signIn/';
// import MainHeader from '../comps/menu/navbar';

const CustomStyle = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: "column",
    '& > *': {
      margin: theme.spacing(1),
      width: '100%',
      height: theme.spacing(16),
    },
  },
}));

export default function AccountPage() {
  const classes = CustomStyle();
    return (
      <div>
        {/* <MainHeader MenuTitle="Account"/> */}
        <div className={classes.root}>
        <div>
        <SignIn />
        </div>
                 
          
    </div>
      </div>
     
    );
  }