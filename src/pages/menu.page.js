import React from 'react';
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

const foodItem = {
    name: 'Thai Red Curry + Prawns',
    image: 'https://ichef.bbci.co.uk/wwfeatures/live/624_351/images/live/p0/7c/j8/p07cj8zj.jpg',
    price: 22.99,
    description: 'Thai coconut red Curry with prawns is easy, quick, and full of flavour! On your table in less than 25 minutes, dinner has never been so easy!'
};

const Hummus = {
  name: 'Hummus',
  image: 'https://www.cookingclassy.com/wp-content/uploads/2014/03/hummus-31.jpg',
  price: 14.59,
  description: 'Hummus, quick, and full of flavour! On your table in less than 25 minutes, dinner has never been so easy!'
};

export default function MenuPage() {
  const [value, setValue] = React.useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const classes = useStyles();

  const SearchBar = () => {
    return (
        <Paper component="form" className={classes.root, "ButtonResize"}>
           <IconButton type="submit"  className={classes.iconButton} aria-label="search">
            <SearchIcon />
          </IconButton>
          <InputBase
            className={classes.input}
            placeholder=""
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
        <FoodCard className="bottomBorder" food={foodItem}/>
        <FoodCard food={Hummus}/>
    </div>
  )
}