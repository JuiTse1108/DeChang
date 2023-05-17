import React from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import Main from '../components/Main'
import Container from '../components/Container'
import MenuItem from '../components/main/MenuItem'

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
