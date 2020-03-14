import React from 'react';
import {FaBeer} from 'react-icons/fa';

function MenuItem({itemTitle, onClick, active}){
    var cn = "menu_item";
    if(active){ 
        cn = "menu_item menu_item_active" 
    }
    return(
        <div onClick={onClick} className={cn}>
            <FaBeer /> 
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