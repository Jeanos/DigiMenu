import React from 'react';
import {FaBeer} from 'react-icons/fa';
import {MdDashboard} from 'react-icons/md';
import {MdAddToPhotos} from 'react-icons/md';
import {MdRestaurantMenu} from 'react-icons/md';

function MenuItem({itemTitle, onClick, active}){
    var cn = "menu_item";
    var iconDefault = <FaBeer />;
    if(active){ 
        cn = "menu_item menu_item_active" 
    }

    if (itemTitle ==" Dashboard"){
        iconDefault = <MdDashboard  size={20}/>

    }

    if (itemTitle ==" Add Items"){
        iconDefault = <MdAddToPhotos  size={20}/>
    }

      if (itemTitle ==" View Menu"){
        iconDefault = <MdRestaurantMenu  size={20}/>
    }
    return(
        <div onClick={onClick} className={cn}>
            {iconDefault} 
            {itemTitle}
        </div>
    )
}

MenuItem.defaultProps = {
    itemTitle:"Default Item",
    onClick:()=>{},
    active:false
};

export default MenuItem;