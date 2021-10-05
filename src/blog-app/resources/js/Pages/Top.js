import React, { useState } from 'react';

import Header from './common/Header';
import Carousel from './top/Carousel';
import Item from './top/Item';
import Card from './top/Card';
import Footer from './common/Footer';


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
