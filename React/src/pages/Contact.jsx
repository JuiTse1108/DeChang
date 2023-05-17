import React from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import Main from '../components/Main'
import Container from '../components/Container'
import ContactItem from '../components/main/ContactItem'

function Contact() {
    return ( 
        <React.Fragment>
            <Header />
            <Main />
            <Container content={<ContactItem />}/>
            <Footer />
        </React.Fragment>
    );
}

export default Contact;
