import React from 'react';
import './HomeItem.css'

function HomeItem() {
    return (
        <div className='homeContainer'>
            <div className='card'>
                <div className='cardImage'>
                    <img src="./src/templates/image/steak.jpg" alt="" />
                </div>
                <div className='cardInfo'>
                    <p className='cardTitle'>Discover</p>
                    <p className='cardTitle'>Our Story</p>
                    <p className='cardText'>Uncompromising Quality in Steak</p>
                    <p className='cardText'>Featuring the Finest USDA Prime Beef</p>
                    <p className='cardText'>Carefully Selected Australian Filet Mignon</p>
                    <p className='cardText'>Marinated with Our Exclusive Signature Sauce</p>
                    <p className='cardText'>An Unparalleled Flavor Experience</p>
                    <p className='cardText'>Let us reintroduce you to the deliciousness of steak.</p>
                </div>
            </div>
            <div className='card'>
                
            </div>
        </div>
    );
}

export default HomeItem;