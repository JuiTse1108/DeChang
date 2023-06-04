import React from 'react';
import Header from '../../common/Header'
import Footer from '../../common/Footer'
import Main from '../../common/Main'
import Container from '../../common/Container'
import ServiceItem from './ServiceItem';

function Service() {
    return (
        <React.Fragment>
            <Header />
            <Main />
            <Container content={<ServiceItem />} />
            <Footer />
        </React.Fragment>
    );
}

export default Service;