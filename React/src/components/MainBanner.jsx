import React from 'react'
import './MainBanner.css'

function MainBanner() {
    return (
        <div className='bannerBox'>
            <div className='banner'>
                <p className='bannerItem'>A</p>
                <p className='bannerItem'>Premium</p>
                <p className='bannerItem'>And</p>
                <p className='bannerItem'>Authentic</p>
                <p className='bannerItem'>SteakHouse</p>
                <a
                    href="./location"
                    className="bannerButton"
                >Book A Table
                </a>
            </div>
        </div>
    );
}

export default MainBanner;