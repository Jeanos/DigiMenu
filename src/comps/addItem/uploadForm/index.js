
import React , {useState}from 'react';
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
import './index.scss';
// import '../../../css/app.scss';
// import TextField from '@material-ui/core/TextField';



function UploadForm() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [category, setCategory] = React.useState('');


  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const [values, setValues] = React.useState({
    price: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return (
    <div className="main">
      <form  noValidate autoComplete="off">
      
      <FormControl variant="outlined" className='input'>
        <InputLabel  id="demo-simple-select-outlined-label">
          Category
        </InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={category}
          onChange={handleChange}
          
        >
 
          <MenuItem value={10}>Main</MenuItem>
          <MenuItem value={20}>Appetizer</MenuItem>
          <MenuItem value={30}>Drinks</MenuItem>
          <MenuItem value={30}>Dessert</MenuItem>
        </Select>
      </FormControl> 
      <TextField className='input' id="filled-basic" label="Add Title" variant="outlined" />
      <TextField className='input' id="filled-multiline-static" label="Add Description" multiline rows="4" variant="outlined"
        />
          <FormControl fullWidth className='input' variant="outlined">
          <InputLabel htmlFor="outlined-adornment-amount">Price</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            value={values.price}
            onChange={handleChange('price')}
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            labelWidth={60}
          />
        </FormControl>

        <Button
        variant="contained"
        color="primary"
        size="large"
        className="input submit"
        startIcon={<SaveIcon />}
      >
        Submit
      </Button>
    </form>

      
</div>
  );
}

export default UploadForm;

