import React from 'react';
import './HomeItem.css'

function HomeItem() {
    return (
        <div className='homeContainer'>
            <div className='cardBox'>
                <div className='imgBox'>
                    <img
                        src="./src/templates/image/img1.jpg"
                        alt=""
                        className='cardImage'
                    />
                </div>
                <div className='textBox'>
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                    <p>4</p>
                </div>
            </div>
        </div>
    );
}

export default HomeItem;