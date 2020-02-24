import React,{useState} from 'react';
import MenuItem from './MenuItem';
// import './menu.scss';

//children is a react component setting
function SlidingMenu({items, menuTitle, children, slideright}){
    const [slide, setSlide] = useState(true);


    return(
        <div 
            onClick={()=>{
                setSlide(!slide);
            }} 
            className="slidingmenu"
        > 
            <h3>{menuTitle}</h3>
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
        itemTitle:'Dashboard'
    },{
        itemTitle:'Add Items'
    },{
        itemTitle:'View Menu'
    }],
    menuTitle:"Sliding Menu",
    children:null,
    slideright:false
};

export default SlidingMenu;