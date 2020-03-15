import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import imageUploader from '../comps/addItem/imageUploader';
import UploadForm from '../comps/addItem/uploadForm';
import MainHeader from '../comps/menu/navbar/';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
}));

export default function addMenuItem() {
  const classes = useStyles();
    return (
      <div className={classes.root}>
      <Paper variant="outlined" />
      <Paper variant="outlined" square />
    </div>
    );
  }