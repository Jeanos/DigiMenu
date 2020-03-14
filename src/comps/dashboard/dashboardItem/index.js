import React , { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { height } from 'dom-helpers';
import { white } from 'ansi-colors';
// import TextField from '@material-ui/core/TextField';


function DashboardItem({title,number, style, position}) {

  if (title === "Scans"){
    style = {
      ...style,
      backgroundColor: "#ee606b",
      borderColor: "red"
    }
  }

  if (title === "Profit"){
    style = {
      ...style,
      backgroundColor: "#fac746",
      borderColor: "red"
    }
  }

  if (title === "Categories"){
    style = {
      ...style,
      backgroundColor: "#61d09b",
      borderColor: "#49a74d"
    }
  }

  if (title === "Items"){
    style = {
      ...style,
      backgroundColor: "#ff9800",
      borderColor: "red"
    }
  }

  return (
    <div style = {style}>
      <div style = {style.title}>{title}</div>
      <div style={style.number}>{number}</div>
    </div>
  )
}

DashboardItem.defaultProps = {
  title: "Default Title",
  style:{
    backgroundColor: '#eee',
    borderRadius: "5px",
    border:'1px solid #ddd',
    display: 'flex',
    flexDirection: 'column',
    height: 100,
    width: '90%',
    margin: 40,
    color: "white",
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    title:{
      fontSize: 30,
    },
    number:{
      fontSize: 20,
    }
  },
  postion: null
}

export default DashboardItem; 