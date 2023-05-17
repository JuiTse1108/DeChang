import React from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import Main from '../components/Main'
import MainBanner from '../components/MainBanner'
import Container  from '../components/Container';
import HomeItem from '../components/main/HomeItem'

function Home() {
    return (
        <React.Fragment>
            <Header />
            <Main content={<MainBanner />}/>
            <Container content={<HomeItem />}/>
            <Footer />
        </React.Fragment>
    );
}

export default Home;