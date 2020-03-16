import React from 'react';
import MenuPage from '../pages/menu.page';
import AddMenuItem from '../pages/addMenu.page';
import DashboardPage from '../pages/dashboard.page';
//import {action} from '@storybook/addon-actions';

export default {
  title: 'Pages',
  component: MenuPage,
};

export const defaultMenuPage = () =>{
    return <MenuPage />;
}

export const defaultAddMenuPage = () =>{
  return <AddMenuItem />;
}
export const defaultDashboardPage = () =>{
  return <DashboardPage />;
}
  