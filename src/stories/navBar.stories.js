import React from 'react';
import MainHeader from '../comps/menu/navbar/index';
//import {action} from '@storybook/addon-actions';

export default {
  title: 'MainHeader',
  component: MainHeader,
};

export const defaultMainHeader = () => {
  return <MainHeader />;
}

export const defaultMainHeaderWithTitle = () => {
  return <MainHeader MenuTitle="Add Items"/>;
}

export const defaultMainHeaderWithRestaurantName = () => {
  return <MainHeader MenuTitle="Cactus Club"/>;
}