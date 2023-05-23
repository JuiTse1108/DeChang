import React from 'react';
import './HomeItem.css'

function HomeItem() {
    return (
        <div className='homeContainer'>
            <div className='aboutCard'>
                <div className='aboutImage'>
                    <img src="./src/templates/image/steak.jpg" alt="" />
                </div>
                <div className='aboutInfo'>
                    <div className='aboutTitleBox'>
                        <p className='aboutTitle'>Discover</p>
                        <p className='aboutTitle'>Our Story</p>
                    </div>
                    <div className='aboutTextBox'>
                        <p className='aboutText'>Uncompromising Quality in Steak</p>
                        <p className='aboutText'>Featuring the Finest USDA Prime Beef</p>
                        <p className='aboutText'>Carefully Selected Australian Filet Mignon</p>
                        <p className='aboutText'>Marinated with Our Exclusive Signature Sauce</p>
                        <p className='aboutText'>An Unparalleled Flavor Experience</p>
                        <p className='aboutText'>Let us reintroduce you to the deliciousness of steak.</p>
                    </div>
                    <div className='aboutCardButton'>
                        <a href='/about'>More About Us</a>
                    </div>
                </div>
            </div>

            <div className='menuCard'>
                <div className='menuInfo'>
                    <div className='menuTitleBox'>
                        <p className='menuTitle'>Discover</p>
                        <p className='menuTitle'>Our Menu</p>
                    </div>
                    <div className='menuTextBox'>
                        <p className='menuText'>Few things come close to the joy of steak and chips</p>
                        <p className='menuText'>cooked simply with tender, loving care.</p>
                        <p className='menuText'>Rest assured that our chefs treat our Irish beef</p>
                        <p className='menuText'> with the respect it deserved.</p>
                        <p className='menuText'>The open kitchen in many of </p>
                        <p className='menuText'>out steakhouse are testimony to that</p>
                    </div>
                </div>
                <div className='menuCard'>
                    <div className='menuMainImage'>
                        <img src="../src/templates/image/Lobster_Risotto.png" alt="" />
                    </div>
                    <div className='menuInfo'>
                        <div className='menuTitie'></div>
                        <div className='menuTextBox'>
                            <p className='menuText'>this was delicious as the truffle risotto</p>
                            <p className='menuText'> was perfectly executed where the aborio rice </p>
                            <p className='menuText'>was tender yet still retaining an appealing bite</p>
                        </div>
                    </div>
                </div>
        </div>

        </div >
    );
}

export default HomeItem;