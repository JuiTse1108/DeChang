import React from 'react';
import Header from '../../common/Header'
import Footer from '../../common/Footer'
import Main from '../../common/Main'
import Container from '../../common/Container'
import MenuItem from './MenuItem'

function Menu() {
    return (
        <React.Fragment>
            <Header />
            <Main />
            <Container content={<MenuItem />} />
            <Footer />
        </React.Fragment>
    );
}

export default Menu;
