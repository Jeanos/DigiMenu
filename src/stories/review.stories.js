import React, { Component } from 'react';
import Review from '../comps/Review';

export default {
    title:"Review",
    component: Review,
};

export const reviews = () =>{
    return <Review />;
}