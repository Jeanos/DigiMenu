import React , { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DashboardItem from '../../comps/dashboard/dashboardItem/index';
import '../../css/main.css';
// import TextField from '@material-ui/core/TextField';


function Dashboard() {

  return (
    <div>
      <DashboardItem
      key='0'
      title = "Scans"
      number = "0"
      />

      <DashboardItem
      key='1'
      title = "Profit"
      number = "0"
      />

      <DashboardItem
      key='2'
      title = "Categories"
      number = "0"
      />

      <DashboardItem
      key='3'
      title = "Items"
      number = "0"
      />
    </div>
  );
}

export default Dashboard;