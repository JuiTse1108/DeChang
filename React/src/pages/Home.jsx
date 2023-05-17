import React from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import Main from '../components/Main'
import Container  from '../components/Container';
import HomeItem from '../components/main/HomeItem'

function Home() {
    return (
        <React.Fragment>
            <Header />
            <Main />
            <Container content={<HomeItem />}/>
            <Footer />
        </React.Fragment>
    );
}

export default Home;