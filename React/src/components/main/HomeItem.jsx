import React from 'react';
import './HomeItem.css'

function HomeItem() {
    return (
        <div className='homeContainer'>
            <div className='aboutCard'>
                <div className='aboutImage'>
                    <img src="./src/templates/image/Steak.jpg" alt="" />
                </div>
                <div className='aboutInfo'>
                    <div className='aboutTitleBox'>
                        <p className='aboutTitle'>Discover</p>
                        <p>Our Story</p>
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
                    <div className='menuTitleBox1'>
                        <p className='menuTitle'>Discover</p>
                        <p>Our Menu</p>
                    </div>
                    <div className='menuTextBox'>
                        <p className='menuText'>Few things come close to the joy of steak and chips</p>
                        <p className='menuText'>cooked simply with tender, loving care</p>
                        <p className='menuText'>Rest assured that our chefs treat our Irish beef</p>
                        <p className='menuText'>with the respect it deserved</p>
                        <p className='menuText'>The open kitchen in many of </p>
                        <p className='menuText'>out steakhouse are testimony to that</p>
                    </div>
                    <div className='menuContent'>
                        <div className='menuImageBox'>
                            <img src="..\src\templates\image\Pan Seared Scallops.png" alt="" />
                        </div>
                        <div className='menuTextBox'>
                            <div className='menuTitle2'>Appetizer</div>
                            <p className='menuText'>a delectable appetizer featuring tender scallops </p>
                            <p className='menuText'>with a caramelized crust</p>
                            <p className='menuText'>seared in a hot skillet with butter or oil</p>
                            <p className='menuText'>sear that adds depth and flavor</p>
                        </div>
                    </div>
                    <div className='menuContent'>
                        <div className='menuTextBox2'>
                            <div className='menuTitle2'>Main Dish</div>
                            <p className='menuText'>combines tender, salmon with perfectly crisp</p>
                            <p className='menuText'>cooked with the skin side down in a hot pan</p>
                            <p className='menuText'>allowing the skin to become wonderful</p>
                            <p className='menuText'>while the flesh remains moist and flavorful</p>
                        </div>
                        <div className='menuImageBox'>
                            <img src="../src/templates/image/Crisoy Skin Salmon.png" alt="" />
                        </div>
                    </div>
                    <div className='menuContent'>
                        <div className='menuImageBox'>
                            <img src="..\src\templates\image\Sticky Toffee Pudding.png" alt="" />
                        </div>
                        <div className='menuTextBox'>
                            <div className='menuTitle2'>Dessert</div>
                            <p className='menuText'>This dessert is renowned</p>
                            <p className='menuText'>for its luscious caramel flavor and velvety texture</p>
                            <p className='menuText'>Accompanied by a scoop of decadent ice cream</p>
                            <p className='menuText'>it adds an extra layer of sweetness and creaminess</p>
                            <p className='menuText'>elevating the overall taste sensation</p>
                        </div>
                    </div>
                    <div className='menuContent'>
                        <div className='menuTextBox2'>
                            <div className='menuTitle2'>Cocktails</div>
                            <p className='menuText'>The cocktail unveils a symphony of flavors</p>
                            <p className='menuText'>Plymouth Dry Gin providing alcoholic base</p>
                            <p className='menuText'>green tea and lemongrass imparts</p>
                            <p className='menuText'>a refreshing aroma and subtle herbal notes</p>
                        </div>
                        <div className='menuImageBox'>
                            <img src="../src/templates/image/Notes From Gordon.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default HomeItem;