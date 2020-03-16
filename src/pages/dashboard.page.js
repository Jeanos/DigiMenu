import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import ImageUploader from '../comps/addItem/imageUploader';
import UploadForm from '../comps/addItem/uploadForm';
import MainHeader from '../comps/menu/navbar/';
import Dashboard from '../comps/dashboard/';

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

export default function DashboardPage() {
  const classes = CustomStyle();
    return (
      <div>
        <MainHeader MenuTitle="Dashboard"/>
        <div className={classes.root}>
        <div>
        <Dashboard />
        </div>
                 
          
    </div>
      </div>
     
    );
  }