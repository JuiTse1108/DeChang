import React from 'react';
import Header from '../../common/Header'
import Footer from '../../common/Footer'
import Container from '../../common/Container'
import MainBanner from '../../common/MainBanner'
import HomeItem from './HomeItem'

function Home() {
    return (
        <React.Fragment>
            <Header />
            <main className='home'>
                <MainBanner />
            </main>

            <Container content={<HomeItem />} />
            <Footer />
        </React.Fragment>
    );
}

export default Home;