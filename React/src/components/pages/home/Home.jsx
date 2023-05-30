import React from 'react';
import Header from '../../common/Header'
import Footer from '../../common/Footer'
import Main from '../../common/Main'
import Container from '../../common/Container'
import MainBanner from '../../common/MainBanner'
import HomeItem from './HomeItem'

function Home() {
    return (
        <React.Fragment>
            <Header />
            <Main content={<MainBanner />} />
            <Container content={<HomeItem />} />
            <Footer />
        </React.Fragment>
    );
}

export default Home;