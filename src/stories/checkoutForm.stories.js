import React from 'react';
import MyCheckoutForm from '../comps/ChekoutForm';
//import {action} from '@storybook/addon-actions';

export default {
  title: 'Checkout Form',
  component: MyCheckoutForm,
};

export const defaultCheckoutForm = () => {
  return <MyCheckoutForm />;
}