import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import ImageUploaderComp from '../comps/addItem/imageUploader';
import UploadForm from '../comps/addItem/uploadForm';
import MainHeader from '../comps/menu/navbar/';

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

export default function AddMenuItem() {
  const classes = CustomStyle();
    return (
      <div >
        <MainHeader MenuTitle="Add a new Item on your menu"/>
        <div className={classes.root}>
          <div>
            <ImageUploaderComp />
            <UploadForm />
          </div>
        </div>
      </div>
     
    );
  }