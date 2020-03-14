import React from 'react';
import UploadForm from '../comps/addItem/uploadForm/index';
//import {action} from '@storybook/addon-actions';

export default {
  title: 'UploadForm',
  component: UploadForm,
};

export const defaultMainUploadForm = () => {
  return <UploadForm />;
}