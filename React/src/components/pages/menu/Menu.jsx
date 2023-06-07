import React from 'react';
import Header from '../../common/Header'
import Footer from '../../common/Footer'
import Container from '../../common/Container'
import MenuItem from './MenuItem'

function Menu() {
    return (
        <React.Fragment>
            <Header />
            <main className='menu'></main>
            <Container content={<MenuItem />} />
            <Footer />
        </React.Fragment>
    );
}

export default Menu;
