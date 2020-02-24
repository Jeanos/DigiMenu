import React , { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';



var Airtable = require('airtable');
const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '100%',
    },
  },
  appDiv: {
    display: 'flex',
    flex: 'wrap',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    },
    card: {
      minWidth: '100%',
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    
}));

function MemuItemDisplay() {
  const classes = useStyles();
  // const [name, setName] = useState('');
  // const [description, setDescription] = useState('');
  const [menuList, setMenuList] = useState([]);
  var base = new Airtable({apiKey: 'keyj7vjRuZK7FXWN2'}).base('appUH5QpkHD34IaBw');
  retrieveMenus();

  

  function deleteItems(delId){

    base('Menu').destroy(delId, function(err, deletedRecords) {
      if (err) {
        console.error(err);
        return;
      }
      console.log('Deleted', deletedRecords.length, 'records');
    });
  }

  function retrieveMenus(){
  
        base('Menus').select({
          view: 'Grid view'}).eachPage(function page(records, fetchNextPage) {
          setMenuList(records);
      }, function done(err) {
          if (err) { console.error(err); return; }
      });
  }



  return (
     <div className={classes.appDiv} >
        <p>Menu Items</p>

        <div style={{height:'100%', display:'flex',flexDirection:'column'}}>
   
         {menuList.map((item, key)=>(
            <div
              style = {{ padding:'10px', borderStyle:'solid', borderWidth:1, borderColor:'#ddd', margin:10}}
              key={key}>
                <p>{item.get('MenuName')} </p>
                <p>{item.get('Price')} </p>
                <p>{item.get('Description')} </p>
                <img src={item.get('Attachments')[0].url} style={{width:'100%'}} alt="Logo" />
   
              </div>)
         )}
           
        </div>
      </div>

  
  
  );
}

export default MemuItemDisplay;