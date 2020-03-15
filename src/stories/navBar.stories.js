import React from 'react';
import MainHeader from '../comps/menu/navbar/';
import SlidingMenu from '../comps/SlideMenu';
//import {action} from '@storybook/addon-actions';

export default {
  title: 'MainHeader',
  component: MainHeader,
};

export const defaultMainHeader = () => {
  return <MainHeader />;
}

export const defaultMainHeaderWithTitle = () => {
  return <MainHeader MenuTitle="Settings"/>;
}

export const SlidingMenu1 = () =>{
  return <SlidingMenu
  />;
}
