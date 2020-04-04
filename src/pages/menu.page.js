import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import FoodCard from '../comps/FoodCard';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import MainHeader from '../comps/menu/navbar/';

const useStyles = makeStyles(theme => ({
    root: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      marginTop: '10px',
      marginBottom: '10px'
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    iconButton: {
      padding: 10,
      display: 'flex',
    },
    tabs: {
        margin: '15px 0'
    },
    categoryContainer: {
        margin: '35px 0',
        display: 'flex',
        justifyContent: 'center'
    },
    bottomBorder:{
      bottomBorder: '1px solid #ddd',
    }
}));


var j = {};




function MenuPage() {

  const [value, setValue] = React.useState(0);
  const [dataFet, setDataFet] = useState([]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const classes = useStyles();
  const SearchBar = () => {
    return (
        <Paper component="form" style={{display: 'flex'}} className={classes.root, "ButtonResize"}>
           <IconButton type="submit"  className={classes.iconButton} aria-label="search">
            <SearchIcon />
          </IconButton>
          <InputBase
            className = {classes.input}
            placeholder = ""
            inputProps={{ 'aria-label': '' }}
          />
        </Paper>
    )
  };
  const FoodCategorySelect = () => {
    return (
        <div className={classes.categoryContainer}>
          <FormControl className={classes.formControl}>
              <Select native defaultValue="" input={<Input id="grouped-native-select" />}>
                  <option value={1}>Seafood</option>
                  <option value={2}>Option 2</option>
              </Select>
          </FormControl>
      </div>
    )
};
var fetchData = async () => {
  const response = await fetch('https://digimenu-dev.appspot.com/menu');
  j = await response.json();
  setDataFet(j);
  console.log(dataFet);
}
useEffect(() => {
  fetchData();
},[]);

console.log('Data Fetched ', dataFet);

  return (
  <div>
        <MainHeader/>
        <SearchBar />
        <Tabs value={value}
              indicatorColor="primary"
              textColor="primary"
              onChange={handleChange}
              aria-label="food Categories"
              centered
              className={classes.tabs}>
          <Tab label="Drink" />
          <Tab label="Appetizer" />
          <Tab label="Main" />
          <Tab label="Dessert" />
        </Tabs>

        <FoodCategorySelect />
      
        {
          dataFet.map((postDetails, i) => {
            return(
            
               <FoodCard key={i} food={postDetails}/>
            
            )}
          )
      }
</div>
  )}

export default MenuPage;