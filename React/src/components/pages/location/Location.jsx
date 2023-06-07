import React from 'react';
import Header from '../../common/Header'
import Footer from '../../common/Footer'
import Container from '../../common/Container'
import LocationItem from './LocationItem'

function Location() {
    return (
        <React.Fragment>
            <Header />
            <main className='location'></main>
            <Container content={<LocationItem />} />
            <Footer />
        </React.Fragment>
    );
}

export default Location;
