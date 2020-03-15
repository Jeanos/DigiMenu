import React,{useState} from 'react';
import MenuItem from './MenuItem';
import './menu/index.scss';

//children is a react component setting
function SlidingMenu({items, menuTitle, children, slideright}){
    const [slide, setSlide] = useState(true);



    return(
        <div className = 'menuItems'
            onClick={()=>{
                setSlide(!slide);
            }}
            className="slidingmenu"
        > 
            {/* <h3>{menuTitle}</h3> */}
            {children}
            <div id="item_cont" className={slide?"slide":""}>
                {items.map((o,i)=>{
                    return (
                        <MenuItem {...o} />
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
    }],
    menuTitle:"Sliding Menu",
    children:null,
    slideright:false
};

export default SlidingMenu;