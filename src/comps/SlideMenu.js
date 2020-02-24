import React,{useState} from 'react';
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
                        <div> hello </div>
                    )
                })}
            </div>
        </div>
    )
}

SlidingMenu.defaultProps = {
    items:[{
        itemTitle:'Item 1'
    },{
        itemTitle:'Item 2'
    }],
    menuTitle:"Sliding Menu",
    children:null,
    dropdown:false
};

export default SlidingMenu;