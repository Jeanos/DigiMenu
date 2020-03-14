import React from 'react';
import MenuPage from '../pages/menu.page';
//import {action} from '@storybook/addon-actions';

export default {
  title: 'Pages',
  component: MenuPage,
};

export const defaultMenuPage = () =>{
    return <MenuPage />;
}
  