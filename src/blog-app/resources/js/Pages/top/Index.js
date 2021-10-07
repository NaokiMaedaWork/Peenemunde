import React, { useState } from 'react';

import Header from '../common/Header';
import Carousel from './Carousel';
import Item from './Item';
import Card from './Card';
import Footer from '../common/Footer';


const Top = ({ articles }) => {
    return (
        <div>
            <Header />
            <Carousel />
            <Item articles={articles}/>
            <Card />
            <Footer />
        </div>
    );
}

export default Top;
