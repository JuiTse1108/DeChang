import React from 'react';
import Header from '../../common/Header'
import Footer from '../../common/Footer'
import Main from '../../common/Main'
import Container from '../../common/Container'
import AboutItem from './AboutItem'

function about() {
    return (
        <React.Fragment>
            <Header />
            <Main />
            <Container content={<AboutItem />} />
            <Footer />
        </React.Fragment>
    );
}

export default about;