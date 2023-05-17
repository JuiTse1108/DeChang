import React from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import Main from '../components/Main'
import Container from '../components/Container'
import LocationItem from '../components/main/LocationItem'

function Location() {
    return ( 
        <React.Fragment>
            <Header />
            <Main />
            <Container content={<LocationItem />} />
            <Footer />
        </React.Fragment> 
    );
}

export default Location;
