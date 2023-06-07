import React from 'react';
import Header from '../../common/Header'
import Footer from '../../common/Footer'
import Container from '../../common/Container'
import ServiceItem from './ServiceItem';

function Service() {
    return (
        <React.Fragment>
            <Header />
            <main className='service'></main>
            <Container content={<ServiceItem />} />
            <Footer />
        </React.Fragment>
    );
}

export default Service;