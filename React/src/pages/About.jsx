import React from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import Main from '../components/Main'
import Container from '../components/Container'
import AboutItem from '../components/main/AboutItem'

function about() {
    return (
        <React.Fragment>
            <Header />
            <Main />
            <Container content={<AboutItem />}/>
            <Footer />
        </React.Fragment>
    );
}

export default about;