import React from 'react';
import { MdDashboard } from 'react-icons/md';
import { MdNoteAdd } from 'react-icons/md';
import { MdViewDay } from 'react-icons/md';
import '../css/SliderStyle.css'


function MenuSlider (){
    return(
        <div id="MenuCont">
            <div id="Page"><MdDashboard /> Dashboard</div>
            <div id="Page"><MdNoteAdd /> Add Item</div>
            <div id="Page"><MdViewDay /> View Menu</div>
        </div>
        )
}

export default MenuSlider 