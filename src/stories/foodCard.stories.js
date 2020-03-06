import React from 'react';
import FoodCard from '../comps/FoodCard';
//import {action} from '@storybook/addon-actions';

export default {
  title: 'FoodCard',
  component: FoodCard,
};

const foodItem = {
    name: 'Thai Red Curry + Prawns',
    image: 'https://ichef.bbci.co.uk/wwfeatures/live/624_351/images/live/p0/7c/j8/p07cj8zj.jpg',
    price: 22.99,
    description: 'Description'
};

export const defaultFoodCard = () => {
  return <FoodCard food={foodItem} />;
}