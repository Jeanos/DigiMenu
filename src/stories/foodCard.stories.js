import React from 'react';
import FoodCard from '../comps/FoodCard';
//import {action} from '@storybook/addon-actions';
import Paper from '@material-ui/core/Paper';



export default {
  title: 'FoodCard',
  component: FoodCard,
};

const ThaiRedCury = {
    name: 'Thai Red Curry + Prawns',
    image: 'https://ichef.bbci.co.uk/wwfeatures/live/624_351/images/live/p0/7c/j8/p07cj8zj.jpg',
    price: 22.99,
    description: 'Thai coconut red Curry with prawns is easy, quick, and full of flavour! On your table in less than 25 minutes, dinner has never been so easy!'
};

const Hummus = {
  name: 'Hummus',
  image: 'https://ichef.bbci.co.uk/wwfeatures/live/624_351/images/live/p0/7c/j8/p07cj8zj.jpg',
  price: 14.59,
  description: 'Hummus, quick, and full of flavour! On your table in less than 25 minutes, dinner has never been so easy!'
};

export const defaultFoodCard = () => {
  return <Paper><FoodCard variant="outlined" food={ThaiRedCury} /></Paper>;
}


export const defaultHummus = () => {
  return <Paper><FoodCard variant="outlined" food={Hummus} /></Paper>;
}