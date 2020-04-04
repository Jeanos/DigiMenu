import React , { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { height } from 'dom-helpers';
import { white } from 'ansi-colors';
// import TextField from '@material-ui/core/TextField';


function DashboardItem({title,number, style, position, CenterIt}) {

  if (title === "Scans"){
    style = {
      ...style,
      backgroundColor: "#2F3436",
      borderColor: "#2F3436"
    }
  }

  if (title === "Profit"){
    style = {
      ...style,
      backgroundColor: "#657888",
      borderColor: "#2F3436"
    }
  }

  if (title === "Categories"){
    style = {
      ...style,
      backgroundColor: "#9FA7AB",
      borderColor: "#2F3436"
    }
  }

  if (title === "Items"){
    style = {
      ...style,
      backgroundColor: "#604752",
      borderColor: "#2F3436"
    }
  }

  return (
    // eslint-disable-next-line no-undef
    <div style = {CenterIt}>
       <div style = {style}>
        <div style = {style.title}>{title}</div>
        <div style={style.number}>{number}</div>
      </div>
    </div>
   
  )
}

DashboardItem.defaultProps = {
  title: "Default Title",
  CenterIt:{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  style:{
    backgroundColor: '#eee',
    borderRadius: "5px",
    border:'1px solid #ddd',
   
    height: 100,
    width:'80%',
    margin: 10,
    color: "white",
    padding: 20,
    
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