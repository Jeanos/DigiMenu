import React from 'react';
import MainHeader from '../comps/MainHeader';
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