import React from 'react';
import Header from '../../common/Header'
import Footer from '../../common/Footer'
import Container from '../../common/Container'
import AboutItem from './AboutItem'

function about() {
    return (
        <React.Fragment>
            <Header />
            <main className='about'></main>
            <Container content={<AboutItem />} />
            <Footer />
        </React.Fragment>
    );
}

export default about;