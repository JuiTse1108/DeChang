import React, { useState } from 'react';
import './menuItem.css'

function MenuItem() {
    const [activeTab, setActiveTab] = useState('tabMain')

    function handleTabClick(event) {
        setActiveTab(event.target.getAttribute('value'))
    }

    function contentRender() {
        switch (activeTab) {
            case 'tabMain':
                return <MainCourse />;
            case 'tabDessert':
                return <Dessert />;
            case 'tabCocktails':
                return <Cocktails />
            default:
                return null;
        }
    }

    function MainCourse() {
        return (
            <React.Fragment>
                <div className='mainBox'>
                    <div className='mainTitle'>Chilled Seafood</div>
                    <div className='mainItem'>
                        <p className='mainName'>OYSTERS ON THE HALF SHELL*</p>
                        <p className='mainPrice'>half dozen $27.95 | full dozen $54.95</p>
                        <p className='mainContent'>chef's daily selection, hk mignonette, gin cocktail sauce</p>
                    </div>
                    <div className='mainItem'>
                        <p className='mainName'>SHRIMP COCKTAIL</p>
                        <p className='mainPrice'>$ 22.95</p>
                        <p className='mainContent'>gin cocktail sauce</p>
                    </div>
                </div>
                <div className='mainBox'>
                    <div className='mainTitle'>APPETIZERS</div>
                    <div className='mainItem'>
                        <p className='mainName'>SEARED FOIE GRAS*</p>
                        <p className='mainPrice'>$ 30.95</p>
                        <p className='mainContent'>stewed cherries, scottish shortbread, candied marcona almonds</p>
                    </div>
                    <div className='mainItem'>
                        <p className='mainName'>PAN SEARED SCALLOPS*</p>
                        <p className='mainPrice'>$ 27.95</p>
                        <p className='mainContent'>english pea puree, pickled fennel, sherry braised bacon lardons</p>
                    </div>
                    <div className='mainItem'>
                        <p className='mainName'>LOBSTER RISOTTO*</p>
                        <p className='mainPrice'>$ 31.95</p>
                        <p className='mainContent'>butter poached lobster tail, truffle risotto, crispy onions</p>
                    </div>
                    <div className='mainItem'>
                        <p className='mainName'>STEAK TARTARE*</p>
                        <p className='mainPrice'>$ 26.95</p>
                        <p className='mainContent'>piedmontese beef, dijon mustard aioli, black truffle caviar, sous vide egg yolk</p>
                    </div>
                </div>
                <div className='mainBox'>
                    <div className='mainTitle'>SALAD/SOUP</div>
                    <div className='mainItem'>
                        <p className='mainName'>GOLDEN BEET SALAD</p>
                        <p className='mainPrice'>$ 22.95</p>
                        <p className='mainContent'>goat cheese, pistachios, citrus, white balsamic vinaigrette</p>
                    </div>
                    <div className='mainItem'>
                        <p className='mainName'>QUINOA SALAD</p>
                        <p className='mainPrice'>$ 19.95</p>
                        <p className='mainContent'>honeycrisp apples, dried currants & cranberries, candied pecans, ricotta salata</p>
                    </div>
                    <div className='mainItem'>
                        <p className='mainName'>CAESAR SALAD</p>
                        <p className='mainPrice'>$ 19.95</p>
                        <p className='mainNote'>w/ grilled chicken - $ 30.95  |  w/ chilled shrimp - $ 29.95</p>
                        <p className='mainContent'>parmesan cheese frico, garlic croutons, lemon zest</p>
                    </div>
                </div>
                <div className='mainHighlight'>
                    <div className='mainImageBox'></div>
                    <div className='mainImageInfo'>
                        <p className='highlight'>HighLight</p>
                        <p className='mainImageName'>BEEF WELLINGTON*</p>
                        <p className='mainImageContent'>potato puree, glazed root vegetables, red wine demi-glace</p>
                        <p className='mainImagePrice'>$ 72.95</p>
                    </div>
                </div>
                <div className='mainBox'>
                    <div className='mainTitle'>ENTREES</div>
                    <div className='mainItem'>
                        <p className='mainName'>BEEF WELLINGTON*</p>
                        <p className='mainPrice'>$ 72.95</p>
                        <p className='mainContent'>potato puree, glazed root vegetables, red wine demi-glace</p>
                    </div>
                    <div className='mainItem'>
                        <p className='mainName'>CRISPY SKIN SALMON*</p>
                        <p className='mainPrice'>$ 40.95</p>
                        <p className='mainContent'>beluga lentils, shaved fennel salad, citrus herb beurre blanc</p>
                    </div>
                    <div className='mainItem'>
                        <p className='mainName'>FILET MIGNON*</p>
                        <p className='mainPrice'>$ 60.95</p>
                        <p className='mainContent'>8 ounces santa carota beef, roasted tomatoes on the vine, bearnaise sauce</p>
                    </div>
                    <div className='mainItem'>
                        <p className='mainName'>DRY AGED NEW YORK STRIP*</p>
                        <p className='mainPrice'>$ 78.95</p>
                        <p className='mainContent'>14 ounces, shishito peppers, red wine demi-glace</p>
                    </div>
                    <div className='mainItem'>
                        <p className='mainName'>BRAISED SHORT RIB</p>
                        <p className='mainPrice'>$ 52.95</p>
                        <p className='mainContent'>yukon potato cake, bloomsdale spinach, crispy fried onion rings, beef jus</p>
                    </div>
                    <div className='mainItem'>
                        <p className='mainName'>JIDORI CHICKEN SCALLOPINI</p>
                        <p className='mainPrice'>$ 39.95</p>
                        <p className='mainContent'>roasted peewee potatoes, artichokes, lacinato kale, truffle chicken jus</p>
                    </div>
                </div>
                <div className='mainBox'>
                    <div className='mainTitle'>SIDES</div>
                    <div className='mainItem'>
                        <p className='mainName'>BAKED MACARONI & CHEESE</p>
                        <p className='mainPrice'>$ 16.95</p>
                        <p className='mainContent'>smoked gouda, crispy prosciutto</p>
                    </div>
                    <div className='mainItem'>
                        <p className='mainName'>BRUSSEL SPROUTS</p>
                        <p className='mainPrice'>$ 16.95</p>
                        <p className='mainContent'>maple shoyu glaze, pickled fresno chile, with glazed bacon lardon</p>
                    </div>
                    <div className='mainItem'>
                        <p className='mainName'>WILD MUSHROOMS</p>
                        <p className='mainPrice'>$ 16.95</p>
                        <p className='mainContent'>shallot-white wine glaze</p>
                    </div>
                    <div className='mainItem'>
                        <p className='mainName'>POTATO PUREE</p>
                        <p className='mainPrice'>$ 16.95</p>
                        <p className='mainContent'>creme fraiche, chives</p>
                    </div>
                </div>
            </React.Fragment>
        )
    }

    function Dessert() {
        return (
            <React.Fragment>
                <div className='dessertBox'>
                    <div className='dessertTitle'>Dessert</div>
                    <div className='dessertItem'>
                        <p className='dessertName'>STICKY TOFFEE PUDDING</p>
                        <p className='dessertPrice'>$ 15.95</p>
                        <p className='dessertContent'>dulce de leche ice cream</p>
                    </div>
                    <div className='dessertItem'>
                        <p className='dessertName'>PEAR CHEESECAKE</p>
                        <p className='dessertPrice'>$ 15.95</p>
                        <p className='dessertContent'>pear cheesecake with speculoos cookie crust, vanilla ice cream and candied walnuts</p>
                    </div>
                    <div className='dessertItem'>
                        <p className='dessertName'>DEATH BY CHOCOLATE</p>
                        <p className='dessertPrice'>$ 15.95</p>
                        <p className='dessertContent'>rich chocolate fondant cake, chocolate mousse crispy pearls, brownie and cookies & cream ice cream</p>
                    </div>
                    <div className='dessertItem'>
                        <p className='dessertName'>COCONUT 3-WAYS</p>
                        <p className='dessertPrice'>$ 15.95</p>
                        <p className='dessertContent'>coconut sorbet, passion fruit caramel, coconut cake</p>
                    </div>
                    <div className='dessertHighlight'>
                        <div className='dessertImageBox'></div>
                        <div className='dessertImageInfo'>
                            <p className='highlight'>HighLight</p>
                            <p className='dessertImageName'>STICKY TOFFEE PUDDING</p>
                            <p className='dessertImageContent'>dulce de leche ice cream</p>
                            <p className='dessertImagePrice'>$ 15.95</p>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }

    function Cocktails() {
        return (
            <React.Fragment>
                <div className='cocktailsBox'>
                    <div className='cocktailsTitle'>SPECIALTY COCKTAILS</div>
                    <div className='cocktailsItem'>
                        <p className='cocktailsName'>LA DIABLA</p>
                        <p className='cocktailsPrice'>$ 21.95</p>
                        <p className='cocktailsContent'>el cristiano reposado, lime juice, aperol, orgeat, pamplemousse, egg white, smoked paprika, salt</p>
                    </div>
                    <div className='cocktailsItem'>
                        <p className='cocktailsName'>MEET YOUR MAKER</p>
                        <p className='cocktailsPrice'>$ 20.95</p>
                        <p className='cocktailsContent'>maker’s mark bourbon, domaine de canton, mint, apple, strawberry, cinnamon</p>
                    </div>
                    <div className='cocktailsItem'>
                        <p className='cocktailsName'>NOTES FROM GORDON</p>
                        <p className='cocktailsPrice'>$ 20.95</p>
                        <p className='cocktailsContent'>plymouth dry gin, green tea, lemongrass, peach, lemon, message from Gordon</p>
                    </div>
                    <div className='cocktailsItem'>
                        <p className='cocktailsName'>FEAR & LOATHING</p>
                        <p className='cocktailsPrice'>$ 20.95</p>
                        <p className='cocktailsContent'>el silencio mezcal, luxardo, blood orange juice, pineapple, lemon</p>
                    </div>
                    <div className='cocktailsItem'>
                        <p className='cocktailsName'>FORBIDDEN FRUIT</p>
                        <p className='cocktailsPrice'>$ 20.95</p>
                        <p className='cocktailsContent'>absolut pear vodka, raspberry syrup, lemon juice, italicus bergamotto, egg white</p>
                    </div>
                    <div className='cocktailsItem'>
                        <p className='cocktailsName'>THE DUCHESS</p>
                        <p className='cocktailsPrice'>$ 20.95</p>
                        <p className='cocktailsContent'>empress 1908 gin, fever-tree elderflower tonic, juniper, rosemary</p>
                    </div>
                    <div className='cocktailsItem'>
                        <p className='cocktailsName'>SMOKE ON THE BLVD</p>
                        <p className='cocktailsPrice'>$ 21.95</p>
                        <p className='cocktailsContent'>woodford rye, aperol, amaro averna, sweet vermouth, smoked with cherry wood</p>
                    </div>
                    <div className='cocktailsItem'>
                        <p className='cocktailsName'>FRENCH FIFTY</p>
                        <p className='cocktailsPrice'>$ 27.95</p>
                        <p className='cocktailsContent'>branson vs phantom cognac, grand marnier, simple syrup, lime, champagne, cinnamon</p>
                    </div>
                    <div className='cocktailsHighlight'>
                        <div className='cocktailsImageBox'></div>
                        <div className='cocktailsImageInfo'>
                            <p className='highlight'>HighLight</p>
                            <p className='cocktailsImageName'>SMOKE ON THE BLVD</p>
                            <p className='cocktailsImageContent'>woodford rye, aperol, amaro averna, sweet vermouth, smoked with cherry wood</p>
                            <p className='cocktailsImagePrice'>$ 21.95</p>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }

    return (
        <div className='menuContainer'>
            <div className='title'>Our Menu</div>
            <div className='tabMenu'>
                <div className='menuBox'>
                    <span
                        className={activeTab === 'tabMain' ? 'tabMain active' : 'tabMain'}
                        onClick={handleTabClick}
                        value='tabMain'
                    >Main
                    </span>
                </div>
                <div className='menuBox'>
                    <span
                        className={activeTab === 'tabDessert' ? 'tabDessert active' : 'tabDessert'}
                        onClick={handleTabClick}
                        value='tabDessert'
                    >Dessert
                    </span>
                </div>
                <div className='menuBox'>
                    <span
                        className={activeTab === 'tabCocktails' ? 'tabCocktails active' : 'tabCocktails'}
                        onClick={handleTabClick}
                        value='tabCocktails'
                    >Cocktails
                    </span>
                </div>
            </div>
            <React.Fragment>
                {contentRender()}
                <div className='noteBox'>
                    <p className='menuNote'>*Consuming raw or undercooked meat, poultry, seafood or eggs may increase your risk of food borne illness, especially certain medical conditions and pregnancies</p>
                </div>
            </React.Fragment>
        </div>
    );
}

export default MenuItem;