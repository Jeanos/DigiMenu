import React from 'react';
import {FaBeer} from 'react-icons/fa';
import {MdDashboard} from 'react-icons/md';
import {MdAddToPhotos} from 'react-icons/md';
import {MdRestaurantMenu} from 'react-icons/md';
import {MdAccountCircle} from 'react-icons/md';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import DashboardPage from '../pages/dashboard.page';
import AddMenuItem from '../pages/addMenu.page';
import MenuPage from '../pages/menu.page';
import '../css/app.scss';

function MenuItemDigi({itemTitle, onClick, active}){
    var cn = "menu_item";
    var goPath = '';
    var iconDefault = <FaBeer />;
 

    if (itemTitle ==" Dashboard"){
        iconDefault = <MdDashboard  size={20}/>
        goPath = '/';

    }

    if (itemTitle ==" Add Items"){
        iconDefault = <MdAddToPhotos  size={20}/>
        goPath = "/addMenu";
    }

      if (itemTitle ==" View Menu"){
        iconDefault = <MdRestaurantMenu  size={20}/>
        goPath = "/viewMenu";
    }
    if (itemTitle ==" Account"){
        iconDefault = <MdAccountCircle  size={20}/>
        goPath = "/account";
    }
    return(
        
             <Link to={goPath}>
            <div>
                <div  className={cn}>                
                    {iconDefault} 
                    {itemTitle}
                </div>   
                    
            </div>
            </Link>
       
           
       
        
    )
}

MenuItemDigi.defaultProps = {
    itemTitle:"Default Item",
    onClick:()=>{},
    active:false
};

export default MenuItemDigi;