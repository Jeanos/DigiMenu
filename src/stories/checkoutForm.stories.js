import React from 'react';
import CheckoutForm from '../comps/ChekoutForm/';
//import {action} from '@storybook/addon-actions';

export default {
  title: 'Checkout Form',
  component: CheckoutForm,
};

export const defaultCheckoutForm = () => {
  return <CheckoutForm />;
}