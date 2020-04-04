import React ,{useState, useEffect} from 'react';



var getData = async() =>{
  const response = await fetch("https://digimenu-dev.appspot.com/menu");
  const data = await response.json();
  console.log(data);
}

useEffect(()=>{
    getData();
})
function fetchData() {



}

export default fetchData;