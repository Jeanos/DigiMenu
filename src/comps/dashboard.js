import React , { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DashboardItem from '../comps/dashboardItem';
import '../css/main.css';
// import TextField from '@material-ui/core/TextField';


function Dashboard() {

  return (
    <div>
      <DashboardItem
      title = "Scans"
      number = "0"
      />

      <DashboardItem
      title = "Profit"
      number = "0"
      />

      <DashboardItem
      title = "Categories"
      number = "0"
      />

      <DashboardItem
      title = "Items"
      number = "0"
      />
    </div>
  );
}

export default Dashboard;