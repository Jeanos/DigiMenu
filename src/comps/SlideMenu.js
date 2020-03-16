import React,{useState} from 'react';
import MenuItemDigi from './MenuItem';
import MenuItem from '@material-ui/core/MenuItem';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import DashboardPage from '../pages/dashboard.page';
import AddMenuItem from '../pages/addMenu.page';
import MenuPage from '../pages/menu.page';



//children is a react component setting
function SlidingMenu({items, menuTitle, children, slideright}){
    const [slide, setSlide] = useState(true);



    return(
        <div className = 'menuItems'
            onClick={()=>{
                setSlide(!slide);
            }}
            // eslint-disable-next-line react/jsx-no-duplicate-props
            className="slidingmenu"
        > 
            {/* <h3>{menuTitle}</h3> */}
            {children}
            <div id="item_cont" className={slide?"slide":""}>
                {items.map((o,i)=>{
                    return (
                        <MenuItem>
                            <MenuItemDigi {...o} />
                        </MenuItem>
                        
                    )
                })}
            </div>
 
        </div>
    )
}

SlidingMenu.defaultProps = {
    items:[{
        key: '1',
        itemTitle:' Dashboard'
    },{
        key: '2',
        itemTitle:' Add Items'
    },{
        key: '3',
        itemTitle:' View Menu'
    
    // },{
    //     key: '4',
    //     itemTitle:' Account'
    }],
   
    menuTitle:"Sliding Menu",
    children:null,
    slideright:false
};

export default SlidingMenu;