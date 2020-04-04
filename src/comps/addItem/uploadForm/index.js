
import React , {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputAdornment from '@material-ui/core/InputAdornment';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';
import Select from '@material-ui/core/Select';
import { Input } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import axios from 'axios';

import './index.scss';

function UploadForm() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [newMenuItem, setNewMenuItem] = useState({ 
      image: 'https://www.thespruceeats.com/thmb/jdkv96xnZmQNcAJx_ISmvk-OXdQ=/4494x2528/smart/filters:no_upscale()/hummus-with-sesame-oil-2355627-hero-01-5c3c1faa46e0fb00010401a6.jpg',
      category: '',
      name: '',
      description: '',
      price: ''});
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClickClose = () => {
    setOpen(false);
  };
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


 
 console.log(newMenuItem);

  return (
    <div className="centerIt">
        <div className="inputSize">
      <form  noValidate autoComplete="off">
      <FormControl variant="outlined" className='input'>
        <InputLabel  id="demo-simple-select-outlined-label">
          Category
        </InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          onChange={e => setNewMenuItem({ ...newMenuItem, category : e.target.value})}
          value={newMenuItem.category}
        >
          <MenuItem value={'Main'}>Main</MenuItem>
          <MenuItem value={'Appetizer'}>Appetizer</MenuItem>
          <MenuItem value={'Drinks'}>Drinks</MenuItem>
          <MenuItem value={'Dessert'}>Dessert</MenuItem>
        </Select>
      </FormControl> 
      <TextField className='input' id="filled-basic" label="Add Title" variant="outlined"  onChange={e => setNewMenuItem({...newMenuItem, name : e.target.value})}/>
      <TextField className='input' id="filled-multiline-static" label="Add Description" multiline rows="4" variant="outlined" onChange={e => setNewMenuItem({...newMenuItem, description : e.target.value})}
        />
          <FormControl fullWidth className='input' variant="outlined">
          <InputLabel htmlFor="outlined-adornment-amount">Price</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            onChange={e => setNewMenuItem({ ...newMenuItem, price : e.target.value})}
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            labelWidth={60}
          />
        </FormControl>

        <Button
        variant="contained"
        size="large"
        className="input submit orangeDigimenu"
        onClick={addNewItems}
        startIcon={<SaveIcon />}
      >
        Submit
      </Button>
    </form>

      
    </div>
    <Dialog
        open={open}
        onClose={handleClickClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Confirmation"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            A new menu item will be added to your Menu. Click "confirm" to Update your restaurant menu or "Cancel" to dismniss this action.  
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleClickClose} >
            Cancel
          </Button>
          <Link to='/ViewMenu'>
          <Button variant="contained" onClick={handleClickClose} color="primary" autoFocus>
            Confirm
          </Button>
          </Link>
        </DialogActions>
      </Dialog>
  </div>


  );


function addNewItems(){
  axios.post('https://digimenu-dev.appspot.com/menu', newMenuItem)
  .then((response) => {
    console.log(response);
  }, (error) => {
    console.log(error);
  });
  
}

}

export default UploadForm;

