import 'date-fns';
import React , { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DashboardItem from '../../comps/dashboard/dashboardItem/index';
import '../../css/main.css';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
// import TextField from '@material-ui/core/TextField';


function Dashboard() {

  const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  return (
    <div>
      
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="Your Start Day By Day"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        
        </Grid>
        </MuiPickersUtilsProvider>
  
      <DashboardItem
      key='0'
      title = "Scans"
      number = "3302"
      />

      <DashboardItem
      key='1'
      title = "Profit"
      number = "$ 22,654"
      />

      <DashboardItem
      key='2'
      title = "Categories"
      number = "10"
      />

      <DashboardItem
      key='3'
      title = "Items"
      number = "45"
      />
    </div>
  );
}

export default Dashboard;