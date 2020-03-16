import React from 'react';
import { FaBeer } from 'react-icons/fa';
import { MdAccountCircle } from "react-icons/md";
import '../../css/app.scss';
import StarRatings from 'react-star-ratings';


function Review (){
    return(
        <div id="main">
            <hr/>
        <div id="name">
          <MdAccountCircle/>  
                <text id="first">David Wand</text>
        </div>
        <StarRatings
          starRatedColor="blue"
          numberOfStars={5}
          name='rating'
          starDimension="15px"
        starSpacing="2px"
        /> <text id="startxt">A week ago...</text>
        <div id="desc">
            <text>The Food Was Amazing, it was filled well and the prawns where fresh</text>
        </div>
        </div>
        
    )
}

export default Review;